(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(220)),i=n(248),l={id:"filter-apply-order",title:"Filter Apply Order"},c={id:"guides/xml-pointers/filter-apply-order",title:"Filter Apply Order",description:"After proto `1.3.3` and above, the order that you [apply](/docs/modules/mechanics/regions#applying) filters to regions affects their behavior.",source:"@site/docs/guides/xml-pointers/filter-apply-order.mdx",permalink:"/docs/guides/xml-pointers/filter-apply-order",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/guides/xml-pointers/filter-apply-order.mdx",sidebar:"Guides",previous:{title:"Using Filters and Regions",permalink:"/docs/guides/xml-pointers/applying-to-regions"},next:{title:"XML Conventions",permalink:"/docs/guides/xml-pointers/conventions"}},p=[],s={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After proto ",Object(o.b)("inlineCode",{parentName:"p"},"1.3.3")," and above, the order that you ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/modules/mechanics/regions#applying"}),"apply")," filters to regions affects their behavior.\nHere's an example."),Object(o.b)("p",null,"Let's start out with a basic filter that ",Object(o.b)("strong",{parentName:"p"},"denies")," everything ",Object(o.b)("strong",{parentName:"p"},"except")," TNT."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<all id="only-tnt">\n    <block>tnt</block>\n</all>\n')),Object(o.b)("p",null,"Now let's apply this filter to ",Object(o.b)("inlineCode",{parentName:"p"},"Region A"),", and also apply a filter to ",Object(o.b)("inlineCode",{parentName:"p"},"Region B")," that denies all blocks."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<apply block="only-tnt" region="region-a"/>\n\n<apply block="never" region="region-b"/>\n')),Object(o.b)("p",null,"However, there is one slight complication. ",Object(o.b)("inlineCode",{parentName:"p"},"Region B")," is inside of ",Object(o.b)("inlineCode",{parentName:"p"},"Region A"),".\nSo which filter will override the other? This is where the apply order comes in handy."),Object(o.b)(i.a,{lightImageSrc:"/img/apply-order.png",darkImageSrc:"/img/apply-order-dark.png",mdxType:"ImageSwitcher"}),Object(o.b)("p",null,"The order that you put the ",Object(o.b)("inlineCode",{parentName:"p"},"<apply>"),"'s can change the outcome when something gets filtered.\nIn the previous example, the ",Object(o.b)("inlineCode",{parentName:"p"},"only-tnt")," filter would always override the ",Object(o.b)("inlineCode",{parentName:"p"},"never")," filter since it is above it.\nThe apply for ",Object(o.b)("inlineCode",{parentName:"p"},"region B")," won't get checked since it overlaps completely with ",Object(o.b)("inlineCode",{parentName:"p"},"region A")," and ",Object(o.b)("inlineCode",{parentName:"p"},"region A")," never returns abstain."),Object(o.b)("p",null,"If we changed the order of the filters:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<apply block="never" region="region-b"/>\n<apply block="only-tnt" region="region-a"/>\n')),Object(o.b)("p",null,"Now you cannot place blocks in ",Object(o.b)("inlineCode",{parentName:"p"},"Region B"),", but outside of it in ",Object(o.b)("inlineCode",{parentName:"p"},"Region A")," you can only place TNT blocks."),Object(o.b)("p",null,"Although this may not be an issue for many maps such as a Blitz map or a TDM,\nthis is a crucial concept for many DTC/DTM/CTW maps that use the ",Object(o.b)("inlineCode",{parentName:"p"},"<void/>")," filter.\nUsually it's best to have the ",Object(o.b)("inlineCode",{parentName:"p"},"<void/>")," filter at the lowest priority (at the bottom of the list)."))}b.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,l({ref:t},p,{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";var r=n(0),a=n(225);t.a=function(){return Object(r.useContext)(a.a)}},225:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=a},248:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(224);t.a=function(e){var t=e.lightImageSrc,n=e.darkImageSrc,r=Object(o.a)().isDarkTheme;return a.a.createElement("img",{src:r?n:t,alt:"This image needs JS enabled to load."})}}}]);