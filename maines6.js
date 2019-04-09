
//setting up some variables for the elements on the page 

const form = document.getElementById('form');
const formSearch = document.getElementById('searchForm');
const ul = document.querySelector('ul');
const addButton = document.getElementById('addButton');
const deleteButton = document.createElement('button');
const input = document.getElementById('item');
const search = document.getElementById('search');

// let itemsArray = []
// console.log(itemsArray)

class Task{
constructor(itemsArray){
this.itemsArray=[];
}


listMaker= (text)=>{
const rowDiv = document.createElement('div');
rowDiv.className= "row ";
rowDiv.style.display="inline-block";


const leftColumnDiv = document.createElement('div');
leftColumnDiv.className= "col-sm-4";
const li = document.createElement('li');
li.className="list-group-item list-group-item-info"
//li.id= Date.now();
li.textContent = text;
li.style.display="block";
leftColumnDiv.appendChild(li);

 const rightColumnDiv = document.createElement('div');
 rightColumnDiv.className= "col-sm-4";
 const button= document.createElement('button');
 button.className="btn btn-outline-success my-2 my-sm-0";
 button.textContent= "DELETE";
 addBListen(button, rowDiv, itemsArray.length)
 rightColumnDiv.append(button)

 rowDiv.append(leftColumnDiv);
 rowDiv.append(rightColumnDiv);
 
 ul.appendChild(rowDiv);

}

//adding items 
addingToList=()=>{
    if(input.value!==''){
        itemsArray.push(input.value);
        liMaker(input.value);
        input.value = "";
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
}


//filer

filterList=(search)=>{
    if(search.value!==''){
        let result = itemsArray.filter(isInList);
        const text = e.target.value;
        ul.childNodes.forEach(search => {
            const rowText = ul.childNodes[i].childNodes[0].childNodes[0].childNodes[0].data.toLowerCase();
            console.log(rowText)
            if(rowText.indexOf(text) != -1){
                ul.childNodes[i].style.display = "inline-block"
               // console.log("nnn", ul.childNodes[i]);
            }else {
                ul.childNodes[i].style.display = "none"
              //  console.log("sss", ul.childNodes[i]);
            }
            
        });
        
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }
}

isInlist=(value)=>{
    if(value.includes(search.value)){
        return value.toLowerCase();
    }
}

addBListen = (button, child, size) =>
    button.addEventListener('click', function () {
        let clicked=confirm("Are You Sure You want to delete this task ?");
        alert(clicked);
if(clicked==true){
    ul.removeChild(child);
    itemsArray.pop(size-1)
    localStorage.setItem('items', JSON.stringify(itemsArray));
    console.log(itemsArray)
}
    });


loadFromLocalStorage=()=>{
    const temp = JSON.parse(localStorage.getItem('items'));
    console.log("temp "+ temp)
    itemsArray = temp !== null? temp:[];
    itemsArray.forEach(element => {
        liMaker(element)
    });

}


loadFromLocalStorage();
itemsX=  localStorage.getItem('items', JSON.stringify(itemsArray));
result = itemsArray.indexOf(search.value);
}

form.addEventListener('submit',function(e){
    e.preventDefault();
addingToList();
});
formSearch.addEventListener('keyup',function(e){
    e.preventDefault();
    filterList(e);
})
