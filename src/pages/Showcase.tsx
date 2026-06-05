import { Registry } from '../components/Registry';
import type { ComponentPropsMap } from '../components/ComponentRegistry';
import type { ComponentOverride } from '../types/content';
import { withRegistry } from '../components/withRegistry';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Stats from '../components/Stats';
import Companies from '../components/Companies';
import landingData from '../data/landing.json';

const [heroSection, statsSection, companiesSection] = landingData.sections;

function ShowcaseContent() {
  return (
    <>
      <Registry.Hero data={heroSection.data as ComponentPropsMap['hero']['data']} />
      <Registry.Stats data={statsSection.data as ComponentPropsMap['stats']['data']} />
      <Registry.Companies data={companiesSection.data as ComponentPropsMap['companies']['data']} />
    </>
  );
}

ShowcaseContent.defaults = {
  hero: Hero,
  stats: Stats,
  companies: Companies,
};

ShowcaseContent.overrides = [
  { hero: Hero2, enabled: false },
] satisfies ComponentOverride[];

const Showcase = withRegistry(ShowcaseContent);
export default Showcase;
