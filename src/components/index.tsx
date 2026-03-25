import { DynamicComponent } from './ComponentRegistry';
import { ComponentProps } from '../types/content';

type WrapperComponentProps = Omit<ComponentProps, 'data'> & {
  data?: ComponentProps['data'];
};

export const Hero = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="hero" props={restOfProps} overrides={overrides} />
);

export const Hero2 = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="hero2" props={restOfProps} overrides={overrides} />
);

export const Stats = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="stats" props={restOfProps} overrides={overrides} />
);

export const Companies = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="companies" props={restOfProps} overrides={overrides} />
);

export const Story = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="story" props={restOfProps} overrides={overrides} />
);

export const Testimonial = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="testimonial" props={restOfProps} overrides={overrides} />
);

export const Benefits = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="benefits" props={restOfProps} overrides={overrides} />
);

export const CTABanner = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="cta" props={restOfProps} overrides={overrides} />
);

export const FeaturesBanner = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="features" props={restOfProps} overrides={overrides} />
);

export const WinnersBanner = ({ overrides, ...restOfProps }: WrapperComponentProps) => (
  <DynamicComponent componentName="winners" props={restOfProps} overrides={overrides} />
);
