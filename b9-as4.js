// function calculateMoney(ticketSale) {
//     if (ticketSale <= 0) {
//         return "This is a Invalid Number";

//     };
//     let daylyCost = 500 + (50 * 8);
//     let tickePrice = 120;
//     let totalTicketPrice = tickePrice * ticketSale;
//     let spendMoney = totalTicketPrice - daylyCost;
//     return spendMoney;
// };


// function checkName(name) {

//     let GoodWord = ["a", "y", "i", "e", "o", "u", "w"];
//     let lastword = name.slice(-1);
//     if (lastword.includes(GoodWord)) {
//         return "Good Name"
//     };
//     else {
//         return "Bad Name"
//     };
// };


// function deleteInvalid(arry) {
//     if (typeof (arry) === "Arry") {
//         return "Invalid Arry"
//     }
//     let new_arry = [];
//     for (i = 0; i < arry.length; i++) {

//         let check_value = arry[i];
//         console.log(typeof (check_value))

//         if (typeof (check_value) === "number") {
//             new_arry.push(check_value);

//         }


//     }
//     return new_arry
// };

// console.log(deleteInvalid({Number:[1,2,3,4]}))

function password(object) {
    let value1 = object["name".toLowerCase()];
    let value2 = object["birthdate".toLowerCase()]
    let value3 = object["sitename".toLowerCase()]

    if (typeof (object) !== "object" || value2.length < 4) {
        return "Invalid object"
    }
    else {

        let stpass = value1.toUpperCase() + "#" + value2 + "@" + value3
        return stpass
    }
}

