import React from 'react';

export interface NavigationLink {
  label: string;
  path: string;
}

export interface Navigation {
  logo: string;
  links: NavigationLink[];
}

export interface HeroSection {
  title: string;
  subtitle: string;
  cta?: {
    primary: string;
    secondary: string;
  };
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesBanner {
  title: string;
  description: string;
  image: string;
  features: Feature[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
}

export interface WinnersBanner {
  title: string;
  description: string;
  image: string;
  awards: Award[];
}

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface Story {
  title: string;
  content: string;
  values: Value[];
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface BenefitsSection {
  title: string;
  description: string;
  items: Benefit[];
}

export interface CTABanner {
  title: string;
  description: string;
  cta: string;
  image: string;
}

export interface PageSection {
  component: string;
  data: any;
}

export interface Page {
  sections: PageSection[];
}

export interface Content {
  navigation: Navigation;
  home: Page;
  about: Page;
  benefits: Page;
}

export interface ComponentOverride {
  [key: string]: React.ComponentType<any> | boolean;
  enabled: boolean;
}
