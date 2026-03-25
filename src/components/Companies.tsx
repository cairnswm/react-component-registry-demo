interface CompaniesProps {
  data: {
    title: string;
    subtitle: string;
    companies: string[];
  };
}

export default function Companies({ data }: CompaniesProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
          {data.title}
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          {data.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {data.companies.map((company, index) => (
            <div
              key={index}
              className="bg-white px-8 py-4 rounded-lg shadow-sm border border-slate-200 text-slate-700 font-semibold"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
