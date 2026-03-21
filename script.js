document.getElementById("loadData").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      `;
    })
    .catch(error => {
      document.getElementById("output").innerHTML = "Error loading data!";
      console.error(error);
    });
});
