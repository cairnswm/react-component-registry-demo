import { HeroSection } from '../types/content';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  data: HeroSection;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function Hero({ data, onPrimaryClick, onSecondaryClick }: HeroProps) {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else if (data.primaryAction) {
      navigate(data.primaryAction);
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else if (data.secondaryAction) {
      navigate(data.secondaryAction);
    }
  };
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={data.image}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {data.title}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-10 leading-relaxed">
            {data.subtitle}
          </p>
          {data.cta && (
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handlePrimaryClick}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {data.cta.primary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleSecondaryClick}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30"
              >
                {data.cta.secondary}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
