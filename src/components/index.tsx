import { DynamicComponent } from './ComponentRegistry';

export const Hero = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="hero" props={restOfProps} overrides={overrides} />
);

export const Hero2 = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="hero2" props={restOfProps} overrides={overrides} />
);

export const Stats = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="stats" props={restOfProps} overrides={overrides} />
);

export const Companies = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="companies" props={restOfProps} overrides={overrides} />
);

export const Story = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="story" props={restOfProps} overrides={overrides} />
);

export const Testimonial = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="testimonial" props={restOfProps} overrides={overrides} />
);

export const Benefits = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="benefits" props={restOfProps} overrides={overrides} />
);

export const CTABanner = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="cta" props={restOfProps} overrides={overrides} />
);

export const FeaturesBanner = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="features" props={restOfProps} overrides={overrides} />
);

export const WinnersBanner = ({ overrides, ...restOfProps }: any) => (
  <DynamicComponent componentName="winners" props={restOfProps} overrides={overrides} />
);
