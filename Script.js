let url = "https://api.openai.com/v1/images/generations";
let apiKey = "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";
const button = document.getElementById("btn");
// let imgGen = document.getElementById("imgGen");

generateImg("brock lesnar");

function generateImg(text) {
  let resp = callAPI(text);
  resp.then((respo) => {
    console.log(respo[0].url);
    console.log(respo[1].url);
  });
}
//     let b = "";
//     for (let i = 0; i < respo.length; i++) {
//         b += "<div class='container2_2' > <img class='imgCont' src = '" + respo[i].url + "'> </div>"
//     }
//     imgGen.innerHTML = b;
//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

async function callAPI(text) {
  let ask = {
    prompt: text,
    n: 2,
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
