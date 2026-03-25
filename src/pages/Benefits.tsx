import { Hero, Benefits as BenefitsSection, CTABanner } from '../components/';
import benefitsData from '../data/benefits.json';

export default function Benefits() {
  return (
    <div>
      <Hero data={benefitsData.hero} />
      <BenefitsSection data={benefitsData.benefits} />
      <CTABanner data={benefitsData.cta} />
    </div>
  );
}
