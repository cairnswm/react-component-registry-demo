import { DynamicComponent } from '../components/ComponentRegistry';
import benefitsData from '../data/benefits.json';

export default function Benefits() {
  return (
    <div>
      {benefitsData.sections.map((section, index) => (
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
