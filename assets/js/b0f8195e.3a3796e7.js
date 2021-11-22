"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[5398],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(n),u=i,m=k["".concat(p,".").concat(u)]||k[u]||d[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2674:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return k}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"ledger-initialization",title:"Ledger Initialization",pagination_prev:"external/getting-started/test-network/overview",pagination_next:"external/getting-started/interop/overview"},p=void 0,s={unversionedId:"external/getting-started/test-network/ledger-initialization",id:"external/getting-started/test-network/ledger-initialization",isDocsHomePage:!1,title:"Ledger Initialization",description:"\x3c!--",source:"@site/docs/external/getting-started/test-network/ledger-initialization.md",sourceDirName:"external/getting-started/test-network",slug:"/external/getting-started/test-network/ledger-initialization",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/ledger-initialization",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/test-network/ledger-initialization.md",tags:[],version:"current",frontMatter:{id:"ledger-initialization",title:"Ledger Initialization",pagination_prev:"external/getting-started/test-network/overview",pagination_next:"external/getting-started/interop/overview"},sidebar:"Documentation",previous:{title:"Component Overview",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/overview"},next:{title:"Testing Interoperaton Modes",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/overview"}},c=[{value:"Preparation for Data Sharing",id:"preparation-for-data-sharing",children:[{value:"Initializing the Fabric Networks",id:"initializing-the-fabric-networks",children:[{value:"Configuring the Fabric CLI",id:"configuring-the-fabric-cli",children:[],level:4},{value:"Bootstrapping Network and Application State",id:"bootstrapping-network-and-application-state",children:[],level:4}],level:3},{value:"Initializing the Corda Network",id:"initializing-the-corda-network",children:[{value:"Bootstrapping Network and Application State",id:"bootstrapping-network-and-application-state-1",children:[],level:4}],level:3},{value:"Next Steps",id:"next-steps",children:[],level:3}],level:2},{value:"Preparation for Asset Exchange",id:"preparation-for-asset-exchange",children:[{value:"Initializing the Fabric Networks",id:"initializing-the-fabric-networks-1",children:[{value:"Configuring the Fabric CLI",id:"configuring-the-fabric-cli-1",children:[],level:4},{value:"Bootstrapping Network and Application State",id:"bootstrapping-network-and-application-state-2",children:[],level:4}],level:3},{value:"Initializing the Corda Networks",id:"initializing-the-corda-networks",children:[],level:3},{value:"Next Steps",id:"next-steps-1",children:[],level:3}],level:2},{value:"Preparation for Asset Transfer",id:"preparation-for-asset-transfer",children:[{value:"Initializing the Fabric Networks",id:"initializing-the-fabric-networks-2",children:[{value:"Configuring the Fabric CLI",id:"configuring-the-fabric-cli-2",children:[],level:4},{value:"Bootstrapping Network and Application State",id:"bootstrapping-network-and-application-state-3",children:[],level:4}],level:3},{value:"Next Steps",id:"next-steps-2",children:[],level:3}],level:2}],d={toc:c};function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once the two Fabric networks and the Corda network are up and running along with their associated relays and drivers, we must initialize states in those networks to prepare them for interoperation. For the Fabric networks, this involves recording state in the channel ledgers, and for the Corda network, in the nodes' vaults. The configuration and bootstrapping takes different form depending on what ",(0,r.kt)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/interoperability-modes"},"interoperability mode")," you wish to test."),(0,r.kt)("h2",{id:"preparation-for-data-sharing"},"Preparation for Data Sharing"),(0,r.kt)("p",null,"Follow the below instructions to prepare your networks for data sharing tests."),(0,r.kt)("h3",{id:"initializing-the-fabric-networks"},"Initializing the Fabric Networks"),(0,r.kt)("p",null,"We use the Fabric CLI (",(0,r.kt)("inlineCode",{parentName:"p"},"fabric-cli"),") built earlier (in ",(0,r.kt)("inlineCode",{parentName:"p"},"samples/fabric/fabric-cli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"samples/fabric/go-cli"),") for this purpose."),(0,r.kt)("h4",{id:"configuring-the-fabric-cli"},"Configuring the Fabric CLI"),(0,r.kt)("p",null,"During bootstrap, the ledgers in both ",(0,r.kt)("inlineCode",{parentName:"p"},"network1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"network2")," must be populated with the following information scoped by the interoperation chaincode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access control policies governing requests from foreign networks"),(0,r.kt)("li",{parentName:"ul"},"Security group info for foreign networks (i.e., identities of network units and their membership providers' certificate chains)"),(0,r.kt)("li",{parentName:"ul"},"Verification policies for proofs supplied by foreign networks\nKnowledge of foreign networks that must be configured in this stage is as follows:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"network1")," has policies and security group info for ",(0,r.kt)("inlineCode",{parentName:"li"},"network2")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"network2")," has policies and security group info for ",(0,r.kt)("inlineCode",{parentName:"li"},"network1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network"),"\n(",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"Corda_Network")," will be launched later."),")\nThe ledgers must also be populated with sample key-value pairs for testing interoperation flows, scoped by the sample application chaincode.")),(0,r.kt)("p",null,"Prepare ",(0,r.kt)("inlineCode",{parentName:"p"},"fabric-cli")," for configuration suitably as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," (for the Node.js version) or the ",(0,r.kt)("inlineCode",{parentName:"li"},"samples/fabric/go-cli")," (for the Golang version) folder."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json")," file by copying the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.template.json")," and setting (or adding or removing) suitable values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For each network, the relay port and connection profile paths are specified using the keys ",(0,r.kt)("inlineCode",{parentName:"li"},"relayPort")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"connProfilePath")," respectively.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<PATH-TO-WEAVER>")," with the absolute path location of the ",(0,r.kt)("inlineCode",{parentName:"li"},"weaver-dlt-interoperability")," clone folder."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, leave the default values unchanged."))))),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"chaincode.json")," file by copying the ",(0,r.kt)("inlineCode",{parentName:"li"},"chaincode.json.template")," and leaving the default values unchanged. This file specified the arguments of the transaction to be locally invoked after fetching a remote view."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file by copying ",(0,r.kt)("inlineCode",{parentName:"li"},".env.template")," and setting the following parameter values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"MEMBER_CREDENTIAL_FOLDER=<PATH-TO-WEAVER>/samples/fabric/fabric-cli/src/data/credentials\nDEFAULT_APPLICATION_CHAINCODE=<chaincode-name>\nDEFAULT_APPLICATION_FUNC=<function-name>\nCONFIG_PATH=./config.json\nCHAINCODE_PATH=./chaincode.json\n"))),(0,r.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the Docker containers:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"MEMBER_CREDENTIAL_FOLDER=<PATH-TO-WEAVER>/samples/fabric/fabric-cli/src/data/credentials_docker\nDEFAULT_APPLICATION_CHAINCODE=<chaincode-name>\nDEFAULT_APPLICATION_FUNC=<function-name>\nCONFIG_PATH=./config.json\nCHAINCODE_PATH=./chaincode.json\n"))),(0,r.kt)("li",{parentName:"ul"},"In each case, replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<PATH-TO-WEAVER>")," with the location of your clone of Weaver and ",(0,r.kt)("inlineCode",{parentName:"li"},"<chaincode-name>")," with the name of the deployed chaincode, either ",(0,r.kt)("inlineCode",{parentName:"li"},"simpleasset")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"simpleassetwithacl"),"."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"simplestate")," is deployed, set ",(0,r.kt)("inlineCode",{parentName:"li"},"<function-name>")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Create"),", and if ",(0,r.kt)("inlineCode",{parentName:"li"},"simpleassetwithacl")," if deployed, set ",(0,r.kt)("inlineCode",{parentName:"li"},"<function-name>")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateFromRemote"),"."),(0,r.kt)("li",{parentName:"ul"},"Leave the default values unchanged for the other parameters."))),(0,r.kt)("li",{parentName:"ul"},"Run the following command:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli env set-file ./.env\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Note"),": If you don't set the ",(0,r.kt)("inlineCode",{parentName:"li"},"CONFIG_PATH")," environment variable in ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," appropriately, then you should also run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli config set-file ./config.json\n")))),(0,r.kt)("h4",{id:"bootstrapping-network-and-application-state"},"Bootstrapping Network and Application State"),(0,r.kt)("p",null,"Finally, to prepare both ",(0,r.kt)("inlineCode",{parentName:"p"},"network1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"network2")," for interoperation, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli configure all network1 network2\n")),(0,r.kt)("h3",{id:"initializing-the-corda-network"},"Initializing the Corda Network"),(0,r.kt)("p",null,"Once the Corda network is launched, the client application (built earlier) needs to be exercised to generate network (ledger) state in preparation to test interoperation flows."),(0,r.kt)("h4",{id:"bootstrapping-network-and-application-state-1"},"Bootstrapping Network and Application State"),(0,r.kt)("p",null,"Just as we did for either Fabric network, the Corda network ledger (or ",(0,r.kt)("em",{parentName:"p"},"vault")," on each node) must be initialized with access control policies, verification policies, and security group information for the two Fabric networks. Further, sample key-value pairs need to be recorded so we can later share them with a Fabric network via an interoperation flow."),(0,r.kt)("p",null,"Bootstrap the Corda network and application states as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder."),(0,r.kt)("li",{parentName:"ul"},"Run the following: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make initialise-vault\n"))),(0,r.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the Docker containers:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make initialise-vault-docker\n")))))),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"The test networks are now configured and their ledgers are initialized. You can now run the ",(0,r.kt)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/data-sharing"},"data sharing flows"),"."),(0,r.kt)("h2",{id:"preparation-for-asset-exchange"},"Preparation for Asset Exchange"),(0,r.kt)("p",null,"Follow the below instructions to prepare your networks for asset exchange tests."),(0,r.kt)("h3",{id:"initializing-the-fabric-networks-1"},"Initializing the Fabric Networks"),(0,r.kt)("p",null,"We use the Fabric CLI (",(0,r.kt)("inlineCode",{parentName:"p"},"fabric-cli"),") built earlier (in ",(0,r.kt)("inlineCode",{parentName:"p"},"samples/fabric/fabric-cli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"samples/fabric/go-cli"),") for this purpose."),(0,r.kt)("h4",{id:"configuring-the-fabric-cli-1"},"Configuring the Fabric CLI"),(0,r.kt)("p",null,"The ledgers must be populated with sample key-value pairs for testing interoperation flows, scoped by the sample application chaincode."),(0,r.kt)("p",null,"Prepare ",(0,r.kt)("inlineCode",{parentName:"p"},"fabric-cli")," for configuration suitably as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," (for the Node.js version) or the ",(0,r.kt)("inlineCode",{parentName:"li"},"samples/fabric/go-cli")," (for the Golang version) folder."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json")," file by copying the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.template.json")," and setting (or adding or removing) suitable values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For each network, the relay port and connection profile paths are specified using the keys ",(0,r.kt)("inlineCode",{parentName:"li"},"relayPort")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"connProfilePath")," respectively.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<PATH-TO-WEAVER>")," with the absolute path location of the ",(0,r.kt)("inlineCode",{parentName:"li"},"weaver-dlt-interoperability")," clone folder."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"chaincode")," attribute in each network to the deployed chaincode name (",(0,r.kt)("inlineCode",{parentName:"li"},"simpleasset")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"simpleassetandinterop")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"simpleassettransfer"),")."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, leave the default values unchanged."))))),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file by copying ",(0,r.kt)("inlineCode",{parentName:"li"},".env.template")," and setting following parameter values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"MEMBER_CREDENTIAL_FOLDER=<PATH-TO-WEAVER>/samples/fabric/fabric-cli/src/data/credentials\nCONFIG_PATH=./config.json\n"))),(0,r.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the Docker containers:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"MEMBER_CREDENTIAL_FOLDER=<PATH-TO-WEAVER>/samples/fabric/fabric-cli/src/data/credentials_docker\nCONFIG_PATH=./config.json\n"))),(0,r.kt)("li",{parentName:"ul"},"In each case, replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<PATH-TO-WEAVER>")," with the location of your clone of Weaver."),(0,r.kt)("li",{parentName:"ul"},"Leave the default values unchanged for the other parameters."))),(0,r.kt)("li",{parentName:"ul"},"Run the following command:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli env set-file ./.env\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Note"),": If you don't set the ",(0,r.kt)("inlineCode",{parentName:"li"},"CONFIG_PATH")," environment variable in ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," appropriately, then you should also run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli config set-file ./config.json\n")))),(0,r.kt)("h4",{id:"bootstrapping-network-and-application-state-2"},"Bootstrapping Network and Application State"),(0,r.kt)("p",null,"Finally, to prepare both ",(0,r.kt)("inlineCode",{parentName:"p"},"network1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"network2")," for interoperation, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/initAsset.sh\n")),(0,r.kt)("h3",{id:"initializing-the-corda-networks"},"Initializing the Corda Networks"),(0,r.kt)("p",null,"Corda Network needs to be initialized with assets for asset-exchange to be performed:\nBootstrap the Corda network and application states as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"samples/corda/corda-simple-application")," folder."),(0,r.kt)("li",{parentName:"ul"},"Run the following: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"cordaSimpleApplication")," app, run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./scripts/initAsset.sh\n")))))),(0,r.kt)("h3",{id:"next-steps-1"},"Next Steps"),(0,r.kt)("p",null,"The test networks are now configured and their ledgers are initialized. You can now run the ",(0,r.kt)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange"},"asset exchange flows"),"."),(0,r.kt)("h2",{id:"preparation-for-asset-transfer"},"Preparation for Asset Transfer"),(0,r.kt)("p",null,"Follow the below instructions to prepare your networks for asset exchange tests."),(0,r.kt)("h3",{id:"initializing-the-fabric-networks-2"},"Initializing the Fabric Networks"),(0,r.kt)("p",null,"We use the Fabric CLI (",(0,r.kt)("inlineCode",{parentName:"p"},"fabric-cli"),") built earlier (in ",(0,r.kt)("inlineCode",{parentName:"p"},"samples/fabric/fabric-cli")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"samples/fabric/go-cli"),") for this purpose."),(0,r.kt)("h4",{id:"configuring-the-fabric-cli-2"},"Configuring the Fabric CLI"),(0,r.kt)("p",null,"During bootstrap, the ledgers in both ",(0,r.kt)("inlineCode",{parentName:"p"},"network1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"network2")," must be populated with the following information scoped by the interoperation chaincode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access control policies governing requests from foreign networks"),(0,r.kt)("li",{parentName:"ul"},"Security group info for foreign networks (i.e., identities of network units and their membership providers' certificate chains)"),(0,r.kt)("li",{parentName:"ul"},"Verification policies for proofs supplied by foreign networks\nKnowledge of foreign networks that must be configured in this stage is as follows:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"network1")," has policies and security group info for ",(0,r.kt)("inlineCode",{parentName:"li"},"network2")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"network2")," has policies and security group info for ",(0,r.kt)("inlineCode",{parentName:"li"},"network1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Corda_Network"),"\n(",(0,r.kt)("em",{parentName:"li"},"The Corda sample application doesn't support asset transfer yet, but there is no harm in including it above."),")\nThe ledgers must also be populated with sample key-value pairs for testing interoperation flows, scoped by the sample application chaincode.")),(0,r.kt)("p",null,"Prepare ",(0,r.kt)("inlineCode",{parentName:"p"},"fabric-cli")," for configuration suitably as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," folder (",(0,r.kt)("em",{parentName:"li"},"the Go CLI doesn't support asset transfer yet"),")."),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json")," file by copying the ",(0,r.kt)("inlineCode",{parentName:"li"},"config.template.json")," and setting (or adding or removing) suitable values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For each network, the relay port and connection profile paths are specified using the keys ",(0,r.kt)("inlineCode",{parentName:"li"},"relayPort")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"connProfilePath")," respectively.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<PATH-TO-WEAVER>")," with the absolute path location of the ",(0,r.kt)("inlineCode",{parentName:"li"},"weaver-dlt-interoperability")," clone folder."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"chaincode")," attribute in each network to ",(0,r.kt)("inlineCode",{parentName:"li"},"simpleassettransfer"),"."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"aclPolicyPrincipalType")," attribute in ",(0,r.kt)("inlineCode",{parentName:"li"},"network2")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"ca"),"."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, leave the default values unchanged."))))),(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file by copying ",(0,r.kt)("inlineCode",{parentName:"li"},".env.template")," and setting the following parameter values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the host machine:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"MEMBER_CREDENTIAL_FOLDER=<PATH-TO-WEAVER>/samples/fabric/fabric-cli/src/data/credentials\nDEFAULT_APPLICATION_CHAINCODE=simpleassettransfer\nCONFIG_PATH=./config.json\nCHAINCODE_PATH=./chaincode.json\n"))),(0,r.kt)("li",{parentName:"ul"},"If Relays and Drivers are deployed in the Docker containers:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"MEMBER_CREDENTIAL_FOLDER=<PATH-TO-WEAVER>/samples/fabric/fabric-cli/src/data/credentials_docker\nDEFAULT_APPLICATION_CHAINCODE=simpleassettransfer\nCONFIG_PATH=./config.json\nCHAINCODE_PATH=./chaincode.json\n"))),(0,r.kt)("li",{parentName:"ul"},"In each case, replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<PATH-TO-WEAVER>")," with the location of your clone of Weaver."),(0,r.kt)("li",{parentName:"ul"},"Leave the default values unchanged for the other parameters."))),(0,r.kt)("li",{parentName:"ul"},"Run the following command:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./bin/fabric-cli env set-file ./.env\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Note"),": If you don't set the ",(0,r.kt)("inlineCode",{parentName:"li"},"CONFIG_PATH")," environment variable in ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," appropriately, then you should also run:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./bin/fabric-cli config set-file ./config.json\n")))),(0,r.kt)("h4",{id:"bootstrapping-network-and-application-state-3"},"Bootstrapping Network and Application State"),(0,r.kt)("p",null,"Create appropriate access control and verification policies for ",(0,r.kt)("inlineCode",{parentName:"p"},"network1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"network2")," by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli configure create all --local-network=network1\n./bin/fabric-cli configure create all --local-network=network2\n")),(0,r.kt)("p",null,"Load access control and verification policies onto the ledgers of ",(0,r.kt)("inlineCode",{parentName:"p"},"network1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"network2")," by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli configure network --local-network=network1\n./bin/fabric-cli configure network --local-network=network2\n")),(0,r.kt)("p",null,"Initialize bond and token asset states and ownerships on the ",(0,r.kt)("inlineCode",{parentName:"p"},"network1")," ledger by running the following (this step will also create a user ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"network1")," and a user ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"network2"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/initAssetsForTransfer.sh\n")),(0,r.kt)("h3",{id:"next-steps-2"},"Next Steps"),(0,r.kt)("p",null,"The test networks are now configured and their ledgers are initialized. You can now run the ",(0,r.kt)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-transfer"},"asset transfer flows"),"."))}k.isMDXComponent=!0}}]);