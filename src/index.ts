function greet (name : string): string { 
    return (`Hi, ${name}`);
}

const username : string = 'Arka Banerjee'
let a : string = greet (username);
console.log (a)