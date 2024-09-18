let url = "";
const items = [];
const btn = document.getElementById("search_btn");
const txt = document.getElementById("change_txt");

const img_srch = document.getElementById("search_img");
const input_sr = document.getElementById("search_input");
const srch_btn = document.getElementById("search_btn");
const lock = document.getElementById("lock_txt");
const srch_form = document.getElementById("form");

const main = document.getElementById("bot_main_menu");
const srch_itm = document.getElementById("search_item");
const returnizer = document.getElementById("return");
const recipe_container = document.getElementById("recipe_container");
let food_name = "";

for (let index = 1; index < 7; index++) {
  const element = document.getElementById(`li${index}`);
  items[index - 1] = element;
}

function start() {
  random_items();
  items.forEach((item) => {
    if (item) {
      item.classList.remove("activate");
      item.addEventListener("click", function () {
        let id = this.id.slice(2, 3);
        item.classList.remove("activate");
        menu(parseInt(id));
      });
    }
  });
}

start();
function return_menu() {
  returnizer.addEventListener("onclick", function () {
    console.log("hello");
    recipe_container.classList.add("hide");
    recipe_container.classList.remove("show");
    start();
  });
}

return_menu();
function menu(key) {
  for (let index = 0; index < 6; index++) {
    items[index].classList.remove("activate");
  }
  switch (key) {
    case 1:
      food_name = "";
      items[0].classList.add("activate");
      img_srch.classList.remove("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "اسم غذای مورد نظر !";
      recipe_srch(key);

      break;
    case 2:
      food_name = "";
      items[1].classList.add("activate");
      img_srch.classList.remove("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "حرف اول انگلیسی دستور پخت !";
      recipe_srch(key);
      break;
    case 3:
      food_name = "";
      items[2].classList.add("activate");
      img_srch.classList.remove("show");
      img_srch.classList.add("hide");
      input_sr.classList.remove("show");
      input_sr.classList.add("hide");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "یه غذای رندوم با جستجو!";
      recipe_srch(key);
      break;
    case 4:
      food_name = "";
      items[3].classList.add("activate");
      img_srch.classList.remove("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "یک ماده اصلی به انگلیسی !";
      recipe_srch(key);
      break;
    case 5:
      food_name = "";
      items[4].classList.add("activate");
      img_srch.classList.remove("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "کشور مورد علاقت !";
      recipe_srch(key);
      break;
    case 6:
      food_name = "";
      items[5].classList.add("activate");
      img_srch.classList.remove("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "دسته های غذایی مختلف !";
      recipe_srch(key);
      break;
    default:
      alert("no choice");
      break;
  }
}

function recipe_srch(code) {
  srch_form.addEventListener("submit", function () {
    if (code == 3) {
      url = "https://www.themealdb.com/api/json/v1/1/random.php";

      fetch_data(url);
    } else {
      if (code == 1) {
        url = "https://www.themealdb.com/api/json/v1/1/search.php?" + "s=";
        food_name = input_sr.value;
        if (food_name == "") {
          alert("لطفا اسم یک غذا را وارد کنید");
        } else if (food_name.length < 2) {
          alert("لطفا اسم کامل غذا را وارد کنید");
        } else {
          fetch_data(url + food_name);
        }
      } else if (code == 2) {
        url = "https://www.themealdb.com/api/json/v1/1/search.php?" + "f=";
        food_name = input_sr.value;
        if (food_name == "") {
          alert("لطفا اسم یک غذا را وارد کنید");
        } else if (food_name.length > 1) {
          alert("لطفا حرف اول یک غذا رو وارد کنید");
        } else {
          fetch_data(url + food_name);
        }
      } else if (code == 4) {
        url = "https://www.themealdb.com/api/json/v1/1/search.php?" + "i=";
        food_name = input_sr.value;
        if (food_name == "") {
          alert("لطفا اسم یک ماده اصلی غذایی را وارد کنید");
        } else {
          fetch_data(url + food_name);
        }
      } else if (code == 5) {
        url = "https://www.themealdb.com/api/json/v1/1/search.php?" + "a=";
        food_name = input_sr.value;
        if (food_name == "") {
          alert("لطفا اسم یک ملیت رو وارد کنید");
        } else {
          fetch_data(url + food_name);
        }
      } else {
        url = "https://www.themealdb.com/api/json/v1/1/search.php?" + "c=";
        food_name = input_sr.value;
        if (food_name == "") {
          alert("لطفا اسم یک دسته بندی غذایی را وارد کنید");
        } else {
          fetch_data(url + food_name);
        }
      }
    }

    event.preventDefault();
  });
}

function fetch_data(info) {
  fetch(info)
    .then((response) => response.json())
    .then((data) => work_data(data));
}

// fetching data need more works to be done
function work_data(data) {
  if (data.meals == null) {
    alert("غذای مورد نظر پیدا نشد!!");
  } else {
    main.classList.add("hide");
    main.classList.remove("show");
    srch_itm.classList.add("show");
    srch_itm.classList.remove("hide");

    // Number of rows is calculated based on meals length
    if (data.meals.length == 1) {
      generator(1, 1, data); // Single meal case
    } else if (data.meals.length <= 5) {
      generator(data.meals.length, 1, data); // Up to 5 meals in one row
    } else if (data.meals.length > 5 && data.meals.length <= 10) {
      generator(data.meals.length, 2, data); // Up to 10 meals in 2 rows
    } else if (data.meals.length > 10 && data.meals.length <= 15) {
      generator(data.meals.length, 3, data); // Up to 15 meals in 3 rows
    } else if (data.meals.length > 15 && data.meals.length <= 20) {
      generator(data.meals.length, 4, data); // Up to 20 meals in 4 rows
    } else if (data.meals.length > 20 && data.meals.length <= 25) {
      generator(data.meals.length, 5, data); // Up to 25 meals in 5 rows
    }
  }
}

// The generator function dynamically creates rows and cards
function generator(numberOfMeals, numberOfRows, data) {
  let counter = 0;

  // Loop through rows
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    // Create a new div for each row
    let rowDiv = document.createElement("div");
    rowDiv.className = "creative_row_1"; // Assign a class to the row

    srch_itm.appendChild(rowDiv);

    // Calculate the number of cards for this row
    let cardsInThisRow = Math.min(5, numberOfMeals - counter); // Up to 5 cards per row

    // Loop through and add cards to the row
    for (let cardIndex = 0; cardIndex < cardsInThisRow; cardIndex++) {
      if (counter >= numberOfMeals) break;

      // Create the card div
      let card = document.createElement("div");
      card.className = "card";
      card.id = `recipe_${counter}`;

      // Create and append the h2 element (meal title)
      let cardTxt = document.createElement("h2");
      cardTxt.className = "card_txt";
      cardTxt.innerText = data.meals[counter].strMeal;

      // Create and append the img element (meal thumbnail)
      let cardImg = document.createElement("img");
      cardImg.className = "card_img";
      cardImg.src = data.meals[counter].strMealThumb;

      // Append the text and image to the card
      card.appendChild(cardTxt);
      card.appendChild(cardImg);

      // Append the card to the current row
      rowDiv.appendChild(card);

      counter++;
    }
  }
}

async function random_items() {
  const random_meals = [];
  let random_url = "https://www.themealdb.com/api/json/v1/1/random.php";

  for (let index = 0; index < 4; index++) {
    try {
      let fetched_data = await fetch(random_url);
      let response = await fetched_data.json();

      random_meals[index] = response.meals[0];
      if (response.meals[0].strMeal.length > 30) {
        document.getElementById(`random_itm_txt_${index + 1}`).innerHTML =
          response.meals[0].strMeal.slice(0, 30) + "...";
        document.getElementById(`random_itm_img_${index + 1}`).src =
          response.meals[0].strMealThumb;
      } else {
        document.getElementById(`random_itm_txt_${index + 1}`).innerHTML =
          response.meals[0].strMeal;
        document.getElementById(`random_itm_img_${index + 1}`).src =
          response.meals[0].strMealThumb;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
