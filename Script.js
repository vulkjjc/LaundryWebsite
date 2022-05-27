const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})
/*FAQ*/
backBtn.addEventListener("click", () => form.classList.remove('secActive'));


let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
event.addEventListener("click", () => {
	if (event.classList.contains("active")) {
	event.classList.remove("active");
	} else {
	event.classList.add("active");
	}
});
});
