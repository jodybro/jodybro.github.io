(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,s,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},98183,(e,s,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={assign:function(){return o},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return l}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});function r(e){let s={};for(let[t,a]of e.entries()){let e=s[t];void 0===e?s[t]=a:Array.isArray(e)?e.push(a):s[t]=[e,a]}return s}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let s=new URLSearchParams;for(let[t,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)s.append(t,i(e));else s.set(t,i(a));return s}function o(e,...s){for(let t of s){for(let s of t.keys())e.delete(s);for(let[s,a]of t.entries())e.append(s,a)}return e}},95057,(e,s,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return o}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let r=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function l(e){let{auth:s,hostname:t}=e,a=e.protocol||"",n=e.pathname||"",l=e.hash||"",o=e.query||"",c=!1;s=s?encodeURIComponent(s).replace(/%3A/i,":")+"@":"",e.host?c=s+e.host:t&&(c=s+(~t.indexOf(":")?`[${t}]`:t),e.port&&(c+=":"+e.port)),o&&"object"==typeof o&&(o=String(r.urlQueryToSearchParams(o)));let d=e.search||o&&`?${o}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||i.test(a))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${a}${c}${n}${d}${l}`}let o=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},18581,(e,s,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(71645);function n(e,s){let t=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=t.current;e&&(t.current=null,e());let s=n.current;s&&(n.current=null,s())}else e&&(t.current=r(e,a)),s&&(n.current=r(s,a))},[e,s])}function r(e,s){if("function"!=typeof e)return e.current=s,()=>{e.current=null};{let t=e(s);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),s.exports=t.default)},18967,(e,s,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return N},MissingStaticPage:function(){return j},NormalizeError:function(){return v},PageNotFoundError:function(){return b},SP:function(){return g},ST:function(){return f},WEB_VITALS:function(){return r},execOnce:function(){return i},getDisplayName:function(){return m},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return o},isResSent:function(){return u},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return y}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let s,t=!1;return(...a)=>(t||(t=!0,s=e(...a)),s)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>l.test(e);function c(){let{protocol:e,hostname:s,port:t}=window.location;return`${e}//${s}${t?":"+t:""}`}function d(){let{href:e}=window.location,s=c();return e.substring(s.length)}function m(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function h(e){let s=e.split("?");return s[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(s[1]?`?${s.slice(1).join("?")}`:"")}async function p(e,s){let t=s.res||s.ctx&&s.ctx.res;if(!e.getInitialProps)return s.ctx&&s.Component?{pageProps:await p(s.Component,s.ctx)}:{};let a=await e.getInitialProps(s);if(t&&u(t))return a;if(!a)throw Object.defineProperty(Error(`"${m(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let g="u">typeof performance,f=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class v extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class j extends Error{constructor(e,s){super(),this.message=`Failed to load static file for page: ${e} ${s}`}}class N extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,s,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return r}});let a=e.r(18967),n=e.r(52817);function r(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let s=(0,a.getLocationOrigin)(),t=new URL(e,s);return t.origin===s&&(0,n.hasBasePath)(t.pathname)}catch(e){return!1}}},84508,(e,s,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},22016,(e,s,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={default:function(){return x},useLinkStatus:function(){return b}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let r=e.r(90809),i=e.r(43476),l=r._(e.r(71645)),o=e.r(95057),c=e.r(8372),d=e.r(18581),m=e.r(18967),u=e.r(5550);e.r(33525);let h=e.r(91949),p=e.r(73668),g=e.r(9396);function f(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}function x(s){var t;let a,n,r,[o,x]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),b=(0,l.useRef)(null),{href:j,as:N,children:y,prefetch:C=null,passHref:w,replace:A,shallow:E,scroll:R,onClick:_,onMouseEnter:T,onTouchStart:P,legacyBehavior:$=!1,onNavigate:k,ref:I,unstable_dynamicOnHover:D,...S}=s;a=y,$&&("string"==typeof a||"number"==typeof a)&&(a=(0,i.jsx)("a",{children:a}));let O=l.default.useContext(c.AppRouterContext),H=!1!==C,M=!1!==C?null===(t=C)||"auto"===t?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,{href:L,as:U}=l.default.useMemo(()=>{let e=f(j);return{href:e,as:N?f(N):e}},[j,N]);if($){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=l.default.Children.only(a)}let G=$?n&&"object"==typeof n&&n.ref:I,K=l.default.useCallback(e=>(null!==O&&(b.current=(0,h.mountLinkInstance)(e,L,O,M,H,x)),()=>{b.current&&((0,h.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,h.unmountPrefetchableInstance)(e)}),[H,L,O,M,x]),z={ref:(0,d.useMergedRef)(K,G),onClick(s){$||"function"!=typeof _||_(s),$&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(s),!O||s.defaultPrevented||function(s,t,a,n,r,i,o){if("u">typeof window){let c,{nodeName:d}=s.currentTarget;if("A"===d.toUpperCase()&&((c=s.currentTarget.getAttribute("target"))&&"_self"!==c||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.nativeEvent&&2===s.nativeEvent.which)||s.currentTarget.hasAttribute("download"))return;if(!(0,p.isLocalURL)(t)){r&&(s.preventDefault(),location.replace(t));return}if(s.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:m}=e.r(99781);l.default.startTransition(()=>{m(a||t,r?"replace":"push",i??!0,n.current)})}}(s,L,U,b,A,R,k)},onMouseEnter(e){$||"function"!=typeof T||T(e),$&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),O&&H&&(0,h.onNavigationIntent)(e.currentTarget,!0===D)},onTouchStart:function(e){$||"function"!=typeof P||P(e),$&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),O&&H&&(0,h.onNavigationIntent)(e.currentTarget,!0===D)}};return(0,m.isAbsoluteUrl)(U)?z.href=U:$&&!w&&("a"!==n.type||"href"in n.props)||(z.href=(0,u.addBasePath)(U)),r=$?l.default.cloneElement(n,z):(0,i.jsx)("a",{...S,...z,children:a}),(0,i.jsx)(v.Provider,{value:o,children:r})}e.r(84508);let v=(0,l.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,l.useContext)(v);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),s.exports=t.default)},18178,62319,e=>{"use strict";let s={author:{name:"Amar Sattaur",email:"ajodasattaur@gmail.com",github:"https://github.com/jodybro",githubHandle:"github.com/jodybro",linkedin:"https://linkedin.com/in/amarsattaur",linkedinHandle:"linkedin.com/in/amarsattaur"},title:"Staff DevOps & Platform Engineer",descriptions:{full:"Staff-level DevOps and Platform Engineer with deep expertise in Kubernetes orchestration, CI/CD pipeline architecture, and cloud infrastructure automation. Specializing in EKS, ArgoCD, Terraform, and cross-cloud migrations.",short:"Staff-level DevOps and Platform Engineer specializing in Kubernetes orchestration, CI/CD pipeline architecture, and cloud infrastructure automation.",hero:"Deep expertise in Kubernetes orchestration, CI/CD pipeline architecture, and cloud infrastructure automation. Technical leader with hands-on implementation skills.",about:"I'm a Staff-level DevOps and Platform Engineer with deep expertise in Kubernetes orchestration, CI/CD pipeline architecture, and cloud infrastructure automation. I have a proven track record of executing zero-downtime EKS cluster upgrades across multiple major versions and leading cross-cloud migrations.",terminal:`Amar Sattaur
Staff DevOps & Platform Engineer

I specialize in Kubernetes orchestration, CI/CD pipeline
architecture, and cloud infrastructure automation.

Technical leader with hands-on implementation skills and
the ability to communicate with executive stakeholders.`},site:{url:"https://jodybro.github.io",name:"Amar Sattaur Portfolio"},employer:{name:"Mogo Financial"},keywords:["DevOps Engineer","Platform Engineer","Staff Engineer","Kubernetes","EKS","ArgoCD","Terraform","AWS","GCP","Oracle Cloud","CI/CD","Infrastructure","SRE","GitHub Actions"],knowsAbout:["Kubernetes","Amazon EKS","Google GKE","ArgoCD","Terraform","GitHub Actions","CI/CD","DevOps","Platform Engineering","Cloud Infrastructure","AWS","GCP","Oracle Cloud"]};e.s(["siteConfig",0,s],18178);var t=e.i(43476),a=e.i(71645),n=e.i(22016);let r=[{slug:"zero-downtime-eks-upgrades",title:"Zero-Downtime EKS Upgrades: A Complete Guide",excerpt:"Learn how to upgrade EKS clusters across multiple major versions while maintaining 100% uptime.",tags:["Kubernetes","EKS","DevOps"],icon:"bi-journal-code"},{slug:"reusable-github-actions-workflows",title:"Building Reusable GitHub Actions Workflows",excerpt:"How to design CI/CD pipeline frameworks that reduce onboarding time from days to hours.",tags:["GitHub Actions","CI/CD","Automation"],icon:"bi-gear-wide-connected"},{slug:"argocd-multi-cluster-patterns",title:"ArgoCD Multi-Cluster Deployment Patterns",excerpt:"Architecting centralized GitOps governance using the control plane model.",tags:["ArgoCD","GitOps","Kubernetes"],icon:"bi-diagram-3"}],i=[{title:"AWS to Oracle Cloud Migration",company:"Mogo Financial",challenge:"Migrate entire production infrastructure from AWS to Oracle Cloud Infrastructure.",technologies:["AWS","Oracle Cloud","Terraform","Kubernetes","ArgoCD"],icon:"bi-cloud-arrow-up"},{title:"CI/CD Pipeline Standardization",company:"Multiple Organizations",challenge:"Development teams spending days configuring CI/CD pipelines for new services.",technologies:["GitHub Actions","Docker","semantic-release","Trivy"],icon:"bi-arrow-repeat"},{title:"Kubernetes Platform Modernization",company:"Narvar",challenge:"Legacy deployment process using raw kubectl commands with no GitOps practices.",technologies:["ArgoCD","Helm","Kubernetes","CircleCI"],icon:"bi-rocket-takeoff"}];function l({activePage:s="home"}){let[l,o]=(0,a.useState)(!0),[c,d]=(0,a.useState)(!1),[m,u]=(0,a.useState)(""),[h,p]=(0,a.useState)([]),g=(0,a.useRef)(null),f=(0,a.useMemo)(()=>{let e=new Set;return r.forEach(s=>s.tags.forEach(s=>e.add(s))),i.forEach(s=>s.technologies.forEach(s=>e.add(s))),Array.from(e).sort()},[]),x=(0,a.useMemo)(()=>{let e=m.toLowerCase().trim(),s=[];return r.forEach(t=>{let a=!e||t.title.toLowerCase().includes(e)||t.excerpt.toLowerCase().includes(e)||t.tags.some(s=>s.toLowerCase().includes(e)),n=0===h.length||h.some(e=>t.tags.includes(e));a&&n&&s.push({type:"blog",title:t.title,description:t.excerpt,tags:t.tags,link:`/blog/${t.slug}`,icon:t.icon})}),i.forEach(t=>{let a=!e||t.title.toLowerCase().includes(e)||t.challenge.toLowerCase().includes(e)||t.technologies.some(s=>s.toLowerCase().includes(e)),n=0===h.length||h.some(e=>t.technologies.includes(e));a&&n&&s.push({type:"case-study",title:t.title,description:t.challenge,tags:t.technologies,link:"/#case-studies",icon:t.icon})}),s},[m,h]),v=(0,a.useCallback)(e=>{p(s=>s.includes(e)?s.filter(s=>s!==e):[...s,e])},[]);(0,a.useEffect)(()=>{let e=e=>{g.current&&!g.current.contains(e.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,a.useEffect)(()=>{e.A(54445);let s=localStorage.getItem("theme");s&&o("dark"===s)},[]),(0,a.useEffect)(()=>{document.documentElement.setAttribute("data-theme",l?"dark":"light"),localStorage.setItem("theme",l?"dark":"light")},[l]);let b=(0,a.useCallback)(()=>{o(e=>!e)},[]),j="home"===s;return(0,t.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)(n.default,{className:"navbar-brand text-info",href:"/",children:[(0,t.jsx)("i",{className:"bi bi-terminal me-2"}),"amarsattaur"]}),(0,t.jsx)("button",{className:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,t.jsx)("i",{className:"bi bi-list text-light fs-4"})}),(0,t.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[(0,t.jsxs)("ul",{className:"navbar-nav ms-auto nav-compact",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{className:`nav-link ${"home"===s?"active":""}`,href:j?"#about":"/#about",children:"About"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{className:"nav-link",href:j?"#experience":"/#experience",children:"Experience"})}),(0,t.jsxs)("li",{className:"nav-item dropdown",children:[(0,t.jsx)("a",{className:`nav-link dropdown-toggle ${"blog"===s?"active":""}`,href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Content"}),(0,t.jsxs)("ul",{className:"dropdown-menu",children:[(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{className:"dropdown-item",href:"/blog",children:[(0,t.jsx)("i",{className:"bi bi-journal-text me-2"}),"Blog"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(n.default,{className:"dropdown-item",href:j?"#case-studies":"/#case-studies",children:[(0,t.jsx)("i",{className:"bi bi-briefcase me-2"}),"Case Studies"]})})]})]}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{className:`nav-link ${"incidents"===s?"active":""}`,href:"/incidents",children:"Incidents"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{className:"nav-link",href:j?"#contact":"/#contact",children:"Contact"})})]}),(0,t.jsxs)("div",{className:"search-container ms-lg-2 mt-3 mt-lg-0",ref:g,children:[(0,t.jsx)("button",{className:"btn nav-icon-btn",onClick:()=>d(!c),"aria-label":"Search",children:(0,t.jsx)("i",{className:"bi bi-search"})}),c&&(0,t.jsxs)("div",{className:"search-dropdown",children:[(0,t.jsxs)("div",{className:"search-input-container",children:[(0,t.jsx)("i",{className:"bi bi-search search-icon"}),(0,t.jsx)("input",{type:"text",className:"search-input-full",placeholder:"Search posts & case studies...",value:m,onChange:e=>u(e.target.value),autoFocus:!0}),(m||h.length>0)&&(0,t.jsx)("button",{className:"search-clear",onClick:()=>{u(""),p([])},children:(0,t.jsx)("i",{className:"bi bi-x"})})]}),(0,t.jsxs)("div",{className:"search-tags",children:[(0,t.jsx)("span",{className:"search-tags-label",children:"Filter by tag:"}),(0,t.jsx)("div",{className:"search-tags-list",children:f.map(e=>(0,t.jsx)("button",{className:`search-tag ${h.includes(e)?"active":""}`,onClick:()=>v(e),children:e},e))})]}),(0,t.jsxs)(n.default,{href:`/search${h.length>0?`?tags=${h.join(",")}`:""}${m?`${h.length>0?"&":"?"}q=${encodeURIComponent(m)}`:""}`,className:"search-view-all-primary",onClick:()=>d(!1),children:[(0,t.jsx)("i",{className:"bi bi-grid-3x3-gap me-2"}),"View All Posts & Case Studies",(0,t.jsx)("i",{className:"bi bi-arrow-right ms-2"})]}),(0,t.jsx)("div",{className:"search-results",children:x.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"search-results-label",children:[x.length," ",1===x.length?"result":"results"," found"]}),x.slice(0,3).map((e,s)=>(0,t.jsxs)(n.default,{href:e.link,className:"search-result-item",onClick:()=>d(!1),children:[(0,t.jsx)("div",{className:"search-result-icon",children:(0,t.jsx)("i",{className:`bi ${e.icon}`})}),(0,t.jsxs)("div",{className:"search-result-content",children:[(0,t.jsx)("div",{className:"search-result-type",children:"blog"===e.type?"Blog Post":"Case Study"}),(0,t.jsx)("div",{className:"search-result-title",children:e.title}),(0,t.jsx)("div",{className:"search-result-tags",children:e.tags.slice(0,3).map(e=>(0,t.jsx)("span",{className:"search-result-tag",children:e},e))})]})]},s))]}):(0,t.jsxs)("div",{className:"search-no-results",children:[(0,t.jsx)("i",{className:"bi bi-search me-2"}),m||h.length>0?"No results found":"Type to search or select tags to filter"]})})]})]}),(0,t.jsx)("button",{onClick:b,className:"btn nav-icon-btn ms-lg-2 mt-3 mt-lg-0","aria-label":"Toggle theme",children:(0,t.jsx)("i",{className:`bi ${l?"bi-sun":"bi-moon-stars"}`})}),(0,t.jsxs)("div",{className:"btn-group ms-lg-2 mt-3 mt-lg-0",children:[(0,t.jsxs)(n.default,{href:"/resume",className:"btn btn-resume",children:[(0,t.jsx)("i",{className:"bi bi-file-earmark-text me-1"}),"Resume"]}),(0,t.jsx)("button",{type:"button",className:"btn btn-resume dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,t.jsx)("span",{className:"visually-hidden",children:"Toggle Dropdown"})}),(0,t.jsx)("ul",{className:"dropdown-menu dropdown-menu-end",children:(0,t.jsx)("li",{children:(0,t.jsxs)("a",{className:"dropdown-item",href:"/Amar_Sattaur_Resume.pdf",download:!0,children:[(0,t.jsx)("i",{className:"bi bi-download me-2"}),"Download"]})})})]})]})]})})}e.s(["default",()=>l],62319)},49255,e=>{"use strict";var s=e.i(43476),t=e.i(22016),a=e.i(18178),n=e.i(62319);function r(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.default,{activePage:"blog"}),(0,s.jsx)("article",{className:"py-5",style:{paddingTop:"120px"},children:(0,s.jsx)("div",{className:"container py-5",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col-lg-8 mx-auto",children:[(0,s.jsx)("nav",{"aria-label":"breadcrumb",className:"mb-4",children:(0,s.jsxs)("ol",{className:"breadcrumb",children:[(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsx)(t.default,{href:"/",className:"text-info",children:"Home"})}),(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsx)(t.default,{href:"/blog",className:"text-info",children:"Blog"})}),(0,s.jsx)("li",{className:"breadcrumb-item active text-secondary",children:"Production CI/CD"})]})}),(0,s.jsxs)("header",{className:"mb-5",children:[(0,s.jsxs)("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[(0,s.jsx)("span",{className:"tech-badge",children:"GitHub Actions"}),(0,s.jsx)("span",{className:"tech-badge",children:"CI/CD"}),(0,s.jsx)("span",{className:"tech-badge",children:"Helm"}),(0,s.jsx)("span",{className:"tech-badge",children:"ArgoCD"}),(0,s.jsx)("span",{className:"tech-badge",children:"Release Please"})]}),(0,s.jsx)("h1",{className:"display-5 fw-bold mb-3",children:"Building a Production-Ready CI/CD Pipeline with Reusable GitHub Actions"}),(0,s.jsxs)("div",{className:"d-flex align-items-center text-secondary",children:[(0,s.jsx)("span",{children:"January 2025"}),(0,s.jsx)("span",{className:"mx-2",children:"•"}),(0,s.jsx)("span",{children:"15 min read"})]})]}),(0,s.jsxs)("div",{className:"blog-content",children:[(0,s.jsx)("p",{className:"lead text-secondary mb-4",children:"When your organization scales from a handful of services to 20+ microservices, copy-pasting CI/CD configurations becomes unsustainable. This post walks through a production-ready pipeline architecture that uses reusable workflows, environment-aware deployments, and GitOps integration with ArgoCD."}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"The Scenario"}),(0,s.jsx)("p",{className:"text-secondary",children:"Imagine a growing fintech startup—let's call them Acme Corp—that started with a monolith and gradually broke it into microservices. As the engineering team expanded, they faced common CI/CD challenges:"}),(0,s.jsxs)("ul",{className:"text-secondary",children:[(0,s.jsx)("li",{children:"Each team copied pipeline configs from existing repos, leading to drift"}),(0,s.jsx)("li",{children:"Inconsistent Helm chart naming conventions (hyphens vs underscores, casing issues)"}),(0,s.jsx)("li",{children:"No clear process for multi-environment deployments (dev, staging, prod)"}),(0,s.jsx)("li",{children:"Ad-hoc version bumping with no correlation to change significance"}),(0,s.jsx)("li",{children:"ArgoCD sync happening manually or with inconsistent automation"})]}),(0,s.jsx)("p",{className:"text-secondary",children:"The solution? A centralized reusable workflow that handles the entire build-to-deploy lifecycle with a single tag push."}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Architecture Overview"}),(0,s.jsx)("p",{className:"text-secondary",children:"The pipeline uses a caller/callee pattern where individual service repos have minimal configuration, and a centralized workflow handles all the complexity."}),(0,s.jsxs)("div",{className:"custom-card p-4 my-4",children:[(0,s.jsxs)("h5",{className:"text-info mb-3",children:[(0,s.jsx)("i",{className:"bi bi-diagram-3 me-2"}),"Pipeline Flow"]}),(0,s.jsx)("pre",{className:"text-success mb-0",style:{fontSize:"0.85rem"},children:`Developer pushes tag: deploy-staging-v1.2.3
                    ↓
┌─────────────────────────────────────────────────────────────────┐
│  Caller Workflow (service repo)                                  │
│  - Triggers on deploy-* tags                                    │
│  - Calls centralized reusable workflow                          │
└─────────────────────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────────────────────┐
│  Reusable Workflow (org/.github repo)                           │
│                                                                 │
│  Job 1: build          → Docker image + attestation             │
│         ↓                                                       │
│  Job 2: helm-push      → Normalize chart, auto-version, push    │
│         ↓                                                       │
│  Job 3: update-values  → Update env-specific values in deploy branch│
│         ↓                                                       │
│  Job 4: argocd-pr      → Create & auto-merge PR to ArgoCD repo  │
└─────────────────────────────────────────────────────────────────┘
                    ↓
ArgoCD detects change → Syncs to Kubernetes cluster`})]}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"The Caller Workflow"}),(0,s.jsx)("p",{className:"text-secondary",children:"Each service repository contains a minimal workflow file that delegates to the centralized workflow. The magic happens in the tag naming convention."}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:".github/workflows/build-and-deploy.yml"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`name: Build-and-Deploy

on:
  push:
    tags:
      - 'deploy-**'    # Matches: deploy-dev-v1.0.0, deploy-staging-release, etc.
      - 'DEPLOY-**'    # Case-insensitive matching

jobs:
  build-and-deploy:
    uses: acme-corp/.github/.github/workflows/build-deploy-pipeline.yml@main
    secrets: inherit  # Pass all secrets to the reusable workflow`})})]}),(0,s.jsxs)("p",{className:"text-secondary",children:["The tag format ",(0,s.jsxs)("code",{children:["deploy-","{environment}","-","{identifier}"]})," encodes the target environment directly in the trigger. This eliminates the need for environment selection UI or manual inputs."]}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Job 1: Docker Build with Attestation"}),(0,s.jsx)("p",{className:"text-secondary",children:"The build job creates the Docker image with proper caching and supply chain security."}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"Build Job"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`build:
  runs-on: ubuntu-latest
  concurrency:
    group: \${{ github.sha }}
    cancel-in-progress: false
  permissions:
    contents: read
    packages: write
    id-token: write
    attestations: write
  outputs:
    digest: \${{ steps.docker-build.outputs.digest }}
  steps:
    - uses: actions/checkout@v4

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3

    - name: Log into registry
      uses: docker/login-action@v3
      with:
        registry: \${{ env.REGISTRY }}
        username: \${{ secrets.REGISTRY_USERNAME }}
        password: \${{ secrets.REGISTRY_TOKEN }}

    - name: Build and Push Docker Image
      id: docker-build
      uses: docker/build-push-action@v6
      with:
        context: .
        push: true
        tags: \${{ env.IMAGE_NAME }}:\${{ github.sha }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

    - name: Attest container image
      uses: actions/attest-build-provenance@v2
      with:
        subject-name: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}
        subject-digest: \${{ steps.docker-build.outputs.digest }}
        push-to-registry: true`})})]}),(0,s.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Key Design Decisions"}),(0,s.jsxs)("ul",{className:"text-secondary",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Concurrency groups:"})," Using ",(0,s.jsx)("code",{children:"github.sha"})," prevents parallel runs for the same commit while allowing different commits to build simultaneously"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Build attestation:"})," Creates a cryptographic proof of where and how the image was built—critical for supply chain security"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"GHA cache:"})," Leverages GitHub's built-in caching for Docker layers, typically reducing build times by 40-60%"]})]}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Job 2: Helm Chart Normalization & Push"}),(0,s.jsx)("p",{className:"text-secondary",children:"This job handles one of the trickiest aspects of managing many microservices: keeping Helm chart conventions consistent. It normalizes chart names, detects the target environment from the tag, and auto-increments versions."}),(0,s.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Environment Detection"}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"Extract environment from tag"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`- name: Determine environment
  id: determine-env
  run: |
    # Tag format: deploy-{env}-{identifier}
    # Extract the environment (second segment)
    TARGET=$(echo $GITHUB_REF_NAME | cut -d "-" -f 2)

    # Validate it's a known environment
    if [[ $TARGET == "sandbox" ]] || [[ $TARGET == "dev" ]] || \\
       [[ $TARGET == "qa" ]] || [[ $TARGET == "staging" ]] || \\
       [[ $TARGET == "prod" ]]; then
      echo "ENVIRONMENT=$TARGET" >> $GITHUB_OUTPUT
    else
      echo "::error title=Invalid Environment::Unknown environment: $TARGET"
      exit 1
    fi`})})]}),(0,s.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Chart Name Normalization"}),(0,s.jsxs)("p",{className:"text-secondary",children:["Over time, teams created charts with inconsistent naming: ",(0,s.jsx)("code",{children:"my-service"}),", ",(0,s.jsx)("code",{children:"My_Service"}),", ",(0,s.jsx)("code",{children:"myService"}),". This step enforces a canonical format: lowercase with underscores."]}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"Normalize chart naming"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`- name: Normalize Helm chart directory and Chart.yaml name
  run: |
    # Canonical name: lowercase, hyphens → underscores
    REPO_NAME="\${{ github.event.repository.name }}"
    CANONICAL_CHART_NAME=$(echo "$REPO_NAME" \\
      | tr '[:upper:]' '[:lower:]' \\
      | sed 's/-/_/g')
    CANONICAL_CHART_DIR="helm/\${CANONICAL_CHART_NAME}"

    # Find existing Chart.yaml
    CHART_FILE=$(find helm -maxdepth 2 -name 'Chart.yaml' | head -n 1)
    CURRENT_CHART_DIR=$(dirname "$CHART_FILE")

    # Rename directory if needed
    if [[ "$CURRENT_CHART_DIR" != "$CANONICAL_CHART_DIR" ]]; then
      git mv "$CURRENT_CHART_DIR" "$CANONICAL_CHART_DIR"
    fi

    # Update name field in Chart.yaml
    CURRENT_NAME=$(yq '.name' "$CANONICAL_CHART_DIR/Chart.yaml")
    if [[ "$CURRENT_NAME" != "$CANONICAL_CHART_NAME" ]]; then
      yq -i ".name = \\"$CANONICAL_CHART_NAME\\"" "$CANONICAL_CHART_DIR/Chart.yaml"
    fi

    # Commit changes if any
    if ! git diff --cached --quiet; then
      git commit -m "chore: normalize helm chart to canonical form"
      git push origin HEAD:$GITHUB_REF_NAME
    fi`})})]}),(0,s.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Semantic Versioning with Release Please"}),(0,s.jsxs)("p",{className:"text-secondary",children:["Instead of using raw bash to auto-increment versions (which always bumps patch regardless of change type), we use ",(0,s.jsx)("a",{href:"https://github.com/googleapis/release-please",className:"text-info",target:"_blank",rel:"noopener noreferrer",children:"release-please"})," by Google. This tool analyzes your commit messages following ",(0,s.jsx)("a",{href:"https://www.conventionalcommits.org/",className:"text-info",target:"_blank",rel:"noopener noreferrer",children:"Conventional Commits"})," and automatically determines the appropriate semantic version bump."]}),(0,s.jsx)("h4",{className:"h6 mt-4 mb-2",children:"Why Release Please?"}),(0,s.jsxs)("ul",{className:"text-secondary",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Semantic versioning done right:"})," ",(0,s.jsx)("code",{children:"feat:"})," commits bump minor, ",(0,s.jsx)("code",{children:"fix:"})," bumps patch, ",(0,s.jsx)("code",{children:"BREAKING CHANGE:"})," bumps major"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Automated changelogs:"})," Generates CHANGELOG.md from commit messages"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Native Helm support:"})," Understands Chart.yaml and updates versions automatically"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"PR-based workflow:"})," Creates release PRs that you can review before merging"]})]}),(0,s.jsx)("h4",{className:"h6 mt-4 mb-2",children:"Configuration Files"}),(0,s.jsx)("p",{className:"text-secondary",children:"Release Please requires two configuration files in your repository root:"}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"release-please-config.json"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`{
  "packages": {
    "charts/my_service": {
      "release-type": "helm",
      "bump-minor-pre-major": true,
      "bump-patch-for-minor-pre-major": false
    }
  },
  "changelog-sections": [
    { "type": "feat", "section": "Features" },
    { "type": "fix", "section": "Bug Fixes" },
    { "type": "perf", "section": "Performance Improvements" },
    { "type": "refactor", "section": "Code Refactoring" },
    { "type": "docs", "section": "Documentation" },
    { "type": "chore", "hidden": true },
    { "type": "style", "hidden": true },
    { "type": "test", "hidden": true },
    { "type": "ci", "hidden": true }
  ]
}`})})]}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:".release-please-manifest.json"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`{
  "charts/my_service": "1.3.0"
}`})})]}),(0,s.jsx)("p",{className:"text-secondary",children:"The manifest file tracks the current version of each package. Release Please updates this automatically when releases are created."}),(0,s.jsx)("h4",{className:"h6 mt-4 mb-2",children:"Release Please Workflow"}),(0,s.jsx)("p",{className:"text-secondary",children:"Add a dedicated workflow that runs on pushes to main. Release Please will analyze commits since the last release and either create a release PR or update an existing one."}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:".github/workflows/release-please.yml"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`name: Release Please

on:
  push:
    branches:
      - main

permissions:
  contents: write
  pull-requests: write

jobs:
  release-please:
    name: Release Please
    runs-on: ubuntu-latest
    # Prevent infinite loops from release commits
    if: "!contains(github.event.head_commit.message, 'chore(main): release')"
    outputs:
      releases_created: \${{ steps.release.outputs.releases_created }}
      tag_name: \${{ steps.release.outputs.tag_name }}
    steps:
      - name: Run Release Please
        uses: googleapis/release-please-action@v4
        id: release
        with:
          token: \${{ secrets.GITHUB_TOKEN }}`})})]}),(0,s.jsx)("h4",{className:"h6 mt-4 mb-2",children:"Helm Push (with Release Please)"}),(0,s.jsx)("p",{className:"text-secondary",children:"The Helm push step now reads the version from Chart.yaml (which Release Please has already updated) instead of manually calculating version bumps."}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"Helm Push step (simplified)"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`- name: Helm Push
  if: \${{ needs.release-please.outputs.releases_created }}
  run: |
    HELM_REGISTRY="ghcr.io/\${{ github.repository_owner }}"
    CHART_NAME="\${{ steps.normalize.outputs.CHART_NAME }}"
    ENVIRONMENT="\${{ steps.determine-env.outputs.ENVIRONMENT }}"

    # Login to GHCR
    echo "\${{ secrets.GITHUB_TOKEN }}" | \\
      helm registry login ghcr.io --username \${{ github.actor }} --password-stdin

    # Version is already set by Release Please in Chart.yaml
    CHART_VERSION=$(yq '.version' helm/$CHART_NAME/Chart.yaml)

    # Append environment to chart name for env-specific releases
    yq -i ".name = .name + \\"-$ENVIRONMENT\\"" helm/$CHART_NAME/Chart.yaml

    # Package and push
    helm package helm/$CHART_NAME
    helm push \${CHART_NAME}-\${ENVIRONMENT}-\${CHART_VERSION}.tgz $HELM_REGISTRY`})})]}),(0,s.jsx)("h4",{className:"h6 mt-4 mb-2",children:"Conventional Commits in Practice"}),(0,s.jsx)("p",{className:"text-secondary",children:"With Release Please, your commit messages drive versioning:"}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"Commit message examples"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`# Patch bump (1.3.0 → 1.3.1)
git commit -m "fix: resolve null pointer in auth handler"

# Minor bump (1.3.0 → 1.4.0)
git commit -m "feat: add support for OAuth2 PKCE flow"

# Major bump (1.3.0 → 2.0.0)
git commit -m "feat!: redesign API response format

BREAKING CHANGE: Response now uses camelCase instead of snake_case"`})})]}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Job 3: Update Environment Values"}),(0,s.jsxs)("p",{className:"text-secondary",children:["A dedicated ",(0,s.jsx)("code",{children:"deploy"})," branch stores environment-specific values files. This separation allows different configurations per environment while keeping the main branch clean."]}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"Update environment values"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`update-env-values:
  needs: [build, helm-push]
  runs-on: ubuntu-latest
  env:
    environment: \${{ needs.helm-push.outputs.environment }}
    chart_version: \${{ needs.helm-push.outputs.chart_version }}
  steps:
    - uses: actions/checkout@v4
      with:
        ref: deploy  # Dedicated branch for env configs
        token: \${{ secrets.GH_TOKEN }}

    - name: Update values files
      run: |
        VALUES_FILE="helm/environment-values/values-\${{ env.environment }}.yaml"

        # Update commit tracking
        yq -i '.config.commit_id = "\${{ github.sha }}"' "$VALUES_FILE"
        yq -i '.config.github_id = "\${{ github.actor }}"' "$VALUES_FILE"

        # Update chart version
        CHART_FILE="helm/$CHART_NAME/Chart-\${{ env.environment }}.yaml"
        yq -i '.version = "\${{ env.chart_version }}"' "$CHART_FILE"

    - name: Commit and push
      run: |
        git add .
        git commit -m "Update \${{ env.environment }} values"
        git push`})})]}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Job 4: ArgoCD Integration"}),(0,s.jsxs)("p",{className:"text-secondary",children:["The final job creates a PR to the ArgoCD repository, updating the ",(0,s.jsx)("code",{children:"targetRevision"})," to the new chart version. The PR is automatically merged, triggering ArgoCD to sync."]}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"ArgoCD PR automation"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`update-chart-version:
  needs: [build, helm-push, update-env-values]
  runs-on: ubuntu-latest
  env:
    environment: \${{ needs.helm-push.outputs.environment }}
    chart_version: \${{ needs.helm-push.outputs.chart_version }}
    app_name: \${{ needs.helm-push.outputs.app_name }}
  steps:
    - uses: actions/checkout@v4
      with:
        repository: acme-corp/k8s-argocd
        path: tmp/argo
        token: \${{ secrets.GH_TOKEN }}

    - name: Update targetRevision
      run: |
        # Convert hyphens to underscores for YAML key
        APP_KEY=$(echo "\${{ env.app_name }}" | tr '-' '_')

        yq -i ".\${APP_KEY}.targetRevision = \\"\${{ env.chart_version }}\\"" \\
          "tmp/argo/apps-\${{ env.environment }}/values.yaml"

    - name: Create and merge PR
      working-directory: tmp/argo
      run: |
        BRANCH="\${{ env.environment }}-\${{ env.app_name }}-\${{ env.chart_version }}"

        git checkout -b $BRANCH
        git add .
        git commit -m "chore: bump \${{ env.app_name }} to \${{ env.chart_version }}"
        git push --set-upstream origin $BRANCH

        gh pr create \\
          --title "chore: Update \${{ env.app_name }} in \${{ env.environment }}" \\
          --body "Automated chart version update" \\
          --base main

        # Auto-merge (requires branch protection rules allowing this)
        gh pr merge --delete-branch --merge`})})]}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Environment-Specific Chart Files"}),(0,s.jsxs)("p",{className:"text-secondary",children:["One powerful pattern is maintaining environment-specific Chart files (",(0,s.jsx)("code",{children:"Chart-dev.yaml"}),", ",(0,s.jsx)("code",{children:"Chart-staging.yaml"}),", ",(0,s.jsx)("code",{children:"Chart-prod.yaml"}),"). This allows different versions, annotations, or dependencies per environment."]}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"Directory structure"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`helm/
├── my_service/
│   ├── Chart.yaml           # Base chart definition
│   ├── Chart-dev.yaml       # Dev environment overrides
│   ├── Chart-staging.yaml   # Staging environment overrides
│   ├── Chart-prod.yaml      # Prod environment overrides
│   ├── values.yaml          # Default values
│   └── templates/
└── environment-values/
    ├── values-dev.yaml      # Dev-specific values
    ├── values-staging.yaml  # Staging-specific values
    └── values-prod.yaml     # Prod-specific values`})})]}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Developer Experience"}),(0,s.jsx)("p",{className:"text-secondary",children:"With this setup, deploying to any environment is a single command:"}),(0,s.jsxs)("div",{className:"terminal-card my-4",children:[(0,s.jsxs)("div",{className:"terminal-header",children:[(0,s.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,s.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,s.jsx)("span",{className:"ms-3 text-secondary small",children:"Deployment commands"})]}),(0,s.jsx)("div",{className:"terminal-body",children:(0,s.jsx)("pre",{className:"text-success mb-0",children:`# Deploy to dev
git tag deploy-dev-$(date +%Y%m%d-%H%M%S)
git push origin --tags

# Deploy to staging
git tag deploy-staging-v1.2.3
git push origin --tags

# Deploy to production
git tag deploy-prod-release-2025-01
git push origin --tags`})})]}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Results"}),(0,s.jsx)("div",{className:"custom-card p-4 my-4",children:(0,s.jsxs)("div",{className:"row text-center",children:[(0,s.jsxs)("div",{className:"col-md-3 mb-3 mb-md-0",children:[(0,s.jsx)("h3",{className:"text-info",children:"18 → 1"}),(0,s.jsx)("p",{className:"text-secondary mb-0",children:"Workflow files per repo"})]}),(0,s.jsxs)("div",{className:"col-md-3 mb-3 mb-md-0",children:[(0,s.jsx)("h3",{className:"text-info",children:"45%"}),(0,s.jsx)("p",{className:"text-secondary mb-0",children:"Faster deploys"})]}),(0,s.jsxs)("div",{className:"col-md-3 mb-3 mb-md-0",children:[(0,s.jsx)("h3",{className:"text-info",children:"100%"}),(0,s.jsx)("p",{className:"text-secondary mb-0",children:"Consistent chart naming"})]}),(0,s.jsxs)("div",{className:"col-md-3",children:[(0,s.jsx)("h3",{className:"text-info",children:"0"}),(0,s.jsx)("p",{className:"text-secondary mb-0",children:"Manual ArgoCD syncs"})]})]})}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Key Takeaways"}),(0,s.jsxs)("ol",{className:"text-secondary",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Encode intent in triggers:"})," Using tag naming conventions eliminates environment selection UI and reduces human error"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Normalize ruthlessly:"})," Consistent naming conventions prevent drift and simplify tooling"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Use Release Please for versioning:"})," Let commit messages drive semantic version bumps instead of brittle bash scripts"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Chain jobs with outputs:"})," Pass data between jobs via outputs to create cohesive pipelines"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Use concurrency groups:"})," Prevent race conditions when multiple deployments happen simultaneously"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("strong",{children:"Automate the entire path:"})," From commit to ArgoCD sync, remove manual steps wherever possible"]})]}),(0,s.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Conclusion"}),(0,s.jsx)("p",{className:"text-secondary",children:"Building a production-ready CI/CD pipeline isn't about adding complexity—it's about encoding best practices so teams can focus on shipping features. By centralizing workflow logic, enforcing conventions, and automating the entire deployment path, you create a system that scales with your organization."}),(0,s.jsxs)("p",{className:"text-secondary",children:["The initial investment in building this infrastructure pays dividends every time a new service is created or a deployment is triggered. What once took hours of setup and manual coordination now happens with a single ",(0,s.jsx)("code",{children:"git push --tags"}),"."]}),(0,s.jsx)("div",{className:"custom-card p-4 mt-5",children:(0,s.jsxs)("div",{className:"d-flex align-items-center",children:[(0,s.jsx)("div",{className:"icon-box me-3",style:{width:"60px",height:"60px"},children:(0,s.jsx)("i",{className:"bi bi-person fs-3"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h5",{className:"mb-1",children:a.siteConfig.author.name}),(0,s.jsx)("p",{className:"text-secondary mb-0 small",children:"Staff DevOps Engineer specializing in CI/CD automation, Kubernetes, and developer experience."})]})]})}),(0,s.jsxs)("div",{className:"d-flex justify-content-between mt-5 pt-4 border-top border-secondary",children:[(0,s.jsxs)(t.default,{href:"/blog/zero-downtime-eks-upgrades",className:"btn btn-outline-custom",children:[(0,s.jsx)("i",{className:"bi bi-arrow-left me-2"}),"Previous Post"]}),(0,s.jsxs)(t.default,{href:"/blog/argocd-multi-cluster-patterns",className:"btn btn-gradient",children:["Next Post",(0,s.jsx)("i",{className:"bi bi-arrow-right ms-2"})]})]})]})]})})})}),(0,s.jsx)("footer",{className:"footer py-4",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsx)("div",{className:"col-md-6 text-center text-md-start mb-3 mb-md-0",children:(0,s.jsxs)("span",{className:"text-secondary",style:{fontFamily:"monospace"},children:[(0,s.jsx)("span",{className:"text-info",children:">"})," Built with Next.js & Bootstrap"]})}),(0,s.jsx)("div",{className:"col-md-6 text-center text-md-end",children:(0,s.jsxs)("span",{className:"text-secondary",style:{fontFamily:"monospace"},children:["© ",new Date().getFullYear()," ",a.siteConfig.author.name]})})]})})})]})}e.s(["default",()=>r])},54445,e=>{e.v(s=>Promise.all(["static/chunks/ae178c291a3a4d2f.js"].map(s=>e.l(s))).then(()=>s(83781)))}]);