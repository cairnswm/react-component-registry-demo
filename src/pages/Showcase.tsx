import { Registry } from '../components/Registry';
import type { ComponentPropsMap } from '../components/ComponentRegistry';
import type { ComponentOverride } from '../types/content';
import Hero2 from '../components/Hero2';
import landingData from '../data/landing.json';

/**
 * SHOWCASE PAGE - Component Registry Pattern #4: Registry Compound Components
 *
 * This pattern introduces a context-driven override system using compound
 * component syntax. Instead of passing overrides to each component individually,
 * you declare them once on a Provider and they automatically flow to every
 * Registry.* component in the subtree.
 *
 * USAGE:
 *   <Registry.Provider overrides={{ hero: Hero2 }}>
 *     <Registry.Hero data={...} />   ← automatically uses Hero2
 *     <Registry.Stats data={...} />  ← uses default Stats (no override)
 *   </Registry.Provider>
 *
 * COMPARED TO OTHER PATTERNS:
 *   - Home/About     (Pattern 1): DynamicComponent + overrides array per component
 *   - Landing        (Pattern 2): Explicit DynamicComponent string lookups
 *   - Benefits       (Pattern 3): Named imports from named-components.tsx
 *   - Showcase       (Pattern 4): Registry.Provider context, declared once
 *
 * BENEFITS:
 *   - Overrides defined once, consumed anywhere in the tree
 *   - Clean JSX — components look like normal React components
 *   - No prop-drilling of override arrays
 *   - Easy to scope overrides to a subtree (nest Providers)
 *   - Great for theming, A/B testing, and feature flags
 */

const [heroSection, statsSection, companiesSection] = landingData.sections;

const componentOverrides: ComponentOverride[] = [
  {
    hero: Hero2,
    enabled: true,
  },
];

export default function Showcase() {
  return (
    <Registry.Provider overrides={componentOverrides}>
      <Registry.Hero data={heroSection.data as ComponentPropsMap['hero']['data']} />
      <Registry.Stats data={statsSection.data as ComponentPropsMap['stats']['data']} />
      <Registry.Companies data={companiesSection.data as ComponentPropsMap['companies']['data']} />
    </Registry.Provider>
  );
}
