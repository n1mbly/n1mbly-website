"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[8721],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,d=u["".concat(l,".").concat(k)]||u[k]||p[k]||a;return n?o.createElement(d,i(i({ref:t},h),{},{components:n})):o.createElement(d,i({ref:t},h))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3346:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Troubleshooting connection issues",sidebar_label:"Troubleshooting",sidebar_position:5,slug:"/troubleshooting-connection-issues/"},l=void 0,c={unversionedId:"categories/Documentation/troubleshooting",id:"categories/Documentation/troubleshooting",title:"Troubleshooting connection issues",description:"Common/known issues:",source:"@site/docs/categories/01-Documentation/troubleshooting.md",sourceDirName:"categories/01-Documentation",slug:"/troubleshooting-connection-issues/",permalink:"/docs/v1/troubleshooting-connection-issues/",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Troubleshooting connection issues",sidebar_label:"Troubleshooting",sidebar_position:5,slug:"/troubleshooting-connection-issues/"},sidebar:"sidebar",previous:{title:"Testing",permalink:"/docs/v1/testing/"},next:{title:"TypeScript",permalink:"/docs/v1/typescript/"}},h=[{value:"Problem: the socket is not able to connect",id:"problem-the-socket-is-not-able-to-connect",children:[{value:"You are trying to reach a plain WebSocket server",id:"you-are-trying-to-reach-a-plain-websocket-server",children:[],level:4},{value:"The server is not reachable",id:"the-server-is-not-reachable",children:[],level:4},{value:"The client is not compatible with the version of the server",id:"the-client-is-not-compatible-with-the-version-of-the-server",children:[],level:4},{value:"The server does not send the necessary CORS headers",id:"the-server-does-not-send-the-necessary-cors-headers",children:[],level:4},{value:"You didn&#39;t enable sticky sessions (in a multi server setup)",id:"you-didnt-enable-sticky-sessions-in-a-multi-server-setup",children:[],level:4}],level:3},{value:"Problem: the socket gets disconnected",id:"problem-the-socket-gets-disconnected",children:[{value:"The browser tab was minimized and heartbeat has failed",id:"the-browser-tab-was-minimized-and-heartbeat-has-failed",children:[],level:4},{value:"The client is not compatible with the version of the server",id:"the-client-is-not-compatible-with-the-version-of-the-server-1",children:[],level:4},{value:"You are trying to send a huge payload",id:"you-are-trying-to-send-a-huge-payload",children:[],level:4}],level:3},{value:"Problem: the socket is stuck in HTTP long-polling",id:"problem-the-socket-is-stuck-in-http-long-polling",children:[{value:"A proxy in front of your servers does not accept the WebSocket connection",id:"a-proxy-in-front-of-your-servers-does-not-accept-the-websocket-connection",children:[],level:4}],level:3}],p={toc:h};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Common/known issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#problem-the-socket-is-not-able-to-connect"},"the socket is not able to connect")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#problem-the-socket-gets-disconnected"},"the socket gets disconnected")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#problem-the-socket-is-stuck-in-http-long-polling"},"the socket is stuck in HTTP long-polling"))),(0,a.kt)("h3",{id:"problem-the-socket-is-not-able-to-connect"},"Problem: the socket is not able to connect"),(0,a.kt)("p",null,"Possible explanations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#you-are-trying-to-reach-a-plain-websocket-server"},"You are trying to reach a plain WebSocket server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-server-is-not-reachable"},"The server is not reachable")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-client-is-not-compatible-with-the-version-of-the-server"},"The client is not compatible with the version of the server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-server-does-not-send-the-necessary-cors-headers"},"The server does not send the necessary CORS headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#you-didnt-enable-sticky-sessions-in-a-multi-server-setup"},"You didn\u2019t enable sticky sessions (in a multi server setup)"))),(0,a.kt)("h4",{id:"you-are-trying-to-reach-a-plain-websocket-server"},"You are trying to reach a plain WebSocket server"),(0,a.kt)("p",null,"As explained in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/#what-socketio-is-not"},'"What Socket.IO is not"')," section, the Socket.IO client is not a WebSocket implementation and thus will not be able to establish a connection with a WebSocket server, even with ",(0,a.kt)("inlineCode",{parentName:"p"},'transports: ["websocket"]'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const socket = io("ws://echo.websocket.org", {\n  transports: ["websocket"]\n});\n')),(0,a.kt)("h4",{id:"the-server-is-not-reachable"},"The server is not reachable"),(0,a.kt)("p",null,"Please make sure the Socket.IO server is actually reachable at the given URL. You can test it with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl "<the server URL>/socket.io/?EIO=4&transport=polling"\n')),(0,a.kt)("p",null,"which should return something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'0{"sid":"Lbo5JLzTotvW3g2LAAAA","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":20000}\n')),(0,a.kt)("p",null,"If that's not the case, please check that the Socket.IO server is running, and that there is nothing in between that prevents the connection."),(0,a.kt)("h4",{id:"the-client-is-not-compatible-with-the-version-of-the-server"},"The client is not compatible with the version of the server"),(0,a.kt)("p",null,"Here is the compatibility table for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client/"},"JS client"),":"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"},"JS Client version"),(0,a.kt)("th",{colspan:"4"},"Socket.IO server version")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"1.x"),(0,a.kt)("td",{align:"center"},"2.x"),(0,a.kt)("td",{align:"center"},"3.x"),(0,a.kt)("td",{align:"center"},"4.x")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"1.x"),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")),(0,a.kt)("td",{align:"center"},"NO"),(0,a.kt)("td",{align:"center"},"NO"),(0,a.kt)("td",{align:"center"},"NO")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"2.x"),(0,a.kt)("td",{align:"center"},"NO"),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES"),(0,a.kt)("sup",null,"1")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES"),(0,a.kt)("sup",null,"1"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"3.x"),(0,a.kt)("td",{align:"center"},"NO"),(0,a.kt)("td",{align:"center"},"NO"),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"4.x"),(0,a.kt)("td",{align:"center"},"NO"),(0,a.kt)("td",{align:"center"},"NO"),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")))),(0,a.kt)("p",null,"[1]"," Yes, with ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#alloweio3"},"allowEIO3: true")),(0,a.kt)("p",null,"Here is the compatibility table for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client-java/"},"Java client"),":"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"},"Java Client version"),(0,a.kt)("th",{colspan:"3"},"Socket.IO server version")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"2.x"),(0,a.kt)("td",{align:"center"},"3.x"),(0,a.kt)("td",{align:"center"},"4.x")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"1.x"),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES"),(0,a.kt)("sup",null,"1")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES"),(0,a.kt)("sup",null,"1"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"2.x"),(0,a.kt)("td",{align:"center"},"NO"),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")))),(0,a.kt)("p",null,"[1]"," Yes, with ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#alloweio3"},"allowEIO3: true")),(0,a.kt)("p",null,"Here is the compatibility table for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/socketio/socket.io-client-swift/"},"Swift client"),":"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"},"Swift Client version"),(0,a.kt)("th",{colspan:"3"},"Socket.IO server version")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"2.x"),(0,a.kt)("td",{align:"center"},"3.x"),(0,a.kt)("td",{align:"center"},"4.x")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"v15.x"),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES"),(0,a.kt)("sup",null,"1")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES"),(0,a.kt)("sup",null,"2"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"v16.x"),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES"),(0,a.kt)("sup",null,"3")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")),(0,a.kt)("td",{align:"center"},(0,a.kt)("b",null,"YES")))),(0,a.kt)("p",null,"[1]"," Yes, with ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#alloweio3"},"allowEIO3: true")," (server) and ",(0,a.kt)("inlineCode",{parentName:"p"},'.connectParams(["EIO": "3"])')," (client):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'SocketManager(socketURL: URL(string:"http://localhost:8087/")!, config: [.connectParams(["EIO": "3"])])\n')),(0,a.kt)("p",null,"[2]"," Yes, ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#alloweio3"},"allowEIO3: true")," (server)"),(0,a.kt)("p",null,"[3]"," Yes, with ",(0,a.kt)("inlineCode",{parentName:"p"},".version(.two)")," (client):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'SocketManager(socketURL: URL(string:"http://localhost:8087/")!, config: [.version(.two)])\n')),(0,a.kt)("h4",{id:"the-server-does-not-send-the-necessary-cors-headers"},"The server does not send the necessary CORS headers"),(0,a.kt)("p",null,"If you see the following error in your console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at ...\n")),(0,a.kt)("p",null,"It probably means that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"either you are not actually reaching the Socket.IO server (see ",(0,a.kt)("a",{parentName:"li",href:"#the-server-is-not-reachable"},"above"),")"),(0,a.kt)("li",{parentName:"ul"},"or you didn't enable ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing")," (CORS) on the server-side.")),(0,a.kt)("p",null,"Please see the documentation ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/handling-cors/"},"here"),"."),(0,a.kt)("h4",{id:"you-didnt-enable-sticky-sessions-in-a-multi-server-setup"},"You didn't enable sticky sessions (in a multi server setup)"),(0,a.kt)("p",null,"When scaling to multiple Socket.IO servers, you need to make sure that all the requests of a given Socket.IO session reach the same Socket.IO server. The explanation can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/using-multiple-nodes/#why-is-sticky-session-required"},"here"),"."),(0,a.kt)("p",null,"Failure to do so will result in HTTP 400 responses with the code: ",(0,a.kt)("inlineCode",{parentName:"p"},'{"code":1,"message":"Session ID unknown"}')),(0,a.kt)("p",null,"Please see the documentation ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/using-multiple-nodes/"},"here"),"."),(0,a.kt)("h3",{id:"problem-the-socket-gets-disconnected"},"Problem: the socket gets disconnected"),(0,a.kt)("p",null,"First and foremost, please note that disconnections are common and expected, even on a stable Internet connection:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"anything between the user and the Socket.IO server may encounter a temporary failure or be restarted"),(0,a.kt)("li",{parentName:"ul"},"the server itself may be killed as part of an autoscaling policy"),(0,a.kt)("li",{parentName:"ul"},"the user may lose connection or switch from WiFi to 4G, in case of a mobile browser"),(0,a.kt)("li",{parentName:"ul"},"the browser itself may freeze an inactive tab")),(0,a.kt)("p",null,"That being said, the Socket.IO client will always try to reconnect, unless specifically told ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/client-options/#reconnection"},"otherwise"),"."),(0,a.kt)("p",null,"Possible explanations for a disconnection:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-browser-tab-was-minimized-and-heartbeat-has-failed"},"The browser tab was minimized and heartbeat has failed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#the-client-is-not-compatible-with-the-version-of-the-server-1"},"The client is not compatible with the version of the server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#you-are-trying-to-send-a-huge-payload"},"You are trying to send a huge payload"))),(0,a.kt)("h4",{id:"the-browser-tab-was-minimized-and-heartbeat-has-failed"},"The browser tab was minimized and heartbeat has failed"),(0,a.kt)("p",null,"When a browser tab is not in focus, some browsers (like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/blog/timer-throttling-in-chrome-88/#intensive-throttling"},"Chrome"),") throttle JavaScript timers, which could lead to a disconnection by ping timeout ",(0,a.kt)("strong",{parentName:"p"},"in Socket.IO v2"),", as the heartbeat mechanism relied on ",(0,a.kt)("inlineCode",{parentName:"p"},"setTimeout")," function on the client side."),(0,a.kt)("p",null,"As a workaround, you can increase the ",(0,a.kt)("inlineCode",{parentName:"p"},"pingTimeout")," value on the server side:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const io = new Server({\n  pingTimeout: 60000\n});\n")),(0,a.kt)("p",null,"Please note that upgrading to Socket.IO v4 (at least ",(0,a.kt)("inlineCode",{parentName:"p"},"socket.io-client@4.1.3"),", due to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/socketio/engine.io-client/commit/f30a10b7f45517fcb3abd02511c58a89e0ef498f"},"this"),") should prevent this kind of issues, as the heartbeat mechanism has been reversed (the server now sends PING packets)."),(0,a.kt)("h4",{id:"the-client-is-not-compatible-with-the-version-of-the-server-1"},"The client is not compatible with the version of the server"),(0,a.kt)("p",null,"Since the format of the packets sent over the WebSocket transport is similar in v2 and v3/v4, you might be able to connect with an incompatible client (see ",(0,a.kt)("a",{parentName:"p",href:"#the-client-is-not-compatible-with-the-version-of-the-server"},"above"),"), but the connection will eventually be closed after a given delay."),(0,a.kt)("p",null,"So if you are experiencing a regular disconnection after 30 seconds (which was the sum of the values of ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#pingtimeout"},"pingTimeout")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#pinginterval"},"pingInterval")," in Socket.IO v2), this is certainly due to a version incompatibility."),(0,a.kt)("h4",{id:"you-are-trying-to-send-a-huge-payload"},"You are trying to send a huge payload"),(0,a.kt)("p",null,"If you get disconnected while sending a huge payload, this may mean that you have reached the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#maxhttpbuffersize"},(0,a.kt)("inlineCode",{parentName:"a"},"maxHttpBufferSize"))," value, which defaults to 1 MB. Please adjust it according to your needs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const io = require("socket.io")(httpServer, {\n  maxHttpBufferSize: 1e8\n});\n')),(0,a.kt)("p",null,"A huge payload taking more time to upload than the value of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#pingtimeout"},(0,a.kt)("inlineCode",{parentName:"a"},"pingTimeout"))," option can also trigger a disconnection (since the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/how-it-works/#disconnection-detection"},"heartbeat mechanism")," fails during the upload). Please adjust it according to your needs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const io = require("socket.io")(httpServer, {\n  pingTimeout: 60000\n});\n')),(0,a.kt)("h3",{id:"problem-the-socket-is-stuck-in-http-long-polling"},"Problem: the socket is stuck in HTTP long-polling"),(0,a.kt)("p",null,"In most cases, you should see something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Network monitor upon success",src:n(2899).Z,width:"585",height:"216"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the Engine.IO handshake (contains the session ID \u2014 here, ",(0,a.kt)("inlineCode",{parentName:"li"},"zBjrh...AAAK")," \u2014 that is used in subsequent requests)"),(0,a.kt)("li",{parentName:"ol"},"the Socket.IO handshake request (contains the value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"auth")," option)"),(0,a.kt)("li",{parentName:"ol"},"the Socket.IO handshake response (contains the ",(0,a.kt)("a",{parentName:"li",href:"/docs/v1/server-socket-instance/#socketid"},"Socket#id"),")"),(0,a.kt)("li",{parentName:"ol"},"the WebSocket connection"),(0,a.kt)("li",{parentName:"ol"},"the first HTTP long-polling request, which is closed once the WebSocket connection is established")),(0,a.kt)("p",null,"If you don't see a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101"},"HTTP 101 Switching Protocols")," response for the 4th request, that means that something between the server and your browser is preventing the WebSocket connection."),(0,a.kt)("p",null,"Please note that this is not necessarily blocking since the connection is still established with HTTP long-polling, but it is less efficient."),(0,a.kt)("p",null,"You can get the name of the current transport with:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Client-side")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'socket.on("connect", () => {\n  const transport = socket.io.engine.transport.name; // in most cases, "polling"\n\n  socket.io.engine.on("upgrade", () => {\n    const upgradedTransport = socket.io.engine.transport.name; // in most cases, "websocket"\n  });\n});\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Server-side")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'io.on("connection", (socket) => {\n  const transport = socket.conn.transport.name; // in most cases, "polling"\n\n  socket.conn.on("upgrade", () => {\n    const upgradedTransport = socket.conn.transport.name; // in most cases, "websocket"\n  });\n});\n')),(0,a.kt)("p",null,"Possible explanations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#a-proxy-in-front-of-your-servers-does-not-accept-the-WebSocket-connection"},"a proxy in front of your servers does not accept the WebSocket connection"))),(0,a.kt)("h4",{id:"a-proxy-in-front-of-your-servers-does-not-accept-the-websocket-connection"},"A proxy in front of your servers does not accept the WebSocket connection"),(0,a.kt)("p",null,"Please see the documentation ",(0,a.kt)("a",{parentName:"p",href:"/docs/v1/reverse-proxy/"},"here"),"."))}u.isMDXComponent=!0},2899:function(e,t,n){t.Z=n.p+"assets/images/network-monitor-2e47dbe233100aa290595f8687a9fcba.png"}}]);