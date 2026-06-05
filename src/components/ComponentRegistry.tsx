import React from 'react';
import { defaultRegistry } from './registry-map';
import { ComponentOverride } from '../types/content';

export type RegistryKey = keyof typeof defaultRegistry;

export type ComponentPropsMap = {
  [K in RegistryKey]: React.ComponentPropsWithoutRef<typeof defaultRegistry[K]>;
};

// Union of every component's `data` prop type, derived from the registry itself
type RegistryDataType = {
  [K in RegistryKey]: ComponentPropsMap[K] extends { data: infer D } ? D : never;
}[RegistryKey];

interface DynamicComponentProps<T extends RegistryKey = RegistryKey> {
  componentName: T;
  props?: Partial<ComponentPropsMap[T]> | { data?: RegistryDataType };
  overrides?: ComponentOverride[];
}

export function DynamicComponent<T extends RegistryKey>({
  componentName,
  props = {},
  overrides = []
}: DynamicComponentProps<T>) {
  const activeOverride = overrides.find(
    override => override.enabled && typeof override[componentName] === 'function'
  );
  const overrideComponent = activeOverride?.[componentName];

  const Component = (
    typeof overrideComponent === 'function' ? overrideComponent : defaultRegistry[componentName]
  ) as React.ComponentType<Partial<ComponentPropsMap[T]>>;

  if (!Component) {
    console.warn(`Component "${componentName}" not found in registry`);
    return null;
  }

  return <Component {...(props as Partial<ComponentPropsMap[T]>)} />;
}
