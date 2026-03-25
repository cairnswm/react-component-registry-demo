import { Hero, Stats, Companies } from '../components/components';
import landingData from '../data/landing.json';

export default function Landing() {
  return (
    <div>
      <Hero data={landingData.sections[0].data} />
      <Stats data={landingData.sections[1].data} />
      <Companies data={landingData.sections[2].data} />
    </div>
  );
}
