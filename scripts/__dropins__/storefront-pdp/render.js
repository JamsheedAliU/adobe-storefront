<<<<<<< HEAD
(function(p,t){try{if(typeof document<"u"){const r=document.createElement("style"),e=t.styleId;for(const a in t.attributes)r.setAttribute(a,t.attributes[a]);r.setAttribute("data-dropin",e),r.appendChild(document.createTextNode(p));const o=document.querySelector('style[data-dropin="sdk"]');if(o)o.after(r);else{const a=document.querySelector('link[rel="stylesheet"], style');a?a.before(r):document.head.append(r)}}}catch(r){console.error("dropin-styles (injectCodeFunction)",r)}})(".pdp-carousel{--icon-size: 32px;--icon-extra-padding: 8px;--thumb-peak: 32px;--thumbnails-col-width: 18.6%;position:relative;display:flex;flex-direction:var(--flex-carousel);align-items:center;gap:var(--gap);width:var(--width)}.pdp-carousel--thumbnailsColumn{justify-content:flex-end;align-items:start}.pdp-carousel--thumbnailsRow{align-items:center}.pdp-carousel--arrows{padding-left:calc(var(--icon-size) + var(--icon-extra-padding));padding-right:calc(var(--icon-size) + var(--icon-extra-padding));width:calc(var(--width) - 2 * var(--icon-size) - 2 * var(--icon-extra-padding))}.pdp-carousel__button{position:absolute;top:50%;transform:translateY(-50%);padding:0}.pdp-carousel__button--prev{left:0}.pdp-carousel__button--next{right:0}.pdp-carousel__button__icon--prev{transform:rotate(90deg)}.pdp-carousel__button__icon--next{right:0;transform:rotate(-90deg)}.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsColumn .pdp-carousel__button--prev{left:var(--thumbnails-col-width)}.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsRow .pdp-carousel__button--prev,.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsRow .pdp-carousel__button--next{top:calc(var(--height) / 2)}.pdp-carousel__button--thumbnailsColumn{margin:auto;padding:0}.pdp-carousel__button--thumbnailsRow{padding:0}.pdp-carousel__button__icon--thumbnailsColumn--prev{transform:rotate(180deg)}.pdp-carousel__button__icon--thumbnailsRow--prev{transform:rotate(90deg)}.pdp-carousel__button__icon--thumbnailsRow--next{transform:rotate(-90deg)}.pdp-carousel__wrapper{--peak: 0px;scroll-padding:var(--peak);width:var(--total-width);height:var(--height);display:flex;flex-wrap:nowrap;gap:var(--gap);-webkit-overflow-scrolling:touch}.pdp-carousel__wrapper--horizontal{overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory}.pdp-carousel__slide{display:grid;grid-gap:var(--gap);grid-auto-columns:1fr;grid-auto-rows:100%;scroll-snap-align:end;scroll-snap-stop:always;flex-shrink:0}.pdp-carousel__slide--horizontal{grid-auto-flow:column;width:calc(100% - var(--peak))}.pdp-carousel__slide--horizontal.pdp-carousel__slide--orphan{width:calc((100% / var(--per-page) * var(--length)) - var(--peak) / var(--per-page) * var(--length) - var(--gap) / var(--per-page) * (var(--per-page) - var(--length)))}.pdp-carousel__slide>*{vertical-align:middle;max-width:100%;max-height:100%}.pdp-carousel__slide>img{object-fit:contain;width:100%;height:100%}.pdp-carousel__wrapper--peak{--peak: calc(var(--spacing-medium) + var(--gap))}.pdp-carousel__wrapper--scrollbar{--scroll-foreground: var(--color-neutral-600);--scroll-background: var(--color-neutral-400);scrollbar-color:var(--scroll-foreground) var(--scroll-background);scrollbar-width:thin}.pdp-carousel__wrapper:not(.pdp-carousel__wrapper--scrollbar){scrollbar-width:none}.pdp-carousel__wrapper:not(.pdp-carousel__wrapper--scrollbar)::-webkit-scrollbar{display:none}.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar{width:4px;height:4px}.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-thumb{background:var(--scroll-foreground)}.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-track{background:var(--scroll-background)}.pdp-carousel__controls__container--thumbnailsRow{--thumbnails-spacing: var(--spacing-small);--thumbnails-box-width: var(--spacing-xxsmall);--thumbnails-rest: calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));--thumbnails-width: calc((var(--width) - 2 * var(--icon-size) - 4 * var(--thumbnails-spacing) - var(--thumb-peak) - 2 * var(--thumbnails-box-width)) / 4);margin-top:var(--thumbnails-rest);width:var(--width);display:flex}.pdp-carousel__controls__container--thumbnailsColumn{--thumbnails-spacing: var(--spacing-small);--thumbnails-box-width: var(--spacing-xxsmall);--thumbnails-rest: calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));--thumbnails-width: 100%;width:calc(var(--thumbnails-col-width) - var(--thumbnails-rest));margin-right:var(--thumbnails-rest)}.pdp-carousel__controls__container--thumbnailsColumn:not(.pdp-carousel__controls__container--no-arrows){height:calc(max(var(--height),4 * var(--thumbnails-spacing)) - 4 * var(--thumbnails-spacing))}.pdp-carousel__controls__container--thumbnailsColumn.pdp-carousel__controls__container--no-arrows{height:var(--height)}.pdp-carousel__controls__wrapper--thumbnailsColumn{max-height:100%;overflow-y:scroll}.pdp-carousel__controls__wrapper--thumbnailsRow{max-width:100%;overflow-x:scroll}.pdp-carousel__controls--thumbnailsRow>label>span:nth-last-child(1){margin-right:var(--thumbnails-box-width)}.pdp-carousel__controls__wrapper::-webkit-scrollbar{display:none}.pdp-carousel__controls__wrapper{-ms-overflow-style:none;scrollbar-width:none}.pdp-carousel__controls{display:flex;flex-direction:row;gap:var(--spacing-xsmall)}.pdp-carousel__controls--thumbnailsColumn{display:grid;grid-template-columns:repeat(1,1fr);grid-auto-rows:1fr;grid-row-gap:var(--thumbnails-spacing);padding:var(--thumbnails-box-width)}.pdp-carousel__controls--thumbnailsRow{grid-column-gap:var(--thumbnails-spacing);padding:var(--thumbnails-box-width)}.pdp-carousel__controls__button{border-radius:50%;width:10px;height:10px;padding:0;border:none;background:var(--color-neutral-400);cursor:pointer}.pdp-carousel__controls__button:hover{background:var(--color-neutral-500)}.pdp-carousel__controls__button:active,.pdp-carousel__controls__button--active{background:var(--color-neutral-600)}.pdp-carousel__slide--last{width:100%}.pdp-carousel__thumbnail__container input[type=radio]{opacity:0;position:absolute;width:0;height:0}.pdp-carousel__thumbnail__container .pdp-carousel__thumbnail__span{display:inline-block;--bg-color: var(--color-neutral-300);box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-400);position:relative;cursor:pointer;background-color:var(--bg-color);background-image:var(--background-image);background-repeat:no-repeat;background-size:cover;height:100%;width:100%;overflow:hidden}.pdp-carousel__thumbnail__content{width:inherit;position:absolute;top:-9999px;bottom:-9999px;left:-9999px;right:-9999px;margin:auto;overflow:hidden}.pdp-carousel__thumbnail__span:hover{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50),0 0 0 var(--shape-border-width-4) var(--color-neutral-500);outline:none}.pdp-carousel__controls__wrapper--thumbnailsRow .pdp-carousel__thumbnail__container{min-width:100px}.pdp-carousel__thumbnail__container input[type=radio]:not(:checked):active~.pdp-carousel-thumbnail__span{box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);outline:none}.pdp-carousel__thumbnail__container input[type=radio]:checked~.pdp-carousel__thumbnail__span,.pdp-carousel__thumbnail--selected{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50),0 0 0 var(--shape-border-width-4) var(--color-neutral-800)}.pdp-carousel__thumbnail__container input[type=radio]:checked:active~.pdp-carousel__thumbnail__span{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50),0 0 0 var(--shape-border-width-4) var(--color-neutral-600)}.pdp-carousel__thumbnail__container input[type=radio]:focus-visible+.pdp-carousel__thumbnail__span{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900),0 0 0 6px var(--color-neutral-400)}.pdp-carousel__thumbnail__span>img{object-fit:cover;width:100%;height:100%}.pdp-product{display:grid;grid-template-columns:repeat(var(--grid-1-columns),1fr);grid-column-gap:var(--grid-1-gutters);margin:0 var(--grid-1-margins)}.pdp-product__gallery-column{display:none}.pdp-product__content-column{grid-column:1 / span 4;color:var(--color-neutral-800)}.pdp-product__header{display:grid;grid-auto-rows:max-content;margin-bottom:var(--spacing-medium)}.pdp-product__breadcrumbs{grid-column:1 / -1;padding:var(--spacing-medium) 0 var(--spacing-xxbig)}.pdp-product__title{font:var(--type-display-3-font);letter-spacing:var(--type-display-3-letter-spacing);margin:0}.pdp-product__sku{font:var(--type-body-1-default-font);max-width:600px}.pdp-product__prices{display:flex;gap:var(--spacing-xsmall);margin-top:var(--spacing-medium)}.pdp-product__out-of-stock__text{font:var(--type-headline-2-strong-font)}.pdp-product__options{grid-column:1 / span 4}.pdp-product__price,.pdp-product__price-special{font:var(--type-headline-2-strong-font)}.pdp-product__price,.pdp-product__sku,.pdp-product__price-special,.pdp-product__out-of-stock__text{letter-spacing:var(--type-headline-2-strong-letter-spacing)}.pdp-product__price--grey{color:var(--color-neutral-500)}.pdp-product__actions,.pdp-product__actions--out-of-stock{display:grid;grid-auto-flow:row;gap:var(--grid-1-gutters);grid-auto-rows:max-content;margin-bottom:var(--spacing-xxbig);margin-top:var(--spacing-big)}.pdp-product__short_description,.pdp-product__attributes{font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);margin-bottom:var(--spacing-small)}.pdp-product__description,.pdp-product__attributes li{font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.pdp-product__attributes{margin-top:var(--spacing-xsmall)}.pdp-product__short_description p,.pdp-product__description p,.pdp-product__attributes li p{margin:0}.pdp-product__short_description figure,.pdp-product__description figure{margin:0}.pdp-product__short_description img,.pdp-product__description img{max-width:100%}.pdp-product__images--carousel{max-height:60vh}.pdp-product__images--carousel--thumbnails{max-height:90vh}.pdp-product__images__placeholder{background-color:var(--color-neutral-200)}.pdp-product__buttons{display:grid;grid-auto-rows:max-content;grid-gap:var(--grid-1-gutters)}.pdp-product__buttons a{text-align:center}.pdp-product__buttons a:hover{text-decoration:none}.pdp-product__overlay .pdp-overlay__content{width:100%;height:100%}.pdp-product__overlay__carousel{width:100%;height:100%;box-sizing:border-box}.pdp-product__overlay__carousel img{width:100%;height:100%;object-fit:contain}.pdp-carousel__controls__container--thumbnailsRow img,.pdp-carousel__controls__container--thumbnailsColumn img{object-fit:cover}.pdp-product__quantity,.pdp-product__buttons{grid-column:1 / span 4}@media only screen and (min-width: 1024px){.pdp-product__breadcrumbs{grid-column:2 / -2}.pdp-product{grid-template-columns:repeat(var(--grid-3-columns),1fr);grid-column-gap:var(--grid-3-gutters);margin:0 var(--grid-3-margins);position:relative}.pdp-product__column-container{position:relative;display:flex;flex-direction:column}.pdp-product__column-body{position:sticky;bottom:30%;align-self:flex-end}.pdp-product__gallery-column{display:block;grid-column:2 / span 6}.pdp-product__content-column{grid-column:8 / span 4;padding-top:var(--spacing-medium)}.pdp-product__images--carousel{display:none}.pdp-product__header{margin-bottom:var(--spacing-small)}.pdp-product__actions{grid-template-columns:repeat(var(--grid-1-columns),1fr);grid-column-gap:var(--grid-1-gutters);grid-row-gap:var(--spacing-xxbig);margin-top:var(--spacing-xxbig)}.pdp-product__quantity{grid-column:1 / span 2}.pdp-product__actions--out-of-stock{grid-template-columns:repeat(var(--grid-1-columns),1fr);grid-column-gap:var(--grid-1-gutters);grid-row-gap:var(--spacing-xxbig);margin-top:var(--spacing-small)}.pdp-product__buttons{grid-column:1 / span 4}.pdp-product__out-of-stock__text{grid-column:1 / span 2}.pdp-product__gallery-content,.pdp-product__content{grid-column:2 / span 6}}.pdp-gallery-grid{display:grid;grid-gap:var(--gap);grid-template-columns:repeat(1,1fr);grid-auto-rows:max-content}.pdp-gallery-grid__item>*{height:100%;max-width:100%;min-width:100%;vertical-align:middle;width:100%;object-fit:contain}.pdp-gallery-grid__item:only-child{grid-column:1 / span 2}.pdp-gallery-grid__item:first-child:nth-last-child(2){grid-column:1 / span 2;grid-row:1}.pdp-gallery-grid__item:nth-child(2):last-child{grid-column:1 / 3;grid-row:2}@media only screen and (min-width: 1024px){.pdp-gallery-grid{grid-template-columns:repeat(2,1fr)}}.pdp-price-range .dropin-price{letter-spacing:var(--type-headline-2-strong-letter-spacing);font:var(--type-headline-2-strong-font)}.pdp-price-range__label{font:var(--type-headline-2-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);margin-left:5px;margin-right:5px}.pdp-overlay{position:fixed;top:0;left:0;z-index:1000;right:0;bottom:0;background-color:var(--color-neutral-50);display:flex;padding:var(--spacing-medium)}.pdp-overlay--centered{align-items:center;justify-content:center}.pdp-overlay__close-button{position:absolute;top:var(--spacing-medium);right:var(--spacing-medium);z-index:1001}.pdp-swatches{display:grid;grid-auto-flow:row;grid-gap:var(--grid-1-gutters);grid-auto-rows:max-content}.pdp-swatches__field{display:grid;font:var(--type-body-2-strong-font);grid-auto-rows:max-content;gap:var(--spacing-xsmall)}.pdp-swatches__field__label{font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);color:var(--color-neutral-800)}.pdp-swatches__options{display:flex;flex-wrap:wrap;gap:var(--spacing-xsmall)}",{styleId:"PDP"});
import{deepmerge as c,Render as u}from"@dropins/tools/lib.js";import{useState as f,useEffect as m}from"@dropins/tools/preact-hooks.js";import{UIProvider as b}from"@dropins/tools/components.js";import{events as d}from"@dropins/tools/event-bus.js";import{jsx as r}from"@dropins/tools/preact-jsx-runtime.js";import{c as g}from"./chunks/initialize.js";const P={Product:{Incrementer:{label:"Item Quantity"},OutOfStock:{label:"Out of Stock"},AddToCart:{label:"Add to Cart"},Details:{label:"Details"},RegularPrice:{label:"Regular Price"},SpecialPrice:{label:"Special Price"},PriceRange:{From:{label:"From"},To:{label:"to"}},Image:{label:"{product} Image {key} of {total}"}},Swatches:{Required:{label:"Required"}},Carousel:{label:"Carousel",Next:{label:"Next"},Previous:{label:"Previous"},Slide:{label:"Slide"},Controls:{label:"Carousel Controls",Button:{label:"Show slide {key} of {total}"}}},Overlay:{Close:{label:"Close"}}},C={quantityLabel:"Passengers"},p={PDP:P,Custom:C},S={default:p},D=({children:a})=>{var t;const[e,i]=f(),n=(t=g.getConfig())==null?void 0:t.langDefinitions;m(()=>{const o=d.on("locale",l=>{l!==e&&i(l)},{eager:!0});return()=>{o==null||o.off()}},[e]);const s=c(S,n??{});return r(b,{lang:e,langDefinitions:s,children:a})},O=new u(r(D,{}));export{O as render};
=======
(function(p,o){try{if(typeof document<"u"){const r=document.createElement("style"),e=o.styleId;for(const a in o.attributes)r.setAttribute(a,o.attributes[a]);r.setAttribute("data-dropin",e),r.appendChild(document.createTextNode(p));const t=document.querySelector('style[data-dropin="sdk"]');if(t)t.after(r);else{const a=document.querySelector('link[rel="stylesheet"], style');a?a.before(r):document.head.append(r)}}}catch(r){console.error("dropin-styles (injectCodeFunction)",r)}})(".pdp-carousel{--icon-size: 32px;--icon-extra-padding: 8px;--thumb-peak: 32px;--thumbnails-col-width: 18.6%;position:relative;display:flex;flex-direction:var(--flex-carousel);align-items:center;gap:var(--gap);width:var(--width)}.pdp-carousel--thumbnailsColumn{justify-content:flex-end;align-items:start}.pdp-carousel--thumbnailsRow{align-items:center}.pdp-carousel--arrows{padding-left:calc(var(--icon-size) + var(--icon-extra-padding));padding-right:calc(var(--icon-size) + var(--icon-extra-padding));width:calc(var(--width) - 2 * var(--icon-size) - 2 * var(--icon-extra-padding))}.pdp-carousel__button{position:absolute;top:50%;transform:translateY(-50%);padding:0}.pdp-carousel__button--prev{left:0}.pdp-carousel__button--next{right:0}.pdp-carousel__button__icon--prev{transform:rotate(90deg)}.pdp-carousel__button__icon--next{right:0;transform:rotate(-90deg)}.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsColumn .pdp-carousel__button--prev{left:var(--thumbnails-col-width)}.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsRow .pdp-carousel__button--prev,.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsRow .pdp-carousel__button--next{top:calc(var(--height) / 2)}.pdp-carousel__button--thumbnailsColumn{margin:auto;padding:0}.pdp-carousel__button--thumbnailsRow{padding:0}.pdp-carousel__button__icon--thumbnailsColumn--prev{transform:rotate(180deg)}.pdp-carousel__button__icon--thumbnailsRow--prev{transform:rotate(90deg)}.pdp-carousel__button__icon--thumbnailsRow--next{transform:rotate(-90deg)}.pdp-carousel__wrapper{--peak: 0px;scroll-padding:var(--peak);width:var(--total-width);height:var(--height);display:flex;flex-wrap:nowrap;gap:var(--gap);-webkit-overflow-scrolling:touch}.pdp-carousel__wrapper--horizontal{overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory}.pdp-carousel__slide{display:grid;grid-gap:var(--gap);grid-auto-columns:1fr;grid-auto-rows:100%;scroll-snap-align:end;scroll-snap-stop:always;flex-shrink:0}.pdp-carousel__slide--horizontal{grid-auto-flow:column;width:calc(100% - var(--peak))}.pdp-carousel__slide--horizontal.pdp-carousel__slide--orphan{width:calc((100% / var(--per-page) * var(--length)) - var(--peak) / var(--per-page) * var(--length) - var(--gap) / var(--per-page) * (var(--per-page) - var(--length)))}.pdp-carousel__slide>*{vertical-align:middle;max-width:100%;max-height:100%}.pdp-carousel__slide>img{object-fit:contain;width:100%;height:100%}.pdp-carousel__wrapper--peak{--peak: calc(var(--spacing-medium) + var(--gap))}.pdp-carousel__wrapper--scrollbar{--scroll-foreground: var(--color-neutral-600);--scroll-background: var(--color-neutral-400);scrollbar-color:var(--scroll-foreground) var(--scroll-background);scrollbar-width:thin}.pdp-carousel__wrapper:not(.pdp-carousel__wrapper--scrollbar){scrollbar-width:none}.pdp-carousel__wrapper:not(.pdp-carousel__wrapper--scrollbar)::-webkit-scrollbar{display:none}.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar{width:4px;height:4px}.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-thumb{background:var(--scroll-foreground)}.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-track{background:var(--scroll-background)}.pdp-carousel__controls__container--thumbnailsRow{--thumbnails-spacing: var(--spacing-small);--thumbnails-box-width: var(--spacing-xxsmall);--thumbnails-rest: calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));--thumbnails-width: calc((var(--width) - 2 * var(--icon-size) - 4 * var(--thumbnails-spacing) - var(--thumb-peak) - 2 * var(--thumbnails-box-width)) / 4);margin-top:var(--thumbnails-rest);width:var(--width);display:flex}.pdp-carousel__controls__container--thumbnailsColumn{--thumbnails-spacing: var(--spacing-small);--thumbnails-box-width: var(--spacing-xxsmall);--thumbnails-rest: calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));--thumbnails-width: 100%;width:calc(var(--thumbnails-col-width) - var(--thumbnails-rest));margin-right:var(--thumbnails-rest)}.pdp-carousel__controls__container--thumbnailsColumn:not(.pdp-carousel__controls__container--no-arrows){height:calc(max(var(--height),4 * var(--thumbnails-spacing)) - 4 * var(--thumbnails-spacing))}.pdp-carousel__controls__container--thumbnailsColumn.pdp-carousel__controls__container--no-arrows{height:var(--height)}.pdp-carousel__controls__wrapper--thumbnailsColumn{max-height:100%;overflow-y:scroll}.pdp-carousel__controls__wrapper--thumbnailsRow{max-width:100%;overflow-x:scroll}.pdp-carousel__controls--thumbnailsRow>label>span:nth-last-child(1){margin-right:var(--thumbnails-box-width)}.pdp-carousel__controls__wrapper::-webkit-scrollbar{display:none}.pdp-carousel__controls__wrapper{-ms-overflow-style:none;scrollbar-width:none}.pdp-carousel__controls{display:flex;flex-direction:row;gap:var(--spacing-xsmall)}.pdp-carousel__controls--thumbnailsColumn{display:grid;grid-template-columns:repeat(1,1fr);grid-auto-rows:1fr;grid-row-gap:var(--thumbnails-spacing);padding:var(--thumbnails-box-width)}.pdp-carousel__controls--thumbnailsRow{grid-column-gap:var(--thumbnails-spacing);padding:var(--thumbnails-box-width)}.pdp-carousel__controls__button{border-radius:50%;width:10px;height:10px;padding:0;border:none;background:var(--color-neutral-400);cursor:pointer}.pdp-carousel__controls__button:hover{background:var(--color-neutral-500)}.pdp-carousel__controls__button:active,.pdp-carousel__controls__button--active{background:var(--color-neutral-600)}.pdp-carousel__slide--last{width:100%}.pdp-carousel__thumbnail__container input[type=radio]{opacity:0;position:absolute;width:0;height:0}.pdp-carousel__thumbnail__container .pdp-carousel__thumbnail__span{display:inline-block;--bg-color: var(--color-neutral-300);box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-400);position:relative;cursor:pointer;background-color:var(--bg-color);background-image:var(--background-image);background-repeat:no-repeat;background-size:cover;height:100%;width:100%;overflow:hidden}.pdp-carousel__thumbnail__content{width:inherit;position:absolute;top:-9999px;bottom:-9999px;left:-9999px;right:-9999px;margin:auto;overflow:hidden}.pdp-carousel__thumbnail__span:hover{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50),0 0 0 var(--shape-border-width-4) var(--color-neutral-500);outline:none}.pdp-carousel__controls__wrapper--thumbnailsRow .pdp-carousel__thumbnail__container{min-width:100px}.pdp-carousel__thumbnail__container input[type=radio]:not(:checked):active~.pdp-carousel-thumbnail__span{box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);outline:none}.pdp-carousel__thumbnail__container input[type=radio]:checked~.pdp-carousel__thumbnail__span,.pdp-carousel__thumbnail--selected{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50),0 0 0 var(--shape-border-width-4) var(--color-neutral-800)}.pdp-carousel__thumbnail__container input[type=radio]:checked:active~.pdp-carousel__thumbnail__span{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50),0 0 0 var(--shape-border-width-4) var(--color-neutral-600)}.pdp-carousel__thumbnail__container input[type=radio]:focus-visible+.pdp-carousel__thumbnail__span{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900),0 0 0 6px var(--color-neutral-400)}.pdp-carousel__thumbnail__span>img{object-fit:cover;width:100%;height:100%}.pdp-product{display:grid;grid-template-columns:repeat(var(--grid-1-columns),1fr);grid-column-gap:var(--grid-1-gutters);margin:0 var(--grid-1-margins)}.pdp-product__gallery-column{display:none}.pdp-product__content-column{grid-column:1 / span 4;color:var(--color-neutral-800)}.pdp-product__header{display:grid;grid-auto-rows:max-content;margin-bottom:var(--spacing-medium)}.pdp-product__breadcrumbs{grid-column:1 / -1;padding:var(--spacing-medium) 0 var(--spacing-xxbig)}.pdp-product__title{font:var(--type-display-3-font);letter-spacing:var(--type-display-3-letter-spacing);margin:0}.pdp-product__sku{font:var(--type-body-1-default-font);max-width:600px}.pdp-product__prices{display:flex;gap:var(--spacing-xsmall);margin-top:var(--spacing-medium)}.pdp-product__out-of-stock__text{font:var(--type-headline-2-strong-font)}.pdp-product__options{grid-column:1 / span 4}.pdp-product__price,.pdp-product__price-special{font:var(--type-headline-2-strong-font)}.pdp-product__price,.pdp-product__sku,.pdp-product__price-special,.pdp-product__out-of-stock__text{letter-spacing:var(--type-headline-2-strong-letter-spacing)}.pdp-product__price--grey{color:var(--color-neutral-500)}.pdp-product__actions,.pdp-product__actions--out-of-stock{display:grid;grid-auto-flow:row;gap:var(--grid-1-gutters);grid-auto-rows:max-content;margin-bottom:var(--spacing-xxbig);margin-top:var(--spacing-big)}.pdp-product__short_description,.pdp-product__attributes{font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);margin-bottom:var(--spacing-small)}.pdp-product__description,.pdp-product__attributes li{font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.pdp-product__attributes{margin-top:var(--spacing-xsmall)}.pdp-product__short_description p,.pdp-product__description p,.pdp-product__attributes li p{margin:0}.pdp-product__short_description figure,.pdp-product__description figure{margin:0}.pdp-product__short_description img,.pdp-product__description img{max-width:100%}.pdp-product__images--carousel{max-height:60vh}.pdp-product__images--carousel--thumbnails{max-height:90vh}.pdp-product__images__placeholder{background-color:var(--color-neutral-200)}.pdp-product__buttons{display:grid;grid-auto-rows:max-content;grid-gap:var(--grid-1-gutters)}.pdp-product__buttons a{text-align:center}.pdp-product__buttons a:hover{text-decoration:none}.pdp-product__overlay .pdp-overlay__content{width:100%;height:100%}.pdp-product__overlay__carousel{width:100%;height:100%;box-sizing:border-box}.pdp-product__overlay__carousel img{width:100%;height:100%;object-fit:contain}.pdp-carousel__controls__container--thumbnailsRow img,.pdp-carousel__controls__container--thumbnailsColumn img{object-fit:cover}.pdp-product__quantity,.pdp-product__buttons{grid-column:1 / span 4}@media only screen and (min-width: 1024px){.pdp-product__breadcrumbs{grid-column:2 / -2}.pdp-product{grid-template-columns:repeat(var(--grid-3-columns),1fr);grid-column-gap:var(--grid-3-gutters);margin:0 var(--grid-3-margins);position:relative}.pdp-product__column-container{position:relative;display:flex;flex-direction:column}.pdp-product__column-body{position:sticky;bottom:30%;align-self:flex-end}.pdp-product__gallery-column{display:block;grid-column:2 / span 6}.pdp-product__content-column{grid-column:8 / span 4;padding-top:var(--spacing-medium)}.pdp-product__images--carousel{display:none}.pdp-product__header{margin-bottom:var(--spacing-small)}.pdp-product__actions{grid-template-columns:repeat(var(--grid-1-columns),1fr);grid-column-gap:var(--grid-1-gutters);grid-row-gap:var(--spacing-xxbig);margin-top:var(--spacing-xxbig)}.pdp-product__quantity{grid-column:1 / span 2}.pdp-product__actions--out-of-stock{grid-template-columns:repeat(var(--grid-1-columns),1fr);grid-column-gap:var(--grid-1-gutters);grid-row-gap:var(--spacing-xxbig);margin-top:var(--spacing-small)}.pdp-product__buttons{grid-column:1 / span 4}.pdp-product__out-of-stock__text{grid-column:1 / span 2}.pdp-product__gallery-content,.pdp-product__content{grid-column:2 / span 6}}.pdp-gallery-grid{display:grid;grid-gap:var(--gap);grid-template-columns:repeat(1,1fr);grid-auto-rows:max-content}.pdp-gallery-grid__item>*{height:100%;max-width:100%;min-width:100%;vertical-align:middle;width:100%;object-fit:contain}.pdp-gallery-grid__item:only-child{grid-column:1 / span 2}.pdp-gallery-grid__item:first-child:nth-last-child(2){grid-column:1 / span 2;grid-row:1}.pdp-gallery-grid__item:nth-child(2):last-child{grid-column:1 / 3;grid-row:2}@media only screen and (min-width: 1024px){.pdp-gallery-grid{grid-template-columns:repeat(2,1fr)}}.pdp-price-range .dropin-price{letter-spacing:var(--type-headline-2-strong-letter-spacing);font:var(--type-headline-2-strong-font)}.pdp-price-range__label{font:var(--type-headline-2-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);margin-left:5px;margin-right:5px}.pdp-overlay{position:fixed;top:0;left:0;z-index:1000;right:0;bottom:0;background-color:var(--color-neutral-50);display:flex;padding:var(--spacing-medium)}.pdp-overlay--centered{align-items:center;justify-content:center}.pdp-overlay__close-button{position:absolute;top:var(--spacing-medium);right:var(--spacing-medium);z-index:1001}.pdp-swatches{display:grid;grid-auto-flow:row;grid-gap:var(--grid-1-gutters);grid-auto-rows:max-content}.pdp-swatches__field{display:grid;font:var(--type-body-2-strong-font);grid-auto-rows:max-content;gap:var(--spacing-xsmall)}.pdp-swatches__field__label{font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);color:var(--color-neutral-800)}.pdp-swatches__options{display:flex;flex-wrap:wrap;gap:var(--spacing-xsmall)}.pdp-zoom{cursor:zoom-in;overflow:hidden;margin:0;position:relative}.pdp-zoom img{height:100%;max-width:100%;min-width:100%;object-fit:contain;position:relative;transition:transform .2s;transform:var(--transform);vertical-align:middle;width:100%}.pdp-zoom .pdp-zoom__close-button{background-color:var(--color-neutral-50);border-radius:50%;position:absolute;right:var(--spacing-small);top:var(--spacing-small)}.pdp-zoom.pdp-zoom--zoomed{cursor:zoom-out}.pdp-zoom.pdp-zoom--no-effects{cursor:default}@media only screen and (max-width: 768px){.pdp-zoom img{display:block;width:100%;height:100%;transition:transform .2s;transform:var(--transform)}}",{styleId:"PDP"});
import{deepmerge as c,Render as u}from"@dropins/tools/lib.js";import{useState as f,useEffect as m}from"@dropins/tools/preact-hooks.js";import{UIProvider as b}from"@dropins/tools/components.js";import{events as d}from"@dropins/tools/event-bus.js";import{jsx as r}from"@dropins/tools/preact-jsx-runtime.js";import{c as g}from"./chunks/initialize.js";const C={Product:{Incrementer:{label:"Item Quantity"},OutOfStock:{label:"Out of Stock"},AddToCart:{label:"Add to Cart"},Details:{label:"Details"},RegularPrice:{label:"Regular Price"},SpecialPrice:{label:"Special Price"},PriceRange:{From:{label:"From"},To:{label:"to"}},Image:{label:"{product} Image {key} of {total}"}},Swatches:{Required:{label:"Required"}},Carousel:{label:"Carousel",Next:{label:"Next"},Previous:{label:"Previous"},Slide:{label:"Slide"},Controls:{label:"Carousel Controls",Button:{label:"Show slide {key} of {total}"}}},Overlay:{Close:{label:"Close"}},Zoom:{Close:{label:"Close"}}},P={quantityLabel:"Quantity"},p={PDP:C,Custom:P},S={default:p},D=({children:a})=>{var l;const[e,i]=f(),n=(l=g.getConfig())==null?void 0:l.langDefinitions;m(()=>{const o=d.on("locale",t=>{t!==e&&i(t)},{eager:!0});return()=>{o==null||o.off()}},[e]);const s=c(S,n??{});return r(b,{lang:e,langDefinitions:s,children:a})},O=new u(r(D,{}));export{O as render};
>>>>>>> template/main
