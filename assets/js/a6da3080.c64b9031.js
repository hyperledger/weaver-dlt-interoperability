"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[3145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>N});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=i,N=d["".concat(s,".").concat(k)]||d[k]||m[k]||r;return n?a.createElement(N,l(l({ref:t},c),{},{components:n})):a.createElement(N,l({ref:t},c))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},474:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={id:"asset-exchange",title:"Asset Exchange",pagination_prev:"external/getting-started/interop/overview",pagination_next:"external/getting-started/enabling-weaver-network/overview"},l=void 0,o={unversionedId:"external/getting-started/interop/asset-exchange",id:"external/getting-started/interop/asset-exchange",isDocsHomePage:!1,title:"Asset Exchange",description:"\x3c!--",source:"@site/docs/external/getting-started/interop/asset-exchange.md",sourceDirName:"external/getting-started/interop",slug:"/external/getting-started/interop/asset-exchange",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/interop/asset-exchange.md",tags:[],version:"current",frontMatter:{id:"asset-exchange",title:"Asset Exchange",pagination_prev:"external/getting-started/interop/overview",pagination_next:"external/getting-started/enabling-weaver-network/overview"},sidebar:"Documentation",previous:{title:"Testing Interoperation Modes",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/overview"},next:{title:"Enabling Weaver in Existing DLT Applications",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/overview"}},s=[{value:"Fabric with Fabric",id:"fabric-with-fabric",children:[],level:2},{value:"Fabric with Corda",id:"fabric-with-corda",children:[],level:2},{value:"Corda with Corda",id:"corda-with-corda",children:[],level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document lists sample ways in which you can exercise the asset-exchange interoperation protocol on the test network ",(0,i.kt)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/overview"},"launched earlier"),"."),(0,i.kt)("p",null,"For this scenario, you only need the networks to be running with the appropriate contracts deployed and the ledgers bootstrapped. You do not need to run relays and drivers. You can run the following combinations of exchanges (",(0,i.kt)("em",{parentName:"p"},"other combinations of DLTs will be supported soon"),")."),(0,i.kt)("h2",{id:"fabric-with-fabric"},"Fabric with Fabric"),(0,i.kt)("p",null,"One Fabric network transfers a bond from Alice to Bob in exchange for a transfer of tokens from Bob to Alice in the other network\nEnsure that one of the following chaincodes have been deployed in both networks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"simpleasset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"simpleassetandinterop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"simpleassettransfer"))),(0,i.kt)("p",null,"Run the following steps:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"The hash used in following steps can be replaced by any valid ",(0,i.kt)("inlineCode",{parentName:"td"},"SHA256")," hash.")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to either the ",(0,i.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," folder or the ",(0,i.kt)("inlineCode",{parentName:"li"},"samples/fabric/go-cli")," folder in your clone of the Weaver repository."),(0,i.kt)("li",{parentName:"ol"},"Run the following to verify the status of the assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in the two networks:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh 2\n"))),(0,i.kt)("li",{parentName:"ol"},"Complete the asset exchange in either of the two different ways:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using a single command:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger exchange of bond ",(0,i.kt)("inlineCode",{parentName:"li"},"bond01:a03")," owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," units of tokens ",(0,i.kt)("inlineCode",{parentName:"li"},"token1")," owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange-all --network1=network1 --network2=network2 --secret=secrettext --timeout-duration=100 alice:bond01:a03:bob:token1:100\n"))),(0,i.kt)("li",{parentName:"ul"},"To verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," now owns a bond in exchange for ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," owning some tokens, run the following:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh 2\n"))))),(0,i.kt)("li",{parentName:"ul"},"Using step-by-step commands:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Generate Secret-Hash Pair using following command (prints hash in base64):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./bin/fabric-cli hash --hash_fn=SHA256 secrettext\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"bond01:a03")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange lock --timeout-duration=3600 --locker=alice --recipient=bob --hashBase64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs= --target-network=network1 --param=bond01:a03\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s lock:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange is-locked --locker=alice --recipient=bob --target-network=network1 --param=bond01:a03\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," units of ",(0,i.kt)("inlineCode",{parentName:"li"},"token1")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange lock --fungible --timeout-duration=1800 --locker=bob --recipient=alice --hashBase64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs= --target-network=network2 --param=token1:100\n")),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," printed as output in above command. The output line containing ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," (text in base64 after ",(0,i.kt)("inlineCode",{parentName:"li"},"Contract Id:"),") would like this:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u2139 Fungible Asset Locked with Contract Id: E0JZq8Z+eS//2Bt4WU0pU210MvNgDC2hdUT1RgszOq0=, preimage: null, hashvalue: ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs=\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s lock:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange is-locked --fungible --locker=bob --recipient=alice --target-network=network2 --contract-id=<contract-id>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," units of ",(0,i.kt)("inlineCode",{parentName:"li"},"token1")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange claim --fungible --recipient=alice --target-network=network2 --contract-id=<contract-id> --secret=<hash-pre-image>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"bond01:a03")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange claim --recipient=bob --locker=alice --target-network=network1 --param=bond01:a03 --secret=<hash-pre-image>\n")))),"The above steps complete a successful asset exchange between two Fabric networks.\nIn addition to the above commands, following commands can be run if specified timeout has expired and the locked asset remains unclaimed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," wants to unlock the bond asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s re-claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"bond01:a03")," locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange unlock --locker=alice --recipient=bob --target-network=network1 --param=bond01:a03\n"))),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," wants to unlock the token asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s re-claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"token1:100")," locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange unlock --fungible --locker=bob --target-network=network2 --contract-id=<contract-id>\n")))))))),(0,i.kt)("h2",{id:"fabric-with-corda"},"Fabric with Corda"),(0,i.kt)("p",null,"We will demonstrate asset exchange of a bond in Fabric ",(0,i.kt)("inlineCode",{parentName:"p"},"network1")," with tokens on ",(0,i.kt)("inlineCode",{parentName:"p"},"Corda_Network"),".\nFor Fabric commands, run from ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/fabric/fabric-cli")," folder, and for Corda commands, run from ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/corda/corda-simple-application")," folder. Here ",(0,i.kt)("inlineCode",{parentName:"p"},"Alice")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Bob")," in Fabric ",(0,i.kt)("inlineCode",{parentName:"p"},"network1")," correspond to ",(0,i.kt)("inlineCode",{parentName:"p"},"PartyA")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=10006"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"PartyB")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=10009"),") in ",(0,i.kt)("inlineCode",{parentName:"p"},"Corda_Network")," respectively. Following are the step-by-step asset exchange process:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"The hash used in following steps can be replaced by any valid ",(0,i.kt)("inlineCode",{parentName:"td"},"SHA256")," hash.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the following to verify the status of the bond assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in the Fabric network ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," folder:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify the status of the assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate Secret-Hash Pair using following command (prints hash in base64):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"./bin/fabric-cli hash --hash_fn=SHA256 secrettext\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"bond01:a03")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," for 60 mins:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange lock --timeout-duration=3600 --locker=alice --recipient=bob --hashBase64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs= --target-network=network1 --param=bond01:a03\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s lock:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange is-locked --locker=alice --recipient=bob --target-network=network1 --param=bond01:a03\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," units of token type ",(0,i.kt)("inlineCode",{parentName:"li"},"t1")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network")," for 30 mins:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'CORDA_PORT=10009 ./clients/build/install/clients/bin/clients lock-asset --fungible --hashBase64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs= --timeout=1800 --recipient="O=PartyA,L=London,C=GB" --param=t1:50\n')),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," displayed after successful execution of the command, will be used in next steps. The output containing ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," would like this:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"HTLC Lock State created with contract ID Right(b=10448674_80d2bee7-5a5d-45df-b14e-60bac4ba1bf3).\n")),(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," is the alphanumeric text (with underscore and hyphens) after ",(0,i.kt)("inlineCode",{parentName:"li"},"b=")," within parenthesis."),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB"),"'s lock (can be verified by both parties):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10006 ./clients/build/install/clients/bin/clients is-asset-locked --contract-id=<contract-id>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," units of token type ",(0,i.kt)("inlineCode",{parentName:"li"},"t1")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10006 ./clients/build/install/clients/bin/clients claim-asset --secret=secrettext --contract-id=<contract-id>\n")),(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," can see its node's logs to get the revealed hash preimage, and use it to claim the bond in the Fabric network."),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"bob"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"bond01:a03")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange claim --recipient=bob --locker=alice --target-network=network1 --param=bond01:a03 --secret=secrettext\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify the status of the bond assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in the Fabric network ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," folder:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify the status of the assets owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh\n")))),(0,i.kt)("p",null,"The above steps complete a successful asset exchange between Fabric and Corda networks.\nIn addition to the above commands, following commands can be run if specified timeout has expired and the locked asset remains unclaimed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," wants to unlock the bond asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"alice"),"'s re-claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"bond01:a03")," locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset exchange unlock --locker=alice --recipient=bob --target-network=network1 --param=bond01:a03\n"))),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," wants to unlock the token asset, run the following to trigger unlock for ",(0,i.kt)("inlineCode",{parentName:"li"},"t1:50")," locked in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10009 ./clients/build/install/clients/bin/clients unlock-asset --contract-id=<contract-id>\n")))),(0,i.kt)("h2",{id:"corda-with-corda"},"Corda with Corda"),(0,i.kt)("p",null,"We will demonstrate asset exchange of a tokens in ",(0,i.kt)("inlineCode",{parentName:"p"},"Corda_Network")," with tokens on ",(0,i.kt)("inlineCode",{parentName:"p"},"Corda_Network2"),". Here ",(0,i.kt)("inlineCode",{parentName:"p"},"PartyA")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=10006"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"PartyB")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=10009"),") in ",(0,i.kt)("inlineCode",{parentName:"p"},"Corda_Network")," correspond to ",(0,i.kt)("inlineCode",{parentName:"p"},"PartyA")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=30006"),") and ",(0,i.kt)("inlineCode",{parentName:"p"},"PartyB")," (",(0,i.kt)("inlineCode",{parentName:"p"},"CORDA_PORT=30009"),") in ",(0,i.kt)("inlineCode",{parentName:"p"},"Corda_Network2")," respectively. Following are the step-by-step asset exchange process:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"The hash used in following steps can be replaced by any valid ",(0,i.kt)("inlineCode",{parentName:"td"},"SHA256")," hash.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder. "),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify the status of the tokens owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh 2\n"))),(0,i.kt)("li",{parentName:"ul"},"Generate Secret-Hash Pair using following command (prints hash in base64):")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./clients/build/install/clients/bin/clients utils hash --hash-fn=SHA256 -s secrettext\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"30")," units of token type ",(0,i.kt)("inlineCode",{parentName:"li"},"t1")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network")," for 60 mins:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'CORDA_PORT=10006 ./clients/build/install/clients/bin/clients lock-asset --fungible --hashBase64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs= --timeout=3600 --recipient="O=PartyB,L=London,C=GB" --param=t1:30\n')),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," displayed after successful execution of the command, will be used in next steps. The output containing ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," would like this:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"HTLC Lock State created with contract ID Right(b=10448674_80d2bee7-5a5d-45df-b14e-60bac4ba1bf3).\n")),(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," is the alphanumeric text (with underscore and hyphens) after ",(0,i.kt)("inlineCode",{parentName:"li"},"b=")," within parenthesis. Let's denote it ",(0,i.kt)("inlineCode",{parentName:"li"},"<contract-id-1>"),"."),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA"),"'s lock (can be verified by both parties):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10009 ./clients/build/install/clients/bin/clients is-asset-locked --contract-id=<contract-id-1>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," locking ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," units of token type ",(0,i.kt)("inlineCode",{parentName:"li"},"t2")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network2")," for 30 mins:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'CORDA_PORT=30009 ./clients/build/install/clients/bin/clients lock-asset --fungible --hashBase64=ivHErp1x4bJDKuRo6L5bApO/DdoyD/dG0mAZrzLZEIs= --timeout=1800 --recipient="O=PartyA,L=London,C=GB" --param=t2:50\n')),"Note the ",(0,i.kt)("inlineCode",{parentName:"li"},"contract-id")," displayed after successful execution of the command, will be used in next steps. Let's denote it ",(0,i.kt)("inlineCode",{parentName:"li"},"<contract-id-2>"),"."),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB"),"'s lock (can be verified by both parties):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=30006 ./clients/build/install/clients/bin/clients is-asset-locked --contract-id=<contract-id-2>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," units of token type ",(0,i.kt)("inlineCode",{parentName:"li"},"t2")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=30006 ./clients/build/install/clients/bin/clients claim-asset --secret=secrettext --contract-id=<contract-id-2>\n")),(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," can see its node's logs to get the revealed hash preimage, and use it to claim the bond in the Fabric network."),(0,i.kt)("li",{parentName:"ul"},"Run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB"),"'s claim for ",(0,i.kt)("inlineCode",{parentName:"li"},"30")," units of token type ",(0,i.kt)("inlineCode",{parentName:"li"},"t1")," locked by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10009 ./clients/build/install/clients/bin/clients claim-asset --secret=secrettext --contract-id=<contract-id-1>\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following to verify the status of the tokens owned by ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getAssetStatus.sh 2\n")))),(0,i.kt)("p",null,"The above steps complete a successful asset exchange between two Corda networks.\nIn addition to the above commands, following commands can be run if specified timeout has expired and the locked asset remains unclaimed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA")," wants to unlock the token ",(0,i.kt)("inlineCode",{parentName:"li"},"t1:30")," asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyA"),"'s re-claim in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=10006 ./clients/build/install/clients/bin/clients unlock-asset --contract-id=<contract-id-1>\n"))),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB")," wants to unlock the token ",(0,i.kt)("inlineCode",{parentName:"li"},"t2:50")," asset, run the following to trigger ",(0,i.kt)("inlineCode",{parentName:"li"},"PartyB"),"'s re-claim in ",(0,i.kt)("inlineCode",{parentName:"li"},"Corda_Network2"),":",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CORDA_PORT=30009 ./clients/build/install/clients/bin/clients unlock-asset --contract-id=<contract-id-2>\n")))))}c.isMDXComponent=!0}}]);