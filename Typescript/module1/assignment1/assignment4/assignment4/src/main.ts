var enventory : { id: number;  name: string; quantity : number}[] =
 [{
    id : 1,
    name: 'cap',
    quantity:50
},
{
    id: 2,
    name:'shirt',
    quantity:10
},
{
    id:3,
    name:'bat',
    quantity:8
}]
// console.log(enventory)
let store = '';
for(let items of enventory){
    store+=`<div id="card">
    <h4>Name:${items.name}</h4>
    <h3>quantity:${items.quantity}</h3>
    <button>Buy</button>
  </div>
</div>`;
//console.log(items)
}
document.getElementById('items')!.innerHTML = store;

function purchase ( id:number):void {
    for (let items of enventory){
        if(id==items.id){
        if(items.quantity > 5){
            items.quantity--;
        } 
        else{
            alert(`recover ${items.name}`);
        }           
        }
    }
}