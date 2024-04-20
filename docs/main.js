let btn = document.getElementById('btn');
let ing = document.getElementById('ing');
let ans = document.getElementById('ans');

btn.addEventListener('click',function(){
   
    if(ing.value === "yellowtail"){
        ans.innerText = "Teriyaki yellowtail";
    } else if(ing.value === "salmon"){
        ans.innerText = " Salt-grilled Salmon Salmon mille-feuille";
    } else if(ing.value === "ground pork"){
        ans.innerText = " stuffed peppers Stuffed Cabbage cabbage rolls meatball";
    } else if(ing.value === "Loin"){
        ans.innerText = " Beef and Pepper Stir Fry Pork ginger";
    } else if(ing.value === "pork trimmings"){
        ans.innerText = " simmered beef and Tofu Stir Fry okonomiyaki";
    } else if(ing.value === "Beef Joint"){
        ans.innerText = " beef stew";
    } else if(ing.value === "Leg"){
        ans.innerText = " Fried chicken teriyaki chicken chicken tomato stew";
    } else if(ing.value === "Chicken Tenders"){
        ans.innerText = "Fried Chicken Tenders";
    } else if(ing.value === "Wings"){
        ans.innerText = " simmered chicken and daikon radish";
    } else{
        ans.innerText = " chicken skewers japanese hot pot Gyoza shumai gratin pizza";
    }    

},false);

