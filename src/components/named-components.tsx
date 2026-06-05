import { DynamicComponent, RegistryKey, ComponentPropsMap } from './ComponentRegistry';
import type { ComponentOverride } from '../types/content';

type WrapperProps<K extends RegistryKey> = ComponentPropsMap[K] & { overrides?: ComponentOverride[] };

export const Hero = ({ overrides, ...props }: WrapperProps<'hero'>) => (
  <DynamicComponent componentName="hero" props={props} overrides={overrides} />
);

export const Stats = ({ overrides, ...props }: WrapperProps<'stats'>) => (
  <DynamicComponent componentName="stats" props={props} overrides={overrides} />
);

export const Companies = ({ overrides, ...props }: WrapperProps<'companies'>) => (
  <DynamicComponent componentName="companies" props={props} overrides={overrides} />
);

export const Story = ({ overrides, ...props }: WrapperProps<'story'>) => (
  <DynamicComponent componentName="story" props={props} overrides={overrides} />
);

export const Testimonial = ({ overrides, ...props }: WrapperProps<'testimonial'>) => (
  <DynamicComponent componentName="testimonial" props={props} overrides={overrides} />
);

export const Benefits = ({ overrides, ...props }: WrapperProps<'benefits'>) => (
  <DynamicComponent componentName="benefits" props={props} overrides={overrides} />
);

export const CTABanner = ({ overrides, ...props }: WrapperProps<'cta'>) => (
  <DynamicComponent componentName="cta" props={props} overrides={overrides} />
);

export const FeaturesBanner = ({ overrides, ...props }: WrapperProps<'features'>) => (
  <DynamicComponent componentName="features" props={props} overrides={overrides} />
);

export const WinnersBanner = ({ overrides, ...props }: WrapperProps<'winners'>) => (
  <DynamicComponent componentName="winners" props={props} overrides={overrides} />
);
