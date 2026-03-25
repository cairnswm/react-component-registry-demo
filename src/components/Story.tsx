import { Story as StoryType } from '../types/content';
import * as Icons from 'lucide-react';

interface StoryProps {
  data: StoryType;
}

export default function Story({ data }: StoryProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            {data.content}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.values.map((value, index) => {
            const IconComponent = (Icons as any)[value.icon];
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                  {IconComponent && <IconComponent className="w-8 h-8 text-blue-600" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
