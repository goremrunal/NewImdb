const apiKey = 'f6e31bb998msh2632113105ce6ecp1dc46ejsn81daad8ca8a7';



async function showData() {
    const mainDiv = document.querySelector('.main');
    mainDiv.innerHTML = ''; 

    try {
        const response = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/?rapidapi-key=${apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const moviesData = await response.json();
        moviesData.forEach(movie => {
            const div = document.createElement("div");
            div.className = "container";

            const img = document.createElement("img");
            img.src = movie.image;
            img.alt = movie.title;

            const rating = document.createElement("h2");
            rating.innerText = `Rating: ${movie.rating}`;

            const movieName = document.createElement("h2");
            movieName.innerText = movie.title;

            const description = document.createElement("p");
            description.innerText = movie.description;

            div.appendChild(img);
            div.appendChild(rating);
            div.appendChild(movieName);
            div.appendChild(description);

            mainDiv.appendChild(div);
        });
    } catch (error) {
        console.error(error);
        alert('Failed to fetch data. Please try again later.');
    }
}


document.getElementById('fetchButton').addEventListener('click', showData);
