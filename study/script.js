let card = document.getElementById("card");

let btn = document.getElementById("btn");
let input = document.getElementById("input");

fetch(
  "https://raw.githubusercontent.com/um9998/um9998.github.io/main/data.json"
)
  .then((res) => res.json())
  .then(function (data) {
    let arrs = data;
    arrs.map(function (arr, i) {
      let cardcontent = document.createElement("div");
      let name = document.createElement("h4");
      let address1 = document.createElement("p");
      let address2 = document.createElement("span");
      let call = document.createElement("p");

      name.innerHTML = `${arrs[i].name}`;
      call.innerHTML = `${arrs[i].call}`;
      address1.innerHTML = `${arrs[i].address1}`;
      address2.innerHTML = `(${arrs[i].address2})`;

      cardcontent.appendChild(name);
      cardcontent.appendChild(call);
      cardcontent.appendChild(address1);
      cardcontent.appendChild(address2);
      card.appendChild(cardcontent);
    });
    //console.log(data);
  })

  .catch(function (error) {
    console.log("실패함");
  });
function BtnClick() {
  input.value;
  console.log("clicked");
  console.log(input.value);
}

function inputEnter(event) {
  input.value;
  console.log();
  if (window.event.keyCode == 13) {
    console.log("success" + input.value);
  }
}
input.addEventListener("keydown", inputEnter);
btn.addEventListener("click", BtnClick);
// let template = `<ul>
//   <li><a href="#">name</a></li>
//   <li><a href="#">address1</a></li>
//   <li><a href="#">address2</a></li>
//   <li><a href="#">call</a></li>
//   </ul>
//   `;
// card.insertAdjacentHTML("beforeend", template);
//console.log(card);
