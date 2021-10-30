(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),a=(n(0),n(220)),i={id:"regions",title:"Defining Regions"},c={id:"guides/xml-pointers/regions",title:"Defining Regions",description:"First of all, region coordinates in PGM are _real numbers_.",source:"@site/docs/guides/xml-pointers/regions.mdx",permalink:"/docs/guides/xml-pointers/regions",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/guides/xml-pointers/regions.mdx",sidebar:"Guides",next:{title:"Using Filters and Regions",permalink:"/docs/guides/xml-pointers/applying-to-regions"}},s=[{value:"Regions: The Wrong Way",id:"regions-the-wrong-way",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"First of all, region coordinates in PGM are ",Object(a.b)("em",{parentName:"p"},"real numbers"),".\nThat means they can be fractional values, like ",Object(a.b)("inlineCode",{parentName:"p"},"2.3"),", ",Object(a.b)("inlineCode",{parentName:"p"},"4.5"),", ",Object(a.b)("inlineCode",{parentName:"p"},"6.789"),", and so on.\nA coordinate represents a ",Object(a.b)("em",{parentName:"p"},"point")," on one of the three axes (X, Y, or Z), and a set of three coordinates represents a ",Object(a.b)("em",{parentName:"p"},"point")," in 3D space.\nCoordinates do ",Object(a.b)("strong",{parentName:"p"},"not")," represent blocks, at least not ",Object(a.b)("em",{parentName:"p"},"directly"),".\nWhen PGM needs to decide if a block is inside a region, it checks if the point at the ",Object(a.b)("strong",{parentName:"p"},"center")," of the block is inside the region.\nThe center point of a block will always have coordinates that end in ",Object(a.b)("inlineCode",{parentName:"p"},"0.5"),".\nWhen making regions, you have to make sure that all the block centers are ",Object(a.b)("em",{parentName:"p"},"inside")," the region."),Object(a.b)("p",null,"Here is an example. Let's say we want to make region for a destroyable that looks like this:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/q9NMNuV.png",alt:null}))),Object(a.b)("p",null,"First, we stand very close to one ",Object(a.b)("strong",{parentName:"p"},"corner")," of the region and note the coordinates are ",Object(a.b)("inlineCode",{parentName:"p"},"(32, 60, -20)"),":"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/OzvGnlJ.png",alt:null}))),Object(a.b)("p",null,"Then we stand over the opposite corner and note the coordinates are ",Object(a.b)("inlineCode",{parentName:"p"},"(34, 60, -18)"),"."),Object(a.b)("p",null,"We know the monument is three blocks tall, so we'll just subtract three from the Y coordinate to get ",Object(a.b)("inlineCode",{parentName:"p"},"(34, 57, -18)"),":"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/mNeLmU8.png",alt:null}))),Object(a.b)("p",null,"Notice that we are rounding to the ",Object(a.b)("strong",{parentName:"p"},"nearest")," integer, since those will obviously be the coordinates of the corner we are standing close to.\nWe don't need to worry about positive vs negative coordinates, as they work the same way, and we never need to add or subtract one."),Object(a.b)("p",null,"With these coordinates, we can make a cuboid region for the monument:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<cuboid min="32, 60, -20" max="34, 57, -18"/>\n')),Object(a.b)("p",null,"For style points, we can make sure all the low coordinates are in min and the high ones in max:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<cuboid min="32, 57, -20" max="34, 60, -18"/>\n')),Object(a.b)("p",null,"This is not necessary, as PGM will fix it for you, but it might make the XML easier for a human to read and edit."),Object(a.b)("p",null,"An easy way to check that cuboid regions are correct is to simply subtract the low coordinates from the high ones.\nThe result should be the size of the region. If it isn't, you did something wrong."),Object(a.b)("p",null,"Let's try a more interesting region: a cylinder.\nA cylinder is defined by its base (center) point, radius, and height.\nAssuming one layer of blocks, the cylinder in the image below is based at ",Object(a.b)("inlineCode",{parentName:"p"},"(53.5, 57, -10.5)")," and has a radius of ",Object(a.b)("inlineCode",{parentName:"p"},"2.5")," and a height of ",Object(a.b)("inlineCode",{parentName:"p"},"1"),".\nBlocks with their center point inside the cylinder will be considered part of the region."),Object(a.b)("p",null,"The region boundary and the block centers are highlighted so you can easily see how this works:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://i.imgur.com/OgME3KK.png",alt:null}))),Object(a.b)("p",null,"So the region would be:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<cylinder base="53.5, 57, -10.5" radius="2.5" height="1"/>\n')),Object(a.b)("h3",{id:"regions-the-wrong-way"},"Regions: The Wrong Way"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"DON'T")," use WorldEdit to get region coordinates.\nWorldEdit uses a dumb coordinate system that will not give you correct regions, and while it's possible to convert the coordinates,\nit's going to confuse you and cause mistakes, and it's just not worth the trouble."))}b.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);