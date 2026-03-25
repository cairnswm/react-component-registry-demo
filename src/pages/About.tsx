import { DynamicComponent } from '../components/ComponentRegistry';
import Hero2 from '../components/Hero2';
import aboutData from '../data/about.json';
import { ComponentOverride } from '../types/content';

/**
 * ABOUT PAGE - Component Registry Pattern #1: Array-Driven with Overrides
 *
 * This pattern demonstrates the most flexible approach to using the component registry:
 *
 * 1. DATA-DRIVEN RENDERING:
 *    - The page structure is defined in about.json
 *    - Each section specifies which component to render via the "component" field
 *    - Component data is passed through the "data" field
 *    - This allows the entire page layout to be configured via JSON without code changes
 *
 * 2. COMPONENT OVERRIDES:
 *    - The componentOverrides array allows you to swap out default components
 *    - In this example, Hero2 replaces the default Hero component when enabled is true
 *    - Multiple components can be overridden in a single overrides array
 *    - The enabled flag provides runtime control over which override to use
 *
 * 3. USE CASES:
 *    - A/B testing different component variants
 *    - Feature flags for gradual rollouts
 *    - Theming where certain pages use alternative component designs
 *    - Dynamic component selection based on user preferences or roles
 *
 * 4. HOW IT WORKS:
 *    - DynamicComponent looks up the component name in the registry
 *    - If an override is provided with enabled: true, it uses that instead
 *    - The component receives its data via props
 *    - Each section is rendered by mapping over the aboutData.sections array
 */

const componentOverrides: ComponentOverride[] = [
  {
    hero: Hero2,
    enabled: true,
  },
];

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
