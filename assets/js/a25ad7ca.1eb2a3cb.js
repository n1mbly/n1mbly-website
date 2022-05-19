"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[103],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7462),a=t(7294),l=t(2389),i=t(9548),s=t(6010),o="tabItem_LplD";function c(e){var n,t,l,c=e.lazy,u=e.block,m=e.defaultValue,p=e.values,d=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.lx)(f,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=v[0])?void 0:l.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),h=N.tabGroupChoices,A=N.setTabGroupChoices,k=(0,a.useState)(g),w=k[0],S=k[1],T=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var U=h[d];null!=U&&U!==w&&f.some((function(e){return e.value===U}))&&S(U)}var O=function(e){var n=e.currentTarget,t=T.indexOf(n),r=f[t].value;r!==w&&(P(n),S(r),null!=d&&A(d,r))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},b)},f.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:O,onClick:O},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function u(e){var n=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},8376:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=t(9877),s=t(8215),o=["components"],c={title:"NimblyApi",sidebar_position:8,slug:"/nimbly-api/"},u=void 0,m={unversionedId:"categories/nimbly-api",id:"categories/nimbly-api",title:"NimblyApi",description:"What NimblyApi is",source:"@site/docs/categories/nimbly-api.md",sourceDirName:"categories",slug:"/nimbly-api/",permalink:"/nimbly/docs/v1/nimbly-api/",tags:[],version:"current",lastUpdatedAt:1652986449,formattedLastUpdatedAt:"5/19/2022",sidebarPosition:8,frontMatter:{title:"NimblyApi",sidebar_position:8,slug:"/nimbly-api/"},sidebar:"sidebar",previous:{title:"Nimble",permalink:"/nimbly/docs/v1/nimble/"}},p=[{value:"What NimblyApi is",id:"what-nimblyapi-is",children:[],level:2},{value:"Creating an API",id:"creating-an-api",children:[{value:"From Plain Local Services",id:"from-plain-local-services",children:[],level:3},{value:"From Plain Remote Services",id:"from-plain-remote-services",children:[],level:3},{value:"From Configured Local Services",id:"from-configured-local-services",children:[],level:3}],level:2}],d={toc:p};function b(e){var n=e.components,c=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what-nimblyapi-is"},"What NimblyApi is"),(0,l.kt)("p",null,"NimblyApi is responsible for automatically creating a ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RestAPI")," from a set of ",(0,l.kt)("a",{parentName:"p",href:"/nimbly/docs/v1/nimble/"},"Nimbles"),"."),(0,l.kt)("p",null,"It is also responsible for automatically building ",(0,l.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," documentation, and serving ",(0,l.kt)("a",{parentName:"p",href:"https://swagger.io/"},"SwaggerUI")," on route ",(0,l.kt)("inlineCode",{parentName:"p"},"/explorer"),"."),(0,l.kt)("h2",{id:"creating-an-api"},"Creating an API"),(0,l.kt)("h3",{id:"from-plain-local-services"},"From Plain Local Services"),(0,l.kt)(i.Z,{groupId:"lang",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"cjs",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { Nimble, NimblyApi } = require('nimbly-api');\n\nclass UserService {\n  async createUser(user) {\n    return user;\n  }\n}\n\nclass AccountService {\n  async getAllAccounts() {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .ofLocal(UserService)\n  .andLocal(AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,l.kt)(s.Z,{value:"js",label:"ES modules",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  async createUser(user) {\n    return user;\n  }\n}\n\nclass AccountService {\n  async getAllAccounts() {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .ofLocal(UserService)\n  .andLocal(AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,l.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  async createUser(user): Promise<any> {\n    return user;\n  }\n}\n\nclass AccountService {\n  async getAllAccounts(): Promise<any[]> {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .ofLocal(UserService)\n  .andLocal(AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:t(863).Z,width:"1458",height:"477"})),(0,l.kt)("h3",{id:"from-plain-remote-services"},"From Plain Remote Services"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"An API can also be generated from a set of remote services, so that the API acts as an ",(0,l.kt)("a",{parentName:"p",href:"https://www.nginx.com/learn/api-gateway/"},"API Gateway"),"."))),(0,l.kt)(i.Z,{groupId:"lang",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"cjs",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { Nimble, NimblyApi } = require('nimbly-api');\n\nclass UserService {\n  async createUser(user) {}\n}\n\nclass AccountService {\n  async getAllAccounts() {}\n}\n\nconst usersNimble = new Nimble()\n  .ofRemote(UserService, 'http://localhost:3000')\n  .andRemote(AccountService, 'http://localhost:3000');\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,l.kt)(s.Z,{value:"js",label:"ES modules",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  async createUser(user) {}\n}\n\nclass AccountService {\n  async getAllAccounts() {}\n}\n\nconst usersNimble = new Nimble()\n  .ofRemote(UserService, 'http://localhost:3000')\n  .andRemote(AccountService, 'http://localhost:3000');\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,l.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  async createUser(user): Promise<any> {}\n}\n\nclass AccountService {\n  async getAllAccounts(): Promise<any[]> {}\n}\n\nconst usersNimble = new Nimble()\n  .ofRemote(UserService, 'http://localhost:3000')\n  .andRemote(AccountService, 'http://localhost:3000');\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:t(863).Z,width:"1458",height:"477"})),(0,l.kt)("h3",{id:"from-configured-local-services"},"From Configured Local Services"),(0,l.kt)(i.Z,{groupId:"lang",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"cjs",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { Nimble, NimblyApi } = require('nimbly-api');\n\nclass UserService {\n  $nimbly = {\n    rootPath: '/users',\n    createUser: {\n      method: 'POST',\n      path: '/',\n      body: true\n    }\n  }\n  async createUser(user) {\n    return user;\n  }\n}\n\nclass AccountService {\n    $nimbly = {\n    rootPath: '/accounts',\n    getAllAccounts: {\n      method: 'GET',\n      path: '/'\n    }\n  }\n  async getAllAccounts() {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .ofLocal(UserService)\n  .andLocal(AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,l.kt)(s.Z,{value:"js",label:"ES modules",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  $nimbly = {\n    rootPath: '/users',\n    createUser: {\n      method: 'POST',\n      path: '/',\n      body: true\n    }\n  }\n  async createUser(user) {\n    return user;\n  }\n}\n\nclass AccountService {\n    $nimbly = {\n    rootPath: '/accounts',\n    getAllAccounts: {\n      method: 'GET',\n      path: '/'\n    }\n  }\n  async getAllAccounts() {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .ofLocal(UserService)\n  .andLocal(AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,l.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nimble, NimblyApi, Service, Get, Post } from 'nimbly-api';\n\n@Service('/users')\nclass UserService {\n  @Post()\n  async createUser(user): Promise<any> {\n    return user;\n  }\n}\n\n@Service('/accounts')\nclass AccountService {\n  @Get()\n  async getAllAccounts(): Promise<any[]> {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .ofLocal(UserService)\n  .andLocal(AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:t(5435).Z,width:"1459",height:"464"})))}b.isMDXComponent=!0},5435:function(e,n,t){n.Z=t.p+"assets/images/configured_local-aaae8797fd23340564cedf2d76b49c2d.png"},863:function(e,n,t){n.Z=t.p+"assets/images/plain_local-d6e32634cad58cdcf6de40c1c418db9b.png"}}]);