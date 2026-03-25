import { FeaturesBanner as FeaturesBannerType } from '../types/content';
import * as Icons from 'lucide-react';

interface FeaturesBannerProps {
  data: FeaturesBannerType;
}

export default function FeaturesBanner({ data }: FeaturesBannerProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 md:order-1">
            <img
              src={data.image}
              alt="Features"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            {data.features.map((feature, index) => {
              const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

              return (
                <div key={index} className="flex gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
