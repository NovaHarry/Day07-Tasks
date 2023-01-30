var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var result=JSON.parse(request.response);

// //A. Get all the countries from the Asia continent /region using the Filter function:

// let a = result.filter((arr)=> {return arr.region=='Asia'});

// console.log(a);
 
// //B. Get all the countries with a population of less than 2 lakhs using Filter function:

// let b = result.filter((arr)=> {return arr.population < 200000});

// console.log(b);

// // C. Print the following details name, capital, flag using forEach function :

// let c = result.forEach((arr)=> 
// {
//     console.log(arr.name);
//     console.log("Capital:" + arr.capital);
//     console.log("Flag:" + arr.flag);
// });

// //D. Print the total population of countries using reduce function:

// let d = result.reduce((ini,curr) => ini+curr.population,0);

// console.log("Total Population:" + d);

//E. Print the country which uses US Dollars as currency :

let e = result;
let curr = [];


for(var i in e)
{
    if(e[i].hasOwnProperty("currencies"))
    {
        curr.push(e[i]);
    }
}

for(var i in curr)
{
    if(curr[i].currencies.hasOwnProperty("USD"))
    {
       console.log(curr[i].name,curr[i].currencies);
    }
}

}





