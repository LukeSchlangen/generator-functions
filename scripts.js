// hard-coded example
function* generatorOne() {
    yield 5;
    yield 2;
}

const generatorOneInstance = generatorOne();

console.log('generatorOne on first call', generatorOneInstance.next().value);
console.log('generatorOne on second call', generatorOneInstance.next().value);

// example with while loop from MDN
function* idMaker() {
    var index = 0;
    while (index < 3)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined