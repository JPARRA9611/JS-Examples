var fs = require('fs');

const readFile = (path) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (error, data) => {
			if (error) return reject(error);
			return resolve(data);
		});
	});
}

const randomDelayed = (max = 10, expected = 5, delay =  1000) => {
    return new Promise( (resolve,reject) => {
        const number = Math.floor(Math.random() * max);

        setTimeout(
            () => number > expected
                ? resolve(number)
                : reject(new Error(`Menor a ${expected}`)),
            delay
        );
    })
}

async function randomDelayedAsync(max = 10, expected = 5, delay =  1000){
    const validateNumber = await new Promise( (resolve,reject) => {
        const number = Math.floor(Math.random() * max);

        setTimeout(
            () => number > expected
                ? resolve(number)
                : reject(new Error(`Menor a ${expected}`)),
            delay
        );
    })

    console.log(validateNumber)
}

randomDelayed(100, 20, 1000)
	.then(number => console.log(number))
    .catch(error => console.error(error));

randomDelayedAsync(100,20,2000)
    
/*readFile('../../Documentos/javier.txt')
	.then(data => console.log(data))
	.catch(error => console.error(error));*/