let title = document.getElementById('title')
let author = document.getElementById('author')
let isbn = document.getElementById('isbn')
let btn = document.getElementById('submit')
let tablebody = document.getElementById('book-list')

btn.addEventListener('click', function (e) {
	e.preventDefault()
		let Tvalue = title.value.trim()
		let Avalue = author.value.trim()
		let Ivalue = isbn.value.trim()

	if(Tvalue == "" || Avalue =="" || Ivalue ==""){
		alert("Please fill all the field")
	}
	else{
	let newRow = document.createElement('tr')

		newRow.innerHTML = `<td>${Tvalue}</td>
						   <td>${Avalue}</td>
						   <td>${Ivalue}</td>
						   <td><button class = "delete">X</button></td>`
	tablebody.append(newRow)
     author.value = ""
	title.value = ""
	isbn.value = ""
	let removeBtn = newRow.querySelector('.delete')
	removeBtn.addEventListener('click', function () {
		newRow.remove()
		
	})

	
	}
	
})