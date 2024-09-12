<<<<<<< HEAD
import{s as l,f as d,h as u,C as m,a as T,t as E}from"./resetCart.js";import"@dropins/tools/event-bus.js";const I=`
  mutation ESTIMATE_SHIPPING_METHODS_MUTATION(
    $cartId: String!
    $address: EstimateAddressInput!
  ) {
    estimateShippingMethods(
      input: {
        cart_id: $cartId
        address: $address
      }
    ) {
      amount {
        currency
        value
      }
      carrier_code
      method_code
      error_message
      price_excl_tax {
        currency
        value
      }
      price_incl_tax {
        currency
        value
      }
    }
  }
`,g=`
query COUNTRIES_QUERY {
  countries {
    label: full_name_locale
    id
  }
  storeConfig {
    defaultCountry: default_country
  }
}
`,f=`
query REGIONS_QUERY($id: String) {
  country(id: $id) {
    available_regions {
      code
			name
    }
  }
}
`,N=async r=>{const t=l.cartId;if(!t)throw new Error("No cart ID found");if(!r)throw new Error("No address parameter found");const{countryCode:o,postcode:n,region:e}=r;return d(I,{variables:{cartId:t,address:{country_code:o||"US",postcode:n||"",region:{region:(e==null?void 0:e.region)||"",region_code:(e==null?void 0:e.code)||"",region_id:(e==null?void 0:e.id)||0}}}}).then(({errors:i,data:s})=>{if(i)return u(i);const c=s.estimateShippingMethods;return c.length===0?null:c.find(a=>!a.error_message)})},M=async()=>d(g,{}).then(({errors:r,data:t})=>{var e,i;if(r)return u(r);const o=((e=t==null?void 0:t.countries)==null?void 0:e.sort((s,c)=>s.label.localeCompare(c.label)))||[],n=((i=t==null?void 0:t.storeConfig)==null?void 0:i.defaultCountry)||"US";return o.forEach(s=>{s.isDefaultCountry=s.id===n}),o}),U=async r=>d(f,{variables:{id:r}}).then(({errors:t,data:o})=>{var n;return t?u(t):((n=o==null?void 0:o.country)==null?void 0:n.available_regions)||[]}),S=`
=======
import{s as _,f as m,h as T}from"./resetCart.js";import{C as E,a as I,t as u}from"./CartFragment.js";import"@dropins/tools/event-bus.js";const A=`
>>>>>>> template/main
  mutation GET_ESTIMATED_TOTALS_MUTATION(
    $cartId: String!
    $address: EstimateAddressInput!,
    $shipping_method: ShippingMethodInput,
<<<<<<< HEAD
    ${m}
=======
    ${E}
>>>>>>> template/main

  ) {
    estimateTotals(
      input: {
        cart_id: $cartId
        address: $address
        shipping_method: $shipping_method
      }
    )  {
      cart {
       ...CartFragment
      }
    }
    }
<<<<<<< HEAD
  ${T}
  `,$=async r=>{var c,a;const t=l.cartId;if(!t)throw new Error("No cart ID found");if(!r)throw new Error("No address parameter found");const{countryCode:o,postcode:n,region:e}=r,i=(c=r.shipping_method)==null?void 0:c.carrier_code,s=(a=r.shipping_method)==null?void 0:a.method_code;return d(S,{variables:{cartId:t,address:{country_code:o||"US",postcode:n||"00000",region:{region:(e==null?void 0:e.region)||"region",region_code:(e==null?void 0:e.code)||"regionCode",region_id:(e==null?void 0:e.id)||0}},shipping_method:{carrier_code:i||"",method_code:s||""}}}).then(({errors:_,data:h})=>{if(_)return u(_);const p=h.estimateTotals;return p?E(p.cart):null})};export{M as a,U as b,$ as c,N as g};
=======
  ${I}
  `,M=async r=>{var e,a;const o=_.cartId;if(!o)throw new Error("No cart ID found");if(!r)throw new Error("No address parameter found");const{countryCode:i,postcode:n,region:t}=r,c=(e=r.shipping_method)==null?void 0:e.carrier_code,p=(a=r.shipping_method)==null?void 0:a.method_code;return m(A,{variables:{cartId:o,address:{country_code:i||"US",postcode:n,region:(t==null?void 0:t.id)!==void 0?{region_id:t.id}:{region:(t==null?void 0:t.region)??""}},shipping_method:{carrier_code:c||"",method_code:p||""}}}).then(({errors:d,data:h})=>{if(d)return T(d);const s=h.estimateTotals;return s?u(s.cart):null})};export{M as g};
>>>>>>> template/main
