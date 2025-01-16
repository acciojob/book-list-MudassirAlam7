//your JS code here. If required.
let title = document.getElementById('title')
let author = document.getElementById('Author')
let isbn = document.getElementById('isbn')
let subbtn = document.getElementById('submit')

let tableBody = document.getElementById('book-list')

subbtn.addEventListener('click', function (e) {
	e.preventDefault()
	let Tvalue = title.value.trim()
	let Avalue = author.value.trim()
	let Ivalue = isbn.value.trim()

	if(Tvalue == ""|| Avalue =="" || Ivalue ==""){
		alert('please fill all the field')
	}

	let newRow = document.createElement('tr')
	newRow.innerHTML = `<td>${Tvalue}</td>
	                   <td>${Avalue}</td>
					   <td>${Ivalue}</td>
					   <td><button class = "delete">X</button></td>`

	tableBody.append(newRow)


	title.value = ""
	author.value = ''
	isbn.value = ""

})

tableBody.addEventListener('click', function (e) {
	if(e.target.classList.contains('delete')){
		let row = e.target.parentElement.parentElement
		tableBody.removeChild(row)
	}
	
})
