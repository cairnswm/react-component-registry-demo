import { HeroSection } from '../types/content';
import { ArrowRight } from 'lucide-react';

interface Hero2Props {
  data: HeroSection;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function Hero2({ data, onPrimaryClick, onSecondaryClick }: Hero2Props) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-10 leading-relaxed">
              {data.subtitle}
            </p>
            {data.cta && (
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onPrimaryClick}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {data.cta.primary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onSecondaryClick}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                >
                  {data.cta.secondary}
                </button>
              </div>
            )}
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={data.image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
