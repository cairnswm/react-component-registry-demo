import { Hero, Benefits as BenefitsSection, CTABanner } from '../components/';
import Hero2 from '../components/Hero2';
import benefitsData from '../data/benefits.json';

const componentOverrides = {
  hero: {
    component: Hero2,
    enabled: false,
  },
};

export default function Benefits() {
  return (
    <div>
      <Hero data={benefitsData.hero} />
      <BenefitsSection data={benefitsData.benefits} />
      <CTABanner data={benefitsData.cta} />
    </div>
  );
}
