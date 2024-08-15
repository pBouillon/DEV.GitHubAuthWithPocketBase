import { computed, inject, Injectable, signal } from '@angular/core';

import { PocketBaseClient } from './pocketbase.provider';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  readonly #pocketBase = inject(PocketBaseClient);

  readonly #userName = signal<string | null>(null);
  readonly userName = this.#userName.asReadonly();

  readonly isSignedIn = computed(() => this.#userName() !== null);

  constructor() {
    this.#pocketBase.authStore.onChange((_token, user) => {
      this.#userName.set(user?.['username'] ?? null);
    });
  }

  signInWithGithub(): void {
    this.#pocketBase
      .collection('users')
      .authWithOAuth2({ provider: 'github' })
      .catch((error) => console.log(error.originalError));
  }

  signOut(): void {
    this.#pocketBase.authStore.clear();
  }
}
