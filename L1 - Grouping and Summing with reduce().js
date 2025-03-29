
function frequency(items){
    let products = items.reduce((acc, value)=>{
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    },{});
    
    console.log(products)
}

let items = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]
frequency(items)