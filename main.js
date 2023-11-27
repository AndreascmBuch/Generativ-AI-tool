const button = document.querySelector('button');
const input = document.querySelector('input');
const output = document.querySelector('.outputText');
button.addEventListener("click", () => {
    getGeneratedText(`Generate a summary of the playing style for a football team based on ${input.value}. Consider the team's strengths, weaknesses, and tactical preferences. ${input.value}.`)
        .then(generatedText => {
            console.log(generatedText)
            output.textContent = generatedText;
        });
});

// Gif generator
document.querySelector('button').addEventListener("click", function searchForGif() {
    const userInput = document.querySelector('input').value;
    console.log(userInput)
    const apiKey = 'tR9Ocg24A0uDpMbFNjkcAiyOzcOBT5Nq';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${userInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(gifData => {
            console.log(gifData);

            const canvas = document.querySelector('.gif-picture');

            if (gifData.data.length > 0) {
                // Get the URL of the first GIF
                const gifUrl = gifData.data[0].images.fixed_height.url;

                // Create an img element and set its src attribute
                const img = document.createElement("img");
                img.src = gifUrl;
                img.alt = "GIF Image";

                canvas.appendChild(img);
            } else {
                console.log("No GIFs found.");
            }
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });

})