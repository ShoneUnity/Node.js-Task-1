const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


fetch(`https://api.nationalize.io/?name=${process.argv[2]}`)
    .then((res) => res.json()) 
    .then((res) => console.log(res))