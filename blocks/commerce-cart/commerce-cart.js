/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Dropin Providers
import { render as provider } from '@dropins/storefront-cart/render.js';

// Dropin Containers
import Cart from '@dropins/storefront-cart/containers/Cart.js';
<<<<<<< HEAD
=======
import OrderSummary from '@dropins/storefront-cart/containers/OrderSummary.js';
import EstimateShipping from '@dropins/storefront-cart/containers/EstimateShipping.js';
>>>>>>> template/main

export default async function decorate(block) {
  // Initialize Dropins – already initialized in scripts/dropins.js

  // Render Containers
  return provider.render(Cart, {
    routeEmptyCartCTA: () => '/',
    routeProduct: (product) => `/products/${product.url.urlKey}/${product.sku}`,
    routeCheckout: () => '/checkout',
<<<<<<< HEAD
=======
    slots: {
      OrderSummary: (ctx) => {
        const orderSummary = document.createElement('div');

        provider.render(OrderSummary, {
          routeCheckout: () => '/checkout',
          slots: {
            EstimateShipping: (orderSummaryContext) => {
              const estimateShippingForm = document.createElement('div');

              provider.render(EstimateShipping)(estimateShippingForm);

              orderSummaryContext.appendChild(estimateShippingForm);
            },
          },
        })(orderSummary);

        ctx.appendChild(orderSummary);
      },
    },
>>>>>>> template/main
  })(block);
}
