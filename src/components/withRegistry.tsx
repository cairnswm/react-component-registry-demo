import React from 'react';
import { Registry } from './Registry';
import type { DefaultsMap } from './Registry';
import type { ComponentOverride } from '../types/content';

export interface RegistryPage<P extends object = object> {
  (props: P): React.ReactElement;
  defaults?: DefaultsMap;
  overrides?: ComponentOverride[];
}

export function withRegistry<P extends object>(Page: RegistryPage<P>) {
  function RegistryWrapper(props: P) {
    return (
      <Registry.Provider defaults={Page.defaults} overrides={Page.overrides}>
        <Page {...props} />
      </Registry.Provider>
    );
  }
  RegistryWrapper.displayName = `withRegistry(${Page.name})`;
  return RegistryWrapper;
}
