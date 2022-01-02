//Восстановить порядок книг.
const book = document.querySelectorAll(".book");
book[1].after(book[0]);
book[0].after(book[4]);
book[4].after(book[3]);
book[3].after(book[5]);

//Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = "url(./image/adv.jpg)";

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
book[4].getElementsByTagName("h2")[0].innerHTML =
    "Книга 3. this и Прототипы Объектов";
book[4].getElementsByTagName("h2")[0].style.color = "darkkhaki";

//Удалить рекламу со страницы
let adv = document
    .querySelectorAll(".adv")
    .forEach((e) => e.parentNode.removeChild(e));

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
book[0]
    .getElementsByTagName("li")[9]
    .after(book[0].getElementsByTagName("li")[2]);

book[0]
    .getElementsByTagName("li")[2]
    .after(book[0].getElementsByTagName("li")[5]);

book[0]
    .getElementsByTagName("li")[3]
    .after(book[0].getElementsByTagName("li")[7]);

book[5]
    .getElementsByTagName("li")[1]
    .after(book[5].getElementsByTagName("li")[9]);

book[5]
    .getElementsByTagName("li")[2]
    .after(book[5].getElementsByTagName("li")[4]);
book[5]
    .getElementsByTagName("li")[3]
    .after(book[5].getElementsByTagName("li")[5]);

book[5]
    .getElementsByTagName("li")[8]
    .after(book[5].getElementsByTagName("li")[6]);

console.log(book[5].getElementsByTagName("li")[8]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const newChapter = document.createElement("li");
newChapter.textContent = "Глава 8: За пределами ES6";

book[2].getElementsByTagName("li")[8].append(newChapter);