var S=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var E=(r,e)=>{var t={};for(var i in r)L.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&S)for(var i of S(r))e.indexOf(i)<0&&O.call(r,i)&&(t[i]=r[i]);return t};import{r as c,j as n,F as y,d as A,f as R,L as $,a as v}from"./index.94c1af32.js";import{A as U,B as j,T as C,C as w}from"./index.40aad81b.js";import{G as b}from"./List.dcd2bc3b.js";import{C as M}from"./Card.0579ca14.js";var D=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var i,s,o;if(Array.isArray(e)){if(i=e.length,i!=t.length)return!1;for(s=i;s--!==0;)if(!r(e[s],t[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),i=o.length,i!==Object.keys(t).length)return!1;for(s=i;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[s]))return!1;for(s=i;s--!==0;){var l=o[s];if(!r(e[l],t[l]))return!1}return!0}return e!==e&&t!==t};const x="__googleMapsScriptId";var g;(function(r){r[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE"})(g||(g={}));class d{constructor({apiKey:e,authReferrerPolicy:t,channel:i,client:s,id:o=x,language:l,libraries:m=[],mapIds:u,nonce:h,region:a,retries:f=3,url:I="https://maps.googleapis.com/maps/api/js",version:k}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=i,this.client=s,this.id=o||x,this.language=l,this.libraries=m,this.mapIds=u,this.nonce=h,this.region=a,this.retries=f,this.url=I,this.version=k,d.instance){if(!D(this.options,d.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(d.instance.options)}`);return d.instance}d.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?g.FAILURE:this.done?g.SUCCESS:this.loading?g.LOADING:g.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(i=>{i?t(i.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id)){this.callback();return}const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}var p;(function(r){r.LOADING="LOADING",r.FAILURE="FAILURE",r.SUCCESS="SUCCESS"})(p||(p={}));const G=s=>{var o=s,{children:r,render:e,callback:t}=o,i=E(o,["children","render","callback"]);const[l,m]=c.exports.useState(p.LOADING);return c.exports.useEffect(()=>{const u=new d(i),h=a=>{t&&t(a,u),m(a)};h(p.LOADING),u.load().then(()=>h(p.SUCCESS),()=>h(p.FAILURE))},[]),l===p.SUCCESS&&r?n(y,{children:r}):e?e(l):n(y,{})};function T({center:r,zoom:e,children:t}){const i=c.exports.createRef(),[s,o]=c.exports.useState(null);return c.exports.useEffect(()=>{o(new window.google.maps.Map(i.current,{center:r,zoom:e,mapTypeId:window.google.maps.MapTypeId.ROADMAP})),s&&(s.setCenter(r),s.setZoom(e))},[r]),n(y,{children:n(b,{container:!0,justifyContent:"center",alignItems:"flex-end",children:n(b,{item:!0,xs:11,children:n(M,{children:n("div",{ref:i,id:"map",children:A.Children.map(t,l=>A.cloneElement(l,{map:s}))})})})})})}function F({cords:r,index:e,map:t}){const[i,s]=c.exports.useState(null);return c.exports.useEffect(()=>{s(new window.google.maps.Marker({cords:r}))},[]),i&&(i.setMap(t),i.setLabel(`${e}`),i.setPosition(r)),null}function _(){const[r,e]=c.exports.useState(!0),i=R().state.routes,[s,o]=c.exports.useState({}),[l,m]=c.exports.useState(null);c.exports.useEffect(()=>{navigator.geolocation.getCurrentPosition(a=>{m({lat:a.coords.latitude,lng:a.coords.longitude})}),o(i[0].city),e(!1)},[]);const u=10,h="AIzaSyDpQzd3wGYygGGZui7dSZeHT-6FfmcV0UY";return r?n($,{}):v(y,{children:[n(U,{component:"map"}),n(j,{style:{paddingTop:"1em",paddingLeft:"1em"},children:n(C,{gutterBottom:!0,variant:"h4",component:"div",children:s.name})}),v(w,{maxWidth:"sm",style:{paddingTop:"1em"},children:[n(C,{children:"Las siguientes ubicaciones te pueden interesar:"}),n(w,{maxWidth:"sm",style:{paddingTop:"1em",paddingBottom:"1em"},children:i.map((a,f)=>n("div",{children:n(C,{children:n("label",{children:`${f+1}.- ${a.name}`})})},`item${a.id}`))}),n(G,{apiKey:h,children:n(T,{center:l,zoom:u,children:l&&i.map((a,f)=>{const I={lat:+a.latitude,lng:+a.longitude};return n(F,{cords:I,index:f+1},`item${f}`)})})})]})]})}export{_ as default};
