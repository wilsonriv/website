import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  // Close the mobile menu. Used as a click handler instead of the inline
  // `menuOpen = false` expression: that assignment evaluates to `false`, which
  // makes Angular call event.preventDefault() and silently blocks plain anchor
  // links (e.g. the external Resume link) from opening.
  closeMenu(): void {
    this.menuOpen = false;
  }

  // Navigate to /clients (via routerLink) then scroll to the Work section.
  // Polls because the #work element may not be rendered yet when coming from
  // another route, and re-clicking the same URL won't re-trigger the router.
  // The initial delay also lets the mobile menu collapse before we measure,
  // avoiding an overshoot from the layout shift.
  scrollToWork(): void {
    this.menuOpen = false;
    let tries = 0;
    const attempt = () => {
      const el = document.getElementById('work');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (tries++ < 20) {
        setTimeout(attempt, 50);
      }
    };
    setTimeout(attempt, 60);
  }
}
