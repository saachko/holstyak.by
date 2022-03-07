/*скрипт только для этой страницы, 
добавила сюда, чтоб не выводили ошибок 
в консоли для остальных страниц*/

// форма и размер холста
let rect = document.getElementById("rect");
let sq = document.getElementById("square");
let sizeRect = document.getElementById("size-rect");
let sizeSq = document.getElementById("size-square");

rect.onclick = () => {
  sizeSq.setAttribute("disabled", "disabled");
  sizeRect.removeAttribute("disabled");
}

sq.onclick = () => {
  sizeRect.setAttribute("disabled", "disabled");
  sizeSq.removeAttribute("disabled");
}

// загрузка файлов в заказ
let input = document.querySelector(".add__input");
let label = document.querySelector(".add__btn");
let labelValue = document.querySelector(".add__text").innerText;
		  
    input.addEventListener("change", function (e) {
      let countFiles = "";
      if (input.files && input.files.length >= 1) {
        countFiles = input.files.length;
      }
	  
      if (countFiles) {
        label.querySelector(".add__text").innerText = "Выбрано фотографий: " + countFiles;
      } else {
        label.querySelector(".add__text").innerText = labelValue;
      }  
    });	