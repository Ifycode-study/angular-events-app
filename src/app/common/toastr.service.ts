import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toasr>('toastr');

export interface Toasr {
  success (msg: string, title?: string): void;
  info (msg: string, title?: string): void;
  warning (msg: string, title?: string): void;
  error (msg: string, title?: string): void;
}
