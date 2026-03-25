import { Benefit } from '../types/content';
import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';

interface BenefitCardProps {
  data: Benefit;
}

export default function BenefitCard({ data }: BenefitCardProps) {
  const IconComponent = Icons[data.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-1">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {IconComponent && <IconComponent className="w-7 h-7 text-blue-600" />}
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        {data.title}
      </h3>

      <p className="text-slate-600 mb-6 leading-relaxed">
        {data.description}
      </p>

      <ul className="space-y-3">
        {data.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-100 rounded-full p-1 mt-0.5">
              <Check className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-slate-700">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
