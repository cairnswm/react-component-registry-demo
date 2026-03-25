import { DynamicComponent } from '../components/ComponentRegistry';
import landingData from '../data/landing.json';

export default function Landing() {
  return (
    <div>
      <DynamicComponent
        componentName="hero"
        props={{ data: landingData.sections[0].data }}
      />
      <DynamicComponent
        componentName="stats"
        props={{ data: landingData.sections[1].data }}
      />
      <DynamicComponent
        componentName="companies"
        props={{ data: landingData.sections[2].data }}
      />
    </div>
  );
}
