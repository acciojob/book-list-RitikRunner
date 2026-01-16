//your JS code here. If required.
const bookList = document.getElementById("book-list")
const main = document.getElementsByClassName("main")[0];
const submit = document.getElementById("submit")
const cancel = document.getElementById("cancel")
const title = document.getElementById("title")
const auther = document.getElementById("auther")
const isbn = document.getElementById("isbn")
const titleI = document.getElementById("titleI")
const autherI = document.getElementById("autherI")
const isbnI = document.getElementById("isbnI")
const thead = document.getElementById("thead")

addbook.addEventListener("click",()=>{
	bookList.style.display= ""
	titleI.value = title.value
	autherI.value = auther.value
	isbnI.value = isbn.value
})
cancel.addEventListener("click",()=>{
	thead.style.display = "none";
})










