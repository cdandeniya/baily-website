"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 2601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/echanuld/Baily/website-main/node_modules/react/index.js"
var index_js_ = __webpack_require__(3163);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 9 modules
var styled_components_esm = __webpack_require__(7131);
// EXTERNAL MODULE: ./src/styles/index.js + 8 modules
var styles = __webpack_require__(6044);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 211 modules
var proxy = __webpack_require__(5019);
;// CONCATENATED MODULE: ./src/hooks/useMousePosition.js
function useMousePosition(){let{0:mousePosition,1:setMousePosition}=(0,index_js_.useState)({x:null,y:null});(0,index_js_.useEffect)(()=>{function handlePosition(e){setMousePosition({x:e.pageX,y:e.pageY});}window.addEventListener('mousemove',handlePosition);return()=>window.removeEventListener('mousemove',handlePosition);},[]);return mousePosition;}
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
;// CONCATENATED MODULE: ./src/components/home/hero.js
// Import graphql from Gatsby
const StyledSection=(0,styled_components_esm["default"])(styles/* Section */.wn).withConfig({displayName:"hero__StyledSection",componentId:"sc-15ukai7-0"})(["padding-top:15rem;padding-bottom:15rem;height:100vh;overflow-x:hidden;min-height:80rem;",";",";"],styles/* media */.$_.desktop`padding-top: 10rem;`,styles/* media */.$_.thone`
    min-height: 20rem;
    padding-top: 5rem;
  `);const TextWrapper=styled_components_esm["default"].div.withConfig({displayName:"hero__TextWrapper",componentId:"sc-15ukai7-1"})(["max-width:900px;",";",";"],styles/* media */.$_.massive`max-width: 750px;`,styles/* media */.$_.tablet`max-width: 100%;`);const BigText=(0,styled_components_esm["default"])(proxy/* motion */.P.h1).withConfig({displayName:"hero__BigText",componentId:"sc-15ukai7-2"})(["font-weight:bold;font-size:80px;letter-spacing:-2px;line-height:100%;",";",";"],styles/* media */.$_.massive`font-size: 70px;`,styles/* media */.$_.thone`font-size: 48px;`);const BaseWrapper=(0,styled_components_esm["default"])(proxy/* motion */.P.div).withConfig({displayName:"hero__BaseWrapper",componentId:"sc-15ukai7-3"})(["position:absolute;z-index:-1;"]);const VeryTop=(0,styled_components_esm["default"])(BaseWrapper).withConfig({displayName:"hero__VeryTop",componentId:"sc-15ukai7-4"})(["left:50vw;top:50px;width:800px;transform:rotate(1deg);filter:blur(3px);",";"],styles/* media */.$_.bigDesktop`display: none;`);const LowerTop=(0,styled_components_esm["default"])(BaseWrapper).withConfig({displayName:"hero__LowerTop",componentId:"sc-15ukai7-5"})(["left:70vw;top:400px;width:450px;transform:rotate(1deg);filter:blur(2px);",";",";",";"],styles/* media */.$_.bigDesktop`
    left: 50vw;
    top: 350px;
  `,styles/* media */.$_.tablet`display: none;`,styles/* media */.$_.desktop`left: 45vw;`);const BottomLeft=(0,styled_components_esm["default"])(BaseWrapper).withConfig({displayName:"hero__BottomLeft",componentId:"sc-15ukai7-6"})(["left:15vw;top:550px;width:500px;transform:rotate(1deg);",";",";"],styles/* media */.$_.bigDesktop`
    left: 0;
    width: 350px;
  `,styles/* media */.$_.thone`
    width: 250px;
    top: auto;
    bottom: 30px;
  `);const BottomRight=(0,styled_components_esm["default"])(BaseWrapper).withConfig({displayName:"hero__BottomRight",componentId:"sc-15ukai7-7"})(["left:50vw;top:550px;width:400px;transform:rotate(1deg);filter:blur(1px);",";",";",";"],styles/* media */.$_.bigDesktop`
    left: 30vw;
    top: 650px;
    width: 350px;
  `,styles/* media */.$_.tablet`left: 40vw;`,styles/* media */.$_.thone`
    width: 150px;
    top: auto;
    bottom: 200px;
    left: auto;
    right: 30px;   
  `);const StyledImage=(0,styled_components_esm["default"])(gatsby_image_module/* GatsbyImage */.mV).withConfig({displayName:"hero__StyledImage",componentId:"sc-15ukai7-8"})(["width:100%;"]);const Hero=({data})=>{const{x,y}=useMousePosition();return/*#__PURE__*/index_js_default().createElement(StyledSection,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,{max:true},/*#__PURE__*/index_js_default().createElement(VeryTop,{initial:{y:0},animate:{y:25},transition:{duration:1.7,yoyo:Infinity}},/*#__PURE__*/index_js_default().createElement("div",{"data-scroll":true,"data-scroll-speed":4},/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{style:{x:x/100,y:y/100}},/*#__PURE__*/index_js_default().createElement(StyledImage,{image:data.rocket.childImageSharp.gatsbyImageData,alt:"Rocket"})))),/*#__PURE__*/index_js_default().createElement(LowerTop,{initial:{y:0},animate:{y:25},transition:{duration:1.7,yoyo:Infinity,delay:1}},/*#__PURE__*/index_js_default().createElement("div",{"data-scroll":true,"data-scroll-speed":3},/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{style:{x:x/80,y:y/80}},/*#__PURE__*/index_js_default().createElement(StyledImage,{image:data.bucket.childImageSharp.gatsbyImageData,alt:"Bucket"})))),/*#__PURE__*/index_js_default().createElement(TextWrapper,null,/*#__PURE__*/index_js_default().createElement(BigText,null,"Where Magic Meets Learning: Discover Innovation in Every Toy!")),/*#__PURE__*/index_js_default().createElement(BottomRight,{initial:{y:0},animate:{y:25},transition:{duration:1.7,yoyo:Infinity,delay:1}},/*#__PURE__*/index_js_default().createElement("div",{"data-scroll":true,"data-scroll-speed":2},/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{style:{x:x/50,y:y/50}},/*#__PURE__*/index_js_default().createElement(StyledImage,{image:data.folder.childImageSharp.gatsbyImageData,alt:"Folder"})))),/*#__PURE__*/index_js_default().createElement(BottomLeft,{initial:{y:0},animate:{y:25},transition:{duration:1.7,yoyo:Infinity,delay:1}},/*#__PURE__*/index_js_default().createElement("div",{"data-scroll":true,"data-scroll-speed":3},/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{style:{x:x/20,y:y/20}},/*#__PURE__*/index_js_default().createElement(StyledImage,{image:data.potion.childImageSharp.gatsbyImageData,alt:"Potion"}))))));};/* harmony default export */ const hero = (Hero);// GraphQL query to fetch the image data
const query="1540156897";
;// CONCATENATED MODULE: ./src/components/home/about.js
// Import graphql from Gatsby
const about_StyledSection=(0,styled_components_esm["default"])(styles/* Section */.wn).withConfig({displayName:"about__StyledSection",componentId:"sc-1wfy280-0"})(["padding-top:35vh;",";",";"],styles/* media */.$_.tablet`
    padding-top: 20vh; /* Reduce padding for mobile */
  `,styles/* media */.$_.thone`
    padding-top: 10vh; /* Further reduce padding for phones */
  `);const about_TextWrapper=styled_components_esm["default"].div.withConfig({displayName:"about__TextWrapper",componentId:"sc-1wfy280-1"})(["max-width:1000px;padding:1rem;",";",";"],styles/* media */.$_.massive`
    padding-top: 8rem;
    max-width: 1500px;
  `,styles/* media */.$_.thone`
    text-align: left;
    padding: 1rem; /* Add padding for phones */
  `);const ImageWrapper=styled_components_esm["default"].div.withConfig({displayName:"about__ImageWrapper",componentId:"sc-1wfy280-2"})(["display:flex;justify-content:center;margin-top:2rem;",";"],styles/* media */.$_.thone`
    margin-top: 1rem; /* Reduce margin for phones */
  `);const about_StyledImage=(0,styled_components_esm["default"])(gatsby_image_module/* GatsbyImage */.mV).withConfig({displayName:"about__StyledImage",componentId:"sc-1wfy280-3"})(["width:800px;",";",";",";"],styles/* media */.$_.massive`
    width: 700px;
    margin-top: -30rem;
  `,styles/* media */.$_.tablet`
    width: 400px;
    margin-top: -15rem;
  `,styles/* media */.$_.thone`
    width: 90vw; /* Scale down image width for phones */
    margin-top: 0; /* No negative margin on phones */
  `);const Title=styled_components_esm["default"].h1.withConfig({displayName:"about__Title",componentId:"sc-1wfy280-4"})(["font-size:75px;letter-spacing:-4px;line-height:118.2%;font-weight:bold;margin-top:1rem;",";",";"],styles/* media */.$_.tablet`font-size: 55px;`,styles/* media */.$_.thone`
    font-size: 25px; /* Reduce font size for phones */
    letter-spacing: -1px;
    margin-top: 0.5rem;
  `);const CustomDescription=(0,styled_components_esm["default"])(styles/* DefaultText */.rj).withConfig({displayName:"about__CustomDescription",componentId:"sc-1wfy280-5"})(["max-width:75%;margin:0;",";",";"],styles/* media */.$_.tablet`max-width: 100%;`,styles/* media */.$_.thone`
    max-width: 100%; /* Full width on phones */
    font-size: 16px; /* Smaller font size for phones */
    line-height: 1.4;
  `);const Label=styled_components_esm["default"].span.withConfig({displayName:"about__Label",componentId:"sc-1wfy280-6"})(["font-size:26px;color:#f1f1f1;font-weight:500;text-transform:uppercase;",";"],styles/* media */.$_.thone`
    font-size: 18px; /* Reduce label font size on phones */
  `);const About=({data})=>{return/*#__PURE__*/index_js_default().createElement(about_StyledSection,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,null,/*#__PURE__*/index_js_default().createElement(styles/* Card */.Zp,{bg:"var(--purple)",color:"var(--white)"},/*#__PURE__*/index_js_default().createElement(ImageWrapper,{"data-scroll":true,"data-scroll-speed":1},/*#__PURE__*/index_js_default().createElement(about_StyledImage,{image:data.searching.childImageSharp.gatsbyImageData,alt:"Searching"})),/*#__PURE__*/index_js_default().createElement(about_TextWrapper,null,/*#__PURE__*/index_js_default().createElement(Label,null,"About us"),/*#__PURE__*/index_js_default().createElement(Title,null,"We Empower Young Minds to Learn, Grow, and Dream Through Play"),/*#__PURE__*/index_js_default().createElement(CustomDescription,null,"At Baily AI, we blend the wonder of play with the power of learning. Our AI-powered toys are not just toys; they're companions designed to foster creativity, curiosity, and intelligence in children aged 5-12. Through customizable features and engaging content, each toy adapts to your child's unique interests, helping them explore technology and learn at their own pace. Join us in nurturing the next generation of thinkers and doers.")))));};/* harmony default export */ const about = (About);// GraphQL query to fetch the image data
const about_query="3174226202";
;// CONCATENATED MODULE: ./src/components/home/events.js
// Import graphql from Gatsby
const CustomSection=(0,styled_components_esm["default"])(styles/* Section */.wn).withConfig({displayName:"events__CustomSection",componentId:"sc-15gh0r1-0"})(["",";",";"],styles/* media */.$_.bigDesktop`padding-top: 24rem;`,styles/* media */.$_.tablet`padding-top: 16rem;`);const events_TextWrapper=styled_components_esm["default"].div.withConfig({displayName:"events__TextWrapper",componentId:"sc-15gh0r1-1"})(["max-width:1000px;a{font-size:24px;",";}",";",";",";",";"],styles/* media */.$_.tablet`font-size: 18px;`,styles/* media */.$_.massive`max-width: 1500px;`,styles/* media */.$_.bigDesktop`padding-top: 10rem;`,styles/* media */.$_.thone`text-align: center;`,styles/* media */.$_.phablet`padding-top: 3rem;`);const StyledCard=(0,styled_components_esm["default"])(styles/* Card */.Zp).withConfig({displayName:"events__StyledCard",componentId:"sc-15gh0r1-2"})(["padding-bottom:3rem;",";"],styles/* media */.$_.bigDesktop`width: 100%;`);const events_ImageWrapper=styled_components_esm["default"].div.withConfig({displayName:"events__ImageWrapper",componentId:"sc-15gh0r1-3"})(["position:absolute;"]);const events_StyledImage=(0,styled_components_esm["default"])(gatsby_image_module/* GatsbyImage */.mV).withConfig({displayName:"events__StyledImage",componentId:"sc-15gh0r1-4"})(["width:1000px;position:absolute;left:90%;transform:translate(-10%,12%);",";",";",";",";"],styles/* media */.$_.massive`left: 80%;`,styles/* media */.$_.bigDesktop`
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -30rem;
  `,styles/* media */.$_.tablet`
    width: 600px;
    margin-top: -15rem;
  `,styles/* media */.$_.thone`
    width: 90vw;
    margin-top: -13rem;
  `);const events_Title=styled_components_esm["default"].h1.withConfig({displayName:"events__Title",componentId:"sc-15gh0r1-5"})(["font-size:75px;letter-spacing:-4px;line-height:110%;font-weight:bold;margin:0;",";",";"],styles/* media */.$_.tablet`font-size: 55px;`,styles/* media */.$_.thone`
    font-size: 30px;
    letter-spacing: -1px;
  `);const Description=(0,styled_components_esm["default"])(styles/* DefaultText */.rj).withConfig({displayName:"events__Description",componentId:"sc-15gh0r1-6"})(["max-width:75%;margin-top:5rem;margin-bottom:5rem;",";"],styles/* media */.$_.tablet`
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 4rem;
  `);const Events=({data})=>{return/*#__PURE__*/index_js_default().createElement(CustomSection,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,null,/*#__PURE__*/index_js_default().createElement(events_ImageWrapper,null,/*#__PURE__*/index_js_default().createElement("div",{"data-scroll":true,"data-scroll-direction":"horizontal","data-scroll-speed":1},/*#__PURE__*/index_js_default().createElement(events_StyledImage,{image:data.drawing.childImageSharp.gatsbyImageData,alt:"Drawing"}))),/*#__PURE__*/index_js_default().createElement(StyledCard,{bg:"var(--yellow)",color:"var(--text)",width:"60%"},/*#__PURE__*/index_js_default().createElement(events_TextWrapper,null,/*#__PURE__*/index_js_default().createElement(events_Title,null,"Meet Curio"),/*#__PURE__*/index_js_default().createElement(Description,null,"Greetings! I'm your friendly AI companion, crafted to ignite your curiosity and passion for learning. Together, we\u2019ll explore endless adventures and unlock new wonders every day. With my customizable skills and dynamic personality, I'm here to grow and learn right alongside you, making every moment of play educational and fun!"),/*#__PURE__*/index_js_default().createElement(styles/* Button */.$n,{to:"/events"},"See what I can do!")))));};/* harmony default export */ const events = (Events);// GraphQL query to fetch the image data
const events_query="2912271621";
// EXTERNAL MODULE: ./src/images/sponsors/linode.svg
var linode = __webpack_require__(3790);
// EXTERNAL MODULE: ./src/images/sponsors/godaddy.png
var godaddy = __webpack_require__(4802);
// EXTERNAL MODULE: ./src/images/sponsors/streamyard.svg
var streamyard = __webpack_require__(5187);
// EXTERNAL MODULE: ./src/images/sponsors/hackclubbank.svg
var hackclubbank = __webpack_require__(734);
;// CONCATENATED MODULE: ./src/components/home/sponsor.js
const sponsor_TextWrapper=styled_components_esm["default"].div.withConfig({displayName:"sponsor__TextWrapper",componentId:"sc-15t4121-0"})(["max-width:1000px;",";"],styles/* media */.$_.thone`text-align: center;`);const Row=styled_components_esm["default"].div.withConfig({displayName:"sponsor__Row",componentId:"sc-15t4121-1"})(["display:flex;",";",";",";"],styles/* media */.$_.bigDesktop`gap: 2rem;`,styles/* media */.$_.desktop`flex-direction: column;`,styles/* media */.$_.thone`text-align: center;`);const ContentWrapper=styled_components_esm["default"].div.withConfig({displayName:"sponsor__ContentWrapper",componentId:"sc-15t4121-2"})(["flex:1;max-width:1400px;a{font-size:24px;",";}"],styles/* media */.$_.tablet`font-size: 18px;`);const ImageContainer=styled_components_esm["default"].div.withConfig({displayName:"sponsor__ImageContainer",componentId:"sc-15t4121-3"})(["flex:1;display:flex;flex-direction:row;align-items:center;justify-content:center;margin-left:2rem;",";",";",";"],styles/* media */.$_.massive`flex-direction: column;`,styles/* media */.$_.desktop`
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 3rem;
  `,styles/* media */.$_.thone`justify-content: center;`);const sponsor_Title=styled_components_esm["default"].h1.withConfig({displayName:"sponsor__Title",componentId:"sc-15t4121-4"})(["font-size:75px;letter-spacing:-4px;line-height:110%;font-weight:bold;margin-bottom:5rem;",";",";"],styles/* media */.$_.tablet`
    font-size: 55px;
    margin-bottom: 2rem;
  `,styles/* media */.$_.thone`
    font-size: 30px;
    letter-spacing: -1px;
  `);const sponsor_Description=styled_components_esm["default"].p.withConfig({displayName:"sponsor__Description",componentId:"sc-15t4121-5"})(["font-size:28px;line-height:146%;margin-top:0;margin-bottom:5rem;",";",";"],styles/* media */.$_.tablet`
    font-size: 24px;
    margin-bottom: 4rem;
  `,styles/* media */.$_.thone`font-size: 19px;`);const SponsorImage=styled_components_esm["default"].img.withConfig({displayName:"sponsor__SponsorImage",componentId:"sc-15t4121-6"})(["width:300px;margin-right:3rem;",";",";",";"],styles/* media */.$_.massive`
    :not(:first-child) {
      margin-top: 2rem;
    }
    :nth-child(even) {
      margin-left: 4rem;
    }
  `,styles/* media */.$_.desktop`
    :not(:first-child) {
      margin-top: 2rem;
    }
    :nth-child(even) {
      margin-left: 0;
      margin-right: 0;
    }
  `,styles/* media */.$_.thone`
    width: 200px;
    margin-right: 0;
  `);const Sponsor=()=>{return/*#__PURE__*/index_js_default().createElement(styles/* Section */.wn,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,null,/*#__PURE__*/index_js_default().createElement(styles/* Card */.Zp,{bg:"var(--gray)",color:"var(--text)"},/*#__PURE__*/index_js_default().createElement(sponsor_TextWrapper,null,/*#__PURE__*/index_js_default().createElement(sponsor_Title,null,"...and get to work with some pretty unique people")),/*#__PURE__*/index_js_default().createElement(Row,null,/*#__PURE__*/index_js_default().createElement(ContentWrapper,null,/*#__PURE__*/index_js_default().createElement(sponsor_Description,null,"Each year, major companies and organizations will sponsor everything that CODE has to offer. It is with their help that CODE can continue to bring computer science to those who need it most and strengthen their passion."),/*#__PURE__*/index_js_default().createElement(styles/* Button */.$n,{to:"/sponsors"},"Explore sponsors")),/*#__PURE__*/index_js_default().createElement(ImageContainer,null,/*#__PURE__*/index_js_default().createElement(SponsorImage,{src:linode/* default */.A,alt:"Linode"}),/*#__PURE__*/index_js_default().createElement(SponsorImage,{src:hackclubbank/* default */.A,alt:"Hack Club Bank"}),/*#__PURE__*/index_js_default().createElement(SponsorImage,{src:streamyard/* default */.A,alt:"Stream Yard"}),/*#__PURE__*/index_js_default().createElement(SponsorImage,{src:godaddy/* default */.A,alt:"GoDaddy"}))))));};/* harmony default export */ const sponsor = (Sponsor);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// CONCATENATED MODULE: ./src/components/home/cta.js
const CardsWrapper=styled_components_esm["default"].div.withConfig({displayName:"cta__CardsWrapper",componentId:"sc-kattx9-0"})(["display:flex;justify-content:space-between;",";"],styles/* media */.$_.tablet`flex-direction: column;`);const cta_StyledCard=(0,styled_components_esm["default"])(styles/* Card */.Zp).withConfig({displayName:"cta__StyledCard",componentId:"sc-kattx9-1"})([":not(:first-child){margin-left:3rem;",";}"],styles/* media */.$_.tablet`
      margin-left: 0;
      margin-top: 3rem;
    `);const PaddingWrapper=styled_components_esm["default"].div.withConfig({displayName:"cta__PaddingWrapper",componentId:"sc-kattx9-2"})(["padding:3rem 0;"]);const cta_TextWrapper=(0,styled_components_esm["default"])(gatsby_browser_entry.Link).withConfig({displayName:"cta__TextWrapper",componentId:"sc-kattx9-3"})(["text-align:center;color:var(--text);:hover{text-decoration:underline;}"]);const TextWrapperA=styled_components_esm["default"].a.withConfig({displayName:"cta__TextWrapperA",componentId:"sc-kattx9-4"})(["text-align:center;color:var(--text);:hover{text-decoration:underline;}"]);const cta_Title=styled_components_esm["default"].h2.withConfig({displayName:"cta__Title",componentId:"sc-kattx9-5"})(["font-size:65px;letter-spacing:-4px;font-weight:700;margin:0;"]);const Subtitle=styled_components_esm["default"].p.withConfig({displayName:"cta__Subtitle",componentId:"sc-kattx9-6"})(["font-size:28px;letter-spacing:-1.2px;margin-bottom:0;margin-top:1rem;"]);const CTA=()=>{return/*#__PURE__*/index_js_default().createElement(styles/* Section */.wn,null,/*#__PURE__*/index_js_default().createElement(styles/* Container */.mc,null,/*#__PURE__*/index_js_default().createElement(CardsWrapper,null,/*#__PURE__*/index_js_default().createElement(cta_StyledCard,{width:"50%",bg:"var(--blue)"},/*#__PURE__*/index_js_default().createElement(PaddingWrapper,null,/*#__PURE__*/index_js_default().createElement(cta_TextWrapper,{to:"/about"},/*#__PURE__*/index_js_default().createElement(cta_Title,null,"About us"),/*#__PURE__*/index_js_default().createElement(Subtitle,null,"Learn who we are and why we\u2019re here")))),/*#__PURE__*/index_js_default().createElement(cta_StyledCard,{width:"50%",bg:"var(--light-purple)"},/*#__PURE__*/index_js_default().createElement(PaddingWrapper,null,/*#__PURE__*/index_js_default().createElement(TextWrapperA,{href:"https://bank.hackclub.com/donations/start/techcodes"},/*#__PURE__*/index_js_default().createElement(cta_Title,null,"Schedule Demo"),/*#__PURE__*/index_js_default().createElement(Subtitle,null,"Bring innovation into your classroom today!")))))));};/* harmony default export */ const cta = (CTA);
;// CONCATENATED MODULE: ./src/components/home/index.js

;// CONCATENATED MODULE: ./src/pages/index.js
const HomePage=({data})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{"data-scroll-section":true},/*#__PURE__*/index_js_default().createElement(hero,{data:data})),/*#__PURE__*/index_js_default().createElement("div",{"data-scroll-section":true},/*#__PURE__*/index_js_default().createElement(about,{data:data})),/*#__PURE__*/index_js_default().createElement("div",{"data-scroll-section":true},/*#__PURE__*/index_js_default().createElement(events,{data:data})),/*#__PURE__*/index_js_default().createElement("div",{"data-scroll-section":true},/*#__PURE__*/index_js_default().createElement(sponsor,null)),/*#__PURE__*/index_js_default().createElement("div",{"data-scroll-section":true},/*#__PURE__*/index_js_default().createElement(cta,null)));};/* harmony default export */ const pages = (HomePage);const pages_query="508533540";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map