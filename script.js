const element = (id) => {
    return document.getElementById(id);
}

let allSearchData = "";

const getResults = () => {
    const search = element("search-input").value;
    allSearchData = "";
    hideSearchResults();
    clearSearchResults();
    clearSearchData();

    if (search.length > 1) {
        for (let x of names) {
            if (x.toLowerCase().includes(search.toLowerCase())) {
                element("search-results").innerHTML += `<div class='search-item' onclick='displayData("${x}")'><p>${x}</p></div>`;
            }

            if (x.toLowerCase().includes(search.toLowerCase())) {
                allSearchData += `<p>${x}</p>`;
            }
        }

        displaySearchResults();
    }

    displaySearchData();
}

const displaySearchResults = () => {
   
