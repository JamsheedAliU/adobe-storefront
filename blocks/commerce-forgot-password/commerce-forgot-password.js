/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { ResetPassword } from '@dropins/storefront-auth/containers/ResetPassword.js';
import { render as authRenderer } from '@dropins/storefront-auth/render.js';
import { events } from '@dropins/tools/event-bus.js';
import { getCookie } from '../../scripts/configs.js';

<<<<<<< HEAD
export default function decorate(block) {
=======
export default async function decorate(block) {
>>>>>>> template/main
  const isAuthenticated = !!getCookie('auth_dropin_user_token');

  if (isAuthenticated) {
    window.location.href = '/customer/account';
  } else {
<<<<<<< HEAD
    authRenderer.render(ResetPassword, {
=======
    await authRenderer.render(ResetPassword, {
>>>>>>> template/main
      routeSignIn: () => '/customer/login',
    })(block);
  }

  events.on('authenticated', (authenticated) => {
    if (authenticated) window.location.href = '/customer/account';
  });
}
