//your JS code here. If required.
const main = document.querySelector(".main");
const submit = document.getElementById("submit")
const cancel = document.getElementById("cancel")
const title = document.getElementById("titleVV")
const author = document.getElementById("authorVV")
const isbn = document.getElementById("isbnVV")
const titleI = document.getElementById("title")
const authorI = document.getElementById("author")
const isbnI = document.getElementById("isbn")
const thead = document.getElementById("thead")
const bookList = document.getElementById("book-list");

submit.addEventListener("click",()=>{
	bookList.style.display= "table";
	title.textContent = titleI.value
	author.textContent = authorI.value
	isbn.textContent = isbnI.value
})
cancel.addEventListener("click",()=>{
	thead.style.display = "none";
})










