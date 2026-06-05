import { Registry } from '../components/Registry';
import type { ComponentPropsMap } from '../components/ComponentRegistry';
import type { ComponentOverride } from '../types/content';
import { withRegistry } from '../components/withRegistry';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Stats from '../components/Stats';
import Companies from '../components/Companies';
import { landingSections } from '../data/landing';

// ─── Page content ────────────────────────────────────────────────────────────────

interface ShowcaseContentProps {
  hero: ComponentPropsMap['hero']['data'];
  stats: ComponentPropsMap['stats']['data'];
  companies: ComponentPropsMap['companies']['data'];
}

function ShowcaseContent({ hero, stats, companies }: ShowcaseContentProps) {
  return (
    <>
      <Registry.Hero data={hero} />
      <Registry.Stats data={stats} />
      <Registry.Companies data={companies} />
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

// ─── Route component ───────────────────────────────────────────────────────────────

const ShowcaseWithRegistry = withRegistry(ShowcaseContent);

export default function Showcase() {
  return (
    <ShowcaseWithRegistry
      hero={landingSections.hero}
      stats={landingSections.stats}
      companies={landingSections.companies}
    />
  );
}
