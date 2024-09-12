/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { SignIn } from '@dropins/storefront-auth/containers/SignIn.js';
import { render as authRenderer } from '@dropins/storefront-auth/render.js';
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
    authRenderer.render(SignIn, {
=======
    await authRenderer.render(SignIn, {
>>>>>>> template/main
      routeForgotPassword: () => '/customer/forgotpassword',
      routeRedirectOnSignIn: () => '/customer/account',
    })(block);
  }
}
