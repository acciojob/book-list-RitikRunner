//your JS code here. If required.
const main = document.querySelector(".main");
const submit = document.getElementById("submit")
const titleI = document.getElementById("title")
const authorI = document.getElementById("author")
const isbnI = document.getElementById("isbn")
const thead = document.getElementById("thead")
const bookList = document.getElementById("book-list");


submit.addEventListener("click",()=>{

	if(titleI.value === "" || authorI.value ==="" || isbnI.value ===""){
		alert("Fill all feilds")
		return;
	}
	const tr = document.createElement("tr")
	tr.innerHTML =`
   <td>${titleI.value}</td>
   <td>${authorI.value}</td>
   <td>${isbnI.value}</td>
   <td><button class="delete btn btn-danger">X</button></td>
`
thead.appendChild(tr);
	titleI.value = "";
	authorI.value = "";
	isbnI.value = ""
})
thead.addEventListener("click",(e)=>{
	if(e.target.classList.contains("delete")){
		e.target.parentElement.parentElement.remove();
	}
})
















