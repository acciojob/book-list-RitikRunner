//your JS code here. If required.
const bookList = document.getElementById("book-list")
const main = document.getElementsByClassName("main")[0];
const submit = document.getElementById("submit")
const cancel = document.getElementById("cancel")
const title = document.getElementById("titleVV")
const auther = document.getElementById("autherVV")
const isbn = document.getElementById("isbnVV")
const titleI = document.getElementById("title")
const autherI = document.getElementById("auther")
const isbnI = document.getElementById("isbn")
const thead = document.getElementById("thead")

addbook.addEventListener("click",()=>{
	bookList.style.display= ""
	title.value = titleVV.value
	auther.value = autherVV.value
	isbn.value = isbnVV.value
})
cancel.addEventListener("click",()=>{
	thead.style.display = "none";
})










