import React from 'react';
import Hero from './Hero';
import Story from './Story';
import FeaturesBanner from './FeaturesBanner';
import Testimonial from './Testimonial';
import BenefitsSection from './BenefitsSection';
import CTABanner from './CTABanner';
import WinnersBanner from './WinnersBanner';
import Stats from './Stats';
import Companies from './Companies';
import { ComponentOverride } from '../types/content';

type RegistryKey = 'hero' | 'story' | 'features' | 'testimonial' | 'benefits' | 'cta' | 'winners' | 'stats' | 'companies';

type ComponentRegistry = {
  readonly [K in RegistryKey]: React.ComponentType<Record<string, unknown>>;
};

const defaultRegistry: ComponentRegistry = {
  hero: Hero,
  story: Story,
  features: FeaturesBanner,
  testimonial: Testimonial,
  benefits: BenefitsSection,
  cta: CTABanner,
  winners: WinnersBanner,
  stats: Stats,
  companies: Companies,
} as const;

interface DynamicComponentProps {
  componentName: string;
  props?: Record<string, unknown>;
  overrides?: ComponentOverride[];
}

export function DynamicComponent({ componentName, props = {}, overrides = [] }: DynamicComponentProps) {
  const registry: Record<string, React.ComponentType<Record<string, unknown>>> = { ...defaultRegistry };

  const activeOverride = overrides.find(override => override.enabled && override[componentName]);
  if (activeOverride && typeof activeOverride[componentName] !== 'boolean') {
    registry[componentName] = activeOverride[componentName] as React.ComponentType<Record<string, unknown>>;
  }

  const Component = registry[componentName];

  if (!Component) {
    console.warn(`Component "${componentName}" not found in registry`);
    return null;
  }

  return <Component {...props} />;
}
