const quoteBtn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

quoteBtn.addEventListener("click", function () {

    quote.textContent = "Loading...";
    author.textContent = "";

    fetch("quotes.json")

        .then(function(response) {
            return response.json();
        })

        .then(function(data) {

            const randomIndex = Math.floor(
                Math.random() * data.length
            );

            quote.textContent =
                '"' + data[randomIndex].quote + '"';

            author.textContent =
                "— " + data[randomIndex].author;

        })

        .catch(function(error) {

            quote.textContent = "Unable to load quote.";
            author.textContent = "";

            console.log(error);

        });

});