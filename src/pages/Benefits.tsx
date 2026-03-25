import { Hero, Benefits as BenefitsSection, CTABanner } from '../components/';
import Hero2 from '../components/Hero2';
import benefitsData from '../data/benefits.json';
import { ComponentOverride } from '../types/content';

const componentOverrides: ComponentOverride[] = [
  {
    hero: Hero2,
    enabled: false,
  },
];

export default function Benefits() {
  return (
    <div>
      <Hero data={benefitsData.hero} 
            overrides={componentOverrides} />
      <BenefitsSection data={benefitsData.benefits} 
            overrides={componentOverrides} />
      <CTABanner data={benefitsData.cta} 
            overrides={componentOverrides}/>
    </div>
  );
}
