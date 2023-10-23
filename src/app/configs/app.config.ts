import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
  routes: {
    home: 'home',
    depth_chart: 'depth-chart',
    error404: '404'
  },
};
