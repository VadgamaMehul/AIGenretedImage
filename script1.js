let url = "https://api.openai.com/v1/images/generations";
let apiKey = "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";
const button = document.getElementById("btn");
let text = document.getElementById("inp");

button.addEventListener("click", generateImg);
button.addEventListener("click", displayNone);


function displayNone(){
    var x=document.querySelector(".parant");
    x.style.display = "";
}

// console.log(button);
// console.log(text);
// const button = document.getElementById("btn");
let imgGen = document.getElementById("imgGen");

// generateImg("brock lesnar");

function callLoder(){

}

function generateImg() {
  let resp = callAPI(text.value);
  resp.then((respo) => {
    let b = "";
    for (let i = 0; i < respo.length; i++) {
      b +=
        "<div class='container2_2' > <img class='imgCont' src = '" +
        respo[i].url +
        "'> </div>";
    }
    imgGen.innerHTML = b;
    var x=document.querySelector(".parant");
    x.style.display = "none";
  });
}
//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

async function callAPI(text) {
  let ask = {
    prompt: text,
    n: 4,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify(ask),
  });

  const result = await res.json();
  return result.data;
}
