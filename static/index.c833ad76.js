import{r as s,A as C,u as y,a as i,F as f,j as e,L as w}from"./index.98be5451.js";import{T as l,l as S}from"./auth.service.6aef7597.js";import{G as t}from"./List.7740c723.js";import{B as c}from"./Button.4cb1f2aa.js";import"./useFormControl.97eb00a9.js";import"./server.e085d24a.js";const F=()=>{const{dispatch:n}=s.exports.useContext(C),[d,g]=s.exports.useState(""),[m,u]=s.exports.useState(""),[p,r]=s.exports.useState(!1),h=y();return i(f,{children:[p&&e(w,{}),e("div",{className:"log-in-container",children:i("form",{onSubmit:async a=>{a.preventDefault(),r(!0);const x={email:d,password:m};try{const{token:o,user:v}=await S(x);n({type:"set-is-loggedin",isLoggedin:!0}),n({type:"set-token",token:o}),n({type:"set-user",user:v}),r(!1)}catch(o){console.log(o),r(!1)}},children:[e("div",{className:"wrapper__logo",children:e("img",{src:"/logo_ar.png",alt:"logo",className:"logo"})}),i(t,{container:!0,spacing:2,children:[e(t,{item:!0,xs:12,children:e(l,{label:"Correo",variant:"standard",type:"Email",onChange:({target:{value:a}})=>{g(a)}})}),e(t,{item:!0,xs:12,children:e(l,{label:"Contrase\xF1a",variant:"standard",type:"Password",onChange:({target:{value:a}})=>{u(a)}})}),e(t,{item:!0,xs:12,children:e(c,{variant:"contained",type:"submit",children:"Iniciar Sesi\xF3n"})}),e(t,{item:!0,xs:12,children:e("p",{children:"\xBFNo tienes una cuenta?"})}),e(t,{item:!0,xs:12,style:{paddingBottom:"1em"},children:e(c,{variant:"outlined",onClick:()=>{h("/sign-up")},children:"Crear una cuenta"})})]})]})})]})};const A=()=>e("div",{className:"container-view-singin",children:e(F,{})});export{A as default};
