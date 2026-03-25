import { BenefitsSection as BenefitsSectionType } from '../types/content';
import BenefitCard from './BenefitCard';

interface BenefitsSectionProps {
  data: BenefitsSectionType;
}

export default function BenefitsSection({ data }: BenefitsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((benefit, index) => (
            <BenefitCard key={index} data={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
