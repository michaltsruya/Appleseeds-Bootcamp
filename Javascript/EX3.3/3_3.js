function percentageOfWorld1(population){
    let num = population;
    let result = (population / 7900 )*100;
    return result;
}
console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(9));
console.log(percentageOfWorld1(21));

const percentageOfWorld2 = (population) => (population/7900)*100;
console.log(percentageOfWorld2(1441))