let items = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
]

function processProducts(items){
    let transform = items.map(produce => produce.name)
    let result = items.forEach(value=>{
       if(value.price>50)
         console.log(`${value.name} is above $50`)
       else
        console.log(`${value.name} is below $50`)
        
    })
}

processProducts(items);