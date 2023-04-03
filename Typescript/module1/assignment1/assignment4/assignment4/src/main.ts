let enventory: { id: number; name: string; quantity: number }[] = [
    { id: 1, name: 'T-Shirt', quantity: 10 },
    { id: 2, name: 'Jeans', quantity: 10 },
    { id: 3, name: 'Shocks', quantity: 10 },
    { id: 1, name: 'Mouse', quantity: 10 },
    { id: 2, name: 'Keyboard', quantity: 10 },
    { id: 3, name: 'Watch', quantity: 10 },
    { id: 1, name: 'Mobile', quantity: 10 },
   
    
  ];
  let store = '';
  for (let item of enventory) {store += `<div class="card my-2" style="background-color:gray; border-color:black;" id="display">
                                            <div class="card-body">
                                            <h4 class="card-title text-white">Name:${item.name}</h4>
                                            <p class="card-text text-white">Quantity:${item.quantity}</p>
                                            <div class="d-flex justify-content-center"><button onClick="purchase(${item.id})" class="btn btn-primary">Buy</button></div>
                                            <small class="text-white" id="alert"></small>
                                          </div>
                                        </div>`;
  }
  document.getElementById('items')!.innerHTML = store;
  function purchase(id: number): void {
    for (let item of enventory) {
      if (id == item.id) {
        if (item.quantity > 5) {
          item.quantity--;
          alert(`item purchased `);
        } else {
          alert(`reorder  ${item.name}`);
        }
      }
    }
    document.getElementById('items')!.innerHTML = ``;
    for (let item of enventory) {
      document.getElementById('items')!.innerHTML += `<div class="card my-2" style="background-color:gray; border-color:Black;">
                                                      <div class="card-body">
                                                        <h4 class="card-title text-white">Name:${item.name}</h4>
                                                        <p class="card-text text-white">Quantity:${item.quantity}</p>
                                                        <div class="d-flex justify-content-center"><button onClick="purchase(${item.id})" class="btn btn-primary">Buy</button></div>
                                                        <small class="text-white" id="alert"></small>
                                                      </div>
                                                    </div>`;
    }
  }
  