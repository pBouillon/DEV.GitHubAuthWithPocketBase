import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { providePocketBase } from './app/pocketbase.provider';

bootstrapApplication(AppComponent, {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    providePocketBase('http://localhost:8090'),
  ],
}).catch((err) => console.error(err));
