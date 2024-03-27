// const apiUrl = "https://api.spaceflightnewsapi.net/v4/articles/?format=json"
// let elementToSetTheResponse = document.getElementById("blogResponseFromApi")

// async function getResponseFromApi(){
//     const responseFromApi = await fetch(apiUrl)
//     let jsonDataFromTheApi = await responseFromApi.json()
//     resultsFromTheApi  = jsonDataFromTheApi.results
//     for(let i = 0; i < resultsFromTheApi.length; i++){
//         console.log(resultsFromTheApi[i]);
//         elementToSetTheResponse.innerHTML = resultsFromTheApi[i].id
//     }
   
// }

async function fetchData() {
    try {
        const responseFromApi = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json');
        const jsonDataFromTheApi = await responseFromApi.json();
        resultsFromTheApi  = jsonDataFromTheApi.results
        return resultsFromTheApi;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function renderData() {
    const cardCLass = document.querySelector('.cardCLass');
    const resultsFromTheApi = await fetchData();

    if (!resultsFromTheApi) {
        return;
    }

    resultsFromTheApi.forEach(item => {
        // card 
        const card = document.createElement('div');
        card.classList.add("grid","gap-4","my-auto")
        // card title
        const title = document.createElement('h2');
        title.textContent = item.title
        // card image
        const image = document.createElement('img')
        image.src = item.image_url
        image.classList.add("h-auto","max-w-full","rounded-lg")
        // anchor tag
        const anchor = document.createElement('a');
        anchor.href = item.url

        // append child

        anchor.appendChild(image)
        anchor.appendChild(title)
        card.appendChild(anchor)
        cardCLass.appendChild(card)
    });
}
renderData();
