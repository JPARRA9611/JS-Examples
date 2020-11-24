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

const exist = priceForProducts.some(({nombre}) => nombre == 'Camiseta')
console.log(exist);