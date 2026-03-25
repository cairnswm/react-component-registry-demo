import { Hero, Benefits as BenefitsSection, CTABanner } from '../components/components';
import benefitsData from '../data/benefits.json';

export default function Benefits() {
  return (
    <div>
      <Hero data={benefitsData.sections[0].data} />
      <BenefitsSection data={benefitsData.sections[1].data} />
      <CTABanner data={benefitsData.sections[2].data} />
    </div>
  );
}
