import { DynamicComponent } from './ComponentRegistry';

export const Hero = (props: any) => (
  <DynamicComponent componentName="hero" props={props} />
);

export const Hero2 = (props: any) => (
  <DynamicComponent componentName="hero2" props={props} />
);

export const Stats = (props: any) => (
  <DynamicComponent componentName="stats" props={props} />
);

export const Companies = (props: any) => (
  <DynamicComponent componentName="companies" props={props} />
);

export const Story = (props: any) => (
  <DynamicComponent componentName="story" props={props} />
);

export const Testimonial = (props: any) => (
  <DynamicComponent componentName="testimonial" props={props} />
);

export const Benefits = (props: any) => (
  <DynamicComponent componentName="benefits" props={props} />
);

export const CTABanner = (props: any) => (
  <DynamicComponent componentName="cta" props={props} />
);

export const FeaturesBanner = (props: any) => (
  <DynamicComponent componentName="features" props={props} />
);

export const WinnersBanner = (props: any) => (
  <DynamicComponent componentName="winners" props={props} />
);
