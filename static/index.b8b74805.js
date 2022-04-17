import{r as f,a as h,_ as d,j as n,F as _}from"./index.367e871a.js";import{r as A,t as M,v as p,B as k,x as v,_ as y,y as b,c as C,G as O}from"./List.14c6f111.js";import{C as U}from"./Card.f6ebc2ab.js";import{T as x}from"./index.6d4f7c48.js";function I(o){return A("MuiCardActionArea",o)}const B=M("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var g=B;const V=["children","className","focusVisibleClassName"],j=o=>{const{classes:t}=o;return b({root:["root"],focusHighlight:["focusHighlight"]},I,t)},E=p(k,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,t)=>t.root})(({theme:o})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${g.focusHighlight}`]:{opacity:o.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${g.focusVisible} .${g.focusHighlight}`]:{opacity:o.palette.action.focusOpacity}})),F=p("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,t)=>t.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),P=f.exports.forwardRef(function(t,s){const e=v({props:t,name:"MuiCardActionArea"}),{children:r,className:l,focusVisibleClassName:i}=e,a=y(e,V),c=e,m=j(c);return h(E,d({className:C(m.root,l),focusVisibleClassName:C(i,m.focusVisible),ref:s,ownerState:c},a,{children:[r,n(F,{className:m.focusHighlight,ownerState:c})]}))});var T=P;function z(o){return A("MuiCardContent",o)}M("MuiCardContent",["root"]);const G=["className","component"],D=o=>{const{classes:t}=o;return b({root:["root"]},z,t)},L=p("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),W=f.exports.forwardRef(function(t,s){const e=v({props:t,name:"MuiCardContent"}),{className:r,component:l="div"}=e,i=y(e,G),a=d({},e,{component:l}),c=D(a);return n(L,d({as:l,className:C(c.root,r),ownerState:a,ref:s},i))});var R=W;function q(o){return A("MuiCardMedia",o)}M("MuiCardMedia",["root","media","img"]);const J=["children","className","component","image","src","style"],K=o=>{const{classes:t,isMediaComponent:s,isImageComponent:e}=o;return b({root:["root",s&&"media",e&&"img"]},q,t)},Q=p("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o,{isMediaComponent:e,isImageComponent:r}=s;return[t.root,e&&t.media,r&&t.img]}})(({ownerState:o})=>d({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),X=["video","audio","picture","iframe","img"],Y=["picture","img"],Z=f.exports.forwardRef(function(t,s){const e=v({props:t,name:"MuiCardMedia"}),{children:r,className:l,component:i="div",image:a,src:c,style:m}=e,w=y(e,J),u=X.indexOf(i)!==-1,S=!u&&a?d({backgroundImage:`url("${a}")`},m):m,N=d({},e,{component:i,isMediaComponent:u,isImageComponent:Y.indexOf(i)!==-1}),H=K(N);return n(Q,d({className:C(H.root,l),as:i,role:!u&&a?"img":void 0,ref:s,style:S,ownerState:N,src:u?a||c:void 0},w,{children:r}))});var $=Z;const ro=({place:o,handleClick:t,isClicked:s=!0})=>{var e,r;return n(O,{item:!0,xs:6,onClick:()=>t(o),children:n(U,{children:s?h(T,{children:[n($,{component:"img",height:"140",image:(e=o.src)!=null?e:"",alt:`${o.name} image`,loading:"lazy"}),n(R,{children:n(x,{gutterBottom:!0,variant:"h6",component:"div",children:o.name})})]}):h(_,{children:[n($,{component:"img",height:"140",image:(r=o.src)!=null?r:"",alt:`${o.name} image`,loading:"lazy"}),n(R,{children:n(x,{gutterBottom:!0,variant:"h6",component:"div",children:o.name})})]})})})};export{ro as C};
