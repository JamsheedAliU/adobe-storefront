/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { SignUp } from '@dropins/storefront-auth/containers/SignUp.js';
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
    authRenderer.render(SignUp, {
=======
    await authRenderer.render(SignUp, {
>>>>>>> template/main
      hideCloseBtnOnEmailConfirmation: true,
      routeSignIn: () => '/customer/login',
      routeRedirectOnSignIn: () => '/customer/account',
    })(block);
  }
}
