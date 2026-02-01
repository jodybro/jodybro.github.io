(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},98183,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={assign:function(){return o},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return l}};for(var a in n)Object.defineProperty(s,a,{enumerable:!0,get:n[a]});function r(e){let t={};for(let[s,n]of e.entries()){let e=t[s];void 0===e?t[s]=n:Array.isArray(e)?e.push(n):t[s]=[e,n]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[s,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(s,i(e));else t.set(s,i(n));return t}function o(e,...t){for(let s of t){for(let t of s.keys())e.delete(t);for(let[t,n]of s.entries())e.append(t,n)}return e}},95057,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return o}};for(var a in n)Object.defineProperty(s,a,{enumerable:!0,get:n[a]});let r=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:s}=e,n=e.protocol||"",a=e.pathname||"",l=e.hash||"",o=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:s&&(c=t+(~s.indexOf(":")?`[${s}]`:s),e.port&&(c+=":"+e.port)),o&&"object"==typeof o&&(o=String(r.urlQueryToSearchParams(o)));let d=e.search||o&&`?${o}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),a=a.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${a}${d}${l}`}let o=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},18581,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(71645);function a(e,t){let s=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=s.current;e&&(s.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(s.current=r(e,n)),t&&(a.current=r(t,n))},[e,t])}function r(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let s=e(t);return"function"==typeof s?s:()=>e(null)}}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),t.exports=s.default)},18967,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return N},NormalizeError:function(){return v},PageNotFoundError:function(){return y},SP:function(){return f},ST:function(){return x},WEB_VITALS:function(){return r},execOnce:function(){return i},getDisplayName:function(){return m},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return o},isResSent:function(){return u},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return b}};for(var a in n)Object.defineProperty(s,a,{enumerable:!0,get:n[a]});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,s=!1;return(...n)=>(s||(s=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>l.test(e);function c(){let{protocol:e,hostname:t,port:s}=window.location;return`${e}//${t}${s?":"+s:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function m(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function h(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let s=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(s&&u(s))return n;if(!n)throw Object.defineProperty(Error(`"${m(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let f="u">typeof performance,x=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class v extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class N extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"isLocalURL",{enumerable:!0,get:function(){return r}});let n=e.r(18967),a=e.r(52817);function r(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),s=new URL(e,t);return s.origin===t&&(0,a.hasBasePath)(s.pathname)}catch(e){return!1}}},84508,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return y}};for(var a in n)Object.defineProperty(s,a,{enumerable:!0,get:n[a]});let r=e.r(90809),i=e.r(43476),l=r._(e.r(71645)),o=e.r(95057),c=e.r(8372),d=e.r(18581),m=e.r(18967),u=e.r(5550);e.r(33525);let h=e.r(91949),p=e.r(73668),f=e.r(9396);function x(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}function g(t){var s;let n,a,r,[o,g]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),y=(0,l.useRef)(null),{href:N,as:j,children:b,prefetch:C=null,passHref:A,replace:E,shallow:_,scroll:R,onClick:w,onMouseEnter:T,onTouchStart:$,legacyBehavior:I=!1,onNavigate:P,ref:O,unstable_dynamicOnHover:k,...D}=t;n=b,I&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let S=l.default.useContext(c.AppRouterContext),M=!1!==C,H=!1!==C?null===(s=C)||"auto"===s?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,{href:L,as:U}=l.default.useMemo(()=>{let e=x(N);return{href:e,as:j?x(j):e}},[N,j]);if(I){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=l.default.Children.only(n)}let B=I?a&&"object"==typeof a&&a.ref:O,F=l.default.useCallback(e=>(null!==S&&(y.current=(0,h.mountLinkInstance)(e,L,S,H,M,g)),()=>{y.current&&((0,h.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,h.unmountPrefetchableInstance)(e)}),[M,L,S,H,g]),G={ref:(0,d.useMergedRef)(F,B),onClick(t){I||"function"!=typeof w||w(t),I&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!S||t.defaultPrevented||function(t,s,n,a,r,i,o){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,p.isLocalURL)(s)){r&&(t.preventDefault(),location.replace(s));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:m}=e.r(99781);l.default.startTransition(()=>{m(n||s,r?"replace":"push",i??!0,a.current)})}}(t,L,U,y,E,R,P)},onMouseEnter(e){I||"function"!=typeof T||T(e),I&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),S&&M&&(0,h.onNavigationIntent)(e.currentTarget,!0===k)},onTouchStart:function(e){I||"function"!=typeof $||$(e),I&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),S&&M&&(0,h.onNavigationIntent)(e.currentTarget,!0===k)}};return(0,m.isAbsoluteUrl)(U)?G.href=U:I&&!A&&("a"!==a.type||"href"in a.props)||(G.href=(0,u.addBasePath)(U)),r=I?l.default.cloneElement(a,G):(0,i.jsx)("a",{...D,...G,children:n}),(0,i.jsx)(v.Provider,{value:o,children:r})}e.r(84508);let v=(0,l.createContext)(h.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(v);("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),t.exports=s.default)},49255,e=>{"use strict";var t=e.i(43476),s=e.i(71645),n=e.i(22016);function a(){return(0,s.useEffect)(()=>{e.A(54445)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)(n.default,{className:"navbar-brand text-info",href:"/",children:[(0,t.jsx)("i",{className:"bi bi-terminal me-2"}),"amarsattaur"]}),(0,t.jsx)("button",{className:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav",children:(0,t.jsx)("i",{className:"bi bi-list text-light fs-4"})}),(0,t.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[(0,t.jsxs)("ul",{className:"navbar-nav ms-auto",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{className:"nav-link",href:"/#about",children:"About"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{className:"nav-link",href:"/#experience",children:"Experience"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{className:"nav-link",href:"/blog",children:"Blog"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n.default,{className:"nav-link",href:"/#contact",children:"Contact"})})]}),(0,t.jsxs)("a",{href:"/Amar_Sattaur_Resume.pdf",download:!0,className:"btn btn-resume ms-lg-3 mt-3 mt-lg-0",children:[(0,t.jsx)("i",{className:"bi bi-file-earmark-text me-2"}),"Resume"]})]})]})}),(0,t.jsx)("article",{className:"py-5",style:{paddingTop:"120px"},children:(0,t.jsx)("div",{className:"container py-5",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-lg-8 mx-auto",children:[(0,t.jsx)("nav",{"aria-label":"breadcrumb",className:"mb-4",children:(0,t.jsxs)("ol",{className:"breadcrumb",children:[(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(n.default,{href:"/",className:"text-info",children:"Home"})}),(0,t.jsx)("li",{className:"breadcrumb-item",children:(0,t.jsx)(n.default,{href:"/blog",className:"text-info",children:"Blog"})}),(0,t.jsx)("li",{className:"breadcrumb-item active text-secondary",children:"Production CI/CD"})]})}),(0,t.jsxs)("header",{className:"mb-5",children:[(0,t.jsxs)("div",{className:"d-flex flex-wrap gap-2 mb-3",children:[(0,t.jsx)("span",{className:"tech-badge",children:"GitHub Actions"}),(0,t.jsx)("span",{className:"tech-badge",children:"CI/CD"}),(0,t.jsx)("span",{className:"tech-badge",children:"Helm"}),(0,t.jsx)("span",{className:"tech-badge",children:"ArgoCD"})]}),(0,t.jsx)("h1",{className:"display-5 fw-bold mb-3",children:"Building a Production-Ready CI/CD Pipeline with Reusable GitHub Actions"}),(0,t.jsxs)("div",{className:"d-flex align-items-center text-secondary",children:[(0,t.jsx)("span",{children:"January 2025"}),(0,t.jsx)("span",{className:"mx-2",children:"•"}),(0,t.jsx)("span",{children:"15 min read"})]})]}),(0,t.jsxs)("div",{className:"blog-content",children:[(0,t.jsx)("p",{className:"lead text-secondary mb-4",children:"When your organization scales from a handful of services to 20+ microservices, copy-pasting CI/CD configurations becomes unsustainable. This post walks through a production-ready pipeline architecture that uses reusable workflows, environment-aware deployments, and GitOps integration with ArgoCD."}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"The Scenario"}),(0,t.jsx)("p",{className:"text-secondary",children:"Imagine a growing fintech startup—let's call them Acme Corp—that started with a monolith and gradually broke it into microservices. As the engineering team expanded, they faced common CI/CD challenges:"}),(0,t.jsxs)("ul",{className:"text-secondary",children:[(0,t.jsx)("li",{children:"Each team copied pipeline configs from existing repos, leading to drift"}),(0,t.jsx)("li",{children:"Inconsistent Helm chart naming conventions (hyphens vs underscores, casing issues)"}),(0,t.jsx)("li",{children:"No clear process for multi-environment deployments (dev, staging, prod)"}),(0,t.jsx)("li",{children:"Manual version bumping causing duplicate releases"}),(0,t.jsx)("li",{children:"ArgoCD sync happening manually or with inconsistent automation"})]}),(0,t.jsx)("p",{className:"text-secondary",children:"The solution? A centralized reusable workflow that handles the entire build-to-deploy lifecycle with a single tag push."}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Architecture Overview"}),(0,t.jsx)("p",{className:"text-secondary",children:"The pipeline uses a caller/callee pattern where individual service repos have minimal configuration, and a centralized workflow handles all the complexity."}),(0,t.jsxs)("div",{className:"custom-card p-4 my-4",children:[(0,t.jsxs)("h5",{className:"text-info mb-3",children:[(0,t.jsx)("i",{className:"bi bi-diagram-3 me-2"}),"Pipeline Flow"]}),(0,t.jsx)("pre",{className:"text-success mb-0",style:{fontSize:"0.85rem"},children:`Developer pushes tag: deploy-staging-v1.2.3
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
ArgoCD detects change → Syncs to Kubernetes cluster`})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"The Caller Workflow"}),(0,t.jsx)("p",{className:"text-secondary",children:"Each service repository contains a minimal workflow file that delegates to the centralized workflow. The magic happens in the tag naming convention."}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:".github/workflows/build-and-deploy.yml"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`name: Build-and-Deploy

on:
  push:
    tags:
      - 'deploy-**'    # Matches: deploy-dev-v1.0.0, deploy-staging-release, etc.
      - 'DEPLOY-**'    # Case-insensitive matching

jobs:
  build-and-deploy:
    uses: acme-corp/.github/.github/workflows/build-deploy-pipeline.yml@main
    secrets: inherit  # Pass all secrets to the reusable workflow`})})]}),(0,t.jsxs)("p",{className:"text-secondary",children:["The tag format ",(0,t.jsxs)("code",{children:["deploy-","{environment}","-","{identifier}"]})," encodes the target environment directly in the trigger. This eliminates the need for environment selection UI or manual inputs."]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Job 1: Docker Build with Attestation"}),(0,t.jsx)("p",{className:"text-secondary",children:"The build job creates the Docker image with proper caching and supply chain security."}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"Build Job"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`build:
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
        push-to-registry: true`})})]}),(0,t.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Key Design Decisions"}),(0,t.jsxs)("ul",{className:"text-secondary",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Concurrency groups:"})," Using ",(0,t.jsx)("code",{children:"github.sha"})," prevents parallel runs for the same commit while allowing different commits to build simultaneously"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Build attestation:"})," Creates a cryptographic proof of where and how the image was built—critical for supply chain security"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"GHA cache:"})," Leverages GitHub's built-in caching for Docker layers, typically reducing build times by 40-60%"]})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Job 2: Helm Chart Normalization & Push"}),(0,t.jsx)("p",{className:"text-secondary",children:"This job handles one of the trickiest aspects of managing many microservices: keeping Helm chart conventions consistent. It normalizes chart names, detects the target environment from the tag, and auto-increments versions."}),(0,t.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Environment Detection"}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"Extract environment from tag"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`- name: Determine environment
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
    fi`})})]}),(0,t.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Chart Name Normalization"}),(0,t.jsxs)("p",{className:"text-secondary",children:["Over time, teams created charts with inconsistent naming: ",(0,t.jsx)("code",{children:"my-service"}),", ",(0,t.jsx)("code",{children:"My_Service"}),", ",(0,t.jsx)("code",{children:"myService"}),". This step enforces a canonical format: lowercase with underscores."]}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"Normalize chart naming"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`- name: Normalize Helm chart directory and Chart.yaml name
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
    fi`})})]}),(0,t.jsx)("h3",{className:"h5 mt-4 mb-3",children:"Auto-Versioning & Registry Push"}),(0,t.jsx)("p",{className:"text-secondary",children:"The workflow automatically increments the patch version to prevent collisions, then publishes to GHCR as a Helm artifact."}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"Version and push Helm chart"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`- name: Helm Push
  run: |
    HELM_REGISTRY="ghcr.io/\${{ github.repository_owner }}"
    CHART_NAME="\${{ steps.normalize.outputs.CHART_NAME }}"
    ENVIRONMENT="\${{ steps.determine-env.outputs.ENVIRONMENT }}"

    # Login to GHCR
    echo "\${{ secrets.GITHUB_TOKEN }}" | \\
      helm registry login ghcr.io --username \${{ github.actor }} --password-stdin

    # Get current version from Chart.yaml
    LOCAL_VERSION=$(yq '.version' helm/$CHART_NAME/Chart.yaml)

    # Auto-increment patch version
    IFS='.' read -r major minor patch <<< "$LOCAL_VERSION"
    new_patch=$((patch + 1))
    NEW_VERSION="\${major}.\${minor}.\${new_patch}"

    # Update version in Chart.yaml
    yq -i ".version = \\"$NEW_VERSION\\"" helm/$CHART_NAME/Chart.yaml

    # Append environment to chart name for env-specific releases
    yq -i ".name = .name + \\"-$ENVIRONMENT\\"" helm/$CHART_NAME/Chart.yaml

    # Package and push
    helm package helm/$CHART_NAME
    helm push \${CHART_NAME}-\${ENVIRONMENT}-\${NEW_VERSION}.tgz $HELM_REGISTRY`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Job 3: Update Environment Values"}),(0,t.jsxs)("p",{className:"text-secondary",children:["A dedicated ",(0,t.jsx)("code",{children:"deploy"})," branch stores environment-specific values files. This separation allows different configurations per environment while keeping the main branch clean."]}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"Update environment values"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`update-env-values:
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
        git push`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Job 4: ArgoCD Integration"}),(0,t.jsxs)("p",{className:"text-secondary",children:["The final job creates a PR to the ArgoCD repository, updating the ",(0,t.jsx)("code",{children:"targetRevision"})," to the new chart version. The PR is automatically merged, triggering ArgoCD to sync."]}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"ArgoCD PR automation"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`update-chart-version:
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
        gh pr merge --delete-branch --merge`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Environment-Specific Chart Files"}),(0,t.jsxs)("p",{className:"text-secondary",children:["One powerful pattern is maintaining environment-specific Chart files (",(0,t.jsx)("code",{children:"Chart-dev.yaml"}),", ",(0,t.jsx)("code",{children:"Chart-staging.yaml"}),", ",(0,t.jsx)("code",{children:"Chart-prod.yaml"}),"). This allows different versions, annotations, or dependencies per environment."]}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"Directory structure"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`helm/
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
    └── values-prod.yaml     # Prod-specific values`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Developer Experience"}),(0,t.jsx)("p",{className:"text-secondary",children:"With this setup, deploying to any environment is a single command:"}),(0,t.jsxs)("div",{className:"terminal-card my-4",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)("div",{className:"terminal-dot terminal-dot-red"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-yellow"}),(0,t.jsx)("div",{className:"terminal-dot terminal-dot-green"}),(0,t.jsx)("span",{className:"ms-3 text-secondary small",children:"Deployment commands"})]}),(0,t.jsx)("div",{className:"terminal-body",children:(0,t.jsx)("pre",{className:"text-success mb-0",children:`# Deploy to dev
git tag deploy-dev-$(date +%Y%m%d-%H%M%S)
git push origin --tags

# Deploy to staging
git tag deploy-staging-v1.2.3
git push origin --tags

# Deploy to production
git tag deploy-prod-release-2025-01
git push origin --tags`})})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Results"}),(0,t.jsx)("div",{className:"custom-card p-4 my-4",children:(0,t.jsxs)("div",{className:"row text-center",children:[(0,t.jsxs)("div",{className:"col-md-3 mb-3 mb-md-0",children:[(0,t.jsx)("h3",{className:"text-info",children:"18 → 1"}),(0,t.jsx)("p",{className:"text-secondary mb-0",children:"Workflow files per repo"})]}),(0,t.jsxs)("div",{className:"col-md-3 mb-3 mb-md-0",children:[(0,t.jsx)("h3",{className:"text-info",children:"45%"}),(0,t.jsx)("p",{className:"text-secondary mb-0",children:"Faster deploys"})]}),(0,t.jsxs)("div",{className:"col-md-3 mb-3 mb-md-0",children:[(0,t.jsx)("h3",{className:"text-info",children:"100%"}),(0,t.jsx)("p",{className:"text-secondary mb-0",children:"Consistent chart naming"})]}),(0,t.jsxs)("div",{className:"col-md-3",children:[(0,t.jsx)("h3",{className:"text-info",children:"0"}),(0,t.jsx)("p",{className:"text-secondary mb-0",children:"Manual ArgoCD syncs"})]})]})}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Key Takeaways"}),(0,t.jsxs)("ol",{className:"text-secondary",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Encode intent in triggers:"})," Using tag naming conventions eliminates environment selection UI and reduces human error"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Normalize ruthlessly:"})," Consistent naming conventions prevent drift and simplify tooling"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Chain jobs with outputs:"})," Pass data between jobs via outputs to create cohesive pipelines"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Use concurrency groups:"})," Prevent race conditions when multiple deployments happen simultaneously"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Automate the entire path:"})," From commit to ArgoCD sync, remove manual steps wherever possible"]})]}),(0,t.jsx)("h2",{className:"h3 mt-5 mb-3 text-info",children:"Conclusion"}),(0,t.jsx)("p",{className:"text-secondary",children:"Building a production-ready CI/CD pipeline isn't about adding complexity—it's about encoding best practices so teams can focus on shipping features. By centralizing workflow logic, enforcing conventions, and automating the entire deployment path, you create a system that scales with your organization."}),(0,t.jsxs)("p",{className:"text-secondary",children:["The initial investment in building this infrastructure pays dividends every time a new service is created or a deployment is triggered. What once took hours of setup and manual coordination now happens with a single ",(0,t.jsx)("code",{children:"git push --tags"}),"."]}),(0,t.jsx)("div",{className:"custom-card p-4 mt-5",children:(0,t.jsxs)("div",{className:"d-flex align-items-center",children:[(0,t.jsx)("div",{className:"icon-box me-3",style:{width:"60px",height:"60px"},children:(0,t.jsx)("i",{className:"bi bi-person fs-3"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{className:"mb-1",children:"Amar Sattaur"}),(0,t.jsx)("p",{className:"text-secondary mb-0 small",children:"Staff DevOps Engineer specializing in CI/CD automation, Kubernetes, and developer experience."})]})]})}),(0,t.jsxs)("div",{className:"d-flex justify-content-between mt-5 pt-4 border-top border-secondary",children:[(0,t.jsxs)(n.default,{href:"/blog/zero-downtime-eks-upgrades",className:"btn btn-outline-custom",children:[(0,t.jsx)("i",{className:"bi bi-arrow-left me-2"}),"Previous Post"]}),(0,t.jsxs)(n.default,{href:"/blog/argocd-multi-cluster-patterns",className:"btn btn-gradient",children:["Next Post",(0,t.jsx)("i",{className:"bi bi-arrow-right ms-2"})]})]})]})]})})})}),(0,t.jsx)("footer",{className:"footer py-4",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-md-6 text-center text-md-start mb-3 mb-md-0",children:(0,t.jsxs)("span",{className:"text-secondary",style:{fontFamily:"monospace"},children:[(0,t.jsx)("span",{className:"text-info",children:">"})," Built with Next.js & Bootstrap"]})}),(0,t.jsx)("div",{className:"col-md-6 text-center text-md-end",children:(0,t.jsxs)("span",{className:"text-secondary",style:{fontFamily:"monospace"},children:["© ",new Date().getFullYear()," Amar Sattaur"]})})]})})})]})}e.s(["default",()=>a])},54445,e=>{e.v(t=>Promise.all(["static/chunks/ae178c291a3a4d2f.js"].map(t=>e.l(t))).then(()=>t(83781)))}]);