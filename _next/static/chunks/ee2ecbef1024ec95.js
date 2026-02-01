(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},98183,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={assign:function(){return o},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return i}};for(var s in r)Object.defineProperty(a,s,{enumerable:!0,get:r[s]});function n(e){let t={};for(let[a,r]of e.entries()){let e=t[a];void 0===e?t[a]=r:Array.isArray(e)?e.push(r):t[a]=[e,r]}return t}function l(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[a,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(a,l(e));else t.set(a,l(r));return t}function o(e,...t){for(let a of t){for(let t of a.keys())e.delete(t);for(let[t,r]of a.entries())e.append(t,r)}return e}},95057,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={formatUrl:function(){return i},formatWithValidation:function(){return c},urlObjectKeys:function(){return o}};for(var s in r)Object.defineProperty(a,s,{enumerable:!0,get:r[s]});let n=e.r(90809)._(e.r(98183)),l=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:a}=e,r=e.protocol||"",s=e.pathname||"",i=e.hash||"",o=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:a&&(c=t+(~a.indexOf(":")?`[${a}]`:a),e.port&&(c+=":"+e.port)),o&&"object"==typeof o&&(o=String(n.urlQueryToSearchParams(o)));let d=e.search||o&&`?${o}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||l.test(r))&&!1!==c?(c="//"+(c||""),s&&"/"!==s[0]&&(s="/"+s)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),d&&"?"!==d[0]&&(d="?"+d),s=s.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${r}${c}${s}${d}${i}`}let o=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return i(e)}},18581,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return s}});let r=e.r(71645);function s(e,t){let a=(0,r.useRef)(null),s=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=a.current;e&&(a.current=null,e());let t=s.current;t&&(s.current=null,t())}else e&&(a.current=n(e,r)),t&&(s.current=n(t,r))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},18967,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return y},NormalizeError:function(){return j},PageNotFoundError:function(){return b},SP:function(){return f},ST:function(){return x},WEB_VITALS:function(){return n},execOnce:function(){return l},getDisplayName:function(){return m},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return o},isResSent:function(){return u},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return N}};for(var s in r)Object.defineProperty(a,s,{enumerable:!0,get:r[s]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let t,a=!1;return(...r)=>(a||(a=!0,t=e(...r)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>i.test(e);function c(){let{protocol:e,hostname:t,port:a}=window.location;return`${e}//${t}${a?":"+a:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function m(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let a=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(a&&u(a))return r;if(!r)throw Object.defineProperty(Error(`"${m(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let f="u">typeof performance,x=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class j extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function N(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return n}});let r=e.r(18967),s=e.r(52817);function n(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),a=new URL(e,t);return a.origin===t&&(0,s.hasBasePath)(a.pathname)}catch(e){return!1}}},84508,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={default:function(){return g},useLinkStatus:function(){return b}};for(var s in r)Object.defineProperty(a,s,{enumerable:!0,get:r[s]});let n=e.r(90809),l=e.r(43476),i=n._(e.r(71645)),o=e.r(95057),c=e.r(8372),d=e.r(18581),m=e.r(18967),u=e.r(5550);e.r(33525);let p=e.r(91949),h=e.r(73668),f=e.r(9396);function x(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}function g(t){var a;let r,s,n,[o,g]=(0,i.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,i.useRef)(null),{href:y,as:v,children:N,prefetch:C=null,passHref:A,replace:w,shallow:P,scroll:_,onClick:S,onMouseEnter:O,onTouchStart:E,legacyBehavior:R=!1,onNavigate:k,ref:D,unstable_dynamicOnHover:T,...U}=t;r=N,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,l.jsx)("a",{children:r}));let M=i.default.useContext(c.AppRouterContext),L=!1!==C,I=!1!==C?null===(a=C)||"auto"===a?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,{href:$,as:B}=i.default.useMemo(()=>{let e=x(y);return{href:e,as:v?x(v):e}},[y,v]);if(R){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});s=i.default.Children.only(r)}let F=R?s&&"object"==typeof s&&s.ref:D,K=i.default.useCallback(e=>(null!==M&&(b.current=(0,p.mountLinkInstance)(e,$,M,I,L,g)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[L,$,M,I,g]),H={ref:(0,d.useMergedRef)(K,F),onClick(t){R||"function"!=typeof S||S(t),R&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(t),!M||t.defaultPrevented||function(t,a,r,s,n,l,o){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(a)){n&&(t.preventDefault(),location.replace(a));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:m}=e.r(99781);i.default.startTransition(()=>{m(r||a,n?"replace":"push",l??!0,s.current)})}}(t,$,B,b,w,_,k)},onMouseEnter(e){R||"function"!=typeof O||O(e),R&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),M&&L&&(0,p.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){R||"function"!=typeof E||E(e),R&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),M&&L&&(0,p.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,m.isAbsoluteUrl)(B)?H.href=B:R&&!A&&("a"!==s.type||"href"in s.props)||(H.href=(0,u.addBasePath)(B)),n=R?i.default.cloneElement(s,H):(0,l.jsx)("a",{...U,...H,children:r}),(0,l.jsx)(j.Provider,{value:o,children:n})}e.r(84508);let j=(0,i.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,i.useContext)(j);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},67690,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(22016);function s(){return(0,a.useEffect)(()=>{e.A(54445)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)(r.default,{className:"navbar-brand text-info",href:"/",children:[(0,t.jsx)("i",{className:"bi bi-terminal me-2"}),"amarsattaur"]}),(0,t.jsx)("button",{className:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav",children:(0,t.jsx)("i",{className:"bi bi-list text-light fs-4"})}),(0,t.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[(0,t.jsxs)("ul",{className:"navbar-nav ms-auto",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(r.default,{className:"nav-link",href:"/#about",children:"About"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(r.default,{className:"nav-link",href:"/#experience",children:"Experience"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(r.default,{className:"nav-link",href:"/blog",children:"Blog"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(r.default,{className:"nav-link",href:"/#contact",children:"Contact"})})]}),(0,t.jsxs)("a",{href:"/Amar_Sattaur_Resume.pdf",download:!0,className:"btn btn-resume ms-lg-3 mt-3 mt-lg-0",children:[(0,t.jsx)("i",{className:"bi bi-file-earmark-text me-2"}),"Resume"]})]})]})}),(0,t.jsx)("article",{className:"py-5",style:{paddingTop:"120px"},children:(0,t.jsx)("div",{className:"container py-5",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-lg-8 mx-auto",children:[(0,t.jsx)("nav",{"aria-label":"breadcrumb",className:"mb-4",children:(0,t.jsxs)("ol",{className:"breadcrumb",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(r.default,{href:"/",className:"text-info",children:"Home"})}),(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(r.default,{href:"/blog",className:"text-info",children:"Blog"})}),(0,t.jsx)("li",{className:"breadcrumb-item active text-secondary",children:"ArgoCD Multi-Cluster"})]})}),(0,t.jsxs)("header",{className:"mb-5",children:[(0,t.jsxs)("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[(0,t.jsx)("span",{className:"tech-badge",children:"ArgoCD"}),(0,t.jsx)("span",{className:"tech-badge",children:"GitOps"}),(0,t.jsx)("span",{className:"tech-badge",children:"Kubernetes"})]}),(0,t.jsx)("h1",{className:"display-5 fw-bold mb-3",children:"ArgoCD Multi-Cluster Deployment Patterns"}),(0,t.jsxs)("div",{className:"d-flex align-items-center text-secondary",children:[(0,t.jsx)("span",{children:"November 2024"}),(0,t.jsx)("span",{className:"mx-2",children:"•"}),(0,t.jsx)("span",{children:"10 min read"})]})]}),(0,t.jsxs)("div",{className:"blog-content",children:[(0,t.jsx)("p",{className:"lead text-secondary mb-4",children:"Managing GitOps deployments across multiple Kubernetes clusters requires thoughtful architecture. The control plane model provides centralized governance while maintaining flexibility for individual environments."}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Architecture Overview"}),(0,t.jsx)("p",{className:"text-secondary",children:"In the control plane model, a central ArgoCD instance manages downstream clusters:"}),(0,t.jsx)("div",{className:"custom-card p-4 my-4",children:(0,t.jsx)("div",{className:"text-center text-secondary",style:{fontFamily:"monospace"},children:(0,t.jsx)("pre",{className:"mb-0",children:`┌─────────────────────────────────────────────────────────┐
│                  Control Plane Cluster                   │
│  ┌─────────────────────────────────────────────────────┐ │
│  │              ArgoCD (Hub Instance)                   │ │
│  │  - ApplicationSets                                   │ │
│  │  - Cluster Secrets                                   │ │
│  │  - RBAC Policies                                     │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                           │
           ┌───────────────┼───────────────┐
           │               │               │
           ▼               ▼               ▼
    ┌───────────┐   ┌───────────┐   ┌───────────┐
    │    Dev    │   │  Staging  │   │   Prod    │
    │  Cluster  │   │  Cluster  │   │  Cluster  │
    └───────────┘   └───────────┘   └───────────┘`})})}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Setting Up the Control Plane"}),(0,t.jsx)("h3",{className:"h5 mt-4 mb-3",children:"1. Installing ArgoCD"}),(0,t.jsx)("p",{className:"text-secondary",children:"Deploy ArgoCD to your management cluster:"}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"install-argocd.sh"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`# Create namespace
kubectl create namespace argocd

# Install ArgoCD with HA configuration
helm repo add argo https://argoproj.github.io/argo-helm
helm install argocd argo/argo-cd \\
  --namespace argocd \\
  --set server.replicas=2 \\
  --set controller.replicas=2 \\
  --set repoServer.replicas=2 \\
  --set redis-ha.enabled=true

# Get initial admin password
kubectl -n argocd get secret argocd-initial-admin-secret \\
  -o jsonpath="{.data.password}" | base64 -d`})})]}),(0,t.jsx)("h3",{className:"h5 mt-4 mb-3",children:"2. Registering Target Clusters"}),(0,t.jsx)("p",{className:"text-secondary",children:"Add downstream clusters using secrets or the ArgoCD CLI:"}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"cluster-secret.yaml"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`apiVersion: v1
kind: Secret
metadata:
  name: prod-cluster
  namespace: argocd
  labels:
    argocd.argoproj.io/secret-type: cluster
    environment: production
type: Opaque
stringData:
  name: prod-cluster
  server: https://prod-cluster.example.com
  config: |
    {
      "bearerToken": "<service-account-token>",
      "tlsClientConfig": {
        "insecure": false,
        "caData": "<base64-encoded-ca-cert>"
      }
    }`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"ApplicationSets for Multi-Cluster"}),(0,t.jsx)("p",{className:"text-secondary",children:"ApplicationSets enable declarative, template-driven Application generation:"}),(0,t.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Cluster Generator"}),(0,t.jsx)("p",{className:"text-secondary",children:"Deploy to all clusters matching specific labels:"}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"applicationset-cluster.yaml"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: platform-services
  namespace: argocd
spec:
  generators:
    - clusters:
        selector:
          matchLabels:
            environment: production
  template:
    metadata:
      name: '{{name}}-platform-services'
    spec:
      project: platform
      source:
        repoURL: https://github.com/org/platform-services
        targetRevision: HEAD
        path: 'clusters/{{name}}'
      destination:
        server: '{{server}}'
        namespace: platform
      syncPolicy:
        automated:
          prune: true
          selfHeal: true`})})]}),(0,t.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Git Directory Generator"}),(0,t.jsx)("p",{className:"text-secondary",children:"Generate Applications based on directory structure:"}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"applicationset-git.yaml"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: team-applications
  namespace: argocd
spec:
  generators:
    - git:
        repoURL: https://github.com/org/app-configs
        revision: HEAD
        directories:
          - path: 'teams/*/apps/*'
  template:
    metadata:
      name: '{{path.basename}}'
    spec:
      project: '{{path[1]}}'  # team name
      source:
        repoURL: https://github.com/org/app-configs
        targetRevision: HEAD
        path: '{{path}}'
      destination:
        server: https://kubernetes.default.svc
        namespace: '{{path.basename}}'`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Image Updater Integration"}),(0,t.jsx)("p",{className:"text-secondary",children:"Automate image updates with ArgoCD Image Updater:"}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"application-with-image-updater.yaml"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
  annotations:
    argocd-image-updater.argoproj.io/image-list: myapp=ghcr.io/org/myapp
    argocd-image-updater.argoproj.io/myapp.update-strategy: semver
    argocd-image-updater.argoproj.io/myapp.allow-tags: regexp:^v[0-9]+\\.[0-9]+\\.[0-9]+$
    argocd-image-updater.argoproj.io/write-back-method: git
spec:
  project: default
  source:
    repoURL: https://github.com/org/app-configs
    targetRevision: HEAD
    path: apps/my-app
  destination:
    server: https://kubernetes.default.svc
    namespace: my-app`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"RBAC and Project Configuration"}),(0,t.jsx)("p",{className:"text-secondary",children:"Define projects to isolate teams and control access:"}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"appproject.yaml"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: team-alpha
  namespace: argocd
spec:
  description: Team Alpha applications
  sourceRepos:
    - 'https://github.com/org/team-alpha-*'
  destinations:
    - namespace: 'team-alpha-*'
      server: '*'
  clusterResourceWhitelist:
    - group: ''
      kind: Namespace
  namespaceResourceWhitelist:
    - group: '*'
      kind: '*'
  roles:
    - name: developer
      policies:
        - p, proj:team-alpha:developer, applications, *, team-alpha/*, allow
      groups:
        - team-alpha-developers`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Best Practices"}),(0,t.jsx)("div",{className:"custom-card p-4 my-4",children:(0,t.jsxs)("ul",{className:"mb-0 text-secondary",children:[(0,t.jsxs)("li",{className:"mb-2",children:[(0,t.jsx)("strong",{children:"Use ApplicationSets over individual Applications"})," - Reduces configuration duplication and enables consistent deployments."]}),(0,t.jsxs)("li",{className:"mb-2",children:[(0,t.jsx)("strong",{children:"Implement progressive delivery"})," - Deploy to dev/staging before production using wave annotations or separate ApplicationSets."]}),(0,t.jsxs)("li",{className:"mb-2",children:[(0,t.jsx)("strong",{children:"Enable automated sync with safeguards"})," - Use ",(0,t.jsx)("code",{children:"selfHeal"})," and ",(0,t.jsx)("code",{children:"prune"})," but configure appropriate sync windows for production."]}),(0,t.jsxs)("li",{className:"mb-2",children:[(0,t.jsx)("strong",{children:"Centralize secrets management"})," - Use external-secrets with AWS Secrets Manager or HashiCorp Vault."]}),(0,t.jsxs)("li",{className:"mb-0",children:[(0,t.jsx)("strong",{children:"Monitor sync status"})," - Set up alerts for failed syncs and degraded applications."]})]})}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Monitoring and Observability"}),(0,t.jsx)("p",{className:"text-secondary",children:"ArgoCD exposes Prometheus metrics for monitoring:"}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"Key metrics to monitor"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`# Sync status
argocd_app_info{sync_status="OutOfSync"}

# Health status
argocd_app_info{health_status="Degraded"}

# Sync duration
argocd_app_sync_total

# Controller queue depth
argocd_app_reconcile_bucket`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Conclusion"}),(0,t.jsx)("p",{className:"text-secondary",children:"The control plane model for ArgoCD provides a scalable approach to multi-cluster GitOps. By centralizing management while distributing workloads, you gain visibility and control without sacrificing flexibility."}),(0,t.jsx)("p",{className:"text-secondary",children:"ApplicationSets are the key to managing complexity at scale - they transform cluster configuration from imperative scripts to declarative templates that adapt as your infrastructure grows."}),(0,t.jsx)("div",{className:"custom-card p-4 mt-5",children:(0,t.jsxs)("div",{className:"d-flex align-items-center",children:[(0,t.jsx)("div",{className:"icon-box me-3",style:{width:"60px",height:"60px"},children:(0,t.jsx)("i",{className:"bi bi-person fs-3"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"mb-1",children:"Amar Sattaur"}),(0,t.jsx)("p",{className:"text-secondary mb-0 small",children:"Staff DevOps Engineer with experience architecting multi-cluster ArgoCD deployments for enterprise environments."})]})]})}),(0,t.jsxs)("div",{className:"d-flex justify-content-between mt-5 pt-4 border-top border-secondary",children:[(0,t.jsxs)(r.default,{href:"/blog/reusable-github-actions-workflows",className:"btn btn-outline-custom",children:[(0,t.jsx)("i",{className:"bi bi-arrow-left me-2"}),"Previous Post"]}),(0,t.jsxs)(r.default,{href:"/blog",className:"btn btn-gradient",children:["All Posts",(0,t.jsx)("i",{className:"bi bi-arrow-right ms-2"})]})]})]})]})})})}),(0,t.jsx)("footer",{className:"footer py-4",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-md-6 text-center text-md-start mb-3 mb-md-0",children:(0,t.jsxs)("span",{className:"text-secondary",style:{fontFamily:"monospace"},children:[(0,t.jsx)("span",{className:"text-info",children:">"})," Built with Next.js & Bootstrap"]})}),(0,t.jsx)("div",{className:"col-md-6 text-center text-md-end",children:(0,t.jsxs)("span",{className:"text-secondary",style:{fontFamily:"monospace"},children:["© ",new Date().getFullYear()," Amar Sattaur"]})})]})})})]})}e.s(["default",()=>s])},54445,e=>{e.v(t=>Promise.all(["static/chunks/ae178c291a3a4d2f.js"].map(t=>e.l(t))).then(()=>t(83781)))}]);