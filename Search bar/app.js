let user_input = document.querySelector("#bar");
user_input.addEventListener('keyup', search);
const menu_container = document.getElementById("menu_list");
function search(e){
    searchTerm = e.target.value.toLowerCase();
    menu_container.innerHTML = ''
    let new_list = listofitems.filter((title)=> {
        if(title.name.toLowerCase().trim().includes(searchTerm.trim().toLowerCase())) return true;
    });
    console.log('new',new_list)
    myfunction(new_list);
}
const listofitems = [
             {  
                 name:"Mango",
                Price: "Rs.50/kg",
                Type:"Alphonso",
                url:"Mango.jpg"
             },
            {   name:"Pineapple",
                Price: "Rs.60/kg",
                Type:"Antigua Black",
                url:"Pineapple.jpg"
            },
            {
                name:"Orange",
                Price: "Rs.50/kg",
                Type:"Saathukudi",
                url: "orange.jpg"
            },
            {
                name:"Banana",
                Price: "Rs.60/dozen",
                Type:"Kozhikode",
                url: "Banana.jpg"
            },
            {
                name:"Jackfruit",
                Price: "Rs.40/kg",
                Type:"Cheena",
                url: "jackfruit.jpg"
            },
            {
                name:"Grapes",
                Price: "Rs.45/kg",
                Type:"Black",
                url: "Grapes.jpg"
            },
            {
                name:"Oldfashioned",
                Price: "Rs.600",
                Type:"Cocktail",
                url: "oldfashioned.jpg"
            },
            {
                name:"Drymartini",
                Price: "Rs.450",
                Type:"Cocktail",
                url:"martini.jpg"
            },
            {
                name:"Cocacola",
                Price: "Rs.30/tin",
                Type:"Soft drinks",
                url:"coca-cola.jpg"
            },
            {
                name:"pepsi",
                Price: "Rs.25/tin",
                Type:"Soft drinks",
                url:"pepsi-logo.jpg"
            },
            {
                name:"whisky",
                Price: "Rs.200",
                Type:"Alcohol",
                url: "whisky.jpg"
            },
            {
                name:"Beer",
                Price: "Rs.150",
                Type:"Alcohol",
                url: "beer.jpg"
            },
        ];


function store(){
   
    const menu_items = listofitems;
    myfunction(menu_items);
}

function myfunction(menu_items){
    menu_items.forEach(item => {
        const li = document.createElement('div');
        li.className = "temp"
        li.innerHTML = `<div id="fruits" class="drinks" name=${item.name}>
        <h2 class="shop">${item.name}</h2>
        <p>Price: ${item.Price}</p>
        <p>${item.Type}</p>
        <img src=${item.url}  width="60%" style="border-radius:10" height=""100/>
        </div>`
        menu_container.appendChild(li);
    })
}
store();