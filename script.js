
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

    <img src="${firstItem.image_url}" class="h-full w-full object-cover brightness-75" alt="...">
    <div class="absolute inset-0 flex flex-col justify-end">
      <div class="m-4">
        <h2 class="text-white text-3xl font-bold mb-2">${firstItem.title}</h2>
        <p class="text-white text-lg">${firstItem.summary}</p>
        <div class="text-white"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>${firstItem.news_site}</div>
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
    const cardClass = document.querySelector('.cardClass');
    console.log(cardClass)
    const resultsFromTheApi = await fetchData();

    if (!resultsFromTheApi || !Array.isArray(resultsFromTheApi)) {
        return;
    }

    const apiDataResponseStartFrom2ndItem = resultsFromTheApi.slice(1)

    let cardHTML = '';

    apiDataResponseStartFrom2ndItem.forEach(item => {
        const cardTemplate = `
        <div class="relative h-48 border border-slate-900 rounded-lg duration-500 transition-all hover:scale-90">
        <img src="${item.image_url}" class="h-full w-full object-cover brightness-50 " alt="${item.title}">
        <div class="absolute inset-0 flex ">
          <div class="m-4 flex flex-col justify-end">
            <h2 class="text-white text-base font-bold mb-1">${item.title}</h2>
            <div class="text-white"><div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>${item.news_site}</div>
          </div>
        </div>
      </div>
        `;
        cardHTML += cardTemplate;
    });

    cardClass.innerHTML = cardHTML;
}

renderData();
