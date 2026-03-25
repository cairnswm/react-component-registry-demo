import { DynamicComponent } from '../components/ComponentRegistry';
import homeData from '../data/home.json';

/**
 * HOME PAGE - Component Registry Pattern #1: Basic Array-Driven
 *
 * This pattern demonstrates the simplest approach to using the component registry:
 *
 * 1. PURE DATA-DRIVEN RENDERING:
 *    - The entire page structure comes from home.json
 *    - No component imports needed (except DynamicComponent)
 *    - Component names as strings are looked up in the registry at runtime
 *    - All component data is centralized in the JSON file
 *
 * 2. BENEFITS:
 *    - Clean separation between page structure (JSON) and components (TSX)
 *    - Non-developers can modify page layout by editing JSON
 *    - Easy to reorder sections or add new ones without touching code
 *    - Reduces code duplication across similar pages
 *
 * 3. NO OVERRIDES:
 *    - Uses default components from the registry
 *    - All pages sharing this pattern have consistent component behavior
 *    - Simplest form of the registry pattern
 *
 * 4. COMPARISON TO ABOUT PAGE:
 *    - About page adds componentOverrides for swapping components
 *    - Home page keeps it simple with just default components
 *    - Both use array-driven rendering from JSON data
 */

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
