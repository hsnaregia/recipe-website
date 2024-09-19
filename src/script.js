
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
// function return_menu() {
  //   returnizer.addEventListener("onclick", function () {
    //     console.log("hello");
    //     recipe_container.classList.add("hide");
    //     recipe_container.classList.remove("show");
    //     start();
    //   });
    // }
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // return_menu();
function menu(key) {
      for (let index = 0; index < 6; index++) {
        items[index].classList.remove("activate");
      }
      if(allRows != 0){
        delete_ercipe_menu(allRows);
      }
      
      switch (key) {
        case 1:
          allRows=0;
          items[0].classList.add("activate");
          img_srch.classList.remove("hide");
          main.classList.add('show');
          main.classList.remove('hide');
          srch_itm.classList.remove('show');
          srch_itm.classList.add('hide');
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
            
            allRows=0;
            items[1].classList.add("activate");
            img_srch.classList.remove("hide");
            main.classList.add('show');
            main.classList.remove('hide');
            srch_itm.classList.remove('show');
            srch_itm.classList.add('hide');
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
        
        allRows=0;
        items[2].classList.add("activate");
        img_srch.classList.remove("show");
        main.classList.add('show');
        main.classList.remove('hide');
        srch_itm.classList.remove('show');
        srch_itm.classList.add('hide');
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
          
          allRows=0;
          items[3].classList.add("activate");
          img_srch.classList.remove("hide");
          main.classList.add('show');
          main.classList.remove('hide');
          srch_itm.classList.remove('show');
          srch_itm.classList.add('hide');
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
        
        allRows=0;
        items[4].classList.add("activate");
        img_srch.classList.remove("hide");
        main.classList.add('show');
        main.classList.remove('hide');
        srch_itm.classList.remove('show');
        srch_itm.classList.add('hide');
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
        allRows=0;
        items[5].classList.add("activate");
        img_srch.classList.remove("hide");
        img_srch.classList.add("show");
        input_sr.classList.remove("hide");
        main.classList.add('show');
        main.classList.remove('hide');
        srch_itm.classList.remove('show');
        srch_itm.classList.add('hide');
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
 // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





 function recipe_srch() {
  let code;
  let food_name = "";

  srch_form.addEventListener('submit', function(event) { 
    event.preventDefault();

   
    for (let index = 0; index < items.length; index++) {
      console.log(items[index].classList.contains('activate'));

      if (items[index].classList.contains('activate')) {
        console.log("hi");
        code = items[index].id;
        code = code.slice(2,3);
        console.log(code);
        food_name = "";  
        break;
      }
    }
    console.log(items.id);
    food_name = input_sr.value;

    if (food_name === "") {
      alert('پر کن'); 
    } else if (code === 2 && food_name.length > 1) {
      alert("کم ترش کن"); 
    } else {
      fetch_data(code, food_name); 
    }
  });
}






function fetch_data(code , food) {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  let info = "";
  console.log(food);
  console.log(code);
  if(code === 1){
    info = `${url}?s=${food}`;
    console.log(info);
  }else if(code === 2){
    info = `${url}?f=${food}`;
    console.log(info);
  }else if(code === 3){
    info = `${url}?${food}`;
    console.log(info);
  }else if(code === 4){
    info = `${url}?i=${food}`;
    console.log(info);
  }else if(code === 5){
    info = `${url}?a=${food}`;
    console.log(info);
  }else{
    info = `${url}?c=${food}`;
    console.log(info);
  }
  fetch(info)
  .then((response) => response.json())
  .then((data) => work_data(data));
}

function work_data(data) {
  console.log(data.meals)
  if (data.meals == null) {
    alert("غذای مورد نظر پیدا نشد!!");
  } else {
    main.classList.add("hide");
    main.classList.remove("show");
    srch_itm.classList.add("show");
    srch_itm.classList.remove("hide");
    
    
    if (data.meals.length == 1) {
      
      console.log('recipe page ...')
    } 
    else {
      let foodNumber = data.meals.length;
      let foodRows = foodNumber/5;
      generator(foodNumber , foodRows ,data);
    }
  } 
}



function generator(number , rows , data){
  let counter = 0;
  let cardsInThisRow = Math.min(5, number - counter); 
  
  for(let index = 0 ; index < rows ; index++){
    let rowDiv = document.createElement("div");
    rowDiv.className = "creative_row_1"; 
    rowDiv.id=`row${index}`;
    srch_itm.appendChild(rowDiv);
    
    for(let jindex = 0 ; jindex < cardsInThisRow ; jindex++){
      if(counter >=number)
        break;
      let card = document.createElement("div");
      card.className = "card";
      card.id = `recipe_${counter}`;
      
      let cardTxt = document.createElement("h2");
      cardTxt.className = "card_txt";
      cardTxt.innerText = data.meals[counter].strMeal;
      
      let cardImg = document.createElement("img");
      cardImg.className = "card_img";
      cardImg.src = data.meals[counter].strMealThumb;
      
      card.appendChild(cardTxt);
      card.appendChild(cardImg);
      
      rowDiv.appendChild(card);
      
      counter++;
    }
    allRows++;
  }
}


// need work
function delete_ercipe_menu(number){
  for(let index = 0 ; index < number ; index++){
    document.getElementById(`row${index}`).remove();
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


start();
recipe_srch();