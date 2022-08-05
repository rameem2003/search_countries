

const search_btn = document.getElementById("search");

search_btn.addEventListener("click", () => {

    document.getElementById("country_profile").style.display = "initial";

    const input = document.getElementById("country").value;
    let state = input;
    let api = `https://restcountries.com/v3.1/name/${state}?fullText=true`;


    fetch(api).then(response => response.json()).then(data => {
        console.log(data);
        document.getElementById("banner").innerHTML = `
        <img src="${data[0].flags.png}" alt="">
        `;

        document.getElementById("left").innerHTML = `
        <img id="flag" src="${data[0].flags.png}" alt="">


        <img id="icon" src="${data[0].coatOfArms.png}" alt="">
        `;


        document.getElementById("country_name").innerHTML = `${data[0].name.common}`;

        document.getElementById("country_full_name").innerHTML = `${data[0].name.official}`;

        document.getElementById("country_capital").innerHTML = `${data[0].capital[0]}`

        document.getElementById("country_currency").innerHTML = `${data[0].currencies[Object.keys(data[0].currencies)].name}`


        document.getElementById("country_lang").innerHTML = `${Object.values(data[0].languages).toString().split(",").join(",")}`;


        document.getElementById("country_week").innerHTML = `${data[0].startOfWeek}`
        document.getElementById("region").innerHTML = `${data[0].region}`
        document.getElementById("sub_region").innerHTML = `${data[0].subregion}`
        document.getElementById("time_zone").innerHTML = `${data[0].timezones[0]}`
    })
})

