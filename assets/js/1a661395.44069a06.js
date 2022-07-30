"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[852],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?a.createElement(y,o(o({ref:n},u),{},{components:t})):a.createElement(y,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),r=t(7294),i=t(2389),o=t(9548),l=t(6010),s="tabItem_LplD";function p(e){var n,t,i,p=e.lazy,u=e.block,c=e.defaultValue,m=e.values,d=e.groupId,y=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.lx)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),x=b.tabGroupChoices,N=b.setTabGroupChoices,T=(0,r.useState)(v),k=T[0],w=T[1],E=[],D=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=x[d];null!=O&&O!==k&&g.some((function(e){return e.value===O}))&&w(O)}var P=function(e){var n=e.currentTarget,t=E.indexOf(n),a=g[t].value;a!==k&&(D(n),w(a),null!=d&&N(d,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},y)},g.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":k===n})}),null!=t?t:n)}))),p?(0,r.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}function u(e){var n=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},1706:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(9877),l=t(8215),s=["components"],p={title:"Types Configuration",sidebar_position:4,slug:"/service-class-types-config/"},u=void 0,c={unversionedId:"categories/Services/service-class-types-config",id:"categories/Services/service-class-types-config",title:"Types Configuration",description:"If you'd like N1mbly to be able to generate a detailed OpenAPI documentation, with SwaggerUI that includes Type Definitions, you can define types in a $nimbly property.",source:"@site/docs/categories/06-Services/service-class-types-config.md",sourceDirName:"categories/06-Services",slug:"/service-class-types-config/",permalink:"/nimbly/docs/v1/service-class-types-config/",tags:[],version:"current",lastUpdatedAt:1654282889,formattedLastUpdatedAt:"6/3/2022",sidebarPosition:4,frontMatter:{title:"Types Configuration",sidebar_position:4,slug:"/service-class-types-config/"},sidebar:"sidebar",previous:{title:"Parameter Configuration",permalink:"/nimbly/docs/v1/service-class-params-config/"},next:{title:"Nimble",permalink:"/nimbly/docs/v1/nimble/"}},m=[],d={toc:m};function y(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you'd like ",(0,i.kt)("inlineCode",{parentName:"p"},"N1mbly")," to be able to generate a detailed ",(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," documentation, with ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/"},"SwaggerUI")," that includes ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/data-models/data-types/"},"Type Definitions"),", you can define types in a ",(0,i.kt)("inlineCode",{parentName:"p"},"$nimbly")," property."),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," you can define configuration using ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html"},"TypeScript decorators"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're using decorators, make sure that you've set ",(0,i.kt)("inlineCode",{parentName:"p"},'"experimentalDecorators"')," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file."))),(0,i.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"cjs",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const exampleTypeDefinition = {\n  $typeName: \"Example\",\n  $isArray: false,\n  name: \"string\",\n  age: \"number\"\n};\n\nconst exampleArrayTypeDefinition = {\n  ...exampleTypeDefinition,\n  $isArray: true,\n};\n\nclass ExampleService {\n  $nimbly = {\n    path: '/',\n    getAll: {\n      httpMethod: 'GET',\n      path: '/',\n      params: [\n        { source: 'query', name: \"pageNumber\", type: 'string' },\n        { source: 'query', name: \"pageSize\", type: 'string' },\n      ],\n      result: exampleArrayTypeDefinition\n    },\n    getById: {\n      httpMethod: 'GET',\n      path: '/:id',\n      params: [\n        { source: 'query', name: \"includeDetails\", type: 'boolean' }\n        { source: 'path', name: 'id', type: 'string' },\n      ],\n      result: exampleTypeDefinition\n    },\n    add: {\n      httpMethod: 'POST',\n      path: '/',\n      params: [\n        { source: 'body', name: 'example', type: exampleTypeDefinition }\n      ],\n      result: exampleTypeDefinition\n    },\n    update: {\n      httpMethod: 'PUT',\n      path: '/:id',\n      params: [\n        { source: 'path', name: 'id', type: 'string' },\n        { source: 'body', name: 'example', type: exampleTypeDefinition }\n      ],\n      result: exampleTypeDefinition\n    },\n    delete: {\n      httpMethod: 'DELETE',\n      path: '/:id',\n      params: [\n        { source: 'path', name: 'id', type: 'string' },\n      ],\n      result: exampleTypeDefinition\n    },\n  }\n  \n  async getAll(pageNumber, pageSize) {\n    return [];\n  }\n  async getById(includeDetails, id) {\n    return [];\n  }\n  async add(example) {\n    return example;\n  }\n  async update(id, example) {\n    return example;\n  }\n  async delete(id) {\n    return { id };\n  }\n}\n"))),(0,i.kt)(l.Z,{value:"mjs",label:"ES modules",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const exampleTypeDefinition = {\n  $typeName: \"Example\",\n  $isArray: false,\n  name: \"string\",\n  age: \"number\"\n};\n\nconst exampleArrayTypeDefinition = {\n  ...exampleTypeDefinition,\n  $isArray: true,\n};\n\nclass ExampleService {\n  $nimbly = {\n    path: '/',\n    getAll: {\n      httpMethod: 'GET',\n      path: '/',\n      params: [\n        { source: 'query', name: \"pageNumber\", type: 'string' },\n        { source: 'query', name: \"pageSize\", type: 'string' },\n      ],\n      result: exampleArrayTypeDefinition\n    },\n    getById: {\n      httpMethod: 'GET',\n      path: '/:id',\n      params: [\n        { source: 'query', name: \"includeDetails\", type: 'boolean' }\n        { source: 'path', name: 'id', type: 'string' },\n      ],\n      result: exampleTypeDefinition\n    },\n    add: {\n      httpMethod: 'POST',\n      path: '/',\n      params: [\n        { source: 'body', name: 'example', type: exampleTypeDefinition }\n      ],\n      result: exampleTypeDefinition\n    },\n    update: {\n      httpMethod: 'PUT',\n      path: '/:id',\n      params: [\n        { source: 'path', name: 'id', type: 'string' },\n        { source: 'body', name: 'example', type: exampleTypeDefinition }\n      ],\n      result: exampleTypeDefinition\n    },\n    delete: {\n      httpMethod: 'DELETE',\n      path: '/:id',\n      params: [\n        { source: 'path', name: 'id', type: 'string' },\n      ],\n      result: exampleTypeDefinition\n    },\n  }\n  \n  async getAll(pageNumber, pageSize) {\n    return [];\n  }\n  async getById(includeDetails, id) {\n    return [];\n  }\n  async add(example) {\n    return example;\n  }\n  async update(id, example) {\n    return example;\n  }\n  async delete(id) {\n    return { id };\n  }\n}\n"))),(0,i.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get, Post, Put, Delete, Query, Path, Body, string, number, boolean, type, Returns, ReturnsArrayOf } from \"nimbly-client\"; // or nimbly-api\n\nclass Example {\n  @string name: string;\n  @number age: number;\n}\n\n@Controller('/')\nclass ExampleService {\n  @Get()\n  @ReturnsArrayOf(Example)\n  async getAll(@Query('pageNumber') @number pageNumber: number, @Query('pageSize') @number pageSize: number): Promise<Example[]> {\n    return [];\n  }\n  @Get('/:id')\n  @Returns(Example)\n  async getById(@Query('includeDetails') @boolean includeDetails: boolean, @Path('id') @string id: string): Promise<Example> {\n    return {};\n  }\n  @Post()\n  @Returns(Example)\n  async add(@Body() @type(Example) example: Example): Promise<Example> {\n    return example;\n  }\n  @Put('/:id')\n  @Returns(Example)\n  async update(@Path('id') @string id: string, @Body() @type(Example) example: Example): Promise<Example> {\n    return example;\n  }\n  @Delete('/:id')\n  @Returns(Example)\n  async delete(@Path('id') @string id: string): Promise<Example> {\n    return { id };\n  }\n}\n")))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Types configuration is used at the server side, since it is used for telling ",(0,i.kt)("inlineCode",{parentName:"p"},"Nimbly")," how to set up a detailed ",(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," documentation, with ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/"},"SwaggerUI")," that includes ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/data-models/data-types/"},"Type Definitions"),"."))))}y.isMDXComponent=!0}}]);