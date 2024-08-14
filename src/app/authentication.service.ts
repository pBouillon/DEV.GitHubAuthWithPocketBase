import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  readonly #userName = signal<string | null>(null);
  readonly userName = this.#userName.asReadonly();

  readonly isSignedIn = computed(() => this.#userName() !== null);

  signInWithGithub(): void {
    this.#userName.set('pBouillon');
  }

  signOut(): void {
    this.#userName.set(null);
  }
}
