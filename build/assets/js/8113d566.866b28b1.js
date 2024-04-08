"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9563],{2245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>d,toc:()=>h});var i=t(3274),s=t(2023),o=t(8087),l=t(5514),r=t(9779);const a={title:"Getting Started with Pieces for Developers on Linux",description:"Learn how to install Pieces for Developers via Snapcraft or by using Shell/Bash commands on your Linux distro.",next:"/extensions-plugins/chrome",nextTitle:"Pieces Chrome Plugin"},c="Getting Started with Pieces for Developers on Linux",d={id:"installation-getting-started/linux",title:"Getting Started with Pieces for Developers on Linux",description:"Learn how to install Pieces for Developers via Snapcraft or by using Shell/Bash commands on your Linux distro.",source:"@site/docs/installation-getting-started/linux.mdx",sourceDirName:"installation-getting-started",slug:"/installation-getting-started/linux",permalink:"/installation-getting-started/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/pieces-app/documentation/tree/main/docs/installation-getting-started/linux.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started with Pieces for Developers on Linux",description:"Learn how to install Pieces for Developers via Snapcraft or by using Shell/Bash commands on your Linux distro.",next:"/extensions-plugins/chrome",nextTitle:"Pieces Chrome Plugin"},sidebar:"docsSidebar",previous:{title:"Getting Started with Pieces for Developers on Windows",permalink:"/installation-getting-started/windows"},next:{title:"Pieces for Developers Chrome Extension",permalink:"/extensions-plugins/chrome"}},p={},h=[{value:"Steps to Install",id:"steps-to-install",level:2},{value:"Helpful Tips for Linux",id:"helpful-tips-for-linux",level:2},{value:"Updating your Application",id:"updating-your-application",level:3},{value:"OR",id:"or",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started-with-pieces-for-developers-on-linux",children:"Getting Started with Pieces for Developers on Linux"}),"\n",(0,i.jsx)(r.A,{children:"Compatible with Ubuntu 22 or higher and select distributions"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"A robot checking the install for pieces desktop for linux.",src:t(1635).A+"",width:"3959",height:"2217"})}),"\n",(0,i.jsxs)(n.p,{children:["To run Pieces for Developers on Linux, be sure to download both of the applications from the ",(0,i.jsx)("a",{target:"_blank",href:"https://snapcraft.io",children:"Snap Store"})," before installing. You can also follow the instructions below these install buttons to install via terminal."]}),"\n",(0,i.jsx)(o.A,{href:"https://snapcraft.io/pieces-for-developers",label:"Install Pieces for Developers",type:"secondary"}),"\n",(0,i.jsx)(l.A,{}),"\n",(0,i.jsx)(o.A,{href:"https://snapcraft.io/pieces-os",label:"Install Pieces OS",type:"secondary"}),"\n",(0,i.jsx)(l.h,{}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you are utilizing a Linux Distribution that is not encompassed within our Verified Support list, we unfortunately cannot ensure the complete functionality of all components within the Pieces for Developers Suite at this time. Should you encounter any challenges, we kindly request that you reach out to us at ",(0,i.jsx)(n.a,{href:"https://getpieces.typeform.com/to/mCjBSIjF#page=installation-linux",children:"here"})," for assistance."]})}),"\n",(0,i.jsx)(l.h,{}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Supported Linux Distributions"}),(0,i.jsx)(n.p,{children:"Currently tested and supported Linux distributions that can be used with Pieces for Developers:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ubuntu 22+"}),"\n",(0,i.jsx)(n.li,{children:"Ubuntu-based distros"}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"steps-to-install",children:"Steps to Install"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To install from your terminal run the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo snap install pieces-os\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://snippets.pieces.cloud/?p=8805498237",children:"Save to Pieces"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enable Offline and On-Device Local Machine Learning by running the following command in the terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo snap connect pieces-os:process-control :process-control\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://snippets.pieces.cloud/?p=b8a24c9390",children:"Save to Pieces"})}),"\n",(0,i.jsx)(n.p,{children:"This command sets up and configures local application interfaces to properly load our Sand-boxed and Secure Machine Learning Models."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the Pieces Desktop Snap:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo snap install pieces-for-developers\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://snippets.pieces.cloud/?p=f23c48bd96",children:"Save to Pieces"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Launch ",(0,i.jsx)(n.a,{href:"/installation-getting-started/pieces-os",children:"Pieces OS"})," by running the following command in your terminal:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pieces-os\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://snippets.pieces.cloud/?p=0f964fb0a1",children:"Save to Pieces"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Launch the Pieces for Developers Desktop App by running the following command in your terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pieces-for-developers\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://snippets.pieces.cloud/?p=e66b498977",children:"Save to Pieces"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Check out our ",(0,i.jsx)("a",{target:"_blank",href:"https://www.youtube.com/@getpieces",children:"YouTube Channel"})," for more information on Getting Started."]})}),"\n",(0,i.jsx)(n.h2,{id:"helpful-tips-for-linux",children:"Helpful Tips for Linux"}),"\n",(0,i.jsx)(n.h3,{id:"updating-your-application",children:"Updating your Application"}),"\n",(0,i.jsx)(n.p,{children:"To update your application, you can either:"}),"\n",(0,i.jsx)(n.p,{children:"Update individual snap packages one at a time:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Update the Pieces Desktop Snap"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo snap refresh pieces-for-developers\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Update the Pieces OS Snap"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo snap refresh pieces-os\n"})}),"\n",(0,i.jsx)(n.h4,{id:"or",children:"OR"}),"\n",(0,i.jsx)(n.p,{children:"Update all snap packages at once:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo snap refresh\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This will update other snap packages that you have installed, so be sure before you run this command."})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8087:(e,n,t)=>{t.d(n,{A:()=>l});var i=t(8594),s=t(6446),o=t(3274);const l=e=>{let{...n}=e;const{colorMode:t}=(0,i.G)();return(0,o.jsxs)("a",{href:n.href,className:"cta-button",style:{fontSize:"secondary"===n.type?"1rem":"1.25rem"},children:[n.icon||n.iconDark?"dark"===t&&n.iconDark?(0,o.jsx)(s.A,{width:20,src:n.iconDark}):(0,o.jsx)(s.A,{width:20,src:n.icon}):null,n.label]})}},6446:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(3274);const s=e=>(0,i.jsx)("img",{src:e.src,alt:e.alt,width:e.width,height:e.height,style:e.style})},9779:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(3274);const s=e=>(0,i.jsx)("div",{style:{maxWidth:"fit-content",minWidth:"fit-content"},children:(0,i.jsx)("p",{style:{padding:"2px 20px",borderRadius:"12px",border:"1px solid #f3f5f6",backgroundColor:"#f3f4f5",color:"black",fontWeight:"500",marginTop:"8px",marginBottom:"15px"},children:e.children})})},5514:(e,n,t)=>{t.d(n,{A:()=>o,h:()=>s});var i=t(3274);const s=()=>(0,i.jsx)("div",{style:{height:"50px"}}),o=()=>(0,i.jsx)("div",{style:{height:"16px"}})},1635:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/robots_linux-582de9e5d3da7afa4e5ee532c862cdab.png"},2023:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(9474);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);