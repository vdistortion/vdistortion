import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIcon } from '../ui-icon/ui-icon';
import { TrackClickDirective } from '../../track-click.directive';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, UiIcon, TrackClickDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  public themeService = inject(ThemeService);
  public isMobileMenuOpen = signal(false);

  readonly themes: { value: Theme; label: string }[] = [
    { value: 'system', label: '⚙' },
    { value: 'dark', label: '🌑' },
    { value: 'purple', label: '🟣' },
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }
}
