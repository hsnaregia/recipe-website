const url = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";


function fetch_data(url) {
    fetch(url)
    .then((response) => response.json())
    .then((error) => console.error("error"));
}

fetch_data(url);