import { CTABanner as CTABannerType } from '../types/content';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  data: CTABannerType;
  onClick?: () => void;
}

export default function CTABanner({ data, onClick }: CTABannerProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={data.image}
          alt="CTA background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-800/90" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {data.title}
        </h2>
        <p className="text-xl text-blue-100 mb-10">
          {data.description}
        </p>
        <button
          onClick={onClick}
          className="group bg-white hover:bg-slate-100 text-blue-600 px-10 py-5 rounded-lg font-bold text-lg transition-all duration-200 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
        >
          {data.cta}
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
