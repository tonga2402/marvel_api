const privatekey = '5cad0c3c0a330dac9886d9b9fb0e5d13c2579a38';
const publickey = '27c82e29dfb82aa531c27a47e196ae1e';
const hash = '8b08e12fef8f36dc33e866df166232be';
const ts = '02/09/2023, 17:59:07';
const url = 'https://gateway.marvel.com:443/v1/public/comics?apikey=27c82e29dfb82aa531c27a47e196ae1e&ts=02/09/2023, 17:59:07&hash=8b08e12fef8f36dc33e866df166232be';
const urlDinamica = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publickey}&ts=${ts}&hash=${hash}`;


export const getCharacters = () =>
   fetch(urlDinamica)
    .then((response) => response.json())
    .then((response) => response.data.results)
    .catch((err => console.log(err)));