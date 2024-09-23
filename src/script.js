const items = [];
let all_meals =[];
let random_meals = [];
const btn = document.getElementById("search_btn");
const txt = document.getElementById("change_txt");

const img_srch = document.getElementById("search_img");
const input_sr = document.getElementById("search_input");
const srch_btn = document.getElementById("search_btn");
const lock = document.getElementById("lock_txt");
const srch_form = document.getElementById("form");

const main = document.getElementById("bot_main_menu");
const nav = document.getElementById('nav');
const srch_itm = document.getElementById("search_item");
const returnizer = document.getElementById("return");
const recipe_container = document.getElementById("recipe_container");

// varaiables for recipe parts 
const rcp_img = document.getElementById('recipe_img');
const rcp_img_src = document.getElementById('recipe_img_src');
const rcp_name_cnt = document.getElementById('recipe_name_container');
const rcp_name = document.getElementById('recipe_name');
const rcp_ing_cnt = document.getElementById('recipe_ingredients_container');
const inst_cnt = document.getElementById('instruction_container');
const inst = document.getElementById('instruction');
// end of it
let allRows = 0;
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


function return_menu() {
  
  returnizer.addEventListener("click", function () {
    all_meals=[];
    random_meals=[];
    recipe_container.classList.add("hide");
    recipe_container.classList.remove("show");
    main.classList.add('show');
    main.classList.remove('hide');
    nav.classList.add('show');
    nav.classList.remove('hide');
    delete_ercipe_menu(allRows);
    start();
  });
}

function menu(key) {
  for (let index = 0; index < 6; index++) {
    items[index].classList.remove("activate");
  }
  if (allRows != 0) {
    delete_ercipe_menu(allRows);
  }

  switch (key) {
    case 1:
      allRows = 0;
      items[0].classList.add("activate");
      img_srch.classList.remove("hide");
      main.classList.add("show");
      main.classList.remove("hide");
      srch_itm.classList.remove("show");
      srch_itm.classList.add("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "اسم غذای مورد نظر !";

      break;
    case 2:
      allRows = 0;
      items[1].classList.add("activate");
      img_srch.classList.remove("hide");
      main.classList.add("show");
      main.classList.remove("hide");
      srch_itm.classList.remove("show");
      srch_itm.classList.add("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "حرف اول انگلیسی دستور پخت !";

      break;
    case 3:
      allRows = 0;
      items[2].classList.add("activate");
      img_srch.classList.remove("show");
      main.classList.add("show");
      main.classList.remove("hide");
      srch_itm.classList.remove("show");
      srch_itm.classList.add("hide");
      img_srch.classList.add("hide");
      input_sr.classList.remove("show");
      input_sr.classList.add("hide");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "یه غذای رندوم با جستجو!";

      break;
    case 4:
      allRows = 0;
      items[3].classList.add("activate");
      img_srch.classList.remove("hide");
      main.classList.add("show");
      main.classList.remove("hide");
      srch_itm.classList.remove("show");
      srch_itm.classList.add("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "یک ماده اصلی به انگلیسی !";

      break;
    case 5:
      allRows = 0;
      items[4].classList.add("activate");
      img_srch.classList.remove("hide");
      main.classList.add("show");
      main.classList.remove("hide");
      srch_itm.classList.remove("show");
      srch_itm.classList.add("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "کشور مورد علاقت !";

      break;
    case 6:
      allRows = 0;
      items[5].classList.add("activate");
      img_srch.classList.remove("hide");
      img_srch.classList.add("show");
      input_sr.classList.remove("hide");
      main.classList.add("show");
      main.classList.remove("hide");
      srch_itm.classList.remove("show");
      srch_itm.classList.add("hide");
      input_sr.classList.add("show");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "دسته های غذایی مختلف !";

      break;
    default:
      alert("no choice");
      break;
  }
}


function recipe_srch() {
  let code;
  let food_name = "";

  srch_form.addEventListener("submit", function (event) {
    event.preventDefault();

    for (let index = 0; index < items.length; index++) {
      if (items[index].classList.contains("activate")) {
        code = items[index].id;
        code = code.slice(2, 3);
        console.log(code);
        food_name = "";
        break;
      }
    }
   
    food_name = input_sr.value;

    if (food_name === "" & code !=3) {
      alert("پر کن");
    } else if (code === 2 && food_name.length > 1) {
      alert("کم ترش کن");
    } else {
      fetch_data(code, food_name);
    }
  });
}

function fetch_data(code, food) {
  all_meals =[];
  const url = "https://www.themealdb.com/api/json/v1/1/";
  let info = "";
  console.log(food);
  console.log(code);
  if (code == 1) {
    info = `${url}search.php?s=${food}`;
    console.log(info);
  } else if (code == 2) {
    info = `${url}search.php?f=${food}`;
    console.log(info);
  } else if (code == 3) {
    info = `${url}random.php?${food}`;
    console.log(info);
  } else if (code == 4) {
    info = `${url}filter.php?i=${food}`;
    console.log(info);
  } else if (code == 5) {
    info = `${url}filter.php?a=${food}`;
    console.log(info);
  } else if (code == 6) {
    info = `${url}filter.php?c=${food}`;
    console.log(info);
  }
  fetch(info)
    .then((response) => response.json())
    .then((data) => work_data(data));
}

function work_data(data) {
  for( let index = 0 ; index <=data.meals.length ; index++){
    all_meals[index] = data.meals[index]; 
  }
  console.log(data.meals);
  if (data.meals == null) {
    alert("غذای مورد نظر پیدا نشد!!");
  } else {
    main.classList.add("hide");
    main.classList.remove("show");
    srch_itm.classList.add("show");
    srch_itm.classList.remove("hide");

    if (data.meals.length == 1) {
      console.log("recipe page ...");
    } else {
      let foodNumber = data.meals.length;
      let foodRows = foodNumber / 5;
      generator(foodNumber, foodRows, data);
    }
  }
}

function generator(number, rows, data) {
  let counter = 0;
  let cardsInThisRow = Math.min(5, number - counter);

  for (let index = 0; index < rows; index++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "creative_row_1";
    rowDiv.id = `row${index}`;
    srch_itm.appendChild(rowDiv);

    for (let jindex = 0; jindex < cardsInThisRow; jindex++) {
      if (counter >= number) break;
      let card = document.createElement("div");
      card.className = "card";
      card.id = `recipe_${counter}`;

      let cardTxt = document.createElement("h2");
      cardTxt.className = `card_txt`;
      cardTxt.id=`meal_item_${counter}`;
      cardTxt.innerText = data.meals[counter].strMeal;

      let cardImg = document.createElement("img");
      cardImg.className = "card_img";
      cardImg.src = data.meals[counter].strMealThumb;

      card.appendChild(cardTxt);
      card.appendChild(cardImg);

      rowDiv.appendChild(card);
      cardTxt.addEventListener('click' , function (){
        click_handle(cardTxt.id , 1);
      })
      counter++;
    }
    allRows++;
  }
}

// need work
function delete_ercipe_menu(number) {
  console.log(number);
  for (let index = 0; index < number; index++) {
    document.getElementById(`row${index+1}`).remove();
  }
}

async function random_items() {
 
  let random_url = "https://www.themealdb.com/api/json/v1/1/random.php";

  for (let index = 0; index < 4; index++) {
    try {
      let fetched_data = await fetch(random_url);
      let response = await fetched_data.json();

      random_meals[index] = response.meals[0];
      if (response.meals[0].strMeal.length > 30) {
        document.getElementById(`random_itm_txt_${index + 1}`).innerHTML =
          response.meals[0].strMeal.slice(0, 20) + "...";
        
        
      } else { 
        document.getElementById(`random_itm_txt_${index + 1}`).innerHTML =
          response.meals[0].strMeal;
        
      }
      document.getElementById(`random_itm_img_${index + 1}`).src =
          response.meals[0].strMealThumb;
      document.getElementById(`random_itm_txt_${index + 1}`).className=`meal_item_${index+1}`;
      document.getElementById(`random_itm_txt_${index + 1}`).addEventListener('click', function() {
        click_handle((index + 1) , 0);  
      });
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

function click_handle(id , opener) {
  
  let key ;

 
  if(opener == 0){
    key = id-1;
    data = random_meals[key];
   
  }else if(opener == 1){
    key = String(id.slice(10,11));
    key = parseInt(key);
    data = all_meals[key];
  }
  main.classList.add('hide');
  main.classList.remove('show');
  srch_itm.classList.add('hide');
  srch_itm.classList.remove('show');
  nav.classList.add('hide');
  nav.classList.remove('show');
  recipe_container.classList.add('show');
  recipe_container.classList.remove('hide');

  console.log(data);
  recipe_generator(data);

}




let ingredients = [];
let measures = [];
function recipe_generator(data){
  var check;
  for(let index = 0; index < 20 ; index++ ){
    console.log(data[`strIngredient${index}`]);
    
    ingredients[index] = data[`strIngredient${index+1}`];
    measures[index] = data[`strMeasure${index+1}`];
    if(data[`strIngredient${index}`] == "" || data[`strIngredient${index}`] ==''){
      check = index;
      break;
    }
  }

  console.log(check);

  rcp_img.classList.add('show');
  rcp_img.classList.remove('hide');
  rcp_img_src.src=data.strMealThumb;
  rcp_name_cnt.classList.add('show');
  rcp_name_cnt.classList.remove('hide');
  rcp_name.innerText="";
  rcp_name.innerText=data.strMeal;
  rcp_ing_cnt.classList.add('show');
  rcp_ing_cnt.classList.remove('hide');
  for(let index = 0 ; index<check-1 ; index++ ){
    let ing = document.createElement('div');
    ing.classList.add('ingred_cont');
    ing.innerText=`${ingredients[index]} == ${measures[index]}}`;
    rcp_ing_cnt.appendChild(ing);
  }


  inst_cnt.classList.add('show');
  inst_cnt.classList.remove('hide');
  inst.innerText= data.strInstructions;
  console.log(ingredients , measures);
}


start();
recipe_srch();
return_menu();