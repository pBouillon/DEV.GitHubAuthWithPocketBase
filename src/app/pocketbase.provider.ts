import {
  InjectionToken,
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import PocketBase from 'pocketbase';

export const PocketBaseClient = new InjectionToken<PocketBase>(
  'PocketBase client',
);

export const providePocketBase = (baseUrl: string): EnvironmentProviders =>
  makeEnvironmentProviders([
    {
      provide: PocketBaseClient,
      // 👇 You could also inject `environment` here instead
      useFactory: () => new PocketBase(baseUrl),
    },
  ]);
