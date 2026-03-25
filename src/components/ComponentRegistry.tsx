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
  readonly [K in RegistryKey]: React.ComponentType<unknown>;
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

type ComponentPropsMap = {
  [K in RegistryKey]: React.ComponentPropsWithoutRef<ComponentRegistry[K]>;
};

interface DynamicComponentProps<T extends RegistryKey = RegistryKey> {
  componentName: T;
  props?: Partial<ComponentPropsMap[T]>;
  overrides?: ComponentOverride[];
}

export function DynamicComponent<T extends RegistryKey>({
  componentName,
  props = {},
  overrides = []
}: DynamicComponentProps<T>) {
  const registry: Record<string, React.ComponentType<unknown>> = { ...defaultRegistry };

  const activeOverride = overrides.find(override => override.enabled && override[componentName]);
  if (activeOverride && typeof activeOverride[componentName] !== 'boolean') {
    registry[componentName] = activeOverride[componentName] as React.ComponentType<unknown>;
  }

  const Component = registry[componentName];

  if (!Component) {
    console.warn(`Component "${componentName}" not found in registry`);
    return null;
  }

  return <Component {...props} />;
}
