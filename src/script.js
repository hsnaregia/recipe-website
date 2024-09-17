let url = "";
const items = [];
const btn = document.getElementById("search_btn");
const txt = document.getElementById("change_txt");

const img_srch = document.getElementById("search_img");
const input_sr = document.getElementById("search_input");
const srch_btn = document.getElementById("search_btn");
const lock = document.getElementById("lock_txt");
const srch_form = document.getElementById("form");

let food_name="";





for (let index = 1; index < 7; index++) {
  const element = document.getElementById(`li${index}`);
  items[index - 1] = element;
}

function start() {
  console.log(items);
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

function menu(key) {
  for (let index = 0; index < 6; index++) {
    items[index].classList.remove("activate");
  }
  switch (key) {
    case 1:
      food_name="";
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
      food_name="";
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
      food_name="";
      items[2].classList.add("activate");
      srch_btn.classList.remove("hide");
      srch_btn.classList.add("show");
      lock.classList.remove("show");
      lock.classList.add("hide");
      txt.innerText = "یه غذای رندوم با جستجو!";
      recipe_srch(key);
      break;
    case 4:
      food_name="";
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
      food_name="";  
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
      food_name="";
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
      alert("no choice done");
      break;
  }
}

function recipe_srch(code) {
  srch_form.addEventListener('submit',function() {
    
     if(code==3)
     { url = "https://www.themealdb.com/api/json/v1/1/random.php";
    
      fetch_data(url);
     }
     else
     {
      if(code==1){
        url="https://www.themealdb.com/api/json/v1/1/search.php?"+"s=";
        food_name = input_sr.value;
        if(food_name == ""){
          alert("لطفا اسم یک غذا را وارد کنید");
        }
        else if(food_name.length < 2){
          alert("لطفا اسم کامل غذا را وارد کنید");
        }
        else{
          
          fetch_data(url + food_name);
        }
      }
      else if(code == 2){
        url="https://www.themealdb.com/api/json/v1/1/search.php?"+"f=";
        food_name = input_sr.value;
        if (food_name =="") {
          alert("لطفا اسم یک غذا را وارد کنید");
        } else if(food_name.length>1){
          alert("لطفا حرف اول یک غذا رو وارد کنید");
        }
        else {

          fetch_data(url+food_name);
        }
      }else if(code == 4){
        url="https://www.themealdb.com/api/json/v1/1/search.php?"+"i=";
        food_name = input_sr.value;
        if(food_name == ""){
          alert("لطفا اسم یک ماده اصلی غذایی را وارد کنید");
        }
        else{
        
        fetch_data(url + food_name);
        }
        
      }else if(code == 5){
        url="https://www.themealdb.com/api/json/v1/1/search.php?"+"a=";
        food_name = input_sr.value;
        if(food_name == ""){
          alert("لطفا اسم یک ملیت رو وارد کنید");
        }
        else{
        
        fetch_data(url + food_name);
        }
        
      }else{
        url="https://www.themealdb.com/api/json/v1/1/search.php?"+"c=";
        food_name = input_sr.value;
        if(food_name == ""){
          alert("لطفا اسم یک دسته بندی غذایی را وارد کنید");
        }
        else{
        
        fetch_data(url + food_name);
        }
       
      }

      
     
     
     }
    
    event.preventDefault();
  })
}      

function fetch_data(info) {
  fetch(info)
    .then((response) => response.json())
    .then((data) => work_data(data));
}


// fetching data need more works to be done

function work_data(data){
  if(data.meals == null){
    alert("غذای مورد نظر پیدا نشد!!");
  }
  else{
  console.log(data.meals);
  }
}

//  fetching data needs more work to be done






async function random_items(){
  const random_meals=[];
  let random_url ="https://www.themealdb.com/api/json/v1/1/random.php";
  
  for(let index = 0 ; index < 4 ; index++){
    try {
      let fetched_data = await fetch(random_url);
      let response = await fetched_data.json();
      
      random_meals[index] = response.meals[0];
      if(response.meals[0].strMeal.length >30){
        
      document.getElementById(`random_itm_txt_${index+1}`).innerHTML = (response.meals[0].strMeal.slice(0,30) + "...");
      document.getElementById(`random_itm_img_${index+1}`).src = response.meals[0].strMealThumb;

      }else{
        document.getElementById(`random_itm_txt_${index+1}`).innerHTML = response.meals[0].strMeal;
        document.getElementById(`random_itm_img_${index+1}`).src = response.meals[0].strMealThumb;
      }

    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  }
}
