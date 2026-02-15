import { DOCUMENT, inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare global {
  interface Window {
    ym?: Function;
  }
}

@Injectable({
  providedIn: 'root',
})
export class Analytics {
  private readonly _document = inject(DOCUMENT);
  private readonly _window = this._document.defaultView as any;

  sendYMEvent(eventName: string, params?: { [key: string]: any }) {
    if (this._window && typeof this._window.ym === 'function') {
      this._window.ym(environment.YandexMetrikaId, 'reachGoal', eventName, params);
    }
  }

  sendEvent(eventName: string, params?: { [key: string]: any }) {
    this.sendYMEvent(eventName, params);
  }
}
