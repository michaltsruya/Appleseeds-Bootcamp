function tellFortune(jobTitle, location, partnerName, numberOfChildren ){
    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`
}

let  myLife = tellFortune('programmer', 'New York', 'Rana', 2 );
console.log(myLife)