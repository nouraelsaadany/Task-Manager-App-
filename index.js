
//setting up some variables for the elements on the page 

const form = document.querySelector('form');
const formSearch = document.getElementById('searchForm');

const ul = document.querySelector('ul');
const addButton = document.getElementById('addButton');

const deleteButton = document.createElement('button');

const input = document.getElementById('item');
const search = document.getElementById('search');

let itemsArray = []
console.log(itemsArray)
// creating lists 

const liMaker = text => {
   const rowDiv = document.createElement('div');
   rowDiv.className= "row";
   
   const leftColumnDiv = document.createElement('div');
   leftColumnDiv.className= "col-sm-4";
   const li = document.createElement('li')
   //li.id= Date.now();
   li.textContent = text;
   leftColumnDiv.appendChild(li);
   
    const rightColumnDiv = document.createElement('div');
    rightColumnDiv.className= "col-sm-4";
    const button= document.createElement('button');
    button.textContent= "DELETE";
    addBListen(button, rowDiv, itemsArray.length)
    rightColumnDiv.append(button)

    rowDiv.append(leftColumnDiv);
    rowDiv.append(rightColumnDiv);
    
    ul.appendChild(rowDiv);

}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(input.value!==''){
        itemsArray.push(input.value);
        liMaker(input.value);
        input.value = "";
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
});



formSearch.addEventListener('submit', function (e) {
    e.preventDefault();
    if(search.value!==''){
        let result = itemsArray.filter( itemsArray=>{
            return search==itemsArray
        })
   console.log(result)
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
});
const addBListen = (button, child, size) =>
    button.addEventListener('click', function () {
        ul.removeChild(child);
        itemsArray.pop(size-1)
        localStorage.setItem('items', JSON.stringify(itemsArray));
        console.log(itemsArray)
    });

const loadFromLocalStorage = ()=>{
    const temp = JSON.parse(localStorage.getItem('items'));
    console.log("temp "+ temp)
    itemsArray = temp? temp:[];
    temp.forEach(element => {
        liMaker(element)
    });
};

loadFromLocalStorage();
//let itemsX=  localStorage.getItem('items', JSON.stringify(itemsArray));



    var itemsX=  localStorage.getItem('items', JSON.stringify(itemsArray));
    console.log(itemsArray);

   
//   var  result=itemsX.filter(function(search){
//       return search;
//   } )
console.log(search.value)
var result = itemsArray.indexOf(search.value);


   console.log(result)
    //let itemsArray= 
//searchFunction();