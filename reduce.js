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

let sumOfProducts = priceForProducts.reduce((prev,current) => prev + current.precio, 0);

//console.log(sumOfProducts)
let students = [
    ['Juan',23],
    ['Sebastian',20],
    ['Santiago',25]
];

let objectStudents = students.reduce(function(prev, current) {
    prev[current[0]] = current[1];
    return prev;
}, {});
//console.log(objectStudents)

let objectPrice = priceForProducts.reduce((prev,current) =>{
    prev[current.nombre] = current.precio
    return prev;
},{})
{}
let objectPriceSimple = priceForProducts.reduce((prev,current) => ({...prev,[current.nombre]:current.precio}),{})
console.log(objectPriceSimple)