<<<<<<< HEAD
import{c as h}from"./initialize.js";import{FetchGraphQL as Q}from"@dropins/tools/fetch-graphql.js";const{setEndpoint:W,setFetchGraphQlHeader:Z,removeFetchGraphQlHeader:R,setFetchGraphQlHeaders:tt,fetchGraphQl:A,getConfig:et}=new Q().getMethods();function D(e){var o,u,n;const r=e?{name:e.name,sku:e.sku,addToCartAllowed:e.addToCartAllowed,inStock:e.inStock,shortDescription:e.shortDescription,metaDescription:e.metaDescription,metaKeyword:e.metaKeyword,metaTitle:e.metaTitle,description:e.description,images:K(e),prices:j(e),attributes:M(e),options:N(e),optionUIDs:e.optionUIDs,url:e.url,urlKey:e.urlKey,externalId:e.externalId,externalParentId:e.externalParentId,variantSku:e.variantSku}:null,t=(n=(u=(o=h.getConfig())==null?void 0:o.models)==null?void 0:u.ProductDetails)==null?void 0:n.transform;return t&&r?t(r):r}function K(e){var r;return(r=e.images)==null?void 0:r.map(t=>(t.url=t.url.replace(/^https?:/,""),t))}function M(e){var r,t;return(t=(r=e.attributes)==null?void 0:r.filter(({roles:o})=>(o==null?void 0:o.indexOf("visible_in_pdp"))!==-1))==null?void 0:t.map(({label:o,value:u,name:n})=>({id:n,label:o,value:u.toString().split(",").join(", ")}))}function N(e){const{options:r,optionUIDs:t}=e;return r==null?void 0:r.map(({id:o,title:u,required:n,multi:c,values:i})=>{var d,f;const l=(d=i==null?void 0:i[0])==null?void 0:d.__typename;let a=i==null?void 0:i[0].type;return((f=i==null?void 0:i[0])==null?void 0:f.__typename)==="ProductViewOptionValueProduct"?a=void 0:a?a=a.replace("COLOR_HEX","color").replace("TEXT","text").replace("IMAGE","image"):a="dropdown",{id:o,type:a,typename:l,label:u,required:n,multiple:c,items:i==null?void 0:i.map(({id:m,title:g,inStock:p,value:P})=>({id:m,label:g,inStock:p,value:(a==null?void 0:a.toLowerCase())==="dropdown"?m:P==null?void 0:P.replace(/^https?:/,""),selected:(t==null?void 0:t.indexOf(m))>-1}))}})}function j(e){var d,f,m,g,p;const{price:r,priceRange:t,__typename:o}=e;function u(){var k;const P=r.regular.amount.value,y=((k=r.final)==null?void 0:k.amount.value)??r.regular.amount.value,w=r.regular.amount.currency==="NONE"?"USD":r==null?void 0:r.regular.amount.currency;return[P,y,y,w]}function n(){var x,_,b,S,E,T,C,O,v,F,V,$;const P=(x=t==null?void 0:t.minimum)==null?void 0:x.final.amount.value,y=(_=t==null?void 0:t.maximum)==null?void 0:_.final.amount.value;let w;((S=(b=t==null?void 0:t.minimum)==null?void 0:b.regular)==null?void 0:S.amount.value)===((T=(E=t==null?void 0:t.maximum)==null?void 0:E.regular)==null?void 0:T.amount.value)&&(w=(O=(C=t==null?void 0:t.minimum)==null?void 0:C.regular)==null?void 0:O.amount.value);const k=((F=(v=t==null?void 0:t.minimum)==null?void 0:v.final)==null?void 0:F.amount.currency)==="NONE"?"USD":($=(V=t==null?void 0:t.minimum)==null?void 0:V.final)==null?void 0:$.amount.currency;return[w,P,y,k]}const[c,i,l,a]=o==="SimpleProductView"?u():n(),s=o==="SimpleProductView"?(d=r==null?void 0:r.roles)==null?void 0:d.includes("visible"):((m=(f=t==null?void 0:t.maximum)==null?void 0:f.roles)==null?void 0:m.includes("visible"))&&((p=(g=t==null?void 0:t.minimum)==null?void 0:g.roles)==null?void 0:p.includes("visible"));return l&&i===l?{regular:{amount:c,currency:a,variant:c&&i!==c?"strikethrough":"default"},final:{amount:l,currency:a,variant:"default"},visible:s}:{final:{minimumAmount:i,maximumAmount:l,currency:a},visible:s}}const U=`
=======
import{c as B}from"./initialize.js";import{FetchGraphQL as et}from"@dropins/tools/fetch-graphql.js";const{setEndpoint:gt,setFetchGraphQlHeader:ht,removeFetchGraphQlHeader:wt,setFetchGraphQlHeaders:xt,fetchGraphQl:q,getConfig:bt}=new et().getMethods();function K(e,r){var i,u,o;const n=e?{name:e.name,sku:e.sku,addToCartAllowed:e.addToCartAllowed,inStock:e.inStock,shortDescription:e.shortDescription,metaDescription:e.metaDescription,metaKeyword:e.metaKeyword,metaTitle:e.metaTitle,description:e.description,images:rt(e),prices:mt(e,!!r),attributes:nt(e),options:ut(e),optionUIDs:at(e),url:e.url,urlKey:e.urlKey,externalId:e.externalId,externalParentId:e.externalParentId,variantSku:e.variantSku}:null,t=(o=(u=(i=B.getConfig())==null?void 0:i.models)==null?void 0:u.ProductDetails)==null?void 0:o.transform;return t&&n?t(n):n}function rt(e){var r;return(r=e.images)==null?void 0:r.map(n=>(n.url=n.url.replace(/^https?:/,""),n))}function nt(e){var r,n;return(n=(r=e.attributes)==null?void 0:r.filter(({roles:t})=>(t==null?void 0:t.indexOf("visible_in_pdp"))!==-1))==null?void 0:n.map(({label:t,value:i,name:u})=>({id:u,label:t,value:i.toString().split(",").join(", ")}))}function ut(e){const{options:r,optionUIDs:n}=e;return r==null?void 0:r.map(({id:t,title:i,required:u,multi:o,values:m})=>{var d,s;const a=(d=m==null?void 0:m[0])==null?void 0:d.__typename;let l=m==null?void 0:m[0].type;const c=((s=m==null?void 0:m[0])==null?void 0:s.__typename)==="ProductViewOptionValueProduct";return l?l=l.replace("COLOR_HEX","color").replace("TEXT","text").replace("IMAGE","image"):l="dropdown",{id:t,type:l,typename:a,label:i,required:u,multiple:o,items:c?it(m,n):ot(m,n,l)}})}function it(e,r){return e==null?void 0:e.map(({id:n,title:t,inStock:i,isDefault:u,product:o})=>({id:n,inStock:i,label:t,selected:(r==null?void 0:r.indexOf(n))>-1||u,value:n,product:o}))}function ot(e,r,n){return e==null?void 0:e.map(({id:t,title:i,inStock:u,value:o})=>({id:t,inStock:u,label:i,selected:(r==null?void 0:r.indexOf(t))>-1,value:(n==null?void 0:n.toLowerCase())==="dropdown"?t:o==null?void 0:o.replace(/^https?:/,"")}))}function mt(e,r){var E,x,H,I,L;const{price:n,priceRange:t,options:i,optionUIDs:u}=e;let{__typename:o}=e;function m(){var g;const P=n.regular.amount.value,f=((g=n.final)==null?void 0:g.amount.value)??n.regular.amount.value,y=n.regular.amount.currency==="NONE"?"USD":n==null?void 0:n.regular.amount.currency;return[P,f,f,y]}function a(){var b,_,S,V,T,C,D,A,F,$,G,M;const P=(b=t==null?void 0:t.minimum)==null?void 0:b.final.amount.value,f=(_=t==null?void 0:t.maximum)==null?void 0:_.final.amount.value;let y;((V=(S=t==null?void 0:t.minimum)==null?void 0:S.regular)==null?void 0:V.amount.value)===((C=(T=t==null?void 0:t.maximum)==null?void 0:T.regular)==null?void 0:C.amount.value)&&(y=(A=(D=t==null?void 0:t.minimum)==null?void 0:D.regular)==null?void 0:A.amount.value);const g=(($=(F=t==null?void 0:t.minimum)==null?void 0:F.final)==null?void 0:$.amount.currency)==="NONE"?"USD":(M=(G=t==null?void 0:t.minimum)==null?void 0:G.final)==null?void 0:M.amount.currency;return[y,P,f,g]}function l(){var S,V,T,C,D,A,F,$,G,M,X,Y;let P=0,f=0;i==null||i.forEach(k=>{var z;const j=k==null?void 0:k.values;if(j&&Array.isArray(j)){const h=j.map(p=>{var Q,N,J,W;return(W=(J=(N=(Q=p==null?void 0:p.product)==null?void 0:Q.price)==null?void 0:N.regular)==null?void 0:J.amount)==null?void 0:W.value}).filter(p=>p!==void 0),v=h.length>0?Math.max(...h):0;P+=v}else P+=0;(z=k==null?void 0:k.values)==null||z.forEach(h=>{var v,p,Q,N;u!=null&&u.includes(h.id)&&(f+=(N=(Q=(p=(v=h==null?void 0:h.product)==null?void 0:v.price)==null?void 0:p.final)==null?void 0:Q.amount)==null?void 0:N.value)})});const y=(S=t==null?void 0:t.minimum)==null?void 0:S.final.amount.value,g=(V=t==null?void 0:t.maximum)==null?void 0:V.final.amount.value;let b;((C=(T=t==null?void 0:t.minimum)==null?void 0:T.regular)==null?void 0:C.amount.value)===((A=(D=t==null?void 0:t.maximum)==null?void 0:D.regular)==null?void 0:A.amount.value)&&(b=($=(F=t==null?void 0:t.minimum)==null?void 0:F.regular)==null?void 0:$.amount.value);const _=((M=(G=t==null?void 0:t.minimum)==null?void 0:G.final)==null?void 0:M.amount.currency)==="NONE"?"USD":(Y=(X=t==null?void 0:t.minimum)==null?void 0:X.final)==null?void 0:Y.amount.currency;return r&&!u?[b,y,g,_]:P===(t==null?void 0:t.maximum.regular.amount.value)?[f,f,f,_]:[b,y,g,_]}const[c,d,s,w]=o==="SimpleProductView"?m():r?l():a(),O=o==="SimpleProductView"?(E=n==null?void 0:n.roles)==null?void 0:E.includes("visible"):((H=(x=t==null?void 0:t.maximum)==null?void 0:x.roles)==null?void 0:H.includes("visible"))&&((L=(I=t==null?void 0:t.minimum)==null?void 0:I.roles)==null?void 0:L.includes("visible"));return s&&d===s?{regular:{amount:c,currency:w,variant:c&&d!==c?"strikethrough":"default"},final:{amount:s,currency:w,variant:"default"},visible:O}:{final:{minimumAmount:d,maximumAmount:s,currency:w},visible:O}}function at(e){var n;let{optionUIDs:r}=e;return(n=e==null?void 0:e.options)==null||n.map(({values:t})=>{var u;((u=t==null?void 0:t[0])==null?void 0:u.__typename)==="ProductViewOptionValueProduct"&&!r&&(r=[],t==null||t.map(({id:o,isDefault:m})=>{m&&(r==null?void 0:r.indexOf(o))===-1&&r.push(o)}))}),r}const lt=`
>>>>>>> template/main
fragment ProductOptionFragment on ProductViewOption {
    id
    title
    required
    multi
    values {
      id
      title
      inStock
      __typename
      ... on ProductViewOptionValueProduct {
        title
        quantity
        isDefault
        product {
          sku
          shortDescription
          metaDescription
          metaKeyword
          metaTitle
          name
          price {
            final {
              amount {
                value
                currency
              }
            }
            regular {
              amount {
                value
                currency
              }
            }
            roles
          }
        }
      }
      ... on ProductViewOptionValueSwatch {
        id
        title
        type
        value
        inStock
      }
    }
  }
<<<<<<< HEAD
`,G=`
=======
`,R=`
>>>>>>> template/main
fragment ProductFragment on ProductView {
  __typename
  id
  sku
  name
  shortDescription
  metaDescription
  metaKeyword
  metaTitle
  description
  inStock
  addToCartAllowed
  url
  urlKey
  externalId

  images(roles: []) {
    url
    label
    roles
  }

  attributes(roles: []) {
    name
    label
    value
    roles
  }

... on SimpleProductView {
    price {
        roles

        regular {
            amount {
                value
                currency
            }
        }

        final {
            amount {
                value
                currency
            }
        }
    }
}


  ... on ComplexProductView {
    options {
      ...ProductOptionFragment
    }

    priceRange {
      maximum {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
        roles
      }
      minimum {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
        roles
      }
    }
  }
}

<<<<<<< HEAD
${U}
`,q=`
=======
${lt}
`,tt=`
>>>>>>> template/main
query GET_PRODUCT_DATA($skus: [String]) {
    products(skus: $skus) {
        ...ProductFragment
    }
}

<<<<<<< HEAD
${G}
`,rt=async e=>{var u,n,c,i,l;const r=(i=(c=(n=(u=h)==null?void 0:u.getConfig())==null?void 0:n.models)==null?void 0:c.ProductDetails)==null?void 0:i.initialData;if(r)return D(r);const{data:t}=await A(q,{method:"GET",variables:{skus:[e]}}),o=(l=t==null?void 0:t.products)==null?void 0:l[0];return D(o)},H=`
=======
${R}
`;function Z(e){return e.some(r=>(r==null?void 0:r.__typename)==="ProductViewOptionValueProduct")}const _t=async e=>{var u,o,m,a,l,c,d;const r=(a=(m=(o=(u=B)==null?void 0:u.getConfig())==null?void 0:o.models)==null?void 0:m.ProductDetails)==null?void 0:a.initialData;let n=!!((l=r==null?void 0:r.options)!=null&&l.some(s=>Z(s.values)));if(r)return K(r,!!n);const{data:t}=await q(tt,{method:"GET",variables:{skus:[e]}}),i=(c=t==null?void 0:t.products)==null?void 0:c[0];return n=!!((d=i==null?void 0:i.options)!=null&&d.some(s=>Z(s.values))),K(i,!!n)},ct=`
>>>>>>> template/main
query REFINE_PRODUCT_QUERY(
    $optionIds: [String!]!
    $sku: String!
) {
    # Refined Product
    refineProduct(
        optionIds: $optionIds 
        sku: $sku
    ) {
        ...ProductFragment
    }

    # Parent Product
    products(skus: [$sku]) {
        ...ProductFragment
    }

    # %extendedPlaceholder%
}

<<<<<<< HEAD
${G}
`;async function I(e,r){const t=L(r),o=B(t,e),u=H.replace("# %extendedPlaceholder%",o),{data:n}=await A(u,{method:"GET",variables:{optionIds:r,sku:e}});return n}const nt=async(e,r,t)=>{var d,f,m,g;const o=await I(e,r);if(!o)return null;let{products:u,refineProduct:n,...c}=o;const i=u==null?void 0:u[0],l=X(Object.values(c),i.options,t);if(t!=null&&t.length&&n===null){r=Y(l,r,t);const p=await I(e,r);n=p==null?void 0:p.refineProduct}const a=D({...n||i,sku:i.sku,name:i.name,externalParentId:i==null?void 0:i.externalId,options:l,optionUIDs:r,variantSku:(n==null?void 0:n.__typename)==="SimpleProductView"?n==null?void 0:n.sku:void 0}),s=(g=(m=(f=(d=h)==null?void 0:d.getConfig())==null?void 0:f.models)==null?void 0:m.ProductDetails)==null?void 0:g.fallbackData;return s?s(i,a):a};function L(e){if(e.length<2)return[e];const r=[];return e.forEach(t=>{const o=[];e.forEach(u=>{t!==u&&o.push(u)}),r.push(o)}),r}function B(e,r){return e.map((t,o)=>`
          ProductOption${o}: refineProduct(
            optionIds: [
              ${t.map(u=>`"${u}"`).join(", ")}
=======
${R}
`;async function U(e,r,n){var m;if(n)return{...(m=(await q(tt,{method:"GET",variables:{skus:[e]}})).data)==null?void 0:m.products[0],optionUIDs:r};const t=st(r),i=dt(t,e),u=ct.replace("# %extendedPlaceholder%",i),{data:o}=await q(u,{method:"GET",variables:{optionIds:r,sku:e}});return o}const kt=async(e,r,n,t)=>{var s,w,O,E;let i;if(i=await U(e,r,t),!i)return null;if(t)return K({...i,optionUIDs:r},!0);let{products:u,refineProduct:o,...m}=i;const a=u==null?void 0:u[0],l=ft(Object.values(m),a.options,n);if(n!=null&&n.length&&o===null){r=Pt(l,r,n);const x=await U(e,r);o=x==null?void 0:x.refineProduct}const c=K({...o||a,sku:a.sku,name:a.name,externalParentId:a==null?void 0:a.externalId,options:l,optionUIDs:r,variantSku:(o==null?void 0:o.__typename)==="SimpleProductView"?o==null?void 0:o.sku:void 0}),d=(E=(O=(w=(s=B)==null?void 0:s.getConfig())==null?void 0:w.models)==null?void 0:O.ProductDetails)==null?void 0:E.fallbackData;return d?d(a,c):c};function st(e){if(e.length<2)return[e];const r=[];return e.forEach(n=>{const t=[];e.forEach(i=>{n!==i&&t.push(i)}),r.push(t)}),r}function dt(e,r){return e.map((n,t)=>`
          ProductOption${t}: refineProduct(
            optionIds: [
              ${n.map(i=>`"${i}"`).join(", ")}
>>>>>>> template/main
            ]
            sku: "${r}"
          ) {
            ... on ComplexProductView {
              options {
                ...ProductOptionFragment
              }
            }
          }
<<<<<<< HEAD
        `).join("")}function X(e,r,t){const o=Object.values(e).filter(n=>!!n).reduce((n,c)=>c.options?[...n,...c.options]:[...n],[]),u=new Map(r.map(n=>[n.id,n]));return o.forEach(n=>{t!=null&&t.includes(n.id)||u.set(n.id,n)}),[...u.values()]}function Y(e,r,t){const o=[];let u;return e.forEach(n=>{var c,i,l,a;t.includes(n.id)?u=((i=(c=n.values)==null?void 0:c.find(s=>r.includes(s==null?void 0:s.id)))==null?void 0:i.id)||((l=n.values[0])==null?void 0:l.id):u=(a=n.values[0])==null?void 0:a.id,o.push(u)}),o}export{Z as a,tt as b,rt as c,nt as d,A as f,et as g,R as r,W as s};
=======
        `).join("")}function ft(e,r,n){const t=Object.values(e).filter(u=>!!u).reduce((u,o)=>o.options?[...u,...o.options]:[...u],[]),i=new Map(r.map(u=>[u.id,u]));return t.forEach(u=>{n!=null&&n.includes(u.id)||i.set(u.id,u)}),[...i.values()]}function Pt(e,r,n){const t=[];let i;return e.forEach(u=>{var o,m,a,l;n.includes(u.id)?i=((m=(o=u.values)==null?void 0:o.find(c=>r.includes(c==null?void 0:c.id)))==null?void 0:m.id)||((a=u.values[0])==null?void 0:a.id):i=(l=u.values[0])==null?void 0:l.id,t.push(i)}),t}export{ht as a,xt as b,_t as c,kt as d,q as f,bt as g,wt as r,gt as s};
>>>>>>> template/main
