"use strict";(self.webpackChunkwebsite_main=self.webpackChunkwebsite_main||[]).push([[293],{2729:function(t){const e=/[\p{Lu}]/u,i=/[\p{Ll}]/u,M=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,L=new RegExp("^"+n.source),N=new RegExp(n.source+a.source,"gu"),o=new RegExp("\\d+"+a.source,"gu"),j=(t,a)=>{if("string"!=typeof t&&!Array.isArray(t))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(t=Array.isArray(t)?t.map((t=>t.trim())).filter((t=>t.length)).join("-"):t.trim()).length)return"";const n=!1===a.locale?t=>t.toLowerCase():t=>t.toLocaleLowerCase(a.locale),j=!1===a.locale?t=>t.toUpperCase():t=>t.toLocaleUpperCase(a.locale);if(1===t.length)return a.pascalCase?j(t):n(t);return t!==n(t)&&(t=((t,M,a)=>{let n=!1,L=!1,N=!1;for(let o=0;o<t.length;o++){const j=t[o];n&&e.test(j)?(t=t.slice(0,o)+"-"+t.slice(o),n=!1,N=L,L=!0,o++):L&&N&&i.test(j)?(t=t.slice(0,o-1)+"-"+t.slice(o-1),N=L,L=!1,n=!0):(n=M(j)===j&&a(j)!==j,N=L,L=a(j)===j&&M(j)!==j)}return t})(t,n,j)),t=t.replace(L,""),t=a.preserveConsecutiveUppercase?((t,e)=>(M.lastIndex=0,t.replace(M,(t=>e(t)))))(t,n):n(t),a.pascalCase&&(t=j(t.charAt(0))+t.slice(1)),((t,e)=>(N.lastIndex=0,o.lastIndex=0,t.replace(N,((t,i)=>e(i))).replace(o,(t=>e(t)))))(t,j)};t.exports=j,t.exports.default=j},3479:function(t,e,i){i(6540),i(2729)},2601:function(t,e,i){i.r(e),i.d(e,{default:function(){return et}});var M=i(6540),a=i(7581),n=i(6044),L=i(5019);var N=i(3479);const o=(0,a.default)(n.wn).withConfig({displayName:"hero__StyledSection",componentId:"sc-15ukai7-0"})(["padding-top:15rem;padding-bottom:15rem;height:100vh;overflow-x:hidden;min-height:80rem;",";",";"],n.$_.desktop`padding-top: 10rem;`,n.$_.thone`
    min-height: 20rem;
    padding-top: 5rem;
  `),j=a.default.div.withConfig({displayName:"hero__TextWrapper",componentId:"sc-15ukai7-1"})(["max-width:900px;",";",";"],n.$_.massive`max-width: 750px;`,n.$_.tablet`max-width: 100%;`),u=(0,a.default)(L.P.h1).withConfig({displayName:"hero__BigText",componentId:"sc-15ukai7-2"})(["font-weight:bold;font-size:80px;letter-spacing:-2px;line-height:100%;",";",";"],n.$_.massive`font-size: 70px;`,n.$_.thone`font-size: 48px;`),l=(0,a.default)(L.P.div).withConfig({displayName:"hero__BaseWrapper",componentId:"sc-15ukai7-3"})(["position:absolute;z-index:-1;"]),g=(0,a.default)(l).withConfig({displayName:"hero__VeryTop",componentId:"sc-15ukai7-4"})(["left:50vw;top:50px;width:800px;transform:rotate(1deg);filter:blur(3px);",";"],n.$_.bigDesktop`display: none;`),r=(0,a.default)(l).withConfig({displayName:"hero__LowerTop",componentId:"sc-15ukai7-5"})(["left:70vw;top:400px;width:450px;transform:rotate(1deg);filter:blur(2px);",";",";",";"],n.$_.bigDesktop`
    left: 50vw;
    top: 350px;
  `,n.$_.tablet`display: none;`,n.$_.desktop`left: 45vw;`),I=(0,a.default)(l).withConfig({displayName:"hero__BottomLeft",componentId:"sc-15ukai7-6"})(["left:15vw;top:550px;width:500px;transform:rotate(1deg);",";",";"],n.$_.bigDesktop`
    left: 0;
    width: 350px;
  `,n.$_.thone`
    width: 250px;
    top: auto;
    bottom: 30px;
  `),s=(0,a.default)(l).withConfig({displayName:"hero__BottomRight",componentId:"sc-15ukai7-7"})(["left:50vw;top:550px;width:400px;transform:rotate(1deg);filter:blur(1px);",";",";",";"],n.$_.bigDesktop`
    left: 30vw;
    top: 650px;
    width: 350px;
  `,n.$_.tablet`left: 40vw;`,n.$_.thone`
    width: 150px;
    top: auto;
    bottom: 200px;
    left: auto;
    right: 30px;   
  `),c=(0,a.default)(N.default).withConfig({displayName:"hero__StyledImage",componentId:"sc-15ukai7-8"})(["width:100%;"]);var y=t=>{let{data:e}=t;const{x:i,y:a}=function(){let{0:t,1:e}=(0,M.useState)({x:null,y:null});return(0,M.useEffect)((()=>{function t(t){e({x:t.pageX,y:t.pageY})}return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)}),[]),t}();return M.createElement(o,null,M.createElement(n.mc,{max:!0},M.createElement(g,{initial:{y:0},animate:{y:25},transition:{duration:1.7,yoyo:1/0}},M.createElement("div",{"data-scroll":!0,"data-scroll-speed":4},M.createElement(L.P.div,{style:{x:i/100,y:a/100}},M.createElement(c,{fluid:e.rocket.childImageSharp.fluid,alt:"Rocket"})))),M.createElement(r,{initial:{y:0},animate:{y:25},transition:{duration:1.7,yoyo:1/0,delay:1}},M.createElement("div",{"data-scroll":!0,"data-scroll-speed":3},M.createElement(L.P.div,{style:{x:i/80,y:a/80}},M.createElement(c,{fluid:e.bucket.childImageSharp.fluid,alt:"Bucket"})))),M.createElement(j,null,M.createElement(u,null,"Where Magic Meets Learning: Discover Innovation in Every Toy!")),M.createElement("div",null),M.createElement(s,{initial:{y:0},animate:{y:25},transition:{duration:1.7,yoyo:1/0,delay:1}},M.createElement("div",{"data-scroll":!0,"data-scroll-speed":2},M.createElement(L.P.div,{style:{x:i/50,y:a/50}},M.createElement(c,{fluid:e.folder.childImageSharp.fluid,alt:"Folder"})))),M.createElement(I,{initial:{y:0},animate:{y:25},transition:{duration:1.7,yoyo:1/0,delay:1}},M.createElement("div",{"data-scroll":!0,"data-scroll-speed":3},M.createElement(L.P.div,{style:{x:i/20,y:a/20}},M.createElement(c,{fluid:e.potion.childImageSharp.fluid,alt:"Potion"}))))))};const T=(0,a.default)(n.wn).withConfig({displayName:"about__StyledSection",componentId:"sc-1wfy280-0"})(["padding-top:35vh;",";",";"],n.$_.tablet`
    padding-top: 20vh; /* Reduce padding for mobile */
  `,n.$_.thone`
    padding-top: 10vh; /* Further reduce padding for phones */
  `),d=a.default.div.withConfig({displayName:"about__TextWrapper",componentId:"sc-1wfy280-1"})(["max-width:1000px;padding:1rem;",";",";"],n.$_.massive`
    padding-top: 8rem;
    max-width: 1500px;
  `,n.$_.thone`
    text-align: left;
    padding: 1rem; /* Add padding for phones */
  `),D=a.default.div.withConfig({displayName:"about__ImageWrapper",componentId:"sc-1wfy280-2"})(["display:flex;justify-content:center;margin-top:2rem;",";"],n.$_.thone`
    margin-top: 1rem; /* Reduce margin for phones */
  `),x=(0,a.default)(N.default).withConfig({displayName:"about__StyledImage",componentId:"sc-1wfy280-3"})(["width:800px;",";",";",";"],n.$_.massive`
    width: 700px;
    margin-top: -30rem;
  `,n.$_.tablet`
    width: 400px;
    margin-top: -15rem;
  `,n.$_.thone`
    width: 90vw; /* Scale down image width for phones */
    margin-top: 0; /* No negative margin on phones */
  `),w=a.default.h1.withConfig({displayName:"about__Title",componentId:"sc-1wfy280-4"})(["font-size:75px;letter-spacing:-4px;line-height:118.2%;font-weight:bold;margin-top:1rem;",";",";"],n.$_.tablet`font-size: 55px;`,n.$_.thone`
    font-size: 25px; /* Reduce font size for phones */
    letter-spacing: -1px;
    margin-top: 0.5rem;
  `),m=(0,a.default)(n.rj).withConfig({displayName:"about__CustomDescription",componentId:"sc-1wfy280-5"})(["max-width:75%;margin:0;",";",";"],n.$_.tablet`max-width: 100%;`,n.$_.thone`
    max-width: 100%; /* Full width on phones */
    font-size: 16px; /* Smaller font size for phones */
    line-height: 1.4;
  `),p=a.default.span.withConfig({displayName:"about__Label",componentId:"sc-1wfy280-6"})(["font-size:26px;color:#f1f1f1;font-weight:500;text-transform:uppercase;",";"],n.$_.thone`
    font-size: 18px; /* Reduce label font size on phones */
  `);var z=t=>{let{data:e}=t;return M.createElement(T,null,M.createElement(n.mc,null,M.createElement(n.Zp,{bg:"var(--purple)",color:"var(--white)"},M.createElement(D,{"data-scroll":!0,"data-scroll-speed":1},M.createElement(x,{fluid:e.searching.childImageSharp.fluid,alt:"Searching"})),M.createElement(d,null,M.createElement(p,null,"About us"),M.createElement(w,null,"We Empower Young Minds to Learn, Grow, and Dream Through Play"),M.createElement(m,null,"At Baily AI, we blend the wonder of play with the power of learning. Our AI-powered toys are not just toys; they're companions designed to foster creativity, curiosity, and intelligence in children aged 5-12. Through customizable features and engaging content, each toy adapts to your child's unique interests, helping them explore technology and learn at their own pace. Join us in nurturing the next generation of thinkers and doers.")))))};const E=(0,a.default)(n.wn).withConfig({displayName:"events__CustomSection",componentId:"sc-15gh0r1-0"})(["",";",";"],n.$_.bigDesktop`padding-top: 24rem;`,n.$_.tablet`padding-top: 16rem;`),C=a.default.div.withConfig({displayName:"events__TextWrapper",componentId:"sc-15gh0r1-1"})(["max-width:1000px;a{font-size:24px;",";}",";",";",";",";"],n.$_.tablet`font-size: 18px;`,n.$_.massive`max-width: 1500px;`,n.$_.bigDesktop`padding-top: 10rem;`,n.$_.thone`text-align: center;`,n.$_.phablet`padding-top: 3rem;`),h=(0,a.default)(n.Zp).withConfig({displayName:"events__StyledCard",componentId:"sc-15gh0r1-2"})(["padding-bottom:3rem;",";"],n.$_.bigDesktop`width: 100%;`),A=a.default.div.withConfig({displayName:"events__ImageWrapper",componentId:"sc-15gh0r1-3"})(["position:absolute;"]),S=(0,a.default)(N.default).withConfig({displayName:"events__StyledImage",componentId:"sc-15gh0r1-4"})(["width:1000px;position:absolute;left:90%;transform:translate(-10%,12%);",";",";",";",";"],n.$_.massive`left: 80%;`,n.$_.bigDesktop`
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -30rem;
  `,n.$_.tablet`
    width: 600px;
    margin-top: -15rem;
  `,n.$_.thone`
    width: 90vw;
    margin-top: -13rem;
  `),Y=a.default.h1.withConfig({displayName:"events__Title",componentId:"sc-15gh0r1-5"})(["font-size:75px;letter-spacing:-4px;line-height:110%;font-weight:bold;margin:0;",";",";"],n.$_.tablet`font-size: 55px;`,n.$_.thone`
    font-size: 30px;
    letter-spacing: -1px;
  `),f=(0,a.default)(n.rj).withConfig({displayName:"events__Description",componentId:"sc-15gh0r1-6"})(["max-width:75%;margin-top:5rem;margin-bottom:5rem;",";"],n.$_.tablet`
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 4rem;
  `);var Q=t=>{let{data:e}=t;return M.createElement(E,null,M.createElement(n.mc,null,M.createElement(A,null,M.createElement("div",{"data-scroll":!0,"data-scroll-direction":"horizontal","data-scroll-speed":1},M.createElement(S,{fluid:e.drawing.childImageSharp.fluid,alt:"Drawing"}))),M.createElement(h,{bg:"var(--yellow)",color:"var(--text)",width:"60%"},M.createElement(C,null,M.createElement(Y,null,"Meet Curio"),M.createElement(f,null,"Greetings! I'm your friendly AI companion, crafted to ignite your curiosity and passion for learning. Together, we’ll explore endless adventures and unlock new wonders every day. With my customizable skills and dynamic personality, I'm here to grow and learn right alongside you, making every moment of play educational and fun!"),M.createElement(n.$n,{to:"/events"},"See what I can do!")))))},O=i(3790),k=i(4802),b=i(5187),_=i(734);const v=a.default.div.withConfig({displayName:"sponsor__TextWrapper",componentId:"sc-15t4121-0"})(["max-width:1000px;",";"],n.$_.thone`text-align: center;`),U=a.default.div.withConfig({displayName:"sponsor__Row",componentId:"sc-15t4121-1"})(["display:flex;",";",";",";"],n.$_.bigDesktop`gap: 2rem;`,n.$_.desktop`flex-direction: column;`,n.$_.thone`text-align: center;`),G=a.default.div.withConfig({displayName:"sponsor__ContentWrapper",componentId:"sc-15t4121-2"})(["flex:1;max-width:1400px;a{font-size:24px;",";}"],n.$_.tablet`font-size: 18px;`),Z=a.default.div.withConfig({displayName:"sponsor__ImageContainer",componentId:"sc-15t4121-3"})(["flex:1;display:flex;flex-direction:row;align-items:center;justify-content:center;margin-left:2rem;",";",";",";"],n.$_.massive`flex-direction: column;`,n.$_.desktop`
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 3rem;
  `,n.$_.thone`justify-content: center;`),R=a.default.h1.withConfig({displayName:"sponsor__Title",componentId:"sc-15t4121-4"})(["font-size:75px;letter-spacing:-4px;line-height:110%;font-weight:bold;margin-bottom:5rem;",";",";"],n.$_.tablet`
    font-size: 55px;
    margin-bottom: 2rem;
  `,n.$_.thone`
    font-size: 30px;
    letter-spacing: -1px;
  `),J=a.default.p.withConfig({displayName:"sponsor__Description",componentId:"sc-15t4121-5"})(["font-size:28px;line-height:146%;margin-top:0;margin-bottom:5rem;",";",";"],n.$_.tablet`
    font-size: 24px;
    margin-bottom: 4rem;
  `,n.$_.thone`font-size: 19px;`),$=a.default.img.withConfig({displayName:"sponsor__SponsorImage",componentId:"sc-15t4121-6"})(["width:300px;margin-right:3rem;",";",";",";"],n.$_.massive`
    :not(:first-child) {
      margin-top: 2rem;
    }
    :nth-child(even) {
      margin-left: 4rem;
    }
  `,n.$_.desktop`
    :not(:first-child) {
      margin-top: 2rem;
    }
    :nth-child(even) {
      margin-left: 0;
      margin-right: 0;
    }
  `,n.$_.thone`
    width: 200px;
    margin-right: 0;
  `);var W=()=>M.createElement(n.wn,null,M.createElement(n.mc,null,M.createElement(n.Zp,{bg:"var(--gray)",color:"var(--text)"},M.createElement(v,null,M.createElement(R,null,"...and get to work with some pretty unique people")),M.createElement(U,null,M.createElement(G,null,M.createElement(J,null,"Each year, major companies and organizations will sponsor everything that CODE has to offer. It is with their help that CODE can continue to bring computer science to those who need it most and strengthen their passion."),M.createElement(n.$n,{to:"/sponsors"},"Explore sponsors")),M.createElement(Z,null,M.createElement($,{src:O.A,alt:"Linode"}),M.createElement($,{src:_.A,alt:"Hack Club Bank"}),M.createElement($,{src:b.A,alt:"Stream Yard"}),M.createElement($,{src:k.A,alt:"GoDaddy"})))))),P=i(4794);const B=a.default.div.withConfig({displayName:"cta__CardsWrapper",componentId:"sc-kattx9-0"})(["display:flex;justify-content:space-between;",";"],n.$_.tablet`flex-direction: column;`),X=(0,a.default)(n.Zp).withConfig({displayName:"cta__StyledCard",componentId:"sc-kattx9-1"})([":not(:first-child){margin-left:3rem;",";}"],n.$_.tablet`
      margin-left: 0;
      margin-top: 3rem;
    `),H=a.default.div.withConfig({displayName:"cta__PaddingWrapper",componentId:"sc-kattx9-2"})(["padding:3rem 0;"]),F=(0,a.default)(P.Link).withConfig({displayName:"cta__TextWrapper",componentId:"sc-kattx9-3"})(["text-align:center;color:var(--text);:hover{text-decoration:underline;}"]),V=a.default.a.withConfig({displayName:"cta__TextWrapperA",componentId:"sc-kattx9-4"})(["text-align:center;color:var(--text);:hover{text-decoration:underline;}"]),K=a.default.h2.withConfig({displayName:"cta__Title",componentId:"sc-kattx9-5"})(["font-size:65px;letter-spacing:-4px;font-weight:700;margin:0;"]),q=a.default.p.withConfig({displayName:"cta__Subtitle",componentId:"sc-kattx9-6"})(["font-size:28px;letter-spacing:-1.2px;margin-bottom:0;margin-top:1rem;"]);var tt=()=>M.createElement(n.wn,null,M.createElement(n.mc,null,M.createElement(B,null,M.createElement(X,{width:"50%",bg:"var(--blue)"},M.createElement(H,null,M.createElement(F,{to:"/about"},M.createElement(K,null,"About us"),M.createElement(q,null,"Learn who we are and why we’re here")))),M.createElement(X,{width:"50%",bg:"var(--light-purple)"},M.createElement(H,null,M.createElement(V,{href:"https://bank.hackclub.com/donations/start/techcodes"},M.createElement(K,null,"Schedule Demo"),M.createElement(q,null,"Bring innovation into your classroom today!")))))));var et=t=>{let{data:e}=t;return M.createElement(M.Fragment,null,M.createElement("div",{"data-scroll-section":!0},M.createElement(y,{data:e})),M.createElement("div",{"data-scroll-section":!0},M.createElement(z,{data:e})),M.createElement("div",{"data-scroll-section":!0},M.createElement(Q,{data:e})),M.createElement("div",{"data-scroll-section":!0},M.createElement(W,null)),M.createElement("div",{"data-scroll-section":!0},M.createElement(tt,null)))}},4802:function(t,e,i){e.A=i.p+"static/godaddy-ab74ef1a5aec4e1dfc403ffd0a1fb6ec.png"},734:function(t,e){e.A="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPjxyZWN0IHg9IjEiIHk9IjEiIHdpZHRoPSIyNTQiIGhlaWdodD0iNjIiIHJ4PSIxMSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzk4Qjk2IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNzAuNzkyIDI0aDEuMzJ2LTIuNjc2aDEuMjM2YzEuOTA4IDAgMi44NDQtMS4wOCAyLjg0NC0yLjQ0OCAwLTEuNDc2LS45Ni0yLjQzNi0yLjkxNi0yLjQzNmgtMi40ODRWMjR6bTIuNTMyLTYuNDJjLjkxMiAwIDEuNTEyLjQ1NiAxLjUxMiAxLjMwOCAwIC44NC0uNDU2IDEuMjk2LTEuNDc2IDEuMjk2aC0xLjI0OFYxNy41OGgxLjIxMnptNy4zNDYgNi42YzIuMTcyIDAgMy45Ni0xLjY2OCAzLjk2LTMuOTZzLTEuOC0zLjk2LTMuOTYtMy45NmMtMi4xNDggMC0zLjk0OCAxLjY2OC0zLjk0OCAzLjk2czEuNzg4IDMuOTYgMy45NDggMy45NnptMC0xLjIyNGMtMS41IDAtMi42MDQtMS4xMTYtMi42MDQtMi43MzZzMS4xMDQtMi43MzYgMi42MDQtMi43MzYgMi42MjggMS4xMTYgMi42MjggMi43MzYtMS4xMjggMi43MzYtMi42MjggMi43MzZ6bTUuNjMyLTYuNTE2aC0xLjQ0bDIuMjIgNy41NmgxLjcxNmwxLjUxMi01LjU2OEw5MS44MzQgMjRoMS43MTZsMi4yMi03LjU2aC0xLjQwNGwtMS42NDQgNi4xOC0xLjY0NC02LjE4SDg5LjU5bC0xLjY0NCA2LjE4LTEuNjQ0LTYuMTh6TTk2LjY2NyAyNGg0LjkwOHYtMS4xNjRoLTMuNTg4VjIwLjc2aDMuNDA4di0xLjE2NGgtMy40MDh2LTEuOTkyaDMuNTg4VjE2LjQ0aC00LjkwOFYyNHptNiAwaDEuMzJ2LTIuNzcyaDEuNTcyTDEwNi45NzUgMjRoMS41MzZsLTEuNjQ0LTMuMDQ4Yy45MTItLjM5NiAxLjM2OC0xLjE4OCAxLjM2OC0yLjEyNCAwLTEuNDQtLjk2LTIuMzg4LTIuOTE2LTIuMzg4aC0yLjY1MlYyNHptMi43LTYuNDJjLjkxMiAwIDEuNTEyLjQ0NCAxLjUxMiAxLjI2IDAgLjgxNi0uNDU2IDEuMjQ4LTEuNDc2IDEuMjQ4aC0xLjQxNlYxNy41OGgxLjM4em00LjIyNiA2LjQyaDQuOTA4di0xLjE2NGgtMy41ODhWMjAuNzZoMy40MDh2LTEuMTY0aC0zLjQwOHYtMS45OTJoMy41ODhWMTYuNDRoLTQuOTA4VjI0em02IDBoMi4wNTJjMi45MTYgMCA0LjU4NC0xLjUxMiA0LjU4NC0zLjc4cy0xLjY2OC0zLjc4LTQuNTg0LTMuNzhoLTIuMDUyVjI0em0yLjIwOC0xLjE4OGgtLjg4OHYtNS4xODRoLjg4OGMxLjg2IDAgMy4wOTYuODY0IDMuMDk2IDIuNTkyIDAgMS43MjgtMS4yMzYgMi41OTItMy4wOTYgMi41OTJ6TTEyNS42MTIgMjRoMy4wNDhjMS43MjggMCAyLjU0NC0uOTM2IDIuNTQ0LTIuMjMyIDAtLjYyNC0uMjUyLTEuMzY4LTEuMzQ0LTEuNzY0Ljc0NC0uMzYgMS4wMDgtLjk4NCAxLjAwOC0xLjU3MiAwLTEuMTY0LS43NDQtMS45OTItMi40Ni0xLjk5MmgtMi43OTZWMjR6bTIuNjI4LTYuNDY4Yy44MTYgMCAxLjI3Mi4zMTIgMS4yNzIgMS4wNDQgMCAuNzU2LS4zMzYgMS4wNTYtMS4yNiAxLjA1NmgtMS4zMnYtMi4xaDEuMzA4em0uMjQgMy4xNTZjLjk0OCAwIDEuMzY4LjM3MiAxLjM2OCAxLjExNiAwIC43MzItLjQwOCAxLjEwNC0xLjM1NiAxLjEwNGgtMS41NnYtMi4yMmgxLjU0OHpNMTM0LjAyMyAyNGgxLjMydi0zLjEzMmwyLjY0LTQuNDI4aC0xLjQ2NGwtMS44MzYgMy4xNjgtMS44MTItMy4xNjhoLTEuNTI0bDIuNjc2IDQuNVYyNHoiIGZpbGw9IiM3OThCOTYiLz48cGF0aCBkPSJNNzEuMDggNDhoMy43MnYtNS45NTJoNS45MDRWNDhoMy43MlYzMi44OGgtMy43MnY1LjkyOEg3NC44VjMyLjg4aC0zLjcyVjQ4em0xNS4wMTItNS4yOGMwIDMuNjI0IDIuMDg4IDUuNjQgNC41NiA1LjY0IDEuNDE2IDAgMi42ODgtLjU3NiAzLjQ1Ni0xLjc1MlY0OGgzLjY5NlYzNy40NGgtMy42OTZ2MS4zOTJjLS43NjgtMS4xNzYtMi4wNC0xLjc1Mi0zLjQ1Ni0xLjc1Mi0yLjQ3MiAwLTQuNTYgMi4wMTYtNC41NiA1LjY0em01Ljg4LTIuNjRjMS4zMiAwIDIuMTg0Ljk2IDIuMTg0IDIuNjQgMCAxLjY4LS44ODggMi42NC0yLjE4NCAyLjY0LTEuMzkyIDAtMi4xODQtMS4xMjgtMi4xODQtMi42NCAwLTEuNTEyLjc5Mi0yLjY0IDIuMTg0LTIuNjR6bTExLjEyNyAyLjY0YzAtMS44NDguOTEyLTIuNzYgMi4wMTYtMi43Ni44NjQgMCAxLjY1Ni41NTIgMS43NTIgMS43MjhoMy43OTJjLS41MDQtMy40OC0zLjI4OC00LjYwOC01LjU0NC00LjYwOC0yLjgzMiAwLTUuNzEyIDEuNzUyLTUuNzEyIDUuNjRzMi44OCA1LjY0IDUuNzEyIDUuNjRjMi4yOCAwIDUuMDY0LTEuMTI4IDUuNTQ0LTQuNjA4aC0zLjc5MmMtLjEyIDEuMTUyLS44ODggMS43MjgtMS43NTIgMS43MjgtMS4xMDQgMC0yLjAxNi0uOTEyLTIuMDE2LTIuNzZ6bTkuMDY3IDUuMjhoMy42OTZ2LTQuNTZsMy40MzIgNC41Nmg0LjUxMmwtNC40NjQtNS41NjggNC4xMjgtNC45OTJoLTQuMDMybC0zLjU3NiA0LjE1MlYzMS42OGgtMy42OTZWNDh6bTI4LjA4OC01Ljk1MkMxMzkuNzUgNDQuNTIgMTM4LjE0MiA0NSAxMzYuNzAyIDQ1Yy0yLjI1NiAwLTMuNzkyLTEuOTItMy43OTItNC41NiAwLTIuNjQgMS41MTItNC41NiAzLjc5Mi00LjU2IDEuNTEyIDAgMy4wNDguNjI0IDMuNTA0IDIuOTUyaDMuODE2Yy0uOTM2LTQuOTY4LTQuMDgtNi4zMTItNy4zMi02LjMxMi00LjUzNiAwLTcuNTEyIDMuMzM2LTcuNTEyIDcuOTJzMy4xMiA3LjkyIDcuNTEyIDcuOTJjMy4yNCAwIDYuMzYtMS4yIDcuMzItNi4zMTJoLTMuNzY4ek0xNDUuNjExIDQ4aDMuNjk2VjMxLjY4aC0zLjY5NlY0OHptOS4zODgtMTAuNTZoLTMuNjk2djYuNzJjMCAyLjY4OCAxLjUxMiA0LjIgMy43NjggNC4yIDEuMTUyIDAgMi4yOC0uNTc2IDIuOTc2LTEuNzI4VjQ4aDMuNjk2VjM3LjQ0aC0zLjY5NnY1LjM1MmMwIDEuNzA0LS42NzIgMi40NDgtMS41MzYgMi40NDgtLjkxMiAwLTEuNTEyLS42OTYtMS41MTItMi4xMzZWMzcuNDR6bTIwLjYwNiA1LjI4YzAtMy42MjQtMi4wODgtNS42NC00LjU2LTUuNjQtMS40MTYgMC0yLjY4OC41NzYtMy40NTYgMS43NTJWMzEuNjhoLTMuNjk2VjQ4aDMuNjk2di0xLjM5MmMuNzY4IDEuMTc2IDIuMDQgMS43NTIgMy40NTYgMS43NTIgMi40NzIgMCA0LjU2LTIuMDE2IDQuNTYtNS42NHptLTUuODgtMi42NGMxLjM5MiAwIDIuMTg0IDEuMTI4IDIuMTg0IDIuNjQgMCAxLjUxMi0uNzkyIDIuNjQtMi4xODQgMi42NC0xLjI5NiAwLTIuMTg0LS45ODQtMi4xODQtMi42NCAwLTEuNjU2Ljg2NC0yLjY0IDIuMTg0LTIuNjR6TTE4Mi4wNTcgNDhoNi41MDRjMy42NDggMCA1LjQtMS44OTYgNS40LTQuNTM2IDAtMS4yLS41MDQtMi42NjQtMi45MDQtMy4zODQgMS43MDQtLjY5NiAyLjMwNC0xLjk2OCAyLjMwNC0zLjE5MiAwLTIuMTg0LTEuNDQtNC4wMDgtNS4yNTYtNC4wMDhoLTYuMDQ4VjQ4em01LjY2NC0xMi4zNmMxLjIgMCAxLjg5Ni40OCAxLjg5NiAxLjYwOCAwIDEuMjQ4LS42IDEuNzUyLTIuMDQgMS43NTJoLTEuOHYtMy4zNmgxLjk0NHptLjQwOCA2YzEuMzIgMCAyLjA4OC42IDIuMDg4IDEuODI0IDAgMS4xNzYtLjc5MiAxLjc3Ni0yLjEzNiAxLjc3NmgtMi4zMDR2LTMuNmgyLjM1MnptNy4wMTcgMS4wOGMwIDMuNjI0IDIuMDg4IDUuNjQgNC41NiA1LjY0IDEuNDE2IDAgMi42ODgtLjU3NiAzLjQ1Ni0xLjc1MlY0OGgzLjY5NlYzNy40NGgtMy42OTZ2MS4zOTJjLS43NjgtMS4xNzYtMi4wNC0xLjc1Mi0zLjQ1Ni0xLjc1Mi0yLjQ3MiAwLTQuNTYgMi4wMTYtNC41NiA1LjY0em01Ljg4LTIuNjRjMS4zMiAwIDIuMTg0Ljk2IDIuMTg0IDIuNjQgMCAxLjY4LS44ODggMi42NC0yLjE4NCAyLjY0LTEuMzkyIDAtMi4xODQtMS4xMjgtMi4xODQtMi42NCAwLTEuNTEyLjc5Mi0yLjY0IDIuMTg0LTIuNjR6TTIwOS4wMSA0OGgzLjY5NnYtNS43ODRjMC0xLjQ4OC42OTYtMi4xMzYgMS44MjQtMi4xMzYgMS4wMzIgMCAxLjU4NC42OTYgMS41ODQgMi4xMzZWNDhoMy42OTZ2LTYuMTQ0YzAtMy0xLjUzNi00Ljc3Ni00LjAwOC00Ljc3Ni0xLjM0NCAwLTIuNDI0LjYyNC0zLjA5NiAxLjc1MlYzNy40NGgtMy42OTZWNDh6bTEyLjc5NyAwaDMuNjk2di00LjU2bDMuNDMyIDQuNTZoNC41MTJsLTQuNDY0LTUuNTY4IDQuMTI4LTQuOTkyaC00LjAzMmwtMy41NzYgNC4xNTJWMzEuNjhoLTMuNjk2VjQ4eiIgZmlsbD0iIzE3MTcxRCIvPjxjaXJjbGUgY3g9IjM2IiBjeT0iMzIiIHI9IjIyLjUiIHN0cm9rZT0iI0U0MkQ0MiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHBhdGggZD0iTTIyLjUgNDRhMS41IDEuNSAwIDAgMSAxLjUtMS41aDI0YTEuNSAxLjUgMCAwIDEgMCAzSDI0YTEuNSAxLjUgMCAwIDEtMS41LTEuNXoiIGZpbGw9IiNFNDJENDIiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2IDQxYTEuNSAxLjUgMCAwIDEtMS41LTEuNVYyOWExLjUgMS41IDAgMCAxIDMgMHYxMC41QTEuNSAxLjUgMCAwIDEgMzYgNDF6bTcuNSAwYTEuNSAxLjUgMCAwIDEtMS41LTEuNVYyOWExLjUgMS41IDAgMCAxIDMgMHYxMC41YTEuNSAxLjUgMCAwIDEtMS41IDEuNXptLTE1IDBhMS41IDEuNSAwIDAgMS0xLjUtMS41VjI5YTEuNSAxLjUgMCAwIDEgMyAwdjEwLjVhMS41IDEuNSAwIDAgMS0xLjUgMS41eiIgZmlsbD0iI0U0MkQ0MiIvPjxwYXRoIGQ9Ik0zNiAyMC4wMjdjLjA2Mi4wMjEuMTU2LjA1Ny4yOTEuMTE3LjM1OS4xNTUuNzg1LjM3NyAxLjMzMi42OSAxLjExMy42MzYgMi41MDcgMS41MzUgNC4wNzQgMi42NDJDNDQuODUgMjUuNjk4IDQ1IDI2IDQ4LjQ0IDI4LjU2YTEuNDk4IDEuNDk4IDAgMCAwIDIuMTIgMCAxLjQ5OCAxLjQ5OCAwIDAgMCAwLTIuMTIyYy0zLjMxLTIuNjg5LTMuOTA4LTMuMTM3LTcuMTMyLTUuNDE1LTEuNjItMS4xNDMtMy4xMzMtMi4xMTktNC4zMTctMi43OTZhMTguMDY0IDE4LjA2NCAwIDAgMC0xLjYxNS0uODMyQzM3LjEwMyAxNy4yMjQgMzYuNTM3IDE3IDM2IDE3cy0xLjEwMi4yMjQtMS40OTUuMzk2Yy0uNDQ2LjE5NS0xLjAxNC40ODktMS42MTYuODMyLTEuMTgzLjY3Ny0yLjY5NyAxLjY1My00LjMxNyAyLjc5Ni0zLjIyMyAyLjI3Ny0zLjgyMSAyLjcyNi03LjEzMiA1LjQxNWExLjQ5OCAxLjQ5OCAwIDAgMCAwIDIuMTIyIDEuNDk4IDEuNDk4IDAgMCAwIDIuMTIgMEMyNyAyNiAyNy4xNTMgMjUuNjk4IDMwLjMwNCAyMy40NzZjMS41NjgtMS4xMDcgMi45NjEtMi4wMDYgNC4wNzQtMi42NDIuNTQ4LS4zMTQuOTc0LS41MzUgMS4zMzItLjY5LjEzNS0uMDYuMjMtLjA5Ni4yOTEtLjExN3oiIGZpbGw9IiNFNDJENDIiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNTZ2NjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4="},3790:function(t,e){e.A="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1NzUuOCAxNzguMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTc1LjggMTc4LjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMxNDE0MTQ7fQ0KCS5zdDF7ZmlsbDojMDA0QjE2O30NCgkuc3Qye2ZpbGw6IzFDQjM1Qzt9DQo8L3N0eWxlPg0KPHBhdGggZD0iTTE0OC42LDc4LjlsLTI0LjctMTMuNkwxMDMuMSw3OGwtMC4zLDEzbC0xMC4xLTYuN2wtMTMuOCw4LjRjLTAuMi0zLjktMC40LTguNi0wLjYtMTQuMkw2NC4xLDY5YzMuOS0yLDguNC00LjMsMTMuNS03DQoJYy0wLjEsMCwwLjEsMS40LTItNDYuNWwtMzItMTUuNEwwLDEzLjdsOS43LDQ2LjlMMjQuMyw3MmwtMTEuMSw1LjNsNy4zLDM1LjNsMTAuMiw5LjZsLTcuMyw0LjVsNS43LDI3LjNMNTIsMTc4LjMNCgljMC4xLTAuMSwyLjQtMS45LDI5LjUtMjMuNWwtMC44LTE4LjZsMTEuNyw5LjljMC4yLTAuMiwyLjQtMS45LDIzLjctMTguOGwwLjgtMTMuN2w4LjgsNi4xYzAuMS0wLjIsMi4xLTEuNywxOS4zLTE1LjNMMTQ4LjYsNzguOXoiDQoJLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjguMSw5My41bDIwLjUtMTQuNmwtMjQuNy0xMy42TDEwMy4xLDc4TDEyOC4xLDkzLjV6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTI1LjgsMTE5LjVsMi4zLTI2bC0yNS0xNS41bC0wLjUsMjUuNEwxMjUuOCwxMTkuNXoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05Mi42LDE0NmwtMC4zLTI3TDY3LjIsOTkuOWwxLjksMjYuNEw5Mi42LDE0NnoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05Mi4zLDExOWwyNS41LTE4LjJMOTIuNyw4NC4zTDY3LjIsOTkuOUw5Mi4zLDExOXoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01Mi4xLDE3OC4yTDQ4LDE1MC42bC0yNC42LTI0LjFsNS43LDI3LjRMNTIuMSwxNzguMnoiLz4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OCwxNTAuNmwzMi40LTIzLjFsLTI1LjEtMjAuNGwtMzEuOSwxOS40TDQ4LDE1MC42eiIvPg0KPHBhdGggY2xhc3M9InN0MSIgZD0iTTQ1LjksMTM2LjNsLTUuMy0zNi40TDEzLjIsNzcuMWw3LjMsMzUuNEw0NS45LDEzNi4zeiIvPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwLjYsOTkuOWwzNy43LTIxLjRMNTAuMSw1OS42TDEzLjIsNzcuMUw0MC42LDk5Ljl6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzgsODIuNWwtNy4zLTQ5LjlMMCwxMy42bDkuNyw0Ni45TDM4LDgyLjV6Ii8+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzAuNywzMi42bDQ0LjktMTcuMkw0My42LDBMMCwxMy42TDMwLjcsMzIuNnoiLz4NCjxnPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNDUuMiwxMDQuMmMtMTksMTUuMS0xOS40LDE1LjQtMTkuMywxNS40YzIuNC0yNy4yLDIuMi0yNiwyLjMtMjZDMTUwLDc4LjEsMTQ4LjYsNzksMTQ4LjcsNzlMMTQ1LjIsMTA0LjJ6Ig0KCQkvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMTYuMiwxMjcuMkM5Mi43LDE0NS45LDkyLjQsMTQ2LDkyLjUsMTQ2Yy0wLjItMjguMi0wLjMtMjctMC4yLTI3YzI3LjEtMTkuNCwyNS40LTE4LjIsMjUuNS0xOC4yDQoJCUwxMTYuMiwxMjcuMnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNODEuNiwxNTQuN0M1Mi4yLDE3OCw1MiwxNzguMiw1Mi4xLDE3OC4yYy00LjItMjguNC00LjEtMjcuNS00LTI3LjVjMzQuNS0yNC42LDMyLjMtMjMuMSwzMi40LTIzLjENCgkJTDgxLjYsMTU0Ljd6Ii8+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc1LjYsMTUuNGMyLjEsNDcuOSwxLjksNDYuNSwyLDQ2LjVDMzguOCw4Mi4xLDM3LjksODIuNSwzOCw4Mi41Yy03LjUtNTEtNy40LTQ5LjktNy4zLTQ5LjlMNzUuNiwxNS40eiIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik03OC4zLDc4LjVjMS42LDM2LjMsMS40LDM1LjEsMS41LDM1LjFjLTMzLjYsMjIuNi0zNCwyMi44LTMzLjksMjIuOEM0MC40LDk5LDQwLjUsMTAwLDQwLjYsMTAwTDc4LjMsNzguNXoiLz4NCjwvZz4NCjxwYXRoIGQ9Ik0xOTEuNCwzMy42bDE2LjgtNGMwLDgxLjgtMy4xLDkzLjUsOCw5Ny4xYy0yLjYsNC45LTcuMSw3LjQtMTMuMyw3LjRDMTg3LjYsMTM0LjEsMTkxLjQsMTIyLjgsMTkxLjQsMzMuNnoiLz4NCjxwYXRoIGQ9Ik0yMzMuNywxMzIuN1Y3NC4zaC05LjJWNjAuNWgyNi4zdjcyLjJIMjMzLjd6IE0yNDIuNCwzMi42YzEyLjksMCwxMi45LDE5LjUsMCwxOS41UzIyOS41LDMyLjYsMjQyLjQsMzIuNnoiLz4NCjxwYXRoIGQ9Ik0zMTYuOCwxMzIuN2MwLTQzLjYsMS4xLTQ5LjYtMy41LTU1LjJjLTUuOC02LjktMjAtNS0yNi4xLDN2NTIuMmgtMTYuOFY2MC41aDEyLjFsMy4xLDYuN2M5LjEtMTAuOCwzMC40LTEwLjksNDAuNi0wLjQNCgljOS43LDEwLDcuNCwyMC41LDcuNCw2NS44TDMxNi44LDEzMi43eiIvPg0KPHBhdGggZD0iTTM0Ny4yLDk2LjRjMC00OS4yLDY5LjQtNTEuMSw2OS40LDBDNDE2LjUsMTQ3LjEsMzQ3LjIsMTQ3LjIsMzQ3LjIsOTYuNHogTTM2NC43LDk2LjRjMCwyOC44LDIyLjIsMjcuNywyOS43LDE3LjcNCgljNy05LjQsOC44LTQxLjItMTIuNS00MS4yQzM2OS42LDcyLjksMzY0LjcsODQuMiwzNjQuNyw5Ni40eiIvPg0KPHBhdGggZD0iTTQ3Ni40LDEzMi43YzAtNy40LDEuOC0zLjQtNy4xLTAuNGMtMTAuMiwzLjUtMjUuMSwyLTM0LjEtNy45Yy0xMS4xLTEyLjMtMTIuNi0zOS41LDEuMy01NC42YzExLjQtMTIuMywyOC41LTEzLjEsMzkuOS03LjQNCglWMzMuNWwxNi45LTR2MTAzLjFMNDc2LjQsMTMyLjd6IE00NzYuNCw3Ny44Yy04LjktNy4xLTIwLjktNC44LTI2LjgsMS45Yy04LjEsOS4xLTExLjIsNDAuMiwxNi4yLDQwLjJjMi45LDAsOS0yLjIsMTAuNi00LjQNCglMNDc2LjQsNzcuOHoiLz4NCjxwYXRoIGQ9Ik01NzQuNiwxMDEuOEg1MjNjMS4yLDIyLjMsMjksMjEuNCwzOC4xLDEyLjJsNi41LDEyLjljLTE0LDExLjMtNjIuMywxNS02Mi4zLTI5LjVDNTA1LjQsNDMuMyw1ODYuNiw0OC40LDU3NC42LDEwMS44eg0KCSBNNTIzLjYsODkuMWgzNS41Yy0xLjItMTAuNi03LTE1LjgtMTcuNS0xNS44QzUzMS45LDczLjMsNTI2LDc4LjUsNTIzLjYsODkuMXoiLz4NCjwvc3ZnPg0K"},5187:function(t,e,i){e.A=i.p+"static/streamyard-6a9bedd653e39de5ea2760071fec15db.svg"}}]);
//# sourceMappingURL=component---src-pages-index-js-16a8664f2d29dcd56810.js.map