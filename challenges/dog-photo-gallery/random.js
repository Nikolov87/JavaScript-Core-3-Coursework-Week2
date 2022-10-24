const button = document.getElementById("btn");
const list = document.getElementById("listOfImages");

button.addEventListener("click", function () {
  //Retrieve the JSON
  fetch("https://dog.ceo/api/breeds/image/random")
    // Get the response and extract the JSON
    .then(function (response) {
      return response.json();
    })
    // Do something with the JSON
    .then((data) => {
      console.log(data);
      let img = document.createElement("img");
      img.src = data.message;
      let li = document.createElement("li");
      li.appendChild(img);
      list.append(li);
    })
    // If something goes wrong
    .catch((error) => console.log(error));
});
