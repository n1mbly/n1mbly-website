"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[287],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),a=n(7294),l=n(2389),i=n(9548),o=n(6010),u="tabItem_LplD";function c(e){var t,n,l,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),k=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(y),O=w[0],C=w[1],E=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=k[m];null!=j&&j!==O&&h.some((function(e){return e.value===j}))&&C(j)}var x=function(e){var t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==O&&(T(t),C(r),null!=m&&N(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},4170:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=(n(9877),n(8215),["components"]),o={title:"CLI Usage",sidebar_label:"Usage",sidebar_position:2,slug:"/cli-usage/"},u=void 0,c={unversionedId:"categories/CLI/cli-usage",id:"categories/CLI/cli-usage",title:"CLI Usage",description:"Prerequisites",source:"@site/docs/categories/05-CLI/cli-usage.md",sourceDirName:"categories/05-CLI",slug:"/cli-usage/",permalink:"/nimbly/docs/v1/cli-usage/",tags:[],version:"current",lastUpdatedAt:1652986449,formattedLastUpdatedAt:"5/19/2022",sidebarPosition:2,frontMatter:{title:"CLI Usage",sidebar_label:"Usage",sidebar_position:2,slug:"/cli-usage/"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/nimbly/docs/v1/cli-installation/"},next:{title:"Service class",permalink:"/nimbly/docs/v1/service-class/"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Syntax",id:"syntax",children:[],level:2},{value:"Generating the Client",id:"generating-the-client",children:[{value:"TypeScript",id:"typescript",children:[],level:3},{value:"JavaScript",id:"javascript",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"You need to have ",(0,l.kt)("a",{parentName:"p",href:"/nimbly/docs/v1/cli-installation/"},"installed")," the ",(0,l.kt)("inlineCode",{parentName:"p"},"nimbly-cli")," library in your project."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"The syntax for generating the client code is simple, you need to run the ",(0,l.kt)("inlineCode",{parentName:"p"},"nimbly -l <language> -h <host> -o <output_dir>")," library and pass the following arguments:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"nimbly")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h")," - for help"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-l")," - language"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ts")," - generates the TypeScript client."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"js")," - generates the JavaScript client."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h")," - the url of the Nimbly deployment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-o")," - the path of the directory (existing or new) in which the client files will be stored.")),(0,l.kt)("h2",{id:"generating-the-client"},"Generating the Client"),(0,l.kt)("h3",{id:"typescript"},"TypeScript"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"nimbly -l ts -h http://localhost:3000 -o ./path/to/output/dir/\n")),(0,l.kt)("h3",{id:"javascript"},"JavaScript"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"nimbly -l js -h http://localhost:3000 -o ./path/to/output/dir/\n")))}d.isMDXComponent=!0}}]);