// Question
// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
// a. Get all the countries from Asia continent /region using Filter method
// b. Get all the countries with a population of less than 2 lakhs using Filter method
// c. Print the following details name, capital, flag, using forEach method
// d. Print the total population of countries using reduce method
// e. Print the country that uses US dollars as currency.

const url = "https://restcountries.com/v3.1/all";

const fetch_all = new XMLHttpRequest();

fetch_all.onreadystatechange = () => {
    if (fetch_all.readyState === XMLHttpRequest.DONE) {
        let data = JSON.parse(fetch_all.response);

        // Get all the countries from Asia continent /region using Filter method
        console.log("All the countries from Asia continent /region");
        let asianCountries = data.filter((element) => {
            return element.region === "Asia";
        });
        console.log(asianCountries);

        // Get all the countries with a population of less than 2 lakhs using Filter method
        console.log("All the countries with a population of less than 2 lakhs");
        let countriesWithPopulationLessThan2Lakhs = data.filter((element) => {
            return element.population < 200000;
        })
        console.log(countriesWithPopulationLessThan2Lakhs);

        //Print the following details name, capital, flag, using forEach method
        console.log("Printing the name, capital, flag, using forEach method");
        data.forEach(element => {
            console.log(element.name);
            console.log(element.capital);
            console.log(element.flag);
        });

        // Print the total population of countries using reduce method
        let totalPopulation = data.reduce((total, element) => {
            return total = total + element.population;
        }, 0)
        console.log("Total population of countries : ", totalPopulation);

        // Print the country that uses US dollars as currency
        console.log("Countries that uses US dollars as currency")
        let countryWithUSDCurrency = data.filter((element) => {
            for (let key in element.currencies) {
                if (element.currencies[key].name === "United States dollar") {
                    return element
                }
            }
        })
        console.log(countryWithUSDCurrency);
    }
}

fetch_all.open("GET", url);
fetch_all.setRequestHeader("Accept", "application/json");
fetch_all.send();