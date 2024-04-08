"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5202],{5437:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=i(3274),o=i(2023),t=i(2950),l=i(7798),c=i(2508);const r={title:"Back Up and Restore",description:"Learn how to back up and restore your Pieces Database without losing your code snippets."},a="Backup your Pieces Database",d={id:"features/back-up-and-restore",title:"Back Up and Restore",description:"Learn how to back up and restore your Pieces Database without losing your code snippets.",source:"@site/docs/features/back-up-and-restore.mdx",sourceDirName:"features",slug:"/features/back-up-and-restore",permalink:"/features/back-up-and-restore",draft:!1,unlisted:!1,editUrl:"https://github.com/pieces-app/documentation/tree/main/docs/features/back-up-and-restore.mdx",tags:[],version:"current",frontMatter:{title:"Back Up and Restore",description:"Learn how to back up and restore your Pieces Database without losing your code snippets."},sidebar:"docsSidebar",previous:{title:"Auto-Enrichment of Developer Materials",permalink:"/features/auto-enrichment"},next:{title:"Code Completion in your IDE",permalink:"/features/code-completion"}},h={},p=[{value:"Creating the backup",id:"creating-the-backup",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Step 6",id:"step-6",level:3},{value:"Restoring the Backup",id:"restoring-the-backup",level:2},{value:"Step 1",id:"step-1-1",level:3},{value:"Step 2",id:"step-2-1",level:3},{value:"Step 3",id:"step-3-1",level:3},{value:"Step 4",id:"step-4-1",level:3},{value:"Step 5",id:"step-5-1",level:3},{value:"Step 6",id:"step-6-1",level:3},{value:"Support",id:"support",level:3}];function u(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"backup-your-pieces-database",children:"Backup your Pieces Database"}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Backups are ONLY compatible with the same and future versions of Pieces OS and Pieces Desktop as when it was created. If it was created with Pieces OS 1.9.1 and Pieces Desktop 1.9.2, then it is compliant with those same versions and all future versions when restoring the backup."})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.em,{children:["Please note that you ",(0,n.jsx)(s.strong,{children:"CANNOT go backward in versions."})," For example: on one computer you have Pieces OS 1.9.3 and Pieces Desktop 1.9.4, and you attempt to restore this database on Pieces OS 1.9.0 and Pieces Desktop 1.9.1, this will fail and your Pieces OS will NOT function properly. To resolve this please first update your version to the latest on Pieces Desktop and Pieces OS and then repeat the restoration process."]})}),"\n",(0,n.jsx)(s.h2,{id:"creating-the-backup",children:"Creating the backup"}),"\n",(0,n.jsx)(s.h3,{id:"step-1",children:"Step 1"}),"\n",(0,n.jsx)(s.p,{children:"Please quit Pieces OS and Pieces Desktop and make sure neither are actively running."}),"\n",(0,n.jsxs)(t.A,{defaultValue:"macOS",values:[{label:"macOS",value:"macOS"},{label:"Windows/Linux",value:"windows-linux"}],children:[(0,n.jsx)(l.A,{value:"macOS",children:(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["To quit Pieces OS, open the Pieces OS toolbar app towards the top of your Desktop and select ",(0,n.jsx)(s.code,{children:"Quit"})]}),"\n",(0,n.jsxs)(s.li,{children:["To quit Pieces Desktop, select ",(0,n.jsx)(s.code,{children:"Pieces"})," in the top-left of your macOS toolbar and select ",(0,n.jsx)(s.code,{children:"Quit"})]}),"\n"]})}),(0,n.jsx)(l.A,{value:"windows-linux",children:(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["To quit Pieces OS, right-click the Pieces OS taskbar app and select ",(0,n.jsx)(s.code,{children:"Quit"})]}),"\n",(0,n.jsxs)(s.li,{children:["To quit Pieces Desktop, click the ",(0,n.jsx)(s.code,{children:"X"})," in the top-right corner of the Pieces Desktop window"]}),"\n"]})})]}),"\n",(0,n.jsx)(s.h3,{id:"step-2",children:"Step 2"}),"\n",(0,n.jsxs)(t.A,{defaultValue:"macOS",values:[{label:"macOS",value:"macOS"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],children:[(0,n.jsxs)(l.A,{value:"macOS",children:[(0,n.jsxs)(s.p,{children:["Open your Finder and navigate to your ",(0,n.jsx)(s.code,{children:"Home"})," folder."]}),(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.em,{children:["If you cannot see your Home folder on the left-hand side of your Finder, simply tap ",(0,n.jsx)(s.code,{children:"Shift+Cmd+H"})," to open it"]})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Navigating to home folder",src:i(4308).A+"",width:"1150",height:"820"})})]}),(0,n.jsx)(l.A,{value:"windows",children:(0,n.jsxs)(s.p,{children:["Open your File Explorer and navigate to the following location: ",(0,n.jsx)(s.code,{children:"C:/Users/{username}"})]})}),(0,n.jsx)(l.A,{value:"linux",children:(0,n.jsxs)(s.p,{children:["Open your File Explorer and navigate to the following location: ",(0,n.jsx)(s.code,{children:"~/Users/{username}"})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"step-3",children:"Step 3"}),"\n",(0,n.jsxs)(t.A,{defaultValue:"macOS",values:[{label:"macOS",value:"macOS"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],children:[(0,n.jsxs)(l.A,{value:"macOS",children:[(0,n.jsxs)(s.p,{children:["Once in your Home folder, you\u2019ll need to click ",(0,n.jsx)(s.code,{children:"Shift+Cmd+."})," (shift, command, period) to show your hidden files & folders. Once they are visible, find your ",(0,n.jsx)(s.code,{children:"Library"})," folder and click it."]}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Selecting your Library Folder",src:i(8888).A+"",width:"2000",height:"1426"})})]}),(0,n.jsxs)(l.A,{value:"windows",children:[(0,n.jsxs)(s.p,{children:["Once in your ",(0,n.jsx)(s.code,{children:"{username}"})," folder, you'll need to find your ",(0,n.jsx)(s.code,{children:"Documents"})," folder and click it."]}),(0,n.jsx)(c.A,{type:"info",children:(0,n.jsxs)(s.p,{children:["You may need to enable the option to show hidden files and folders. To do this, open File Explorer, click on the ",(0,n.jsx)(s.code,{children:"View"})," tab, and check the box next to ",(0,n.jsx)(s.code,{children:"Hidden items"}),"."]})}),(0,n.jsxs)(s.p,{children:["You should now be at the following location: ",(0,n.jsx)(s.code,{children:"C:/Users/{username}/Documents"})]})]}),(0,n.jsxs)(l.A,{value:"linux",children:[(0,n.jsxs)(s.p,{children:["Once in your ",(0,n.jsx)(s.code,{children:"{username}"})," folder, you'll need to find your ",(0,n.jsx)(s.code,{children:"Documents"})," folder and click it."]}),(0,n.jsx)(c.A,{type:"info",children:(0,n.jsxs)(s.p,{children:["You may need to enable the option to show hidden files and folders. To do this, open File Explorer, and tap ",(0,n.jsx)(s.code,{children:"Ctrl+H"}),"."]})}),(0,n.jsxs)(s.p,{children:["You should now be at the following location: ",(0,n.jsx)(s.code,{children:"~/Users/{username}/Documents"})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"step-4",children:"Step 4"}),"\n",(0,n.jsxs)(s.p,{children:["Next, locate the folders titled ",(0,n.jsx)(s.code,{children:"com.pieces.os"})," and ",(0,n.jsx)(s.code,{children:"com.pieces.pfd"}),". These folders represent your Pieces OS & Pieces Desktop databases."]}),"\n",(0,n.jsx)(s.h3,{id:"step-5",children:"Step 5"}),"\n",(0,n.jsxs)(t.A,{defaultValue:"macOS",values:[{label:"macOS",value:"macOS"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],children:[(0,n.jsx)(l.A,{value:"macOS",children:(0,n.jsxs)(s.p,{children:["Select both folders (",(0,n.jsx)(s.code,{children:"com.pieces.os"})," and ",(0,n.jsx)(s.code,{children:"com.pieces.pfd"}),"), right-click, and select ",(0,n.jsx)(s.code,{children:"Compress"}),"."]})}),(0,n.jsx)(l.A,{value:"windows",children:(0,n.jsxs)(s.p,{children:["Select both folders (",(0,n.jsx)(s.code,{children:"com.pieces.os"})," and ",(0,n.jsx)(s.code,{children:"com.pieces.pfd"}),"), right-click, select ",(0,n.jsx)(s.code,{children:"Send to"}),", and then select ",(0,n.jsx)(s.code,{children:"Compressed (zipped) Folder"}),"."]})}),(0,n.jsx)(l.A,{value:"linux",children:(0,n.jsxs)(s.p,{children:["Select both folders (",(0,n.jsx)(s.code,{children:"com.pieces.os"})," and ",(0,n.jsx)(s.code,{children:"com.pieces.pfd"}),"), right-click, and select ",(0,n.jsx)(s.code,{children:"Compress"}),"."]})})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["This may take some time, especially if you have any local LLMs downloaded. If you do have any local LLMs downloaded, you may cancel the compression, open Pieces Desktop App, and delete the local LLMs you have downloaded. However, you ",(0,n.jsx)(s.strong,{children:"MUST"})," restart the guide from ",(0,n.jsx)(s.code,{children:"Step 1"})," if you choose to do this."]})}),"\n",(0,n.jsx)(s.h3,{id:"step-6",children:"Step 6"}),"\n",(0,n.jsxs)(s.p,{children:["This will create a new Zip file titled, ",(0,n.jsx)(s.code,{children:"Archive"}),". From here, you can enter a new name. We recommend naming this, ",(0,n.jsx)(s.code,{children:"pieces_backup_(month)_(day)_(year)"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"From here, you can place this Zip file anywhere you desire, whether it be another folder on your machine or in cloud storage such as Google Drive, Dropbox, or OneDrive."}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Backups are ONLY compatible with the same and future versions of Pieces OS and Pieces Desktop as when it was created. If it was created with Pieces OS 1.9.1 and Pieces Desktop 1.9.2, then it is compliant with those same versions and all future versions when restoring the backup."})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.em,{children:["Please note that you ",(0,n.jsx)(s.strong,{children:"CANNOT go backward in versions."})," For example: on one computer you have Pieces OS 1.9.3 and Pieces Desktop 1.9.4, and you attempt to restore this database on Pieces OS 1.9.0 and Pieces Desktop 1.9.1, this will fail and your Pieces OS will NOT function properly. To resolve this please first update your version to the latest on Pieces Desktop and Pieces OS and then repeat the restoration process."]})}),"\n",(0,n.jsx)(s.h2,{id:"restoring-the-backup",children:"Restoring the Backup"}),"\n",(0,n.jsx)(s.h3,{id:"step-1-1",children:"Step 1"}),"\n",(0,n.jsx)(s.p,{children:"Please quit Pieces OS and Pieces Desktop and make sure neither are actively running."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["To quit Pieces OS, open your system tray in the bottom-right corner of your Desktop, then right-click the Pieces OS icon, and select ",(0,n.jsx)(s.code,{children:"Quit"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["To quit Pieces Desktop, right-click the app icon in your system toolbar and select ",(0,n.jsx)(s.code,{children:"Quit"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"step-2-1",children:"Step 2"}),"\n",(0,n.jsxs)(s.p,{children:["Locate the compressed Zip folder containing both your ",(0,n.jsx)(s.code,{children:"com.pieces.os"})," and ",(0,n.jsx)(s.code,{children:"com.pieces.pfd"})," backups."]}),"\n",(0,n.jsx)(s.h3,{id:"step-3-1",children:"Step 3"}),"\n",(0,n.jsxs)(t.A,{defaultValue:"macOS",values:[{label:"macOS",value:"macOS"},{label:"Windows/Linux",value:"windows-linux"}],children:[(0,n.jsx)(l.A,{value:"macOS",children:(0,n.jsxs)(s.p,{children:["Navigate back to the ",(0,n.jsx)(s.code,{children:"Library"})," folder either on the same or your different machine."]})}),(0,n.jsx)(l.A,{value:"windows-linux",children:(0,n.jsxs)(s.p,{children:["Navigate back to the ",(0,n.jsx)(s.code,{children:"Documents"})," folder either on the same or your different machine."]})})]}),"\n",(0,n.jsx)(s.h3,{id:"step-4-1",children:"Step 4"}),"\n",(0,n.jsx)(s.p,{children:"Unzip the compressed backup file."}),"\n",(0,n.jsx)(s.h3,{id:"step-5-1",children:"Step 5"}),"\n",(0,n.jsx)(s.p,{children:"This next step is critical. If you have an existing Pieces database already located in your current folder on your device, you will see a window similar to what\u2019s shown below."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Replace dialog popup",src:i(3795).A+"",width:"1150",height:"475"})}),"\n",(0,n.jsx)(s.p,{children:"This step is asking if you\u2019d like to override the existing database with your backup."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If you\u2019d like to override, select ",(0,n.jsx)(s.code,{children:"Replace the files in the destination"})]}),"\n",(0,n.jsxs)(s.li,{children:["If you don\u2019t want to override, abandon the process by pressing ",(0,n.jsx)(s.code,{children:"Stop"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"step-6-1",children:"Step 6"}),"\n",(0,n.jsx)(s.p,{children:"Lastly, if you chose to proceed with restoring the backup, you will need to restart both Pieces OS and Pieces Desktop for the changes to take effect."}),"\n",(0,n.jsx)(s.h3,{id:"support",children:"Support"}),"\n",(0,n.jsxs)(s.p,{children:["As always, if you run into issues or have feedback, please fill out ",(0,n.jsx)(s.a,{href:"https://getpieces.typeform.com/to/mCjBSIjF",children:"this quick form"})," or email us at ",(0,n.jsx)(s.a,{href:"mailto:support@pieces.app",children:"support@pieces.app"}),", and we\u2019ll be in touch as soon as possible!"]})]})}function x(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},4308:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/navigate_to_home-5486686f41688e371cb5c353505b18d4.png"},3795:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/replace_message-3a1080943985d4dbed789d1f46f0f29f.png"},8888:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/selecting_library_folder-186733a8d1467bc33c55e9fc01188e6f.png"}}]);