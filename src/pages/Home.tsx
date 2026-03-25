import { DynamicComponent } from '../components/ComponentRegistry';
import homeData from '../data/home.json';

export default function Home() {
  return (
    <div>
      {homeData.sections.map((section, index) => (
        <div key={index}>
          <DynamicComponent
            componentName={section.component as any}
            props={{ data: section.data }}
          />
        </div>
      ))}
    </div>
  );
}
