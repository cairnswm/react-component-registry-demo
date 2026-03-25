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

type ComponentType = React.ComponentType<any>;

const defaultRegistry: Record<string, ComponentType> = {
  hero: Hero,
  story: Story,
  features: FeaturesBanner,
  testimonial: Testimonial,
  benefits: BenefitsSection,
  cta: CTABanner,
  winners: WinnersBanner,
  stats: Stats,
  companies: Companies,
};

interface ComponentOverride {
  [key: string]: ComponentType;
  enabled: boolean;
}

interface DynamicComponentProps {
  componentName: string;
  props?: any;
  overrides?: ComponentOverride[];
}

export function DynamicComponent({ componentName, props = {}, overrides = [] }: DynamicComponentProps) {
  const registry = { ...defaultRegistry };

  const activeOverride = overrides.find(override => override.enabled && override[componentName]);
  if (activeOverride) {
    registry[componentName] = activeOverride[componentName];
  }

  const Component = registry[componentName];

  if (!Component) {
    console.warn(`Component "${componentName}" not found in registry`);
    return null;
  }

  return <Component {...props} />;
}
