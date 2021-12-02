console.log("connected");

let sectionContainer = document.getElementById("movie-container");
let list = document.createElement("ul");
sectionContainer.append(list);

axios
  .get("http://localhost:4040/api/movies")
  .then((res) => {
    res.data.map((e) => {
      let listItem = document.createElement("li");
      listItem.textContent = e.title;
      list.appendChild(listItem);
    });
  })
  .catch((err) => console.log(err));

let postMoviebtn = document.getElementById("add-movie");
let movieInput = document.getElementById("movie-input");
let movieSubmitbtn = document.getElementById("submit-button");

const showInput = () => {
  movieInput.style.display = "block";
  movieSubmitbtn.style.display = "block";
  
};

const submitMovie = () => {
    let title = movieInput.value;
    axios
    .post("http://localhost:4040/api/movies", { title })
    .then((res) => {
      res.data.map((e) => {
        let listItem = document.createElement("li");
        listItem.textContent = e.title;
        list.appendChild(listItem);
      });
    })
    .catch((err) => console.log(err));
}

postMoviebtn.addEventListener("click", showInput);
movieSubmitbtn.addEventListener("click", submitMovie);
