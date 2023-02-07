const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postContainer = document.querySelector("#posts-container");

//Get all posts
async function getAllPosts() {
  const response = await fetch(url);
  console.log(response);

  const data = await response.json();
  console.log(data);

  loadingElement.classList.add("hide");

  //map no 'const data' para que cada post da API seja criado um html com as seguintes tags
  data.map((post) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    //aqui estou associando os elemetendo aos dados recebidos pela API texto que eu quero = texto na api
    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Ler";
    link.setAttribute("href", `/post.html?id=${post.id}`);

    //aqui estou acrescentando os conteúdos a uma div
    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);

    postContainer(div);
  });
}

getAllPosts();
