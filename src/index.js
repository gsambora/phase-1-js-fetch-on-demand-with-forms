const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");
      
        fetch(`http://localhost:3000/movies/${input.value}`)
          .then((response) => response.json())
          .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            summary.innerText = data.summary;
          });
      });
};



document.addEventListener('DOMContentLoaded', init);


// for ((movie) in data) {
//     if (data[movie].title === input.value){
//         movieMatchID = data[movie].id;
//         console.log(movieMatchID)
//     } 
// }