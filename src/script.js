const url = "";
const items = [];
const btn = document.getElementById("search_btn");
const txt= document.getElementById("change_txt");

const img_srch = document.getElementById('search_img')
const input_sr = document.getElementById('search_input');
const srch_btn = document.getElementById('search_btn');
const lock = document.getElementById('lock_txt');



for (let index = 1; index < 7; index++) {
  const element = document.getElementById(`li${index}`);
  items[index - 1] = element;
}

function start() {
  console.log(items);
  items.forEach((item) => {
    if (item) {
      item.classList.remove('activate');
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
  for(let index=0 ; index<6 ; index++){
    items[index].classList.remove("activate");
  }
  switch (key) {
    case 1:
      items[0].classList.add('activate');
      img_srch.classList.remove("hide");
img_srch.classList.add('show');
input_sr.classList.remove("hide");
input_sr.classList.add('show');
srch_btn.classList.remove("hide");
srch_btn.classList.add('show');
lock.classList.remove('show');
lock.classList.add('hide');
      txt.innerText="اسم غذای مورد نظر !";
      
    break;
    case 2:
      items[1].classList.add('activate');
      img_srch.classList.remove("hide");
img_srch.classList.add('show');
input_sr.classList.remove("hide");
input_sr.classList.add('show');
srch_btn.classList.remove("hide");
srch_btn.classList.add('show');
lock.classList.remove('show');
lock.classList.add('hide');
      txt.innerText="حرف اول انگلیسی دستور پخت !";  
    break;
    case 3:
      items[2].classList.add('activate');
srch_btn.classList.remove("hide");
srch_btn.classList.add('show');
lock.classList.remove('show');
lock.classList.add('hide');
      txt.innerText="یه غذای رندوم با جستجو!";
      break;
    case 4:
      items[3].classList.add('activate');
      img_srch.classList.remove("hide");
img_srch.classList.add('show');
input_sr.classList.remove("hide");
input_sr.classList.add('show');
srch_btn.classList.remove("hide");
srch_btn.classList.add('show');
lock.classList.remove('show');
lock.classList.add('hide');
      txt.innerText="یک ماده اصلی به انگلیسی !";
      break;
    case 5:
      items[4].classList.add('activate');
      img_srch.classList.remove("hide");
img_srch.classList.add('show');
input_sr.classList.remove("hide");
input_sr.classList.add('show');
srch_btn.classList.remove("hide");
srch_btn.classList.add('show');
lock.classList.remove('show');
lock.classList.add('hide');
      txt.innerText="کشور مورد علاقت !";
      break;
    case 6:
      items[5].classList.add('activate');
      img_srch.classList.remove("hide");
img_srch.classList.add('show');
input_sr.classList.remove("hide");
input_sr.classList.add('show');
srch_btn.classList.remove("hide");
srch_btn.classList.add('show');
lock.classList.remove('show');
lock.classList.add('hide');
      txt.innerText="دسته های غذایی مختلف !";
      break;
    default:
      alert('no choice done');
      break;
  }
}

// function fetch_data(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// fetch_data(url);
