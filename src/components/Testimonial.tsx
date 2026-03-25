import { Testimonial as TestimonialType } from '../types/content';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  data: TestimonialType;
}

export default function Testimonial({ data }: TestimonialProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
            <Quote className="w-8 h-8 text-white" />
          </div>

          <blockquote className="text-2xl sm:text-3xl font-medium text-white mb-10 leading-relaxed">
            "{data.quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <img
              src={data.image}
              alt={data.author}
              className="w-16 h-16 rounded-full border-4 border-white/20 object-cover"
            />
            <div className="text-left">
              <div className="font-bold text-white text-lg">
                {data.author}
              </div>
              <div className="text-blue-200">
                {data.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
