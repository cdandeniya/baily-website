"use strict";
exports.id = 432;
exports.ids = [432];
exports.modules = {

/***/ 2729:
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 6901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about)
});

// EXTERNAL MODULE: external "/Users/echanuld/Baily/website-main/node_modules/react/index.js"
var index_js_ = __webpack_require__(3163);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(8154);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 9 modules
var styled_components_esm = __webpack_require__(7131);
// EXTERNAL MODULE: ./src/styles/index.js + 8 modules
var styles = __webpack_require__(6044);
// EXTERNAL MODULE: ./node_modules/camelcase/index.js
var camelcase = __webpack_require__(2729);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=800,c=800,h=(/* unused pure expression or super */ null && (4/3)),g=function(e){return console.warn(e);},p=function(e,t){return e-t;},m=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}},f=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function v(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function w(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,d=e.formats,g=void 0===d?["auto","webp"]:d;return g=g.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:g,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||h))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/h):c),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:g}));}function y(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=w(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function b(e){var t,a=(e=w(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,d=e.options,h=e.width,p=e.height,y=e.filename,b=e.reporter,S=void 0===b?{warn:g}:b,N=e.backgroundColor,x=e.placeholderURL;if(a||S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=v(y)):i={width:h,height:p,format:(null==(t=i)?void 0:t.format)||v(y)||"auto"};var I=new Set(e.formats);(0===I.size||I.has("auto")||I.has(""))&&(I.delete("auto"),I.delete(""),I.add(i.format)),I.has("jpg")&&I.has("png")&&(S.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),I.delete("jpg"===i.format?"png":"jpg"));var W=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:g}:o,d=e.breakpoints,h=void 0===d?l:d,p=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(p.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+p.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,d=void 0===u?{warn:g}:u,h=a.width/a.height,p=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):c;var f=i;if(a.width<i||a.height<r){var v=a.width<i?"width":"height";d.warn("\nThe requested "+v+' "'+("width"===v?i:r)+'px" for the image '+t+" was larger than the actual image "+v+" of "+a[v]+"px. If possible, replace the current image with a larger one."),"width"===v?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:p.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}(e):"constrained"===i?E(e):"fullWidth"===i?E(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),j={sources:[]},R=e.sizes;R||(R=m(W.presentationWidth,o)),I.forEach(function(e){var t=W.sizes.map(function(t){var i=r(y,t,Math.round(t/W.aspectRatio),e,u,d);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;S.warn("["+a+"] The resolver for image "+y+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===W.unscaledWidth;})||t[0];i&&(j.fallback={src:i.src,srcSet:f(t),sizes:R});}else{var n;null==(n=j.sources)||n.push({srcSet:f(t),sizes:R,type:"image/"+e});}});var _={images:j,layout:o,backgroundColor:N};switch(x&&(_.placeholder={fallback:x}),o){case"fixed":_.width=W.presentationWidth,_.height=W.presentationHeight;break;case"fullWidth":_.width=1,_.height=1/W.aspectRatio;break;case"constrained":_.width=e.width||W.presentationWidth||1,_.height=(_.width||1)/W.aspectRatio;}return _;}var k=function(e){return Array.from(new Set([1].concat(e))).sort(p);};function E(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,c=e.layout,h=a.width/a.height,g=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(d,a.width))/h),i||(i=r*h);var f=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==c||t.includes(i)||t.push(i),{sizes:t=t.sort(p),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}function M(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var S=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),N=(/* unused pure expression or super */ null && (["images","placeholder"]));function x(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE;}var I=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},W=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},j=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function R(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,S);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),b(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function _(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,N),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var A,O=["src","srcSet","loading","alt","shouldLoad"],T=["fallback","sources","shouldLoad"],z=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,O);return/*#__PURE__*/index_js_default().createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},L=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,T),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/index_js_default().createElement(z,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/index_js_default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/index_js_default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};z.propTypes={src:prop_types.string.isRequired,alt:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string,shouldLoad:prop_types.bool},L.displayName="Picture",L.propTypes={alt:prop_types.string.isRequired,shouldLoad:prop_types.bool,fallback:prop_types.exact({src:prop_types.string.isRequired,srcSet:prop_types.string,sizes:prop_types.string}),sources:prop_types.arrayOf(prop_types.oneOfType([prop_types.exact({media:prop_types.string.isRequired,type:prop_types.string,sizes:prop_types.string,srcSet:prop_types.string.isRequired}),prop_types.exact({media:prop_types.string,type:prop_types.string.isRequired,sizes:prop_types.string,srcSet:prop_types.string.isRequired})]))};var q=["fallback"],C=function(t){var a=t.fallback,i=o(t,q);return a?/*#__PURE__*/index_js_default().createElement(L,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/index_js_default().createElement("div",n({},i));};C.displayName="Placeholder",C.propTypes={fallback:prop_types.string,sources:null==(A=L.propTypes)?void 0:A.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var D=function(t){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(L,n({},t)),/*#__PURE__*/index_js_default().createElement("noscript",null,/*#__PURE__*/index_js_default().createElement(L,n({},t,{shouldLoad:!0}))));};D.displayName="MainImage",D.propTypes=L.propTypes;var P=["children"],H=function(){return/*#__PURE__*/index_js_default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},F=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/index_js_default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/index_js_default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/index_js_default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+i+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},B=function(a){var i=a.children,r=o(a,P);return/*#__PURE__*/index_js_default().createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_default().createElement(F,n({},r)),i,/*#__PURE__*/index_js_default().createElement(H,null));},G=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],V=["style","className"],U=function(e){return e.replace(/\n/g,"");},X=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,G);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,E=u.placeholder,M=u.backgroundColor,S=function(e,t,a){var i={},r="gatsby-image-wrapper";return x()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(x()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),N=S.style,I=S.className,W=o(S,V),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?U(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:U(e.srcSet)});})),/*#__PURE__*/index_js_default().createElement(i,n({},W,{style:n({},N,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/index_js_default().createElement(B,{layout:b,width:w,height:y},/*#__PURE__*/index_js_default().createElement(C,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return x()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(E,0,b,w,y,M,m,f))),/*#__PURE__*/index_js_default().createElement(D,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),x()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},Y=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],Z=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,Y);return s&&console.warn(s),r?/*#__PURE__*/index_js_default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(X),J=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types_default().number.apply((prop_types_default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},K=new Set(["fixed","fullWidth","constrained"]),Q={src:(prop_types_default()).string.isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types_default().string.apply((prop_types_default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:J,height:J,sizes:(prop_types_default()).string,layout:function(e){if(void 0!==e.layout&&!K.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};Z.displayName="StaticImage",Z.propTypes=Q;
;// CONCATENATED MODULE: ./src/components/about/team.js
const StyledSection=(0,styled_components_esm["default"])(styles/* Section */.wn).withConfig({displayName:"team__StyledSection",componentId:"sc-1u4e344-0"})(["padding-top:6rem;text-align:center;",";"],styles/* media */.$_.thone`
    padding-top: 4.25rem;
  `);const Title=styled_components_esm["default"].h2.withConfig({displayName:"team__Title",componentId:"sc-1u4e344-1"})(["font-size:48px;text-align:center;margin-bottom:1.5rem;font-weight:bold;",";"],styles/* media */.$_.tablet`
    font-size: 36px;
  `);const Subtitle=styled_components_esm["default"].p.withConfig({displayName:"team__Subtitle",componentId:"sc-1u4e344-2"})(["font-size:18px;text-align:center;margin-bottom:4rem;color:var(--dark-gray);",";"],styles/* media */.$_.tablet`
    font-size: 16px;
    margin-bottom: 3rem;
  `);const GridWrapper=styled_components_esm["default"].div.withConfig({displayName:"team__GridWrapper",componentId:"sc-1u4e344-3"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:4rem;justify-items:center;",";"],styles/* media */.$_.tablet`
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  `);const Card=styled_components_esm["default"].div.withConfig({displayName:"team__Card",componentId:"sc-1u4e344-4"})(["position:relative;width:100%;max-width:320px;overflow:hidden;border-radius:12px;cursor:pointer;&:hover img{transform:scale(1.1);}&:hover div{opacity:1;}"]);const ImageWrapper=styled_components_esm["default"].div.withConfig({displayName:"team__ImageWrapper",componentId:"sc-1u4e344-5"})(["position:relative;"]);const StyledImage=(0,styled_components_esm["default"])(X).withConfig({displayName:"team__StyledImage",componentId:"sc-1u4e344-6"})(["width:100%;height:auto;transition:transform 0.3s ease-in-out;border-radius:12px;"]);const Overlay=styled_components_esm["default"].div.withConfig({displayName:"team__Overlay",componentId:"sc-1u4e344-7"})(["position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.4);display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;transition:opacity 0.3s ease-in-out;border-radius:12px;"]);const Name=styled_components_esm["default"].h3.withConfig({displayName:"team__Name",componentId:"sc-1u4e344-8"})(["color:#fff;font-size:24px;font-weight:bold;margin-bottom:0.5rem;",";"],styles/* media */.$_.thone`
    font-size: 20px;
  `);const ReadMoreButton=styled_components_esm["default"].button.withConfig({displayName:"team__ReadMoreButton",componentId:"sc-1u4e344-9"})(["background-color:transparent;border:2px solid #fff;color:#fff;padding:0.5rem 1rem;border-radius:8px;cursor:pointer;font-size:16px;font-weight:bold;transition:background-color 0.3s ease-in-out,color 0.3s ease-in-out;&:hover{background-color:#fff;color:#000;}",";"],styles/* media */.$_.tablet`
    font-size: 14px;
  `);const Team=({data})=>{return/*#__PURE__*/index_js_default().createElement(StyledSection,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,{max:true},/*#__PURE__*/index_js_default().createElement(Title,null,"Making it happen"),/*#__PURE__*/index_js_default().createElement(Subtitle,null,"Discover the Creative Minds Behind Our Toys, Shaping Future Learning in Classrooms Globally"),/*#__PURE__*/index_js_default().createElement(GridWrapper,null,/*#__PURE__*/index_js_default().createElement(Card,null,/*#__PURE__*/index_js_default().createElement(ImageWrapper,null,/*#__PURE__*/index_js_default().createElement(StyledImage,{image:data.chanul.childImageSharp.gatsbyImageData,alt:"Chanul Dandeniya"}),/*#__PURE__*/index_js_default().createElement(Overlay,null,/*#__PURE__*/index_js_default().createElement(Name,null,"Chanul Dandeniya"),/*#__PURE__*/index_js_default().createElement(ReadMoreButton,null,"Read More")))),/*#__PURE__*/index_js_default().createElement(Card,null,/*#__PURE__*/index_js_default().createElement(ImageWrapper,null,/*#__PURE__*/index_js_default().createElement(StyledImage,{image:data.kyrylo.childImageSharp.gatsbyImageData,alt:"Ahad Hassan"}),/*#__PURE__*/index_js_default().createElement(Overlay,null,/*#__PURE__*/index_js_default().createElement(Name,null,"Ahad Hassan"),/*#__PURE__*/index_js_default().createElement(ReadMoreButton,null,"Read More")))))));};/* harmony default export */ const team = (Team);
;// CONCATENATED MODULE: ./src/components/about/hero.js
const hero_StyledSection=(0,styled_components_esm["default"])(styles/* Section */.wn).withConfig({displayName:"hero__StyledSection",componentId:"sc-uj7ww7-0"})(["padding-top:10rem;padding-bottom:10rem;overflow-x:hidden;min-height:60rem;",";",";"],styles/* media */.$_.tablet`
    padding-top: 5rem; /* Less padding for tablets */
    padding-bottom: 5rem; 
    max-height: 40rem;
  `,styles/* media */.$_.thone`
    padding-top: 3rem; /* Further reduce padding for phones */
    padding-bottom: 3rem;
  `);const BigText=styled_components_esm["default"].h1.withConfig({displayName:"hero__BigText",componentId:"sc-uj7ww7-1"})(["font-weight:bold;font-size:80px;letter-spacing:-2px;line-height:100%;",";",";",";"],styles/* media */.$_.massive`font-size: 70px;`,styles/* media */.$_.tablet`font-size: 60px;`,styles/* media */.$_.thone`font-size: 40px;`);const Description=styled_components_esm["default"].p.withConfig({displayName:"hero__Description",componentId:"sc-uj7ww7-2"})(["font-size:28px;max-width:90%;line-height:146%;",";",";"],styles/* media */.$_.tablet`
    max-width: 100%;
    font-size: 24px;
  `,styles/* media */.$_.thone`
    font-size: 18px; /* Smaller font size for phones */
    max-width: 100%; 
    line-height: 1.4;
  `);const Row=styled_components_esm["default"].div.withConfig({displayName:"hero__Row",componentId:"sc-uj7ww7-3"})(["display:flex;flex-wrap:wrap;align-items:center;",";"],styles/* media */.$_.tablet`flex-direction: column-reverse;`);const Col=styled_components_esm["default"].div.withConfig({displayName:"hero__Col",componentId:"sc-uj7ww7-4"})(["flex:0 0 auto;width:",";",";"],props=>props.bigger?'60%':'40%',styles/* media */.$_.tablet`
    width: 100%; /* Full width on tablets and smaller */
  `);const hero_StyledImage=(0,styled_components_esm["default"])(Img).withConfig({displayName:"hero__StyledImage",componentId:"sc-uj7ww7-5"})(["width:100%;",";"],styles/* media */.$_.tablet`display: none;`);const Hero=({data})=>{return/*#__PURE__*/index_js_default().createElement(hero_StyledSection,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,{max:true},/*#__PURE__*/index_js_default().createElement(Row,null,/*#__PURE__*/index_js_default().createElement(Col,{bigger:true},/*#__PURE__*/index_js_default().createElement(BigText,null,"We're the Toymakers of the Future: Crafting Tomorrow's Learning Today"),/*#__PURE__*/index_js_default().createElement(Description,null,"Baily is empowering young minds to explore, create, and thrive in a digital world.")),/*#__PURE__*/index_js_default().createElement(Col,null,/*#__PURE__*/index_js_default().createElement(hero_StyledImage,{fluid:data.blast.childImageSharp.fluid,alt:"About us"})))));};/* harmony default export */ const hero = (Hero);
;// CONCATENATED MODULE: ./src/components/about/info.js
const CardsWrapper=styled_components_esm["default"].div.withConfig({displayName:"info__CardsWrapper",componentId:"sc-6brk5c-0"})(["display:flex;justify-content:space-between;gap:1rem;",";"],styles/* media */.$_.desktop`
    flex-direction: column;
    gap: 2rem;  /* Add more space between cards on mobile */
  `);const TextWrapper=styled_components_esm["default"].div.withConfig({displayName:"info__TextWrapper",componentId:"sc-6brk5c-1"})(["color:var(--text);",";"],styles/* media */.$_.thone`
    text-align: center;
    margin-bottom: 1.5rem;  /* Add some margin for spacing */
  `);const info_Title=styled_components_esm["default"].h2.withConfig({displayName:"info__Title",componentId:"sc-6brk5c-2"})(["font-size:65px;letter-spacing:-4px;font-weight:700;margin:0;",";"],styles/* media */.$_.thone`
    font-size: 45px; /* Adjusted for smaller screens */
    margin-bottom: 1rem;  /* Add margin for spacing */
  `);const Info=({data})=>{return/*#__PURE__*/index_js_default().createElement(styles/* Section */.wn,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,null,/*#__PURE__*/index_js_default().createElement(CardsWrapper,null,/*#__PURE__*/index_js_default().createElement(styles/* Card */.Zp,{width:"48%",bg:"var(--blue)",padding:"2rem"},/*#__PURE__*/index_js_default().createElement(TextWrapper,null,/*#__PURE__*/index_js_default().createElement(info_Title,null,"About Baily AI"),/*#__PURE__*/index_js_default().createElement(styles/* DefaultText */.rj,null,"At Baily, we are pioneers in the next wave of educational toys. Our AI-powered companions are more than just toys; they are gateways to sparking lifelong curiosity and foundational learning. Designed with the future in mind, each Baily AI toy adapts to the individual child, making learning personal, engaging, and fun. By integrating cutting-edge technology with child-friendly design, we create experiences that educate, inspire, and delight."))),/*#__PURE__*/index_js_default().createElement(styles/* Card */.Zp,{width:"48%",bg:"var(--yellow)",padding:"2rem"},/*#__PURE__*/index_js_default().createElement(TextWrapper,null,/*#__PURE__*/index_js_default().createElement(info_Title,null,"Our mission"),/*#__PURE__*/index_js_default().createElement(styles/* DefaultText */.rj,null,"Our mission at Baily is to be the toymakers of the future, transforming how children learn through play. We strive to develop interactive toys that blend educational content with personal growth opportunities, fostering both cognitive and creative skills. Our goal is to build a brighter future where every child is equipped with the tools to explore, create, and lead in a changing world. Every toy we craft is a step towards making this vision a reality, ensuring that our young users are inspired to pursue their passions and embrace the joy of learning."))))));};/* harmony default export */ const info = (Info);
;// CONCATENATED MODULE: ./src/components/about/index.js

;// CONCATENATED MODULE: ./src/pages/about.js
const AboutPage=({data})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Helmet.Helmet,{title:"About"}),/*#__PURE__*/index_js_default().createElement("div",{"data-scroll-section":true},/*#__PURE__*/index_js_default().createElement(hero,{data:data})),/*#__PURE__*/index_js_default().createElement("div",{"data-scroll-section":true},/*#__PURE__*/index_js_default().createElement(info,{data:data})),/*#__PURE__*/index_js_default().createElement("div",{"data-scroll-section":true},/*#__PURE__*/index_js_default().createElement(team,{data:data})));};/* harmony default export */ const about = (AboutPage);const query="3854914411";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-about-js.js.map