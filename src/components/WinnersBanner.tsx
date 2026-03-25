import { WinnersBanner as WinnersBannerType } from '../types/content';
import { Award } from 'lucide-react';

interface WinnersBannerProps {
  data: WinnersBannerType;
}

export default function WinnersBanner({ data }: WinnersBannerProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {data.title}
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              {data.description}
            </p>

            <div className="space-y-6">
              {data.awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {award.year}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        {award.title}
                      </h3>
                    </div>
                    <p className="text-slate-600">{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={data.image}
              alt="Awards"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
