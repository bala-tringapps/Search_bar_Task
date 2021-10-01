const listofitems = [
    {  
        name:"Mango",
       Price: "Rs.50/kg",
       Type:"Alphonso",
       url:"img/Mango.jpg"
    },
   {   name:"Pineapple",
       Price: "Rs.60/kg",
       Type:"Antigua Black",
       url:"img/Pineapple.jpg"
   },
   {
       name:"Orange",
       Price: "Rs.50/kg",
       Type:"Saathukudi",
       url: "img/orange.jpg"
   },
   {
       name:"Banana",
       Price: "Rs.60/dozen",
       Type:"Kozhikode",
       url: "img/Banana.jpg"
   },
   {
       name:"Jackfruit",
       Price: "Rs.40/kg",
       Type:"Cheena",
       url: "img/jackfruit.jpg"
   },
   {
       name:"Grapes",
       Price: "Rs.45/kg",
       Type:"Black",
       url: "img/Grapes.jpg"
   },
   {
       name:"Oldfashioned",
       Price: "Rs.600",
       Type:"Cocktail",
       url: "img/oldfashioned.jpg"
   },
   {
       name:"Drymartini",
       Price: "Rs.450",
       Type:"Cocktail",
       url:"img/martini.jpg"
   },
   {
       name:"Cocacola",
       Price: "Rs.30/tin",
       Type:"Soft drinks",
       url:"img/coca-cola.jpg"
   },
   {
       name:"pepsi",
       Price: "Rs.25/tin",
       Type:"Soft drinks",
       url:"img/pepsi-logo.jpg"
   },
   {
       name:"whisky",
       Price: "Rs.200",
       Type:"Alcohol",
       url: "img/whisky.jpg"
   },
   {
       name:"Beer",
       Price: "Rs.150",
       Type:"Alcohol",
       url: "img/beer.jpg"
   },
];

var check;
const search_button = document.getElementById('myBtn')
const menu_container = document.getElementById("menu_list");
search_button.addEventListener('click', search);

function search(event){
    event.preventDefault();
    const input_value = document.getElementById('bar').value;
    let searchTerm = input_value.toLowerCase();
    menu_container.innerHTML = ''
    let new_list = listofitems.filter((title)=> {
        if(title.name.toLowerCase().trim().includes(searchTerm.trim().toLowerCase())){ 
        check = true;
        return true;
        }
       else{
           document.getElementById('notice').innerText = 'Sorry it is not available';
           document.getElementById('menulist').innerText = '';
       }
    });
    show_item(new_list);
}


function store(){
   
    const menu_items = listofitems;
    
    show_item(menu_items);
}

function show_item(menu_items){
    
    menu_items.forEach(item => {
        if(check==true){
            document.getElementById('notice').innerText = '';
        }
        const li = document.createElement('div');
        li.className = "content_size"
        li.innerHTML = `<div id="fruits" class="drinks" name=${item.name}>
        <h2 class="shop">${item.name}</h2>
        <p>Price: ${item.Price}</p>
        <p>Type: ${item.Type}</p>
        <img src=${item.url}  width="60%" style="border-radius:10"/>
        </div>`
        menu_container.appendChild(li);
    })
}
store();
