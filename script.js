const data = [
  {
    id: 1,
    title: "점심메뉴추천기",
    text: "직장 근무를 할 때, 매번 점심 메뉴를 뭘 먹어야 할지 <br>고민했던 순간이 생각나서 만들어본 프로젝트입니다.<br>pick 버튼을 누르면배열에서 랜덤으로 메뉴를 찾아올 수 있습니다. <br>막상 결과가 맘에안들 수도 있지만, 애초에 결과를 보기 위해선<br> 사전 동의를 필요로 합니다. <br>동의하지 않은 경우, pick 버튼은 활성화 되지않습니다.",
    skill: "react, json",
    src: "./pick/index.html",
    imgsrc: "img/img1.png",
  },
  {
    id: 2,
    title: "Chat With Matthew",
    text: "요즘 대세인 OPEN AI API를 활용하여 만든 프로젝트입니다. <br>api를사용하는 방법에 대하여 공부하였고, <br>리액트 훅 사용에 대해 이해하는데 도움이 되었습니다. <br>배포 과정에서의 경로 오류 해결과 <br>깃허브에 리액트 페이지 호스팅 하는 방법을 공부했습니다. <br>하지만 어째서인지 openai의 API키 인증 문제로 <br>깃허브 서버에 올리면 돌아가지 않는군요...?<br>혹시 이 포폴을 보시는 분들 중 해결 법을 아신다면 알려주시길 바랍니다. ",
    skill: "openai, react, figma",
    src: "./build/index.html",
    imgsrc: "img/img2.png",
  },
  {
    id: 3,
    title: "Class Animation",
    text: "학원에서 배우지 않은 자바스크립트의 class 문법을 배우고 싶어서<br> 만들어본 프로젝트입니다.<br> 마우스 좌표에 따라가는 애니메이션을 구성하기 위해 <br>다양한 변수를 입력하고 가져와 사용하는 방법을 이해하는데 <br>도움을 받았습니다. ",
    skill: "js",
    src: "./classExp/index.html",
    imgsrc: "img/img3.png",
  },
  {
    id: 4,
    title: "AJAX",
    text: " 학원에서 배우지 않은 자바스크립트로 서버와 통신하는 방법을 <br>배우고싶어서 만들어본 프로젝트입니다. <br>데이터 바인딩을 하며 서버와 통신에 대하여 고민하게 되었고,<br>웹 퍼블리셔와 프론트엔드 개발자의 차이를 이해하게 되었습니다.<br> 공공데이터를 사용하였으며 깃허브 서버에 json 자료를 올리고,<br> 이를 다시 받아와 화면에 뿌려주는 작업을했습니다.",
    skill: "js, 공공데이터포털, git",
    src: "./study/index.html",
    imgsrc: "img/img4.png",
  },
  {
    id: 5,
    title: "Cookies Loading",
    text: "로딩 페이지에 귀여운 클릭 이벤트를 넣어보고싶어 만들었습니다.<br> 당시 뉴진스의 '쿠키'가 인기를 끌고 있어서<br> 쿠키를 와작와작 먹는 이벤트 후, 본 페이지가 로딩됩니다. <br>디자인과 재미 위주의 페이지를 구성하였습니다. ",
    skill: "html, css, jquery, ps",
    src: "./dmuseum/index.html",
    imgsrc: "img/img6.png",
  },
  {
    id: 6,
    title: "webpage",
    text: " html과 css로 제작한 웹 페이지 입니다.<br> 마우스 커서와 여러 애니메이션, 트렌디한 색 구성으로<br> 디자인 회사의 감각적인 느낌을 살리고자 했습니다.",
    skill: "html, css, jquery, ps, figma",
    src: "./pitapat/index.html",
    imgsrc: "img/img5.png",
  },
];
const content = document.getElementById("con");

const templete = `<div id="child">
<p class="contentTitle">${data[0].title}</p>
<div class="contentWrap">
  <div class="imgwrap">
    <img src="${data[0].imgsrc}" alt="react1" />
  </div>
  <p class="contentText">
  ${data[0].text}
 <br><span> ${data[0].skill}</span>
  </p>
  
</div>
<div class="btn"><a href="${data[0].src}">view</a></div>
</div>`;
content.insertAdjacentHTML("beforeend", templete);
let i = 0;

const arrow = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
arrow.addEventListener("click", function () {
  const child = document.getElementById("child");
  content.removeChild(child);
  i++;
  console.log(i);
  if (i > 5) {
    i = 0;
  }
  const templete = `<div id="child">
<p class="contentTitle">${data[i].title}</p>
<div class="contentWrap">
  <div class="imgwrap">
    <img src="${data[i].imgsrc}" alt="react1" />
  </div>
  <p class="contentText">
  ${data[i].text}  
  <br><span> ${data[i].skill}</span>
  </p>
</div>
<div class="btn"><a href="${data[i].src}">view</a></div>
</div>`;

  content.insertAdjacentHTML("beforeend", templete);
});
arrow2.addEventListener("click", function () {
  const child = document.getElementById("child");
  content.removeChild(child);
  i--;
  console.log(i);
  if (i < 0) {
    i = 5;
  }
  const templete = `<div id="child">
  <p class="contentTitle">${data[i].title}</p>
  <div class="contentWrap">
    <div class="imgwrap">
      <img src="${data[i].imgsrc}" alt="react1" />
    </div>
    <p class="contentText">
    ${data[i].text}
    <br><span> ${data[i].skill}</span>
    </p>
   
  </div>
  <div class="btn"><a href="${data[i].src}">view</a></div>
  </div>`;

  content.insertAdjacentHTML("beforeend", templete);
});
const short1 = document.getElementById("short1");
const short2 = document.getElementById("short2");
const short3 = document.getElementById("short3");
const short4 = document.getElementById("short4");
const short5 = document.getElementById("short5");
const short6 = document.getElementById("short6");

function btnClcik(obj, a) {
  obj.addEventListener("click", function () {
    const child = document.getElementById("child");
    content.removeChild(child);
    const templete = `<div id="child">
    <p class="contentTitle">${data[a].title}</p>
    <div class="contentWrap">
      <div class="imgwrap">
        <img src="${data[a].imgsrc}" alt="react1" />
      </div>
      <p class="contentText">
      ${data[a].text}
      <br><span> ${data[a].skill}</span>
      </p>
    </div>
    <div class="btn"><a href="${data[a].src}">view</a></div>
    </div>`;

    content.insertAdjacentHTML("beforeend", templete);
  });
}
btnClcik(short1, 0);
btnClcik(short2, 1);
btnClcik(short3, 2);
btnClcik(short4, 3);
btnClcik(short5, 4);
btnClcik(short6, 5);
