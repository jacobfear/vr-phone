const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const backBtn = document.querySelector(".back-button");
let q = document.querySelectorAll('li');


//new list item html template
const gerateTemplate = todo => { //create a create append version
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa fa-trash delete"></i>
    </li>
    `;

    list.innerHTML += html;
};

//search items
function filterTodos(term){
    Array.from(list.children)
        .filter( todo => !todo.textContent.toLowerCase().includes(term) )
        .forEach( todo => todo.classList.add("hide") );

    Array.from(list.children)
        .filter( todo => todo.textContent.toLowerCase().includes(term) )
        .forEach( todo => todo.classList.remove("hide") );     
}

search.addEventListener("keyup", function(){
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});


//strikethrough or delete item
list.addEventListener("click", function(e){
    //delete item
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove(); //removes the li tag of the i (trash bin icon)
    }

    //strikethrough item
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("strikethrough");
    }
});

//add item
addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); //grabs the value of the input box and trims white spaces
    
    if(todo.length){ //validation, if returns 0, nothing will happen
        gerateTemplate(todo);
        //addForm.add.value = ""; 
        window.scrollTo(0,document.body.scrollHeight); //scroll to the bottom of the page
        addForm.reset(); //resets the form
    }  
});

//go back to home page
backBtn.addEventListener("click", () => window.location.href="../../index.html");