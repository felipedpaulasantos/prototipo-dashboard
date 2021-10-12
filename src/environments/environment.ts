// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { version } from '../../package.json';

export const environment = {
  production: false,
  // SOCKET_ENDPOINT: 'https://socketio-node-teste.herokuapp.com/',
  SOCKET_ENDPOINT: 'http://localhost:3000',
  apiUrl: 'http://localhost:8180/whatscaixa/v1',
/*   apiUrl: 'https://whatscaixa.des.caixa:443/whatscaixa/v1', */
  version: String(version),

  // CONFIGURACOES DO SSO
  SSO_issuer: 'https://login.des.caixa/auth/realms/intranet',
  SSO_redirectUri: window.location.origin + '/home',
  SSO_silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  SSO_clientId: 'cli-web-gmo',
  SSO_scope: 'openid profile email voucher',
  SSO_REFRESH_TOKEN_INTERVAL: 100000
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
