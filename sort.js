const priceForProducts =[ 
    {
        'name':'camiseta',
        'price':25000
    },
    {
        'name':'Zapatos',
        'price':120000
    },
    {
        'name':'Pantalon',
        'price':90000
    }
];

console.log(priceForProducts)
const highestPrice = priceForProducts.sort((prev,{price}) => prev.price > price)
console.log(highestPrice)