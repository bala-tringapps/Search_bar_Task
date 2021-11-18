const listofitems = [
    {  
        id:1,
        name:"Mango",
       Price: "Rs.50/kg",
       Type:"Alphonso",
       url:"img/Mango.jpg"
    },
   {   id:2,
       name:"Pineapple",
       Price: "Rs.60/kg",
       Type:"Antigua Black",
       url:"img/Pineapple.jpg"
   },
   {
       id:3,
       name:"Orange",
       Price: "Rs.50/kg",
       Type:"Saathukudi",
       url: "img/orange.jpg"
   },
   {
       id:4,
       name:"Banana",
       Price: "Rs.60/dozen",
       Type:"Kozhikode",
       url: "img/Banana.jpg"
   },
   {
       id:5,
       name:"Jackfruit",
       Price: "Rs.40/kg",
       Type:"Cheena",
       url: "img/jackfruit.jpg"
   },
   {
       id:6,
       name:"Grapes",
       Price: "Rs.45/kg",
       Type:"Black",
       url: "img/Grapes.jpg"
   },
   {
       id:7,
       name:"Oldfashioned",
       Price: "Rs.600",
       Type:"Cocktail",
       url: "img/oldfashioned.jpg"
   },
   {
       id:8,
       name:"Drymartini",
       Price: "Rs.450",
       Type:"Cocktail",
       url:"img/martini.jpg"
   },
   {
       id:9,
       name:"Cocacola",
       Price: "Rs.30/tin",
       Type:"Soft drinks",
       url:"img/coca-cola.jpg"
   },
   {
       id:10,
       name:"pepsi",
       Price: "Rs.25/tin",
       Type:"Soft drinks",
       url:"img/pepsi-logo.jpg"
   },
   {
       id:11,
       name:"whisky",
       Price: "Rs.200",
       Type:"Alcohol",
       url: "img/whisky.jpg"
   },
   {
       id:12,
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
        check = 1;
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
        if(check==1){
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
