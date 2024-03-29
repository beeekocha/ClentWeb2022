(function () {
    function getCountriesArray() {
        return [
            {
                name: "Russia",
                cities: [
                    {name: "Norilsk", population: 182701},
                    {name: "Moscow", population: 12635466},
                    {name: "Orel", population: 303696}
                ]
            },
            {
                name: "India",
                cities: [
                    {name: "Bangalore", population: 8443675},
                    {name: "Mumbai", population: 15414288},
                    {name: "Kolkata", population: 4486679},
                    {name: "Jaipur", population: 3073350}
                ]
            },
            {
                name: "Canada",
                cities: [
                    {name: "Toronto", population: 2503281},
                    {name: "Montreal", population: 1942694},
                    {name: "Quebec", population: 8294656}
                ]
            }
        ];
    }

    function getMaxCitiesCount(array) {
        var maxCitiesCount = 0;

        array.forEach(function (currentCountry) {
            var currentCountryCitiesCount = currentCountry.cities.length;

            if (maxCitiesCount < currentCountryCitiesCount) {
                maxCitiesCount = currentCountryCitiesCount;
            }
        });

        return maxCitiesCount;
    }

    function getCountriesWithMaxCitiesCount(countries) {
        var maxCitiesCount = getMaxCitiesCount(countries)

        return countries.filter(function (countries) {
            return countries.cities.length === maxCitiesCount;
        });
    }

    function getTotalPopulationForCountries(countries) {
        var countriesPopulation = {};

        countries.forEach(function (country) {
            countriesPopulation[country.name] = getTotalPopulationForCountry(country);
        });

        return countriesPopulation;
    }

    function getTotalPopulationForCountry(country) {
        return country.cities.reduce(function (sum, city) {
            return sum + city.population;
        }, 0);
    }

    console.log(getCountriesWithMaxCitiesCount(getCountriesArray()))
    console.log(getTotalPopulationForCountries(getCountriesArray()))
}());