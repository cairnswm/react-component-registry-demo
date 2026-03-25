import { DynamicComponent } from '../components/ComponentRegistry';
import Hero2 from '../components/Hero2';
import aboutData from '../data/about.json';

const componentOverrides = {
  hero: {
    component: Hero2,
    enabled: true,
  },
};

export default function About() {
  return (
    <div>
      {aboutData.sections.map((section, index) => (
        <div key={index}>
          <DynamicComponent
            componentName={section.component as any}
            props={{ data: section.data }}
            overrides={componentOverrides}
          />
        </div>
      ))}
    </div>
  );
}
