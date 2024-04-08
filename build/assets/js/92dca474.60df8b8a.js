"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7903],{9472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var i=t(3274),o=t(2023),s=t(2950),r=t(7798),l=t(1672);const a={title:"Connecting to a Remote Pieces OS Instance",description:"Utilize the Pieces for Developers VS Code extension in a remote development environment"},c="Connecting to a Remote Pieces OS Instance",d={id:"product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance",title:"Connecting to a Remote Pieces OS Instance",description:"Utilize the Pieces for Developers VS Code extension in a remote development environment",source:"@site/docs/product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance.mdx",sourceDirName:"product-highlights-and-benefits",slug:"/product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance",permalink:"/product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/pieces-app/documentation/tree/main/docs/product-highlights-and-benefits/connecting-to-a-remote-pieces-os-instance.mdx",tags:[],version:"current",frontMatter:{title:"Connecting to a Remote Pieces OS Instance",description:"Utilize the Pieces for Developers VS Code extension in a remote development environment"},sidebar:"docsSidebar",previous:{title:"Workflow Activity Stream",permalink:"/features/workflow-activity"},next:{title:"In-Project Snippet Discovery",permalink:"/product-highlights-and-benefits/in-project-snippet-discovery"}},u={},h=[{value:"Windows Subsystem for Linux (WSL)",id:"windows-subsystem-for-linux-wsl",level:3},{value:"VS Code Dev Containers",id:"vs-code-dev-containers",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Pieces OS is not connecting on WSL",id:"pieces-os-is-not-connecting-on-wsl",level:3},{value:"Pieces OS is not connecting on Dev Containers",id:"pieces-os-is-not-connecting-on-dev-containers",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Using the Custom URL Feature to Access a Remote Pieces OS Instance",id:"using-the-custom-url-feature-to-access-a-remote-pieces-os-instance",level:3},{value:"Setting up your Pieces VS Code extension",id:"setting-up-your-pieces-vs-code-extension",level:4},{value:"Reloading your VS Code window",id:"reloading-your-vs-code-window",level:4}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"connecting-to-a-remote-pieces-os-instance",children:"Connecting to a Remote Pieces OS Instance"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If Pieces OS is running on the same machine as VS Code, there should be no requirement to use this feature. Please verify these steps are required for your set up before following this guide. This custom URL is not the same thing as your Pieces Cloud custom url."})}),"\n",(0,i.jsx)(n.p,{children:"Through multiple user support tickets, we have noticed that many of our users are using the Pieces for Developers VS Code extension in a remote development environment."}),"\n",(0,i.jsx)(n.p,{children:"This guide will walk you through how to connect to a remote Pieces OS instance using the Pieces for Developers VS Code extension."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"This is currently only available for the Pieces for Developers VS Code extension. Functionality for the rest of the Pieces for Developers ecosystem is coming soon."}),"\n"]}),"\n",(0,i.jsx)(l.A,{src:{youtube:"https://www.youtube.com/embed/sbgIaK9kpu4?si=gFIp2xkSQjY4aGbX"},type:"youtube"}),"\n",(0,i.jsx)(n.h3,{id:"windows-subsystem-for-linux-wsl",children:"Windows Subsystem for Linux (WSL)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/about",children:"Windows Subsystem for Linux (WSL)"})," must be installed and configured on your machine"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This integration should work out of the box with WSL. If you are having trouble connecting, please see the ",(0,i.jsx)(n.a,{href:"#troubleshooting",children:"Troubleshooting"})," section for steps on how to set up an inbound firewall rule."]}),"\n",(0,i.jsx)(n.h3,{id:"vs-code-dev-containers",children:"VS Code Dev Containers"}),"\n",(0,i.jsxs)(n.p,{children:["As of the 1.12.0 release of the extension, Dev Container environments should also work with no extra configuration required. Once again, if you have trouble connecting please see ",(0,i.jsx)(n.a,{href:"#troubleshooting",children:"Troubleshooting"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.h3,{id:"pieces-os-is-not-connecting-on-wsl",children:"Pieces OS is not connecting on WSL"}),"\n",(0,i.jsx)(n.p,{children:"For WSL users, if the connection does not work automatically, you might have to set up an inbound firewall rule to allow the connection."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open Windows Firewall: Press ",(0,i.jsx)(n.code,{children:"Win + R"}),", search ",(0,i.jsx)(n.code,{children:"firewall.cpl"}),", and press Enter."]}),"\n",(0,i.jsxs)(n.li,{children:["In the left pane, click on ",(0,i.jsx)(n.code,{children:"Advanced settings"})," to open the Windows Firewall with Advanced Security."]}),"\n",(0,i.jsxs)(n.li,{children:["In the left pane, click on ",(0,i.jsx)(n.code,{children:"Inbound Rules"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["On the right pane, click on ",(0,i.jsx)(n.code,{children:"New Rule"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Rule Type: Select ",(0,i.jsx)(n.code,{children:"Port"})," and click Next."]}),"\n",(0,i.jsxs)(n.li,{children:["Protocol and Ports: Choose ",(0,i.jsx)(n.code,{children:"TCP"})," and specify port number ",(0,i.jsx)(n.code,{children:"1000"}),". Click Next."]}),"\n",(0,i.jsxs)(n.li,{children:["Action: Select ",(0,i.jsx)(n.code,{children:"Allow the connection"})," and click Next."]}),"\n",(0,i.jsx)(n.li,{children:"Profile: Choose Public, Private, and Domain for the profile."}),"\n",(0,i.jsxs)(n.li,{children:["Name: Give the rule a name like ",(0,i.jsx)(n.code,{children:"Local Devices on Port 1000"}),", and click Finish."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pieces-os-is-not-connecting-on-dev-containers",children:"Pieces OS is not connecting on Dev Containers"}),"\n",(0,i.jsx)(n.p,{children:"For Dev Container users, if the connection does not work automatically, there are a couple of troubleshooting steps to take."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["You must ensure that Pieces OS is running ",(0,i.jsx)(n.em,{children:"before"})," launching VS Code. Please try starting Pieces OS and then reloading your VS Code window.\na. see ",(0,i.jsx)(n.a,{href:"#reloading-your-vs-code-window",children:"this guide"})," for how to reload your VS Code window"]}),"\n",(0,i.jsxs)(n.li,{children:["Similarly to the ",(0,i.jsx)(n.a,{href:"#pieces-os-is-not-connecting-on-wsl",children:"WSL troubleshooting guide"})," above, there may be a firewall that is blocking requests between machines on your LAN. Try setting up an inbound firewall rule on the machine running Pieces OS to resolve this.\na. for Windows and macOS the rule should be placed on port 1000\nb. on linux, the rule should be placed on port 5323"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/features/codespaces",children:"GitHub Codespaces"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/remote/ssh",children:"SSH connection"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["1 machine with ",(0,i.jsx)(n.a,{href:"/installation-getting-started/what-am-i-installing",children:"Pieces OS"})," installed"]}),"\n",(0,i.jsxs)(n.li,{children:["1 machine with the ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=piecesapp.pieces",children:"Pieces for Developers VS Code extension"})," installed"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(n.h3,{id:"using-the-custom-url-feature-to-access-a-remote-pieces-os-instance",children:"Using the Custom URL Feature to Access a Remote Pieces OS Instance"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"In the case that Pieces OS shares the same LAN with your remote VS Code instance, you should use the LAN IP address of your machine that is running Pieces OS."}),"\n",(0,i.jsxs)(n.li,{children:["In the case that Pieces OS is not on the same LAN as your development environment ",(0,i.jsx)(n.a,{href:"https://ngrok.com/download",children:"ngrok"}),", or a similar alternative, must be installed on the machine with Pieces OS. It must be known that doing this will expose your Pieces OS endpoints to the public and this should only be done as a last resort."]}),"\n",(0,i.jsxs)(n.li,{children:["The custom URL feature has no connection to your custom Pieces Cloud domain, attempting to use your custom Pieces Cloud domain i.e: ",(0,i.jsx)(n.a,{href:"https://caleb.pieces.cloud",children:"https://caleb.pieces.cloud"})," will result in the VS Code extension ceasing to function properly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.A,{defaultValue:"lan-ip-address",values:[{label:"LAN IP Address",value:"lan-ip-address"},{label:"Static URL",value:"static-url"},{label:"Generated URL",value:"generated-url"}],children:[(0,i.jsx)(r.A,{value:"lan-ip-address",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure that there is not a firewall in place that will block connection between two machines on your LAN."}),"\n",(0,i.jsx)(n.li,{children:"Locate your machine's LAN IP address\na. If possible, you should also set up a DHCP IP reservation for your machine running Pieces OS so this IP address will not change in the future."}),"\n",(0,i.jsxs)(n.li,{children:["Your custom URL will be:\na. Linux: ",(0,i.jsx)(n.code,{children:"http://{'{LAN IP ADDRESS}'}:5323"}),"\nb. macOS or Windows: ",(0,i.jsx)(n.code,{children:"http://{'{LAN IP ADDRESS}'}:1000"})]}),"\n"]})}),(0,i.jsx)(r.A,{value:"static-url",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install ngrok on the machine with Pieces OS if it isn\u2019t already"}),"\n",(0,i.jsxs)(n.li,{children:["Run the following command on your machine\u2019s terminal:\na. (windows and macos)",(0,i.jsx)(n.code,{children:"ngrok http --domain=STATIC_URL_HERE 1000"}),"\nb. (linux)",(0,i.jsx)(n.code,{children:"ngrok http --domain=STATIC_URL_HERE 5323"})]}),"\n",(0,i.jsx)(n.li,{children:"Copy the forwarding URL it generates to use in the next step"}),"\n"]})}),(0,i.jsx)(r.A,{value:"generated-url",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install ngrok on the machine with Pieces OS if it isn\u2019t already"}),"\n",(0,i.jsxs)(n.li,{children:["Run the following command on your machine\u2019s terminal:\na. (windows and macos)",(0,i.jsx)(n.code,{children:"ngrok http 1000"}),"\nb. (linux)",(0,i.jsx)(n.code,{children:"ngrok http 5323"})]}),"\n",(0,i.jsx)(n.li,{children:"Copy the forwarding URL it generates to use in the next step"}),"\n"]})})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://storage.googleapis.com/pieces_multimedia/PROMOTIONAL/PIECES_FOR_DEVELOPERS/VS_CODE/MACOS/ANY_FEATURE/16X9/PIECES_FOR_DEVELOPERS-VS_CODE-ANY_FEATURE-MACOS-16X9-11_27_2023.GIF",alt:"A generated a ngrok tunnel URL"})}),"\n",(0,i.jsx)(n.h4,{id:"setting-up-your-pieces-vs-code-extension",children:"Setting up your Pieces VS Code extension"}),"\n",(0,i.jsx)(n.p,{children:"Now we will set up your Pieces VS Code extension to connect to your machine with Pieces OS."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open VS Code on your machine"}),"\n",(0,i.jsxs)(n.li,{children:["Go to VS Code Settings ",(0,i.jsx)(n.code,{children:"CMD/CTRL + ,"})]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure that you have the ",(0,i.jsx)(n.code,{children:"Workspace"})," tab selected"]}),"\n",(0,i.jsxs)(n.li,{children:["Search ",(0,i.jsx)(n.code,{children:"pieces custom url"})]}),"\n",(0,i.jsxs)(n.li,{children:["Paste your new forwarding URL in the input for ",(0,i.jsx)(n.code,{children:"Pieces: Custom Url"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://storage.googleapis.com/pieces_multimedia/PROMOTIONAL/PIECES_FOR_DEVELOPERS/VS_CODE/MACOS/LINK_SHARING/16X9/PIECES_FOR_DEVELOPERS-VS_CODE-LINK_SHARING-MACOS-16X9-11_27_2023.GIF",alt:"Configuring your VS Code extension to talk to a remote Pieces OS instance"})}),"\n",(0,i.jsx)(n.h4,{id:"reloading-your-vs-code-window",children:"Reloading your VS Code window"}),"\n",(0,i.jsx)(n.p,{children:"Now we will reload your VS Code window to ensure that your Pieces VS Code extension is using your ngrok forwarding URL."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open up the Command Palette ",(0,i.jsx)(n.code,{children:"CMD/CTRL + Shift + P"})]}),"\n",(0,i.jsxs)(n.li,{children:["Search ",(0,i.jsx)(n.code,{children:"Reload Window"})]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Developer: Reload Window"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://storage.googleapis.com/pieces_multimedia/PROMOTIONAL/PIECES_FOR_DEVELOPERS/VS_CODE/MACOS/REFRESH_TREE_VIEW/16X9/PIECES_FOR_DEVELOPERS-VS_CODE-REFRESH_TREE_VIEW-MACOS-16X9-11_27_2023.GIF",alt:"Reloading the VS Code window"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},7798:(e,n,t)=>{t.d(n,{A:()=>r});t(9474);var i=t(8923);const o={tabItem:"tabItem_v5MZ"};var s=t(3274);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,r),hidden:t,children:n})}},2950:(e,n,t)=>{t.d(n,{A:()=>S});var i=t(9474),o=t(8923),s=t(1369),r=t(241),l=t(3984),a=t(3826),c=t(5547),d=t(5817);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[r,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:o}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),f=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(4940);const f={tabList:"tabList_Wus0",tabItem:"tabItem_z_wE"};var b=t(3274);function v(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),o=l[t].value;o!==i&&(c(n),r(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function S(e){const n=(0,g.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},1672:(e,n,t)=>{t.d(n,{A:()=>o});var i=t(3274);const o=e=>{let{src:n,type:t,maxWidth:o,alt:s}=e;return"youtube"===t?(0,i.jsx)("iframe",{width:"100%",style:{aspectRatio:"16 / 9",maxWidth:o||"100%"},src:n.youtube,title:s,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):"local"===t?(0,i.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,width:"100%",style:{borderRadius:"8px",maxWidth:o||"100%"},children:[(0,i.jsx)("source",{src:n.webm,title:s,type:"video/webm"}),(0,i.jsx)("source",{src:n.mp4,title:s,type:"video/mp4"}),(0,i.jsx)("source",{src:n.ogg,title:s,type:"video/ogg"})]}):null}},2023:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(9474);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);