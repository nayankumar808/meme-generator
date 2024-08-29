let button = document.querySelector(".button");
let meme_title = document.querySelector(".meme-title");
let memeimage = document.querySelector(".meme_img");
let memeautor = document.getElementById("meme-author");

const url = "https://meme-api.com/gimme";
const options = {};
const genratememe = () => {
  fetch(url, options)
    .then((Response) => Response.json())
    .then((Response) => {
      meme_title.innerHTML = Response.title;
      memeautor.innerHTML = Response.author;
      memeimage.src=Response.url;

      console.log("Success:", Response);
    })
    .catch((err) => console.log(err));
};
button.addEventListener("click",genratememe)
genratememe()