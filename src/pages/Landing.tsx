import { DynamicComponent } from '../components/ComponentRegistry';
import landingData from '../data/landing.json';

/**
 * LANDING PAGE - Component Registry Pattern #2: Explicit Component Calls
 *
 * This pattern demonstrates a hybrid approach between full data-driven and traditional imports:
 *
 * 1. EXPLICIT COMPONENT DECLARATION:
 *    - Each component is explicitly declared in the JSX
 *    - Component names are hardcoded as strings
 *    - Data is pulled from specific sections of the JSON file
 *    - The page structure is visible in code, not just in JSON
 *
 * 2. BENEFITS:
 *    - Better code readability - you can see the page structure at a glance
 *    - More control over component ordering and layout
 *    - Easier to add custom wrapper elements or conditional rendering
 *    - TypeScript can better validate component names and data structure
 *    - Individual section data can be easily accessed and manipulated
 *
 * 3. TRADE-OFFS:
 *    - Less flexible than array-driven (Home/About) pattern
 *    - Requires code changes to reorder or add sections
 *    - More verbose than mapping over an array
 *    - But provides better developer experience and code clarity
 *
 * 4. WHEN TO USE:
 *    - Landing pages with fixed, intentional section order
 *    - Pages where each section needs unique wrapper logic
 *    - When you want explicit control and visibility of page structure
 *    - When working with developers who prefer seeing components in code
 *
 * 5. COMPARISON TO OTHER PATTERNS:
 *    - Home/About: Loop over array, page structure in JSON
 *    - Landing: Explicit calls, page structure in code
 *    - Benefits: Named imports, even more explicit and type-safe
 */

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
