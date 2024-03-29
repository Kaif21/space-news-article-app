
// first Card Data function 
async function fetchFirstDataFromApi() {
    try {
      const firstDataResponseFromApi = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=1');
      const firstJsonDataFromTheApi = await firstDataResponseFromApi.json();
      firstResultsDataFromTheApi = firstJsonDataFromTheApi.results;
      return firstResultsDataFromTheApi;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  async function renderFirstDataFromApi() {
    const FirstDataCardCLass = document.querySelector('.firstDataCardCLass');
    const firstResultsDataFromTheApi = await fetchFirstDataFromApi();
    if (!firstResultsDataFromTheApi || !Array.isArray(firstResultsDataFromTheApi)) {
      return;
    }
  
    const firstItem = firstResultsDataFromTheApi[0];
    const firstDataCard = `
    <div class="relative hover-img max-h-98 overflow-hidden">
                    <a href="${firstItem.url}">
                      <img class="max-w-full w-full mx-auto h-auto" src="${firstItem.image_url}" alt="${firstItem.image_url}">
                    </a>
                    <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      <a href="#">
                        <h2 class="text-3xl font-bold capitalize  mb-3">${firstItem.title}</h2>
                      </a>
                      <p class=" hidden sm:inline-block text-white">${firstItem.title}</p>
                      <div class="pt-2">
                        <div class=""><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>${firstItem.news_site}</div>
                      </div>
                    </div>
                  </div>
    `;
  
    FirstDataCardCLass.innerHTML = firstDataCard;
  }
  
 renderFirstDataFromApi();



// other card data function
async function fetchData() {
    try {
        const responseFromApi = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=5');
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

    if (!resultsFromTheApi || !Array.isArray(resultsFromTheApi)) {
        return;
    }

    const apiDataResponseStartFrom2ndItem = resultsFromTheApi.slice(1)

    let cardHTML = '';

    apiDataResponseStartFrom2ndItem.forEach(item => {
        const cardTemplate = `
        <article class="flex-shrink max-w-full w-full sm:w-1/2">
        <div class="relative hover-img max-h-48 overflow-hidden">
          <a href="${item.url}">
            <img class="max-w-full w-full mx-auto h-auto" src="${item.image_url}" alt="${item.image_url}">
          </a>
          <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
            <a href="${item.url}">
              <h2 class="text-lg font-bold capitalize leading-tight  mb-1">${item.title}</h2>
            </a>
            <div class="pt-1">
              <div class=""><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>${item.news_site}</div>
            </div>
          </div>
        </div>
      </article>
        `;
        cardHTML += cardTemplate;
    });

    cardCLass.innerHTML = cardHTML;
}

renderData();
