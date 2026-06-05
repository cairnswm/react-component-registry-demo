import React from 'react';
import { Registry } from './Registry';
import type { DefaultsMap } from './Registry';
import type { ComponentOverride } from '../types/content';

export interface RegistryPage {
  (): React.ReactElement;
  defaults?: DefaultsMap;
  overrides?: ComponentOverride[];
}

export function withRegistry(Page: RegistryPage) {
  function RegistryWrapper() {
    return (
      <Registry.Provider defaults={Page.defaults} overrides={Page.overrides}>
        <Page />
      </Registry.Provider>
    );
  }
  RegistryWrapper.displayName = `withRegistry(${Page.name})`;
  return RegistryWrapper;
}
