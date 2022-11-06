"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[3969],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?i.createElement(f,a(a({ref:t},c),{},{components:r})):i.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=r(7462),n=(r(7294),r(4137));const o={version:1,submitted_by:"dubrie",published_date:"tbd",category:"cloud",tags:["compute","role:cloud-engineer","size:small"]},a="Match utilization requirements of virtual machines (VMs)",l={unversionedId:"catalog/cloud/match-utilization-requirements-of-vm",id:"catalog/cloud/match-utilization-requirements-of-vm",title:"Match utilization requirements of virtual machines (VMs)",description:"Description",source:"@site/docs/catalog/cloud/match-utilization-requirements-of-vm.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/match-utilization-requirements-of-vm",permalink:"/catalog/cloud/match-utilization-requirements-of-vm",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/match-utilization-requirements-of-vm.md",tags:[{label:"compute",permalink:"/tags/compute"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"dubrie",published_date:"tbd",category:"cloud",tags:["compute","role:cloud-engineer","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Match your service level objectives to business needs",permalink:"/catalog/cloud/match-slo"},next:{title:"Match utilization requirements with pre-configured servers",permalink:"/catalog/cloud/match-utilization-requirements-with-pre-configured-server"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"match-utilization-requirements-of-virtual-machines-vms"},"Match utilization requirements of virtual machines (VMs)"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"It's better to have one VM running at a higher utilization than two running at low utilization rates, not only in terms of energy proportionality but also in terms of embodied carbon."),(0,n.kt)("p",null,"Two servers running at low utilization rates will consume more energy than one running at a high utilization rate. In addition, the unused capacity on the underutilized server could be more efficiently used for another task or process."),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Rightsize your VMs by changing the number of resources allocated to a VM to match the utilization requirements of the VM. For example, adding a vCPU if the VM is running high CPU utilization or removing memory if the server is not using all of its allocated memory."),(0,n.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,n.kt)("p",null,"Rightsizing oversized VMs will impact SCI as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"E"),": Rightsizing oversized VMs will ",(0,n.kt)("em",{parentName:"li"},"increase")," the total server utilization. The more a server is utilized, the more efficient it becomes at turning energy into useful operations. Therefore rightsizing VMs should reduce the energy consumption of your processes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M"),": By reducing the total number of servers required to run a process, the total embodied carbon is lower.")),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If we chose an oversized VM because ",(0,n.kt)("em",{parentName:"li"},"occasionally")," there is a burst of work (peak load) then undersizing them will reduce the margin available to handle the peak traffic. A better solution would be to consider an auto-scaling architecture that would automatically scale the number of VMs.")),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It may reduce your cloud bill as reducing the spec of your VMs will cost less."),(0,n.kt)("li",{parentName:"ul"},"If you do not have an auto-scaling architecture, there is less overhead for handling spikes in load.")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.greensoftware.foundation/practitioner/hardware-efficiency"},"Hardware Efficiency Principle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.greensoftware.foundation/practitioner/energy-efficiency"},"Energy Efficiency Principle"))))}m.isMDXComponent=!0}}]);