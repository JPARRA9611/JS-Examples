const priceForProducts =[ 
    {
        'nombre':'Camiseta',
        'precio':25000
    },
    {
        'nombre':'Zapatos',
        'precio':120000
    },
    {
        'nombre':'Pantalon',
        'precio':90000
    }
];

for (const {precio} of priceForProducts) {
    console.log(precio)
}

for (const key in priceForProducts) {
    console.log(key)
}