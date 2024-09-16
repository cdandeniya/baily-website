"use strict";
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sponsors)
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
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
;// CONCATENATED MODULE: ./src/components/sponsors/hero.js
const StyledSection=(0,styled_components_esm["default"])(styles/* Section */.wn).withConfig({displayName:"hero__StyledSection",componentId:"sc-1laamet-0"})(["padding-top:10rem;overflow-x:hidden;min-height:60rem;",";",";"],styles/* media */.$_.tablet`max-height: 40rem;`,styles/* media */.$_.thone`
    padding-top: 10rem;
  `);const BigText=styled_components_esm["default"].h1.withConfig({displayName:"hero__BigText",componentId:"sc-1laamet-1"})(["font-weight:bold;font-size:80px;letter-spacing:-2px;line-height:100%;",";",";"],styles/* media */.$_.massive`font-size: 70px;`,styles/* media */.$_.thone`font-size: 48px;`);const Description=styled_components_esm["default"].p.withConfig({displayName:"hero__Description",componentId:"sc-1laamet-2"})(["font-size:28px;max-width:90%;line-height:146%;",";",";"],styles/* media */.$_.tablet`
    max-width: 100%;
    font-size: 24px;
  `,styles/* media */.$_.thone`font-size: 19px;`);const Row=styled_components_esm["default"].div.withConfig({displayName:"hero__Row",componentId:"sc-1laamet-3"})(["display:flex;flex-wrap:wrap;align-items:center;",";"],styles/* media */.$_.tablet`flex-direction: column-reverse;`);const Col=styled_components_esm["default"].div.withConfig({displayName:"hero__Col",componentId:"sc-1laamet-4"})(["flex:0 0 auto;width:",";",";"],props=>props.bigger?'60%':'40%',styles/* media */.$_.tablet`width: 100%;`);const StyledImage=(0,styled_components_esm["default"])(gatsby_image_module["default"]).withConfig({displayName:"hero__StyledImage",componentId:"sc-1laamet-5"})(["width:80%;margin-left:20%;",";"],styles/* media */.$_.tablet`display: none;`);const ButtonWrapper=styled_components_esm["default"].div.withConfig({displayName:"hero__ButtonWrapper",componentId:"sc-1laamet-6"})(["font-size:28px;padding-top:2rem;",";"],styles/* media */.$_.tablet`font-size: 16px;`);const Hero=({data})=>{return/*#__PURE__*/index_js_default().createElement(StyledSection,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,{max:true},/*#__PURE__*/index_js_default().createElement(Row,null,/*#__PURE__*/index_js_default().createElement(Col,{bigger:true},/*#__PURE__*/index_js_default().createElement(BigText,null,"Experience the Magic: Schedule Your Demo at your School Today!"),/*#__PURE__*/index_js_default().createElement(Description,null,"Discover how our AI-powered toys can enhance learning in your classroom. See firsthand how Baily inspires curiosity and educational engagement in schools."),/*#__PURE__*/index_js_default().createElement(ButtonWrapper,null,/*#__PURE__*/index_js_default().createElement(styles/* Button */.$n,{href:"/sponsorship-prospectus.pdf"},"Schedule Your Demo"))),/*#__PURE__*/index_js_default().createElement(Col,null,/*#__PURE__*/index_js_default().createElement(StyledImage,{fluid:data.heart.childImageSharp.fluid,alt:"About us"})))));};/* harmony default export */ const hero = (Hero);
;// CONCATENATED MODULE: ./src/images/sponsors/echoar.png
/* harmony default export */ const echoar = ("/static/echoar-aa923df90e860666b80a508a64b837b2.png");
// EXTERNAL MODULE: ./src/images/sponsors/linode.svg
var linode = __webpack_require__(3790);
// EXTERNAL MODULE: ./src/images/sponsors/godaddy.png
var godaddy = __webpack_require__(4802);
// EXTERNAL MODULE: ./src/images/sponsors/streamyard.svg
var streamyard = __webpack_require__(5187);
// EXTERNAL MODULE: ./src/images/sponsors/hackclubbank.svg
var hackclubbank = __webpack_require__(734);
;// CONCATENATED MODULE: ./src/components/sponsors/list.js
const list_Row=styled_components_esm["default"].div.withConfig({displayName:"list__Row",componentId:"sc-1e3r0wl-0"})(["display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:wrap;:first-child{img{width:20rem;}}:not(:first-child){padding-top:3rem;img{width:10rem;}}"]);const SponsorImage=styled_components_esm["default"].img.withConfig({displayName:"list__SponsorImage",componentId:"sc-1e3r0wl-1"})(["margin-top:0.5rem;:not(:first-child){margin-left:1.5rem;}"]);const List=()=>{return/*#__PURE__*/index_js_default().createElement(styles/* Section */.wn,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,{max:true},/*#__PURE__*/index_js_default().createElement(list_Row,null,/*#__PURE__*/index_js_default().createElement(SponsorImage,{src:linode/* default */.A,alt:"Linode"})),/*#__PURE__*/index_js_default().createElement(list_Row,null,/*#__PURE__*/index_js_default().createElement(SponsorImage,{src:echoar,alt:"echoAR"}),/*#__PURE__*/index_js_default().createElement(SponsorImage,{src:godaddy/* default */.A,alt:"GoDaddy"}),/*#__PURE__*/index_js_default().createElement(SponsorImage,{src:streamyard/* default */.A,alt:"StreamYard"}),/*#__PURE__*/index_js_default().createElement(SponsorImage,{src:hackclubbank/* default */.A,alt:"Hackclub Bank"}))));};/* harmony default export */ const list = (List);
;// CONCATENATED MODULE: ./src/components/sponsors/index.js

;// CONCATENATED MODULE: ./src/pages/sponsors.js
const SponsorsPage=({data})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Helmet.Helmet,{title:"Sponsors"}),/*#__PURE__*/index_js_default().createElement("div",{"data-scroll-section":true},/*#__PURE__*/index_js_default().createElement(hero,{data:data}),/*#__PURE__*/index_js_default().createElement(list,null)));};/* harmony default export */ const sponsors = (SponsorsPage);const query="3535370847";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-sponsors-js.js.map