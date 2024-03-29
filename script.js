
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
    <a href="${firstItem.url}">
    <div class="relative rounded-md hover-img h-96 overflow-hidden border hover:scale-y-110 transition duration-500 cursor-pointer">
    <img class="max-w-full w-full mx-auto h-full object-cover " src="${firstItem.image_url}" alt="${firstItem.image_url}">
  <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full h-full">
    <div class="absolute bottom-5 left-5"> <!-- Position the div at the bottom-left -->
        <h2 class="text-3xl font-bold capitalize mb-3 text-white">${firstItem.title}</h2>

      <p class="text-white">${firstItem.summary}</p>
      <div class="pt-2">
      <div class="">
        <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>${firstItem.news_site}
      </div>
    </div>
    </div>
  </div>
</div>
</a>
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
        <a href="${item.url}" target="_blank">
        <div class="relative h-48 w-full  hover:scale-90 transition duration-500 cursor-pointer object-cover">
        <img src="${item.image_url}" alt="${item.title}" class="absolute rounded-md h-full w-full object-cover ">
        <div class="absolute bottom-0 left-0 p-2 rounded-md">
          <div class="text-white">
            <h2 class="text-sm font-bold">${item.title}</h2>
            <div class="pt-2">
                        <div class=""><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>${item.news_site}</div>
                      </div>
          </div>
        </div>
      </div>
      </a>
        `;
        cardHTML += cardTemplate;
    });

    cardCLass.innerHTML = cardHTML;
}

renderData();
