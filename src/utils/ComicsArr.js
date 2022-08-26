export const comicsArr = (comicsArr) => {
    // ---- comicsArr has datas one like below ----

    // { name: "Agents of Atlas (2019) #1",
    // resourceURI: "http://gateway.marvel.com/v1/public/comics/77001" }
    
    let arr = [];
    let newArr = [];
    comicsArr.forEach((year) => {
        var splitA = year.name.split("(")[1].split(")")[0]; // we are splitting the data and get values between "(" and ")"
        // if the value has more than 4 characters it means it is not number (year)
        if (splitA.length > 4) {
            arr.push(year); // push them another arr to order correctly
        } else {
            newArr.push({ name: `${year.name}`, year: `${splitA}` }); // pushing right datas (like years) to another array
            newArr.sort(function (a, b) { // sorting the array according to year order
                return b.year - a.year;
            });
        }
    });
    // combine two arrays with concat. arr to the end of newArr
    return newArr.concat(arr);
};