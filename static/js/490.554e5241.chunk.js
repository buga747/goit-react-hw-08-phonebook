(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[490],{3309:function(n,e,r){"use strict";r.d(e,{Dr:function(){return d},II:function(){return m},__:function(){return p},l0:function(){return l},zx:function(){return f}});var o,t,a,i,s,c=r(168),u=r(7691),l=u.ZP.form(o||(o=(0,c.Z)(["\n  background-color: ",";\n  color: ",";\n  padding: 10px;\n  border-radius: 10px;\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 0 auto;\n  box-shadow: 0px 0px 19px 0px rgba(69, 162, 158, 1);\n  border-radius: 10px;\n"])),(function(n){return n.theme.colors.backgroundColors}),(function(n){return n.theme.colors.colorText})),p=u.ZP.label(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  &:first-child {\n    margin-right: 10px;\n  }\n"]))),d=u.ZP.span(a||(a=(0,c.Z)(["\n  margin-bottom: 2px;\n"]))),m=u.ZP.input(i||(i=(0,c.Z)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  padding: 5px;\n  font-weight: 700;\n\n  &:active,\n  &:focus {\n    background-color: ",";\n    outline: transparent;\n  }\n"])),(function(n){return n.theme.colors.colorElement}),(function(n){return n.theme.colors.btn\u0421olorText}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white})),f=u.ZP.button(s||(s=(0,c.Z)(["\n  display: block;\n  min-width: 130px;\n  height: 35px;\n  margin-left: 20px;\n  color: ",";\n  background-color: ",";\n  border-radius: 20px;\n  padding: 7px 10px;\n  border: 0;\n  font-size: 18px;\n  transition: box-shadow 250ms ease, transform 250ms ease;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.btn\u0421olorText}),(function(n){return n.theme.colors.colorElement}),(function(n){return n.theme.boxShadow}))},4557:function(n,e,r){"use strict";r.d(e,{l:function(){return w}});var o,t,a,i,s,c=r(9439),u=r(2791),l=r(168),p=r(7691),d=p.ZP.form(o||(o=(0,l.Z)(["\n  background-color: ",";\n  color: ",";\n  width: 320px;\n  padding: 20px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  box-shadow: ",";\n  border-radius: 10px;\n"])),(function(n){return n.theme.colors.backgroundColors}),(function(n){return n.theme.colors.colorText}),(function(n){return n.theme.sectionShadow})),m=p.ZP.label(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),f=p.ZP.span(a||(a=(0,l.Z)(["\n  margin-bottom: 3px;\n"]))),h=p.ZP.input(i||(i=(0,l.Z)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  padding: 5px;\n  font-weight: 700;\n  &:active,\n  &:focus {\n    background-color: 'white';\n    outline: transparent;\n  }\n"])),(function(n){return n.theme.colors.colorElement}),(function(n){return n.theme.colors.btn\u0421olorText}),(function(n){return n.theme.colors.white})),x=p.ZP.button(s||(s=(0,l.Z)(["\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  color: ",";\n  background-color: ",";\n  border-radius: 20px;\n  padding: 7px 10px;\n  border: 0;\n  font-size: 18px;\n  transition: box-shadow 250ms ease, transform 250ms ease;\n  &:hover {\n    transform: scale(1.1);\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.colors.btn\u0421olorText}),(function(n){return n.theme.colors.colorElement}),(function(n){return n.theme.sectionShadow})),b=r(1076),g=r(184),w=function(n){var e=n.onSubmit,r=n.onType,o=(0,u.useState)(""),t=(0,c.Z)(o,2),a=t[0],i=t[1],s=(0,u.useState)(""),l=(0,c.Z)(s,2),p=l[0],w=l[1],y=(0,u.useState)(""),Z=(0,c.Z)(y,2),v=Z[0],k=Z[1];return(0,g.jsxs)(d,{onSubmit:function(n){n.preventDefault(),e({name:a,email:p,password:v}),i(""),w(""),k("")},children:[r.name&&(0,g.jsxs)(m,{children:[(0,g.jsx)(f,{children:"Name"}),(0,g.jsx)(b.k,{value:a,onChange:function(n){i(n.currentTarget.value)},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),r.email&&(0,g.jsxs)(m,{children:[(0,g.jsx)(f,{children:"Email"}),(0,g.jsx)(h,{value:p,onChange:function(n){w(n.currentTarget.value)},type:"email",name:"email",required:!0})]}),r.password&&(0,g.jsxs)(m,{children:[(0,g.jsx)(f,{children:"Password"}),(0,g.jsx)(h,{value:v,onChange:function(n){k(n.currentTarget.value)},type:"password",name:"password",minLength:"7",title:"The password must be more than 7 characters.",required:!0})]}),(0,g.jsx)(x,{type:"submit",children:"Register"})]})}},1076:function(n,e,r){"use strict";r.d(e,{k:function(){return c}});var o=r(1413),t=r(2007),a=r.n(t),i=r(3309),s=r(184),c=function(n){return(0,s.jsx)(i.II,(0,o.Z)({},n))};c.protoType={props:a().object.isRequired}},3490:function(n,e,r){"use strict";r.r(e);var o=r(9434),t=r(9273),a=r(4557),i=r(3982),s=r(4816),c=r(184);e.default=function(){var n=(0,o.I0)(),e=(0,i.a)().isLoading;return(0,c.jsxs)(c.Fragment,{children:[e&&(0,c.jsx)(s.x,{}),(0,c.jsx)("div",{style:{padding:30},children:(0,c.jsx)(a.l,{onSubmit:function(e){var r=e.email,o=e.password;n((0,t.Ib)({email:r,password:o}))},onType:{name:!1,email:!0,password:!0}})})]})}},888:function(n,e,r){"use strict";var o=r(9047);function t(){}function a(){}a.resetWarningCache=t,n.exports=function(){function n(n,e,r,t,a,i){if(i!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var r={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:t};return r.PropTypes=r,r}},2007:function(n,e,r){n.exports=r(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=490.554e5241.chunk.js.map