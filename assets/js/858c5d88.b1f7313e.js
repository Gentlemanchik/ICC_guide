"use strict";(self.webpackChunkicc_guide=self.webpackChunkicc_guide||[]).push([[199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),i=r(6010),c=r(2802),a=r(9960),o=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s.cardContainer)},r)}function d(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:a},a))}function p(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},8330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),c=r(2991);const a={title:"\u0417\u0430\u043b\u044b \u041b\u0435\u0434\u043e\u043a\u0440\u044b\u043b\u044b\u0445",description:"\u041a\u0430\u0440\u0442\u0430 \u0438 \u0431\u043e\u0441\u0441\u044b \u0434\u0440\u0430\u043a\u043e\u043d\u044c\u0435\u0433\u043e \u043a\u0440\u044b\u043b\u0430."},o="\u0417\u0430\u043b\u044b \u041b\u0435\u0434\u043e\u043a\u0440\u044b\u043b\u044b\u0445",l={unversionedId:"frostwing_halls/index",id:"frostwing_halls/index",title:"\u0417\u0430\u043b\u044b \u041b\u0435\u0434\u043e\u043a\u0440\u044b\u043b\u044b\u0445",description:"\u041a\u0430\u0440\u0442\u0430 \u0438 \u0431\u043e\u0441\u0441\u044b \u0434\u0440\u0430\u043a\u043e\u043d\u044c\u0435\u0433\u043e \u043a\u0440\u044b\u043b\u0430.",source:"@site/docs/frostwing_halls/index.md",sourceDirName:"frostwing_halls",slug:"/frostwing_halls/",permalink:"/ICC_guide/frostwing_halls/",draft:!1,editUrl:"https://github.com/Gentlemanchik/ICC_guide/tree/source/docs/frostwing_halls/index.md",tags:[],version:"current",frontMatter:{title:"\u0417\u0430\u043b\u044b \u041b\u0435\u0434\u043e\u043a\u0440\u044b\u043b\u044b\u0445",description:"\u041a\u0430\u0440\u0442\u0430 \u0438 \u0431\u043e\u0441\u0441\u044b \u0434\u0440\u0430\u043a\u043e\u043d\u044c\u0435\u0433\u043e \u043a\u0440\u044b\u043b\u0430."},sidebar:"ICC_Guide",previous:{title:"\u041a\u0440\u043e\u0432\u0430\u0432\u0430\u044f \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u0430 \u041b\u0430\u043d\u0430'\u0442\u0435\u043b\u044c",permalink:"/ICC_guide/crimson_hall/lanathel"},next:{title:"\u0412\u0430\u043b\u0438\u0442\u0440\u0438\u044f \u0421\u043d\u043e\u0445\u043e\u0434\u0438\u0446\u0430",permalink:"/ICC_guide/frostwing_halls/valithria"}},s={},u=[],d={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0437\u0430\u043b\u044b-\u043b\u0435\u0434\u043e\u043a\u0440\u044b\u043b\u044b\u0445"},"\u0417\u0430\u043b\u044b \u041b\u0435\u0434\u043e\u043a\u0440\u044b\u043b\u044b\u0445"),(0,i.kt)("p",null,"\u0417\u0430\u043b\u044b \u041b\u0435\u0434\u043e\u043a\u0440\u044b\u043b\u044b\u0445 - \u043f\u0440\u0430\u0432\u043e\u0435 \u043a\u0440\u044b\u043b\u043e \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u044d\u0442\u0430\u0436\u0430 \u0426\u0438\u0442\u0430\u0434\u0435\u043b\u0438 \u041b\u0435\u0434\u044f\u043d\u043e\u0439 \u041a\u043e\u0440\u043e\u043d\u044b"),(0,i.kt)("h1",{id:"\u043a\u0430\u0440\u0442\u0430"},"\u041a\u0430\u0440\u0442\u0430"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u041a\u0430\u0440\u0442\u0430 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u044f\u0440\u0443\u0441\u0430",src:r(9002).Z,width:"1000",height:"667"})),(0,i.kt)("h1",{id:"\u0431\u043e\u0441\u0441\u044b"},"\u0411\u043e\u0441\u0441\u044b"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},9002:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Lower_Spire-ac07d04b68e6ecf8cf40dbb2cd49121b.png"}}]);