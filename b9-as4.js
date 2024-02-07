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


function deleteInvalids(arry) {
    console.log(typeof(arry))
    if (typeof (arry) === "Arry") {
        return "Invalid Arry"
    }
    let new_arry = [];
    for (i = 0; i < arry.length; i++) {

        let check_value = arry[i];

        if (typeof (check_value) === "number") {
            new_arry.push(check_value);

        }
    }
    return new_arry
};

console.log(deleteInvalids([1, 2, 3,NaN,"hi", 2, 3]))

