"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[676],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>S});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,S=d["".concat(p,".").concat(u)]||d[u]||g[u]||a;return t?r.createElement(S,s(s({ref:n},l),{},{components:t})):r.createElement(S,s({ref:n},l))}));function S(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1518:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={},s=void 0,o={unversionedId:"internal/development/cordapp-interop/cordapp-interop-api-assets",id:"internal/development/cordapp-interop/cordapp-interop-api-assets",isDocsHomePage:!1,title:"cordapp-interop-api-assets",description:"\x3c!--",source:"@site/docs/internal/development/cordapp-interop/cordapp-interop-api-assets.md",sourceDirName:"internal/development/cordapp-interop",slug:"/internal/development/cordapp-interop/cordapp-interop-api-assets",permalink:"/weaver-dlt-interoperability/docs/internal/development/cordapp-interop/cordapp-interop-api-assets",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/internal/development/cordapp-interop/cordapp-interop-api-assets.md",tags:[],version:"current",frontMatter:{}},p=[],c={toc:p};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"id: cordapp-interop-api-assets\ntitle: API Assets"),(0,i.kt)("hr",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class AccessControlIssueRequestState(\n        linearId: UniqueIdentifier = UniqueIdentifier(),\n        externalNetworkId: String,\n        externalNetworkCertificates: List<String>,\n        requestApprovals: List<DigitalSignature.WithKey>,\n        stateLinearId: UniqueIdentifier,\n        participants: List<Party>\n) : LinearState\n\nclass FormattedResponse(\n        organizationName: String,\n        decryptedPayload: String,\n        certString: String,\n        signatureBytes: ByteArray,\n        message: ByteArray,\n        publicKey: PublicKey\n)\n\nclass RelayRequestObject(\n        operationType: String,\n        policy: String,\n        function: String,\n        arguments: List<String>,\n        clientOrganizationId: String,\n        clientCertificate: String,\n        clientSignature: String\n)\n\nclass RelayResponseObject(\n        requestId: String,\n        status: String,\n        response: List<NodeResponse>?\n)\n\nclass NodeResponse(\n        proposal: String,\n        proposalResponse: String\n)\n\nclass RelayRequestId(\n        requestId: String\n)\n\nclass ExternalStateRequest(\n        url: String,\n        path: String,\n        externalNetworkId: String,\n        requestId: String,\n        function: String,\n        participants: List<String>,\n        mock: String?\n)\n\nclass ForeignNetworkMapInformationIntermediateResponse(\n        CarrierMSP:  FNNode,\n        SellerMSP: FNNode\n)\n\nclass FNNode(\n        admins: List<String>,\n        crypto_config: CryptoConfig,\n        fabric_node_ous: String?,\n        intermediate_certs: List<String>,\n        name: String,\n        organizational_unit_identifiers: List<String>,\n        revocation_list: List<String>,\n        root_certs: List<String>,\n        signing_identity: String?,\n        tls_intermediate_certs: List<String>,\n        tls_root_certs: List<String>\n)\n\nclass CryptoConfig(\n        identity_identifier_hash_function: String,\n        signature_hash_family: String\n)\n\nclass TxIdResponseObject(\n        queryResponse: List<List<StateQueryResponse>?>\n)\n\nclass LinearIdResponseObject(\n        queryResponse: List<StateQueryResponse>\n)\n\nclass QueryResponse(\n        state: String,\n        linearId: String\n)\n\nclass ParsedQueryObject(\n        linearId: UniqueIdentifier,\n        txId: String?\n)\n\nclass ExternalNetworkRequest(\n        externalNetworkId: String,\n        organizationName: String,\n        requesterCertificate: String,\n        requesterSignature: String,\n        stateLinearId: String\n)\n\nclass NetworkMapObject(\n        networkId: String,\n        nodes: List<Node>\n)\n\nclass Node(\n        name: String,\n        address: String,\n        hierarchicalCerts: List<ByteArray>,\n        hierarchicalCANames: List<String>\n)\n\nclass ExternalNetworkRequestWithTxId(\n        externalNetworkId: String,\n        organizationName: String,\n        requesterCertificate: String,\n        requesterSignature: String,\n        txId: String\n)\n\nclass FNIMStateRequest(\n        networkId: String,\n        topology: List<FNNode>,\n        participants: List<String>\n)\n\nclass FNIMStateResponse(\n        linearId: UniqueIdentifier,\n        networkId: String,\n        topology: List<FNNode>,\n        participants: List<String>\n)\n\nclass AccessControlIssueRequestStateRequest(\n        externalNetworkId: String,\n        externalNetworkCertificates: List<String>,\n        stateLinearId: String,\n        participants: List<String>\n)\n\nclass AccessControlIssueRequestStateResponse(\n        linearId: UniqueIdentifier,\n        externalNetworkId: String,\n        externalNetworkCertificates: List<String>,\n        requestApprovals: List<String>,\n        stateLinearId: String,\n        participants: List<String>\n)\n\nclass AccessControlStateResponse(\n        linearId: UniqueIdentifier,\n        externalNetworkId: String,\n        externalNetworkCertificates: List<String>,\n        stateLinearId: String,\n        participants: List<String>\n)\n")))}l.isMDXComponent=!0}}]);