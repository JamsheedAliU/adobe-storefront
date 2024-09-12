<<<<<<< HEAD
import{f as s,h as a}from"./network-error.js";import{s as n}from"./setReCaptchaToken.js";import{t as i}from"./transform-attributes-form.js";import{h as o}from"./getStoreConfig.js";const u=`
=======
import{f as a,h as s}from"./network-error.js";import{s as n}from"./setReCaptchaToken.js";import{t as i}from"./transform-attributes-form.js";import{h as o}from"./getStoreConfig.js";const u=`
>>>>>>> template/main
  mutation CREATE_CUSTOMER($input: CustomerInput!) {
    createCustomer(input: $input) {
      customer {
        firstname
        lastname
        email
        is_subscribed
      }
    }
  }
`,m=`
  mutation CREATE_CUSTOMER_V2($input: CustomerCreateInput!) {
    createCustomerV2(input: $input) {
      customer {
        firstname
        lastname
        email
        is_subscribed
      }
    }
  }
<<<<<<< HEAD
`,_=async(r,t)=>(await n(),await s(t?m:u,{method:"POST",variables:{input:{...r}}}).catch(a)),c=`
=======
`,p=async(r,t)=>(await n(),await a(t?m:u,{method:"POST",variables:{input:{...r}}}).catch(s)),c=`
>>>>>>> template/main
  query GET_ATTRIBUTES_FORM($formCode: String!) {
    attributesForm(formCode: $formCode) {
      items {
        code
        default_value
        entity_type
        frontend_class
        frontend_input
        is_required
        is_unique
        label
        options {
          is_default
          label
          value
        }
<<<<<<< HEAD
=======
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
>>>>>>> template/main
      }
      errors {
        type
        message
      }
    }
  }
<<<<<<< HEAD
`,l=async r=>await s(c.replace(/\s+/g," ").trim(),{method:"GET",cache:"force-cache",variables:{formCode:r}}).then(t=>{var e;return(e=t.errors)!=null&&e.length?o(t.errors):i(t)}).catch(a),E=`
=======
`,T=async r=>await a(c.replace(/\s+/g," ").trim(),{method:"GET",cache:"force-cache",variables:{formCode:r}}).then(t=>{var e;return(e=t.errors)!=null&&e.length?o(t.errors):i(t)}).catch(s),d=`
>>>>>>> template/main
  mutation CREATE_CUSTOMER_ADDRESS($input: CustomerAddressInput!) {
    createCustomerAddress(input:$input) {
      firstname
   }
  }
<<<<<<< HEAD
`,f=async r=>await s(E,{method:"POST",variables:{input:r}}).then(t=>{var e;return(e=t.errors)!=null&&e.length?o(t.errors):t.data.createCustomerAddress.firstname||""}).catch(a);export{f as a,_ as c,l as g};
=======
`,f=async r=>await a(d,{method:"POST",variables:{input:r}}).then(t=>{var e;return(e=t.errors)!=null&&e.length?o(t.errors):t.data.createCustomerAddress.firstname||""}).catch(s);export{f as a,p as c,T as g};
>>>>>>> template/main
