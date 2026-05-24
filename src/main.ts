import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { addCollection } from 'iconify-icon';
import { icons } from '@iconify-json/logos';

addCollection(icons);
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
