<<<<<<< HEAD
import{M as n,c as e,e as d}from"./transform-shipping-methods.js";import{C as l,a as o,t as p}from"./getCart.graphql.js";import"./getStoreConfig.js";const A=`
=======
import{C as n,k as e,M as d,c as l,l as o,t as c}from"./getCart.graphql.js";const g=`
>>>>>>> template/main
  mutation setBillingAddress($cartId: String!, $input: BillingAddressInput!) {
    setBillingAddressOnCart(
      input: { cart_id: $cartId, billing_address: $input }
    ) {
      cart {
        id
<<<<<<< HEAD
        ...CartData
        ...CartSummaryItems
      }
    }
  }
  ${l}
  ${o}
`,C=async({signal:i,cartId:s,input:t})=>{const{address:a,same_as_shipping:r}=t;if(!s)throw new n;if(!r&&!a)throw new e;return await d({type:"mutation",query:A,options:{signal:i,variables:{cartId:s,input:t}},path:"setBillingAddressOnCart.cart",signalType:"cart",transformer:p})};export{C as s};
//# sourceMappingURL=setBillingAddress.js.map
=======
        ...CheckoutData
      }
    }
  }
  ${n}
`,A=async({signal:a,input:s})=>{const t=e.cartId,{address:i,same_as_shipping:r}=s;if(!t)throw new d;if(!r&&!i)throw new l;return await o({type:"mutation",query:g,options:{signal:a,variables:{cartId:t,input:s}},path:"setBillingAddressOnCart.cart",signalType:"cart",transformer:c})};export{A as s};
>>>>>>> template/main
