import { DynamicComponent } from './ComponentRegistry';

export const Hero = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="hero" props={props} overrides={overrides} />
);

export const Hero2 = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="hero2" props={props} overrides={overrides} />
);

export const Stats = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="stats" props={props} overrides={overrides} />
);

export const Companies = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="companies" props={props} overrides={overrides} />
);

export const Story = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="story" props={props} overrides={overrides} />
);

export const Testimonial = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="testimonial" props={props} overrides={overrides} />
);

export const Benefits = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="benefits" props={props} overrides={overrides} />
);

export const CTABanner = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="cta" props={props} overrides={overrides} />
);

export const FeaturesBanner = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="features" props={props} overrides={overrides} />
);

export const WinnersBanner = ({ overrides, ...props }: any) => (
  <DynamicComponent componentName="winners" props={props} overrides={overrides} />
);
