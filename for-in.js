const priceForProducts =[ 
    {
        'nombre':'camiseta',
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

for (const key in priceForProducts) {
    console.log(`obj.${key} = ${priceForProducts[key].precio}`)
}