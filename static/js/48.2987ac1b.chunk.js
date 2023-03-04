"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[48],{3048:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,o,i,c,s,a,u,l,d,m=t(168),f=t(3081),h=f.Z.div(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),x=f.Z.h1(o||(o=(0,m.Z)(["\n  font-size: ",";\n  color: ",";\n  display: flex;\n  margin: "," ",";\n  align-items: center;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.mainColorText}),(function(n){return n.theme.space.m}),(function(n){return n.theme.space.xs})),p=f.Z.h2(i||(i=(0,m.Z)(["\n  font-size: ",";\n  color: ",";\n  display: flex;\n  margin: "," ",";\n  align-items: center;\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.colors.mainColorText}),(function(n){return n.theme.space.m}),(function(n){return n.theme.space.xs})),g=f.Z.p(c||(c=(0,m.Z)(["\n  font-size: ",";\n  color: ",";\n  font-weight: ",";\n  text-shadow: "," 1px 0 10px;\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.secondColor}),(function(n){return n.theme.fontWeights.b}),(function(n){return n.theme.mainColorText})),b=t(9439),Z=t(2791),j=t(9434),v=t(3634),C=t(1775),w=t(8174),y=(t(5462),t(9133)),z=t(3329);function k(){var n=(0,Z.useState)(""),e=(0,b.Z)(n,2),t=e[0],r=e[1],o=(0,Z.useState)(""),i=(0,b.Z)(o,2),c=i[0],s=i[1],a=(0,j.I0)(),u=(0,j.v9)(C.Af),l=function(n){var e=n.currentTarget,t=e.name,o=e.value;"name"!==t?"number"!==t||s(o):r(o)};return(0,z.jsxs)(y.Es,{onSubmit:function(n){n.preventDefault(),u.some((function(n){return n.name.toLowerCase()===t.toLowerCase()||n.number===c}))?w.Am.warn("".concat(t," is already in contacts!")):(w.Am.success("\u0421ontact ".concat(t," has been successfully added \ud83d\udc96")),a((0,v.uK)({name:t,number:c})),r(""),s(""))},autoComplete:"off",children:[(0,z.jsxs)(y.lX,{children:["Name:",(0,z.jsx)(y.yt,{type:"text",name:"name",placeholder:"Rosie Simpson",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:t,onChange:l,required:!0})]}),(0,z.jsxs)(y.lX,{children:["Number:",(0,z.jsx)(y.yt,{type:"tel",name:"number",placeholder:"459-12-56",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:c,onChange:l,required:!0})]}),(0,z.jsx)(y.OL,{type:"submit",children:(0,z.jsx)(y.o0,{children:"add contact"})})]})}var A,S,W,I=f.Z.ul(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  padding-left: ",";\n"])),(function(n){return n.theme.space.xs})),T=f.Z.li(a||(a=(0,m.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: ",";\n    padding: ",";\n    border: "," solid ",";\n    border-radius: ",";\n    background-color: ",";\n\n   &:not(:last-child) {\n    margin-bottom:  ",";\n"])),(function(n){return n.theme.sizes.l}),(function(n){return n.theme.space.m}),(function(n){return n.theme.borderWidths.w}),(function(n){return n.theme.colors.secondColor}),(function(n){return n.theme.radii.radius}),(function(n){return n.theme.colors.bgColorMain}),(function(n){return n.theme.space.m})),D=f.Z.span(u||(u=(0,m.Z)(["\n  font-weight: ",";\n"])),(function(n){return n.theme.fontWeights.m})),F=f.Z.span(l||(l=(0,m.Z)(["\n  margin-left: auto;\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.s}),(function(n){return n.theme.colors.secondColor})),M=f.Z.button(d||(d=(0,m.Z)(["\n  margin-left: auto;\n  border: "," solid\n    ",";\n  border-radius: ",";\n  /* background-color: ","; */\n\n  &:hover,\n  &:focus {\n    /* background-color: ","; */\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.borderWidths.w}),(function(n){return n.theme.colors.bgColorMain}),(function(n){return n.theme.radii.radius}),(function(n){return n.theme.colors.secondColor}),(function(n){return n.theme.colors.bgColorMain}),(function(n){return n.theme.colors.secondColor})),N=function(){var n=(0,j.I0)(),e=(0,j.v9)(C.xU),t=(0,j.v9)(C.DI),r=function(e){n((0,v.GK)(e))};return(0,z.jsx)(I,{children:t.map((function(n){var t=n.name,o=n.id,i=n.number;return(0,z.jsxs)(T,{children:[(0,z.jsxs)(D,{children:[t," "]}),(0,z.jsx)(F,{children:i}),e?(0,z.jsx)(M,{onClick:function(){return r(o)},"aria-label":"delete contact",disabled:!0,children:"Delete"}):(0,z.jsx)(M,{onClick:function(){return r(o)},"aria-label":"delete contact",children:"Delete"})]},o)}))})},_=t(1538),E=f.Z.div(A||(A=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),L=f.Z.p(S||(S=(0,m.Z)(["\n  margin-top: ",";\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.space.xs}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.m}),(function(n){return n.theme.colors.mainColorText})),q=f.Z.input(W||(W=(0,m.Z)(["\n  padding: ",";\n  border: "," solid\n    ",";\n  border-radius: ",";\n  outline: none;\n"])),(function(n){return n.theme.space.s}),(function(n){return n.theme.borderWidths.w}),(function(n){return n.theme.colors.secondColor}),(function(n){return n.theme.radii.radius})),K=function(){var n=(0,j.v9)(C.AD),e=(0,j.I0)();return(0,z.jsxs)(E,{children:[(0,z.jsx)(L,{children:"Find contacts by name"}),(0,z.jsx)(q,{name:"filter",value:n,onChange:function(n){return e((0,_.T)(n.target.value))}})]})},O=t(9649),P=t(5216),U=t(1413),X=t(7689);var B=function(n,e){return function(t){var r=(0,j.v9)(P.Qb),o=(0,j.v9)(P.c0);return r&&!o?(0,z.jsx)(n,(0,U.Z)({},t)):(0,z.jsx)(X.Fg,{to:e})}}((function(){var n=(0,j.v9)(C.Af),e=(0,j.v9)(C.xU),t=(0,j.v9)(C.zh),r=(0,j.I0)(),o=(0,j.v9)(P.zr);return(0,Z.useEffect)((function(){null!==o&&r((0,v.yF)())}),[r,o]),(0,Z.useEffect)((function(){t&&w.Am.error("Something went wrong!!!!")}),[t]),(0,z.jsxs)(h,{children:[(0,z.jsx)(x,{children:"Phonebook"}),(0,z.jsx)(k,{}),(0,z.jsx)(p,{children:"Contacts"}),0===n.length?(0,z.jsx)(g,{children:"No contacts"}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(K,{}),(0,z.jsx)(N,{})]}),e&&(0,z.jsx)(O.a,{}),(0,z.jsx)(w.Ix,{position:"top-center",autoClose:5e3,closeOnClick:!0,theme:"colored"})]})}),"/")}}]);
//# sourceMappingURL=48.2987ac1b.chunk.js.map