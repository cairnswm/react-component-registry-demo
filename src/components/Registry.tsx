/**
 * REGISTRY COMPOUND COMPONENT PATTERN
 *
 * Provides a context-based override system using compound component syntax.
 * Uses the same ComponentOverride[] format as About/Benefits pages, but declared
 * once on the Provider instead of being passed to each component individually.
 *
 *   <Registry.Provider overrides={[{ hero: Hero2, enabled: true }]}>
 *     <Registry.Hero data={...} />   ← automatically resolves to Hero2
 *     <Registry.Stats data={...} />  ← uses default Stats
 *   </Registry.Provider>
 *
 * Compared to the other patterns:
 *  - ComponentOverride (About/Benefits): overrides array passed to each component
 *  - DynamicComponent (Landing/Home):   string key lookup at render time
 *  - Registry.Provider (this file):     ComponentOverride[] in context — declared once
 */

import React, { createContext, useContext } from 'react';
import { defaultRegistry } from './registry-map';
import { RegistryKey, ComponentPropsMap } from './ComponentRegistry';
import type { ComponentOverride } from '../types/content';

// ─── Context ─────────────────────────────────────────────────────────────────

const RegistryContext = createContext<ComponentOverride[]>([]);

// ─── Provider ────────────────────────────────────────────────────────────────

interface RegistryProviderProps {
  overrides?: ComponentOverride[];
  children: React.ReactNode;
}

function Provider({ overrides = [], children }: RegistryProviderProps) {
  return (
    <RegistryContext.Provider value={overrides}>
      {children}
    </RegistryContext.Provider>
  );
}

// ─── Factory ─────────────────────────────────────────────────────────────────

function createRegistryComponent<K extends RegistryKey>(key: K) {
  function RegistryComponent(props: ComponentPropsMap[K]) {
    const overrides = useContext(RegistryContext);
    const activeOverride = overrides.find(
      override => override.enabled && typeof override[key] === 'function'
    );
    const Component = (
      typeof activeOverride?.[key] === 'function'
        ? activeOverride[key]
        : defaultRegistry[key]
    ) as React.ComponentType<Partial<ComponentPropsMap[K]>>;
    return <Component {...(props as Partial<ComponentPropsMap[K]>)} />;
  }
  RegistryComponent.displayName = `Registry.${key}`;
  return RegistryComponent;
}

// ─── Registry compound object ────────────────────────────────────────────────

export const Registry = {
  Provider,
  Hero: createRegistryComponent('hero'),
  Stats: createRegistryComponent('stats'),
  Companies: createRegistryComponent('companies'),
  Story: createRegistryComponent('story'),
  Testimonial: createRegistryComponent('testimonial'),
  Benefits: createRegistryComponent('benefits'),
  CTABanner: createRegistryComponent('cta'),
  FeaturesBanner: createRegistryComponent('featuresBanner'),
  WinnersBanner: createRegistryComponent('winnersBanner'),
} as const;
