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
;// CONCATENATED MODULE: ./src/components/sponsors/hero.js
const StyledSection=(0,styled_components_esm["default"])(styles/* Section */.wn).withConfig({displayName:"hero__StyledSection",componentId:"sc-1laamet-0"})(["padding-top:10rem;overflow-x:hidden;min-height:60rem;",";",";"],styles/* media */.$_.tablet`max-height: 40rem;`,styles/* media */.$_.thone`
    padding-top: 10rem;
  `);const BigText=styled_components_esm["default"].h1.withConfig({displayName:"hero__BigText",componentId:"sc-1laamet-1"})(["font-weight:bold;font-size:80px;letter-spacing:-2px;line-height:100%;",";",";"],styles/* media */.$_.massive`font-size: 70px;`,styles/* media */.$_.thone`font-size: 48px;`);const Description=styled_components_esm["default"].p.withConfig({displayName:"hero__Description",componentId:"sc-1laamet-2"})(["font-size:28px;max-width:90%;line-height:146%;",";",";"],styles/* media */.$_.tablet`
    max-width: 100%;
    font-size: 24px;
  `,styles/* media */.$_.thone`font-size: 19px;`);const Row=styled_components_esm["default"].div.withConfig({displayName:"hero__Row",componentId:"sc-1laamet-3"})(["display:flex;flex-wrap:wrap;align-items:center;",";"],styles/* media */.$_.tablet`flex-direction: column-reverse;`);const Col=styled_components_esm["default"].div.withConfig({displayName:"hero__Col",componentId:"sc-1laamet-4"})(["flex:0 0 auto;width:",";",";"],props=>props.bigger?'60%':'40%',styles/* media */.$_.tablet`width: 100%;`);const StyledImage=(0,styled_components_esm["default"])(Img).withConfig({displayName:"hero__StyledImage",componentId:"sc-1laamet-5"})(["width:80%;margin-left:20%;",";"],styles/* media */.$_.tablet`display: none;`);const ButtonWrapper=styled_components_esm["default"].div.withConfig({displayName:"hero__ButtonWrapper",componentId:"sc-1laamet-6"})(["font-size:28px;padding-top:2rem;",";"],styles/* media */.$_.tablet`font-size: 16px;`);const Hero=({data})=>{return/*#__PURE__*/index_js_default().createElement(StyledSection,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,{max:true},/*#__PURE__*/index_js_default().createElement(Row,null,/*#__PURE__*/index_js_default().createElement(Col,{bigger:true},/*#__PURE__*/index_js_default().createElement(BigText,null,"Experience the Magic: Schedule Your Demo at your School Today!"),/*#__PURE__*/index_js_default().createElement(Description,null,"Discover how our AI-powered toys can enhance learning in your classroom. See firsthand how Baily inspires curiosity and educational engagement in schools."),/*#__PURE__*/index_js_default().createElement(ButtonWrapper,null,/*#__PURE__*/index_js_default().createElement(styles/* Button */.$n,{href:"/sponsorship-prospectus.pdf"},"Schedule Your Demo"))),/*#__PURE__*/index_js_default().createElement(Col,null,/*#__PURE__*/index_js_default().createElement(StyledImage,{fluid:data.heart.childImageSharp.fluid,alt:"About us"})))));};/* harmony default export */ const hero = (Hero);
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

/***/ }),

/***/ 4802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/godaddy-ab74ef1a5aec4e1dfc403ffd0a1fb6ec.png");

/***/ }),

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPjxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSIyNTQiIGhlaWdodD0iNjIiIHJ4PSIxMSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzk4Qjk2IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNzAuNzkyIDI0aDEuMzJ2LTIuNjc2aDEuMjM2YzEuOTA4IDAgMi44NDQtMS4wOCAyLjg0NC0yLjQ0OCAwLTEuNDc2LS45Ni0yLjQzNi0yLjkxNi0yLjQzNmgtMi40ODRWMjR6bTIuNTMyLTYuNDJjLjkxMiAwIDEuNTEyLjQ1NiAxLjUxMiAxLjMwOCAwIC44NC0uNDU2IDEuMjk2LTEuNDc2IDEuMjk2aC0xLjI0OFYxNy41OGgxLjIxMnptNy4zNDYgNi42YzIuMTcyIDAgMy45Ni0xLjY2OCAzLjk2LTMuOTZzLTEuOC0zLjk2LTMuOTYtMy45NmMtMi4xNDggMC0zLjk0OCAxLjY2OC0zLjk0OCAzLjk2czEuNzg4IDMuOTYgMy45NDggMy45NnptMC0xLjIyNGMtMS41IDAtMi42MDQtMS4xMTYtMi42MDQtMi43MzZzMS4xMDQtMi43MzYgMi42MDQtMi43MzYgMi42MjggMS4xMTYgMi42MjggMi43MzYtMS4xMjggMi43MzYtMi42MjggMi43MzZ6bTUuNjMyLTYuNTE2aC0xLjQ0bDIuMjIgNy41NmgxLjcxNmwxLjUxMi01LjU2OEw5MS44MzQgMjRoMS43MTZsMi4yMi03LjU2aC0xLjQwNGwtMS42NDQgNi4xOC0xLjY0NC02LjE4SDg5LjU5bC0xLjY0NCA2LjE4LTEuNjQ0LTYuMTh6TTk2LjY2NyAyNGg0LjkwOHYtMS4xNjRoLTMuNTg4VjIwLjc2aDMuNDA4di0xLjE2NGgtMy40MDh2LTEuOTkyaDMuNTg4VjE2LjQ0aC00LjkwOFYyNHptNiAwaDEuMzJ2LTIuNzcyaDEuNTcyTDEwNi45NzUgMjRoMS41MzZsLTEuNjQ0LTMuMDQ4Yy45MTItLjM5NiAxLjM2OC0xLjE4OCAxLjM2OC0yLjEyNCAwLTEuNDQtLjk2LTIuMzg4LTIuOTE2LTIuMzg4aC0yLjY1MlYyNHptMi43LTYuNDJjLjkxMiAwIDEuNTEyLjQ0NCAxLjUxMiAxLjI2IDAgLjgxNi0uNDU2IDEuMjQ4LTEuNDc2IDEuMjQ4aC0xLjQxNlYxNy41OGgxLjM4em00LjIyNiA2LjQyaDQuOTA4di0xLjE2NGgtMy41ODhWMjAuNzZoMy40MDh2LTEuMTY0aC0zLjQwOHYtMS45OTJoMy41ODhWMTYuNDRoLTQuOTA4VjI0em02IDBoMi4wNTJjMi45MTYgMCA0LjU4NC0xLjUxMiA0LjU4NC0zLjc4cy0xLjY2OC0zLjc4LTQuNTg0LTMuNzhoLTIuMDUyVjI0em0yLjIwOC0xLjE4OGgtLjg4OHYtNS4xODRoLjg4OGMxLjg2IDAgMy4wOTYuODY0IDMuMDk2IDIuNTkyIDAgMS43MjgtMS4yMzYgMi41OTItMy4wOTYgMi41OTJ6TTEyNS42MTIgMjRoMy4wNDhjMS43MjggMCAyLjU0NC0uOTM2IDIuNTQ0LTIuMjMyIDAtLjYyNC0uMjUyLTEuMzY4LTEuMzQ0LTEuNzY0Ljc0NC0uMzYgMS4wMDgtLjk4NCAxLjAwOC0xLjU3MiAwLTEuMTY0LS43NDQtMS45OTItMi40Ni0xLjk5MmgtMi43OTZWMjR6bTIuNjI4LTYuNDY4Yy44MTYgMCAxLjI3Mi4zMTIgMS4yNzIgMS4wNDQgMCAuNzU2LS4zMzYgMS4wNTYtMS4yNiAxLjA1NmgtMS4zMnYtMi4xaDEuMzA4em0uMjQgMy4xNTZjLjk0OCAwIDEuMzY4LjM3MiAxLjM2OCAxLjExNiAwIC43MzItLjQwOCAxLjEwNC0xLjM1NiAxLjEwNGgtMS41NnYtMi4yMmgxLjU0OHpNMTM0LjAyMyAyNGgxLjMydi0zLjEzMmwyLjY0LTQuNDI4aC0xLjQ2NGwtMS44MzYgMy4xNjgtMS44MTItMy4xNjhoLTEuNTI0bDIuNjc2IDQuNVYyNHoiIGZpbGw9IiM3OThCOTYiLz48cGF0aCBkPSJNNzEuMDggNDhoMy43MnYtNS45NTJoNS45MDRWNDhoMy43MlYzMi44OGgtMy43MnY1LjkyOEg3NC44VjMyLjg4aC0zLjcyVjQ4em0xNS4wMTItNS4yOGMwIDMuNjI0IDIuMDg4IDUuNjQgNC41NiA1LjY0IDEuNDE2IDAgMi42ODgtLjU3NiAzLjQ1Ni0xLjc1MlY0OGgzLjY5NlYzNy40NGgtMy42OTZ2MS4zOTJjLS43NjgtMS4xNzYtMi4wNC0xLjc1Mi0zLjQ1Ni0xLjc1Mi0yLjQ3MiAwLTQuNTYgMi4wMTYtNC41NiA1LjY0em01Ljg4LTIuNjRjMS4zMiAwIDIuMTg0Ljk2IDIuMTg0IDIuNjQgMCAxLjY4LS44ODggMi42NC0yLjE4NCAyLjY0LTEuMzkyIDAtMi4xODQtMS4xMjgtMi4xODQtMi42NCAwLTEuNTEyLjc5Mi0yLjY0IDIuMTg0LTIuNjR6bTExLjEyNyAyLjY0YzAtMS44NDguOTEyLTIuNzYgMi4wMTYtMi43Ni44NjQgMCAxLjY1Ni41NTIgMS43NTIgMS43MjhoMy43OTJjLS41MDQtMy40OC0zLjI4OC00LjYwOC01LjU0NC00LjYwOC0yLjgzMiAwLTUuNzEyIDEuNzUyLTUuNzEyIDUuNjRzMi44OCA1LjY0IDUuNzEyIDUuNjRjMi4yOCAwIDUuMDY0LTEuMTI4IDUuNTQ0LTQuNjA4aC0zLjc5MmMtLjEyIDEuMTUyLS44ODggMS43MjgtMS43NTIgMS43MjgtMS4xMDQgMC0yLjAxNi0uOTEyLTIuMDE2LTIuNzZ6bTkuMDY3IDUuMjhoMy42OTZ2LTQuNTZsMy40MzIgNC41Nmg0LjUxMmwtNC40NjQtNS41NjggNC4xMjgtNC45OTJoLTQuMDMybC0zLjU3NiA0LjE1MlYzMS42OGgtMy42OTZWNDh6bTI4LjA4OC01Ljk1MkMxMzkuNzUgNDQuNTIgMTM4LjE0MiA0NSAxMzYuNzAyIDQ1Yy0yLjI1NiAwLTMuNzkyLTEuOTItMy43OTItNC41NiAwLTIuNjQgMS41MTItNC41NiAzLjc5Mi00LjU2IDEuNTEyIDAgMy4wNDguNjI0IDMuNTA0IDIuOTUyaDMuODE2Yy0uOTM2LTQuOTY4LTQuMDgtNi4zMTItNy4zMi02LjMxMi00LjUzNiAwLTcuNTEyIDMuMzM2LTcuNTEyIDcuOTJzMy4xMiA3LjkyIDcuNTEyIDcuOTJjMy4yNCAwIDYuMzYtMS4yIDcuMzItNi4zMTJoLTMuNzY4ek0xNDUuNjExIDQ4aDMuNjk2VjMxLjY4aC0zLjY5NlY0OHptOS4zODgtMTAuNTZoLTMuNjk2djYuNzJjMCAyLjY4OCAxLjUxMiA0LjIgMy43NjggNC4yIDEuMTUyIDAgMi4yOC0uNTc2IDIuOTc2LTEuNzI4VjQ4aDMuNjk2VjM3LjQ0aC0zLjY5NnY1LjM1MmMwIDEuNzA0LS42NzIgMi40NDgtMS41MzYgMi40NDgtLjkxMiAwLTEuNTEyLS42OTYtMS41MTItMi4xMzZWMzcuNDR6bTIwLjYwNiA1LjI4YzAtMy42MjQtMi4wODgtNS42NC00LjU2LTUuNjQtMS40MTYgMC0yLjY4OC41NzYtMy40NTYgMS43NTJWMzEuNjhoLTMuNjk2VjQ4aDMuNjk2di0xLjM5MmMuNzY4IDEuMTc2IDIuMDQgMS43NTIgMy40NTYgMS43NTIgMi40NzIgMCA0LjU2LTIuMDE2IDQuNTYtNS42NHptLTUuODgtMi42NGMxLjM5MiAwIDIuMTg0IDEuMTI4IDIuMTg0IDIuNjQgMCAxLjUxMi0uNzkyIDIuNjQtMi4xODQgMi42NC0xLjI5NiAwLTIuMTg0LS45ODQtMi4xODQtMi42NCAwLTEuNjU2Ljg2NC0yLjY0IDIuMTg0LTIuNjR6TTE4Mi4wNTcgNDhoNi41MDRjMy42NDggMCA1LjQtMS44OTYgNS40LTQuNTM2IDAtMS4yLS41MDQtMi42NjQtMi45MDQtMy4zODQgMS43MDQtLjY5NiAyLjMwNC0xLjk2OCAyLjMwNC0zLjE5MiAwLTIuMTg0LTEuNDQtNC4wMDgtNS4yNTYtNC4wMDhoLTYuMDQ4VjQ4em01LjY2NC0xMi4zNmMxLjIgMCAxLjg5Ni40OCAxLjg5NiAxLjYwOCAwIDEuMjQ4LS42IDEuNzUyLTIuMDQgMS43NTJoLTEuOHYtMy4zNmgxLjk0NHptLjQwOCA2YzEuMzIgMCAyLjA4OC42IDIuMDg4IDEuODI0IDAgMS4xNzYtLjc5MiAxLjc3Ni0yLjEzNiAxLjc3NmgtMi4zMDR2LTMuNmgyLjM1MnptNy4wMTcgMS4wOGMwIDMuNjI0IDIuMDg4IDUuNjQgNC41NiA1LjY0IDEuNDE2IDAgMi42ODgtLjU3NiAzLjQ1Ni0xLjc1MlY0OGgzLjY5NlYzNy40NGgtMy42OTZ2MS4zOTJjLS43NjgtMS4xNzYtMi4wNC0xLjc1Mi0zLjQ1Ni0xLjc1Mi0yLjQ3MiAwLTQuNTYgMi4wMTYtNC41NiA1LjY0em01Ljg4LTIuNjRjMS4zMiAwIDIuMTg0Ljk2IDIuMTg0IDIuNjQgMCAxLjY4LS44ODggMi42NC0yLjE4NCAyLjY0LTEuMzkyIDAtMi4xODQtMS4xMjgtMi4xODQtMi42NCAwLTEuNTEyLjc5Mi0yLjY0IDIuMTg0LTIuNjR6TTIwOS4wMSA0OGgzLjY5NnYtNS43ODRjMC0xLjQ4OC42OTYtMi4xMzYgMS44MjQtMi4xMzYgMS4wMzIgMCAxLjU4NC42OTYgMS41ODQgMi4xMzZWNDhoMy42OTZ2LTYuMTQ0YzAtMy0xLjUzNi00Ljc3Ni00LjAwOC00Ljc3Ni0xLjM0NCAwLTIuNDI0LjYyNC0zLjA5NiAxLjc1MlYzNy40NGgtMy42OTZWNDh6bTEyLjc5NyAwaDMuNjk2di00LjU2bDMuNDMyIDQuNTZoNC41MTJsLTQuNDY0LTUuNTY4IDQuMTI4LTQuOTkyaC00LjAzMmwtMy41NzYgNC4xNTJWMzEuNjhoLTMuNjk2VjQ4eiIgZmlsbD0iIzE3MTcxRCIvPjxjaXJjbGUgY3g9IjM2IiBjeT0iMzIiIHI9IjIyLjUiIHN0cm9rZT0iI0U0MkQ0MiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTIyLjUgNDRhMS41IDEuNSAwIDAgMSAxLjUtMS41aDI0YTEuNSAxLjUgMCAwIDEgMCAzSDI0YTEuNSAxLjUgMCAwIDEtMS41LTEuNXoiIGZpbGw9IiNFNDJENDIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2IDQxYTEuNSAxLjUgMCAwIDEtMS41LTEuNVYyOWExLjUgMS41IDAgMCAxIDMgMHYxMC41QTEuNSAxLjUgMCAwIDEgMzYgNDF6bTcuNSAwYTEuNSAxLjUgMCAwIDEtMS41LTEuNVYyOWExLjUgMS41IDAgMCAxIDMgMHYxMC41YTEuNSAxLjUgMCAwIDEtMS41IDEuNXptLTE1IDBhMS41IDEuNSAwIDAgMS0xLjUtMS41VjI5YTEuNSAxLjUgMCAwIDEgMyAwdjEwLjVhMS41IDEuNSAwIDAgMS0xLjUgMS41eiIgZmlsbD0iI0U0MkQ0MiIvPjxwYXRoIGQ9Ik0zNiAyMC4wMjdjLjA2Mi4wMjEuMTU2LjA1Ny4yOTEuMTE3LjM1OS4xNTUuNzg1LjM3NyAxLjMzMi42OSAxLjExMy42MzYgMi41MDcgMS41MzUgNC4wNzQgMi42NDJDNDQuODUgMjUuNjk4IDQ1IDI2IDQ4LjQ0IDI4LjU2YTEuNDk4IDEuNDk4IDAgMCAwIDIuMTIgMCAxLjQ5OCAxLjQ5OCAwIDAgMCAwLTIuMTIyYy0zLjMxLTIuNjg5LTMuOTA4LTMuMTM3LTcuMTMyLTUuNDE1LTEuNjItMS4xNDMtMy4xMzMtMi4xMTktNC4zMTctMi43OTZhMTguMDY0IDE4LjA2NCAwIDAgMC0xLjYxNS0uODMyQzM3LjEwMyAxNy4yMjQgMzYuNTM3IDE3IDM2IDE3cy0xLjEwMi4yMjQtMS40OTUuMzk2Yy0uNDQ2LjE5NS0xLjAxNC40ODktMS42MTYuODMyLTEuMTgzLjY3Ny0yLjY5NyAxLjY1My00LjMxNyAyLjc5Ni0zLjIyMyAyLjI3Ny0zLjgyMSAyLjcyNi03LjEzMiA1LjQxNWExLjQ5OCAxLjQ5OCAwIDAgMCAwIDIuMTIyIDEuNDk4IDEuNDk4IDAgMCAwIDIuMTIgMEMyNyAyNiAyNy4xNTMgMjUuNjk4IDMwLjMwNCAyMy40NzZjMS41NjgtMS4xMDcgMi45NjEtMi4wMDYgNC4wNzQtMi42NDIuNTQ4LS4zMTQuOTc0LS41MzUgMS4zMzItLjY5LjEzNS0uMDYuMjMtLjA5Ni4yOTEtLjExN3oiIGZpbGw9IiNFNDJENDIiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNTZ2NjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");

/***/ }),

/***/ 3790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1NzUuOCAxNzguMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTc1LjggMTc4LjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMxNDE0MTQ7fQ0KCS5zdDF7ZmlsbDojMDA0QjE2O30NCgkuc3Qye2ZpbGw6IzFDQjM1Qzt9DQo8L3N0eWxlPg0KPHBhdGggZD0iTTE0OC42LDc4LjlsLTI0LjctMTMuNkwxMDMuMSw3OGwtMC4zLDEzbC0xMC4xLTYuN2wtMTMuOCw4LjRjLTAuMi0zLjktMC40LTguNi0wLjYtMTQuMkw2NC4xLDY5YzMuOS0yLDguNC00LjMsMTMuNS03DQoJYy0wLjEsMCwwLjEsMS40LTItNDYuNWwtMzItMTUuNEwwLDEzLjdsOS43LDQ2LjlMMjQuMyw3MmwtMTEuMSw1LjNsNy4zLDM1LjNsMTAuMiw5LjZsLTcuMyw0LjVsNS43LDI3LjNMNTIsMTc4LjMNCgljMC4xLTAuMSwyLjQtMS45LDI5LjUtMjMuNWwtMC44LTE4LjZsMTEuNyw5LjljMC4yLTAuMiwyLjQtMS45LDIzLjctMTguOGwwLjgtMTMuN2w4LjgsNi4xYzAuMS0wLjIsMi4xLTEuNywxOS4zLTE1LjNMMTQ4LjYsNzguOXoiDQoJLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjguMSw5My41bDIwLjUtMTQuNmwtMjQuNy0xMy42TDEwMy4xLDc4TDEyOC4xLDkzLjV6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTI1LjgsMTE5LjVsMi4zLTI2bC0yNS0xNS41bC0wLjUsMjUuNEwxMjUuOCwxMTkuNXoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05Mi42LDE0NmwtMC4zLTI3TDY3LjIsOTkuOWwxLjksMjYuNEw5Mi42LDE0NnoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05Mi4zLDExOWwyNS41LTE4LjJMOTIuNyw4NC4zTDY3LjIsOTkuOUw5Mi4zLDExOXoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01Mi4xLDE3OC4yTDQ4LDE1MC42bC0yNC42LTI0LjFsNS43LDI3LjRMNTIuMSwxNzguMnoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OCwxNTAuNmwzMi40LTIzLjFsLTI1LjEtMjAuNGwtMzEuOSwxOS40TDQ4LDE1MC42eiIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ1LjksMTM2LjNsLTUuMy0zNi40TDEzLjIsNzcuMWw3LjMsMzUuNEw0NS45LDEzNi4zeiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjYsOTkuOWwzNy43LTIxLjRMNTAuMSw1OS42TDEzLjIsNzcuMUw0MC42LDk5Ljl6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzgsODIuNWwtNy4zLTQ5LjlMMCwxMy42bDkuNyw0Ni45TDM4LDgyLjV6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzAuNywzMi42bDQ0LjktMTcuMkw0My42LDBMMCwxMy42TDMwLjcsMzIuNnoiLz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNDUuMiwxMDQuMmMtMTksMTUuMS0xOS40LDE1LjQtMTkuMywxNS40YzIuNC0yNy4yLDIuMi0yNiwyLjMtMjZDMTUwLDc4LjEsMTQ4LjYsNzksMTQ4LjcsNzlMMTQ1LjIsMTA0LjJ6Ig0KCQkvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMTYuMiwxMjcuMkM5Mi43LDE0NS45LDkyLjQsMTQ2LDkyLjUsMTQ2Yy0wLjItMjguMi0wLjMtMjctMC4yLTI3YzI3LjEtMTkuNCwyNS40LTE4LjIsMjUuNS0xOC4yDQoJCUwxMTYuMiwxMjcuMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNODEuNiwxNTQuN0M1Mi4yLDE3OCw1MiwxNzguMiw1Mi4xLDE3OC4yYy00LjItMjguNC00LjEtMjcuNS00LTI3LjVjMzQuNS0yNC42LDMyLjMtMjMuMSwzMi40LTIzLjENCgkJTDgxLjYsMTU0Ljd6Ii8+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc1LjYsMTUuNGMyLjEsNDcuOSwxLjksNDYuNSwyLDQ2LjVDMzguOCw4Mi4xLDM3LjksODIuNSwzOCw4Mi41Yy03LjUtNTEtNy40LTQ5LjktNy4zLTQ5LjlMNzUuNiwxNS40eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik03OC4zLDc4LjVjMS42LDM2LjMsMS40LDM1LjEsMS41LDM1LjFjLTMzLjYsMjIuNi0zNCwyMi44LTMzLjksMjIuOEM0MC40LDk5LDQwLjUsMTAwLDQwLjYsMTAwTDc4LjMsNzguNXoiLz4NCjwvZz4NCjxwYXRoIGQ9Ik0xOTEuNCwzMy42bDE2LjgtNGMwLDgxLjgtMy4xLDkzLjUsOCw5Ny4xYy0yLjYsNC45LTcuMSw3LjQtMTMuMyw3LjRDMTg3LjYsMTM0LjEsMTkxLjQsMTIyLjgsMTkxLjQsMzMuNnoiLz4NCjxwYXRoIGQ9Ik0yMzMuNywxMzIuN1Y3NC4zaC05LjJWNjAuNWgyNi4zdjcyLjJIMjMzLjd6IE0yNDIuNCwzMi42YzEyLjksMCwxMi45LDE5LjUsMCwxOS41UzIyOS41LDMyLjYsMjQyLjQsMzIuNnoiLz4NCjxwYXRoIGQ9Ik0zMTYuOCwxMzIuN2MwLTQzLjYsMS4xLTQ5LjYtMy41LTU1LjJjLTUuOC02LjktMjAtNS0yNi4xLDN2NTIuMmgtMTYuOFY2MC41aDEyLjFsMy4xLDYuN2M5LjEtMTAuOCwzMC40LTEwLjksNDAuNi0wLjQNCgljOS43LDEwLDcuNCwyMC41LDcuNCw2NS44TDMxNi44LDEzMi43eiIvPg0KPHBhdGggZD0iTTM0Ny4yLDk2LjRjMC00OS4yLDY5LjQtNTEuMSw2OS40LDBDNDE2LjUsMTQ3LjEsMzQ3LjIsMTQ3LjIsMzQ3LjIsOTYuNHogTTM2NC43LDk2LjRjMCwyOC44LDIyLjIsMjcuNywyOS43LDE3LjcNCgljNy05LjQsOC44LTQxLjItMTIuNS00MS4yQzM2OS42LDcyLjksMzY0LjcsODQuMiwzNjQuNyw5Ni40eiIvPg0KPHBhdGggZD0iTTQ3Ni40LDEzMi43YzAtNy40LDEuOC0zLjQtNy4xLTAuNGMtMTAuMiwzLjUtMjUuMSwyLTM0LjEtNy45Yy0xMS4xLTEyLjMtMTIuNi0zOS41LDEuMy01NC42YzExLjQtMTIuMywyOC41LTEzLjEsMzkuOS03LjQNCglWMzMuNWwxNi45LTR2MTAzLjFMNDc2LjQsMTMyLjd6IE00NzYuNCw3Ny44Yy04LjktNy4xLTIwLjktNC44LTI2LjgsMS45Yy04LjEsOS4xLTExLjIsNDAuMiwxNi4yLDQwLjJjMi45LDAsOS0yLjIsMTAuNi00LjQNCglMNDc2LjQsNzcuOHoiLz4NCjxwYXRoIGQ9Ik01NzQuNiwxMDEuOEg1MjNjMS4yLDIyLjMsMjksMjEuNCwzOC4xLDEyLjJsNi41LDEyLjljLTE0LDExLjMtNjIuMywxNS02Mi4zLTI5LjVDNTA1LjQsNDMuMyw1ODYuNiw0OC40LDU3NC42LDEwMS44eg0KCSBNNTIzLjYsODkuMWgzNS41Yy0xLjItMTAuNi03LTE1LjgtMTcuNS0xNS44QzUzMS45LDczLjMsNTI2LDc4LjUsNTIzLjYsODkuMXoiLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 5187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/streamyard-6a9bedd653e39de5ea2760071fec15db.svg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-sponsors-js.js.map