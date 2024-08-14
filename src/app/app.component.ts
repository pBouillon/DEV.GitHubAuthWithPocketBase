import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    @if (authenticationService.isSignedIn()) {
      <article>
        <header>Welcome {{ authenticationService.userName() }}!</header>

        You are successfully logged in.

        <footer>
          <button type="button" (click)="authenticationService.signOut()">
            Sign out
          </button>
        </footer>
      </article>
    } @else {
      <article>
        <header>Please sign in</header>

        <button
          type="button"
          class="contrast"
          (click)="authenticationService.signInWithGithub()"
        >
          Sign in with GitHub
        </button>
      </article>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly authenticationService = inject(AuthenticationService);
}
