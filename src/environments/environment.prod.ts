import { version } from '../../package.json';

export const environment = {
  production: true,
  apiUrl: 'https://whatscaixa.des.caixa:443/whatscaixa/v1',
  SOCKET_ENDPOINT: 'https://socketio-node-teste.herokuapp.com/',
  // SOCKET_ENDPOINT: 'http://localhost:3000',
  version: version,

  // CONFIGURACOES DO SSO
  SSO_issuer: 'https://login.des.caixa/auth/realms/intranet',
  SSO_redirectUri: window.location.origin + '/home',
  SSO_silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  SSO_clientId: 'cli-web-gmo',
  SSO_scope: 'openid profile email voucher',
  SSO_REFRESH_TOKEN_INTERVAL: 100000
};
