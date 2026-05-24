import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';
import 'iconify-icon';

// https://icon-sets.iconify.design/
@Component({
  selector: 'app-ui-icon',
  imports: [],
  templateUrl: './ui-icon.html',
  styleUrl: './ui-icon.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIcon {
  icon = input.required<string>();
  size = input<number>();
  width = input<number>();
  height = input<number>();

  effectiveWidth = computed(() => this.width() ?? this.size() ?? null);
  effectiveHeight = computed(() => this.height() ?? this.size() ?? null);
}
