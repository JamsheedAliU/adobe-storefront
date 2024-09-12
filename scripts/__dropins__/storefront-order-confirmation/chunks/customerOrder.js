<<<<<<< HEAD
import{FetchGraphQL as m}from"@dropins/tools/fetch-graphql.js";class o extends Error{constructor(e){super(e.map(r=>r.message).join(" ")),this.name="FetchError"}}class y extends Error{constructor(e){super(`Missing argument: ${e}`)}}class a extends Error{constructor(){super("Order not found")}}const{setEndpoint:_,setFetchGraphQlHeader:O,removeFetchGraphQlHeader:f,setFetchGraphQlHeaders:b,fetchGraphQl:c,getConfig:w}=new m().getMethods(),i=`
=======
import{FetchGraphQL as m}from"@dropins/tools/fetch-graphql.js";class l extends Error{constructor(e){super(e),this.name="InvalidArgument"}}class a extends Error{constructor(e){super(e.map(t=>t.message).join(" ")),this.name="FetchError"}}class y extends Error{constructor(e){super(`Missing argument: ${e}`)}}class o extends Error{constructor(){super("Order not found")}}class O extends l{constructor(){super("Email is required")}}const{setEndpoint:b,setFetchGraphQlHeader:f,removeFetchGraphQlHeader:v,setFetchGraphQlHeaders:w,fetchGraphQl:u,getConfig:$}=new m().getMethods(),i=`
>>>>>>> template/main
  fragment guestOrderData on CustomerOrder {
    number
    status
    email
    shipping_method
    is_virtual
    payment_methods {
      name
      type
    }
    total {
      subtotal {
        currency
        value
      }
      total_tax {
        currency
        value
      }
      total_shipping {
        currency
        value
      }
      grand_total {
        currency
        value
      }
    }
    billing_address {
      firstname
      middlename
      lastname
      street
      city
      postcode
      telephone
      country_code
      region
      region_id
      company
<<<<<<< HEAD
=======
      custom_attributesV2 {
        code
        ... on AttributeValue {
          value
        }
      }
>>>>>>> template/main
    }
    shipping_address {
      firstname
      middlename
      lastname
      street
      city
      postcode
      telephone
      country_code
      region
      region_id
      company
<<<<<<< HEAD
=======
      custom_attributesV2 {
        code
        ... on AttributeValue {
          value
        }
      }
>>>>>>> template/main
    }
    items {
      __typename
      id
      quantity_ordered
      product_sale_price {
        value
        currency
      }
      product {
        name
        sku
        thumbnail {
          label
          url
        }
        price_range {
          maximum_price {
            regular_price {
              currency
              value
            }
          }
        }
      }
      selected_options {
        label
        value
      }

      ... on GiftCardOrderItem {
        gift_card {
          recipient_name
          recipient_email
          sender_name
          sender_email
          message
        }
      }
    }
  }
<<<<<<< HEAD
`,l=`
=======
`,g=`
>>>>>>> template/main
  query guestOrder($number: String!, $email: String!, $postcode: String!) {
    guestOrder(input: { number: $number, email: $email, postcode: $postcode }) {
      ...guestOrderData
    }
  }
  ${i}
<<<<<<< HEAD
`,$=async t=>{const{data:e,errors:r}=await c(l,{variables:{...t}});if(r)throw new o(r);const s=e==null?void 0:e.guestOrder;if(!s)throw new a;return s},g=`
=======
`,E=async r=>{const{data:e,errors:t}=await u(g,{variables:{...r}});if(t)throw new a(t);const s=e==null?void 0:e.guestOrder;if(!s)throw new o;return s},p=`
>>>>>>> template/main
  query guestOrderByToken($token: String!) {
    guestOrderByToken(input: {token: $token}) {
      ...guestOrderData
    }
  }
  ${i}
<<<<<<< HEAD
`,v=async t=>{const{data:e,errors:r}=await c(g,{variables:{token:t}});if(r)throw new o(r);const s=e==null?void 0:e.guestOrderByToken;if(!!!s)throw new a;return s},p=`
=======
`,k=async r=>{const{data:e,errors:t}=await u(p,{variables:{token:r}});if(t)throw new a(t);const s=e==null?void 0:e.guestOrderByToken;if(!!!s)throw new o;return s},h=`
>>>>>>> template/main
  query customerOrder($number: String!) {
    customer {
      orders(filter: { number: { eq: $number } }) {
        total_count
        items {
          ...guestOrderData
        }
      }
    }
  }
  ${i}
<<<<<<< HEAD
`,k=async t=>{var n,u,d;const{data:e,errors:r}=await c(p,{variables:{number:t}});if(r)throw new o(r);const s=(d=(u=(n=e==null?void 0:e.customer)==null?void 0:n.orders)==null?void 0:u.items)==null?void 0:d[0];if(!s)throw new a;return s};export{o as F,y as M,a as O,O as a,b,$ as c,v as d,k as e,c as f,w as g,f as r,_ as s};
//# sourceMappingURL=customerOrder.js.map
=======
`,F=async r=>{var n,c,d;const{data:e,errors:t}=await u(h,{variables:{number:r}});if(t)throw new a(t);const s=(d=(c=(n=e==null?void 0:e.customer)==null?void 0:n.orders)==null?void 0:c.items)==null?void 0:d[0];if(!s)throw new o;return s};export{a as F,l as I,y as M,o as O,O as a,f as b,w as c,E as d,k as e,u as f,$ as g,F as h,v as r,b as s};
>>>>>>> template/main
