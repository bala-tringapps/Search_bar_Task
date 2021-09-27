let user_input = document.querySelector('.search-input');
user_input.addEventListener('keyup',items_container);
let heading = document.querySelectorAll('.fruits .items');
let searchTerm = '';
let title = '';
function items_container(e){
    searchTerm = e.target.value.toLowerCase();
    heading.forEach((head)=>{
        title = title.textContent.toLowerCase();
        title.includes(searchTerm)? head.style.display = 'block':
        head.style.display = 'none';
    })
}