import { Hero, Benefits as BenefitsSection, CTABanner } from '../components/named-components';
import Hero2 from '../components/Hero2';
import benefitsData from '../data/benefits.json';
import { ComponentOverride } from '../types/content';

/**
 * BENEFITS PAGE - Component Registry Pattern #3: Aliased Direct Imports with Overrides
 *
 * This pattern demonstrates the most traditional and type-safe approach:
 *
 * 1. DIRECT COMPONENT IMPORTS:
 *    - Components are imported directly by name, not looked up dynamically
 *    - No DynamicComponent wrapper needed
 *    - Components are used like normal React components
 *    - Full TypeScript type checking and autocomplete
 *
 * 2. ALIASING FOR CLARITY:
 *    - "Benefits as BenefitsSection" renames the import for better readability
 *    - Prevents naming conflicts (Benefits component vs Benefits page)
 *    - Makes the JSX more semantically clear
 *    - Standard React/TypeScript pattern
 *
 * 3. OVERRIDES SUPPORT:
 *    - Each component still accepts the overrides prop
 *    - Components can check overrides internally to swap their implementation
 *    - In this example, Hero could be replaced with Hero2 if enabled: true
 *    - Currently disabled (enabled: false) so default Hero is used
 *
 * 4. BENEFITS:
 *    - Maximum type safety and IDE support
 *    - Clear component hierarchy visible in code
 *    - Easy to refactor with TypeScript tooling
 *    - No runtime lookup overhead
 *    - Components receive proper TypeScript props validation
 *
 * 5. TRADE-OFFS:
 *    - Less dynamic than registry patterns
 *    - Requires imports for each component used
 *    - Page structure must be modified in code, not JSON
 *    - But provides best developer experience for typed environments
 *
 * 6. WHEN TO USE:
 *    - Pages with stable, well-defined structure
 *    - When type safety is a priority
 *    - Teams that prefer traditional React component composition
 *    - When each component needs specific props beyond just "data"
 *
 * 7. HOW OVERRIDES WORK HERE:
 *    - Unlike DynamicComponent which handles overrides automatically
 *    - Each component must implement its own override logic
 *    - This gives components control over how they handle alternatives
 *    - Components can decide what aspects can be overridden
 *
 * 8. COMPARISON TO OTHER PATTERNS:
 *    - Home/About: Array-driven, structure in JSON, dynamic lookup
 *    - Landing: Explicit DynamicComponent calls, string-based lookup
 *    - Benefits: Direct imports, compile-time resolution, full type safety
 */

const componentOverrides: ComponentOverride[] = [
  {
    hero: Hero2,
    enabled: false,
  },
];

export default function Benefits() {
  return (
    <div>
      <Hero data={benefitsData.hero}
            overrides={componentOverrides} />
      <BenefitsSection data={benefitsData.benefits}
            overrides={componentOverrides} />
      <CTABanner data={benefitsData.cta}
            overrides={componentOverrides}/>
    </div>
  );
}
