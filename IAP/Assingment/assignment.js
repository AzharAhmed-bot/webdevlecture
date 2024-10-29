document.addEventListener('DOMContentLoaded', () => {

    function newsGET() {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=44eca781d6fb4e2da8fd8e7969b3b375", true);

        xhttp.onload = () => {
            if (xhttp.status === 200) {
                var data = JSON.parse(xhttp.responseText);
                displayNews(data.articles);
            } else {
                console.log("Error");
            }
        }
        xhttp.onerror = () => {
            console.log("Error");
        }
        xhttp.send();
    }

    function displayNews(articles) {
        const newsContainer = document.getElementById('newsContainer');
        
        articles.forEach(article => {
            // Create a div for each article
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            // Create and append article title
            const title = document.createElement('h2');
            title.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
            articleDiv.appendChild(title);

            // Create and append article description
            const description = document.createElement('p');
            description.textContent = article.description;
            articleDiv.appendChild(description);

            // Create and append article image
            if (article.urlToImage) {
                const image = document.createElement('img');
                image.src = article.urlToImage;
                image.alt = article.title;
                articleDiv.appendChild(image);
            }
            const source = document.createElement('p');
            source.textContent = `Source: ${article.source.name}`;
            articleDiv.appendChild(source);
            const publishedAt = document.createElement('p');
            publishedAt.textContent = `Published at: ${new Date(article.publishedAt).toLocaleString()}`;
            articleDiv.appendChild(publishedAt);
            newsContainer.appendChild(articleDiv);
        });
    }

    newsGET();
});