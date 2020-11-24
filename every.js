const students =[ 
    {
        'nombre':'Juan',
        'edad':20
    },
    {
        'nombre':'Sebastian',
        'edad':18
    },
    {
        'nombre':'Santiago',
        'edad':19
    }
];

const validateAge = students.every(({edad}) => edad > 17);
console.log(validateAge)