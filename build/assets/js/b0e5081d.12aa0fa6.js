"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1940],{9046:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=s(3274),r=s(2023);const i={title:"Search Modes",description:"Use different search modes to accurately search and find the code snippets that you are looking for."},a="Search Types & Default Search Modes",l={id:"features/search-modes",title:"Search Modes",description:"Use different search modes to accurately search and find the code snippets that you are looking for.",source:"@site/docs/features/search-modes.mdx",sourceDirName:"features",slug:"/features/search-modes",permalink:"/features/search-modes",draft:!1,unlisted:!1,editUrl:"https://github.com/pieces-app/documentation/tree/main/docs/features/search-modes.mdx",tags:[],version:"current",frontMatter:{title:"Search Modes",description:"Use different search modes to accurately search and find the code snippets that you are looking for."},sidebar:"docsSidebar",previous:{title:"Pieces Copilot",permalink:"/features/pieces-copilot"},next:{title:"Transforming Snippets",permalink:"/features/transforming-snippets"}},c={},h=[{value:"All Search Modes",id:"all-search-modes",level:2},{value:"Blended",id:"blended",level:3},{value:"Full Text Search (FTS)",id:"full-text-search-fts",level:3},{value:"Neural Code Search (NCS)",id:"neural-code-search-ncs",level:3},{value:"Search With Snippet",id:"search-with-snippet",level:3},{value:"Search Filters",id:"search-filters",level:2},{value:"Other Search Filter Settings",id:"other-search-filter-settings",level:3}];function o(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"search-types--default-search-modes",children:"Search Types & Default Search Modes"}),"\n",(0,n.jsx)(t.p,{children:"There are a number of search modes that are supported by Pieces for Developers to assist you in finding the snippet or asset that you are looking for."}),"\n",(0,n.jsxs)(t.p,{children:["When in ",(0,n.jsx)(t.strong,{children:"List View"})," or ",(0,n.jsx)(t.strong,{children:"Gallery View"})," you can search to find any snippet based on two things:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The Search Query that has been typed into the search input box."}),"\n",(0,n.jsx)(t.li,{children:"The Search Mode that has been set."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"all-search-modes",children:"All Search Modes"}),"\n",(0,n.jsx)(t.p,{children:"We currently provide 4 unique search modes that all create different search experiences:"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can modify the ",(0,n.jsx)(t.strong,{children:"search mode"})," that you have set at any time by selecting the dropdown next to the magnifying glass search icon to the left of the Search input."]})}),"\n",(0,n.jsx)(t.h3,{id:"blended",children:"Blended"}),"\n",(0,n.jsxs)(t.p,{children:["Blended takes advantage of all aspects of your code snippets, and is the ",(0,n.jsx)(t.strong,{children:"default"})," setting for Pieces Desktop. When this is set, you can use search in a traditional way, as you would with other search engines."]}),"\n",(0,n.jsx)(t.h3,{id:"full-text-search-fts",children:"Full Text Search (FTS)"}),"\n",(0,n.jsx)(t.p,{children:"Full Text Search uses your text to directly match with text in a saved snippet. This matches specific characters, but not semantic meaning. For example:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Search"}),(0,n.jsx)(t.th,{children:"Snippet"}),(0,n.jsx)(t.th,{children:"Match?"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch"}),(0,n.jsx)(t.td,{children:"cd batchfile.md"}),(0,n.jsx)(t.td,{children:"Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch"}),(0,n.jsx)(t.td,{children:"cd copyfiles.bat"}),(0,n.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"neural-code-search-ncs",children:"Neural Code Search (NCS)"}),"\n",(0,n.jsx)(t.p,{children:"Neural Code Search takes advantage of semantic description and allows you use meaning to find the code you need. Take the above example and notice how the results are different:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Search"}),(0,n.jsx)(t.th,{children:"Snippet"}),(0,n.jsx)(t.th,{children:"Match?"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch"}),(0,n.jsx)(t.td,{children:"cd batchfile.md"}),(0,n.jsx)(t.td,{children:"No"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch"}),(0,n.jsx)(t.td,{children:"cd copyfiles.bat"}),(0,n.jsx)(t.td,{children:"Yes"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["When using NCS, you ",(0,n.jsx)(t.strong,{children:"searched for a snippet that cds into a batchfile"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"search-with-snippet",children:"Search With Snippet"}),"\n",(0,n.jsx)(t.p,{children:"Using Search with Snippet allows you to search for other related snippets by pasting a code snippet into search. Your search results will be related code snippets that you've saved to Pieces."}),"\n",(0,n.jsxs)(t.p,{children:["You can also use ",(0,n.jsx)(t.strong,{children:"Search with Snippet"})," inside the Global Search view - read more about how it works ",(0,n.jsx)(t.a,{href:"/features/global-search",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"search-filters",children:"Search Filters"}),"\n",(0,n.jsx)(t.p,{children:"When searching inside our applications and plugins, you can apply specific search filters to narrow down the results that are returned to you in your list/gallery view."}),"\n",(0,n.jsx)(t.p,{children:"In order to access this filters:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Select your Search Bar and make sure that it is focused"}),"\n",(0,n.jsxs)(t.li,{children:["Once selected, you will be able to see the 'Search Filter' icon present where all the available ",(0,n.jsx)(t.a,{href:"#all-search-modes",children:"Search Modes"})," were previously located","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Before typing, you may notice that you cannot select the filter icon. You will need to first input at least 1 character into the search field"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Now that there is some input, select the search filter icon"}),"\n",(0,n.jsx)(t.li,{children:"A Dialog will open"}),"\n",(0,n.jsxs)(t.li,{children:["Select the 'Add a Filter' button on the opened dialog (we wil use 'Language' in the later example)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Three options will be present:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Language: your results based on a specific coding language"}),"\n",(0,n.jsx)(t.li,{children:"Tags: use a custom or generated tag to filter results"}),"\n",(0,n.jsx)(t.li,{children:"Phrase: narrow down your results based on if a snippet includes a specific phrase"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Then select a language from the dropdown after selecting 'language'"}),"\n",(0,n.jsx)(t.li,{children:"(important) after selecting a language, be sure to press run to actively enact your filter on your search results"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"other-search-filter-settings",children:"Other Search Filter Settings"}),"\n",(0,n.jsx)(t.p,{children:"You can also do a few other things once entering the filter flow in order to manage a filter or add to it. You can:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Add multiple queries to your search filters"}),"\n",(0,n.jsx)(t.li,{children:"Remove individual filters when adding multiples"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can see a small 'Trashcan' and 'Plus' icon after you select a filter that allows you to either remove and/or add a filter respectively."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},2023:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var n=s(9474);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);