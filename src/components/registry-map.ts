import Hero from './Hero';
import Story from './Story';
import FeaturesBanner from './FeaturesBanner';
import Testimonial from './Testimonial';
import BenefitsSection from './BenefitsSection';
import CTABanner from './CTABanner';
import WinnersBanner from './WinnersBanner';
import Stats from './Stats';
import Companies from './Companies';

export const defaultRegistry = {
  hero: Hero,
  story: Story,
  features: FeaturesBanner,
  featuresBanner: FeaturesBanner,
  testimonial: Testimonial,
  benefits: BenefitsSection,
  cta: CTABanner,
  winners: WinnersBanner,
  winnersBanner: WinnersBanner,
  stats: Stats,
  companies: Companies,
} as const;
