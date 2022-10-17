"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[7647],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(r),u=a,m=f["".concat(s,".").concat(u)]||f[u]||p[u]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7370:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const i={version:1,submitted_by:"markus-ntt-seidl",published_date:"TBD",category:"web",tags:["web","role:web-developer","size:small"]},o="Defer Offscreen Images",l={unversionedId:"catalog/web/defer-offscreen-images",id:"catalog/web/defer-offscreen-images",title:"Defer Offscreen Images",description:"Description",source:"@site/docs/catalog/web/defer-offscreen-images.md",sourceDirName:"catalog/web",slug:"/catalog/web/defer-offscreen-images",permalink:"/catalog/web/defer-offscreen-images",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/web/defer-offscreen-images.md",tags:[{label:"web",permalink:"/tags/web"},{label:"role:web-developer",permalink:"/tags/role-web-developer"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"markus-ntt-seidl",published_date:"TBD",category:"web",tags:["web","role:web-developer","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Avoid an excessive DOM size",permalink:"/catalog/web/avoid-excessive-dom-size"},next:{title:"Properly sized images",permalink:"/catalog/web/properly-sized-images"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defer-offscreen-images"},"Defer Offscreen Images"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Web pages offer a lot of images that aren't displayed on the first loaded screen. They can also hide these images behind other interactions, like tabs and accordions. This content is dynamically displayed and therefore doesn't need to be loaded when it isn't displayed.\nThe fact that images are loaded on-demand, only when they are about to be displayed, is often called \"lazy-loading\"."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Load images on demand, which are unlikely to be displayed on first page load. This can be done via the newer browser attribute ",(0,a.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," on the image tag and can also be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mfranzke/loading-attribute-polyfill"},"polyfilled")," for older browsers."),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"Concerning the SCI equation, lazy-loading images  will impact as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),": Images are only loaded when needed, saving bandwidth and processing power on the client and server, therefore reducing the needed energy.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This assumes that the HTML for the image tags can be modified in the application")),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://web.dev/offscreen-images/"},"Detailed description"))))}p.isMDXComponent=!0}}]);