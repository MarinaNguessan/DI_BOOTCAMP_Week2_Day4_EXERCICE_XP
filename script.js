/* Exercice 1*/
// Part 1

function infoAboutMe() {
    console.log("Name : konate Mamadou Kernel, \
    Age : 27 ans \
    Hobbies : BootCamp, basket ball, Football,Voyage");
}

infoAboutMe();

// PArt 2

function infoAboutPerson(personName, personAage, personFavoriteColor) {
    console.log(`votre nom est ${personName} vous avez ${personAage} ans \
    votre couleur préférée est ${personFavoriteColor}`);
}

infoAboutPerson("Jhon", 45, "blue");
infoAboutPerson("Deo", 12, "yellow");

/* Exercice 2 */

function calculateTip() {
    let amountToPay;
    let amount = Number(prompt("pourboire: "));

    if(amount > 200) {
        amountToPay = amount + (amount*0.1);
    }
    else if(amount > 50) {
        amountToPay = amount + (amount*0.15);
    }
    else {
        amountToPay = amount + (amount*0.2);
    }

    console.log(`montant définitif est : ${amountToPay}$`);
}

calculateTip();

// Exercice 3

function isDivisible(divisor) {
    let sum = 0;
    for(let i = 0; i<500; i++) {
        if(i%divisor == 0) {
            console.log(i);
            sum+=i;
        }
    }
    console.log(sum);
}

/* Exercice 4 */

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

let shoppingList = ["banana", "orange", "pomme"];

function myBill() {
    let totalPrice = 0;
    for(let i of shoppingList) {
        if(typeof(stock[i]) != 'undefined' && stock[i] > 0) {
            totalPrice+=prices[i];
            stock[i]-=1;
        }
    }
    return totalPrice;
}

myBill();

/* Exercice 5 */

function changeEnough(itemPrice, amountOfChange) {
    let priceInMyPossession = 0;
    let amountOfChangeNumber = [0.25, 0.1, 0.05, 0.01];
    for(let i = 0; i<amountOfChangeNumber.length; i++) {
        priceInMyPossession+=(amountOfChangeNumber[i]*amountOfChange[i]);
    }

    if(priceInMyPossession >= itemPrice) {
        return true;
    }
    return false;
}

changeEnough(4.25, [25, 20, 5, 0]);

/* Exercice 6 */

function hotelCost() {
    let numberOfNight;
    do{
        numberOfNight = prompt("Combien de nuits avez-vous passées dans notre hôtel ? :");
    }while(numberOfNight.length == 0 || isNaN(numberOfNight))

    return Number(numberOfNight) * 140;
}

hotelCost();

function planeRideCost() {
    let userDestination;
    do{
        userDestination = prompt("Quelle est votre destination? : ");
    }
    while(userDestination.length == 0 || !isNaN(userDestination))

    if(userDestination === "Londres"){
        return 183;
    }
    else if(userDestination === "Paris"){
        return 220;
    }
    return 300;
}

function rentalCarCost() {

    let numberOfCarLocationDay;
    do{
        numberOfCarLocationDay = prompt("Combien de jours pour localiser une voiture :");
    }while(numberOfCarLocationDay.length == 0 || isNaN(numberOfCarLocationDay))

    if(numberOfCarLocationDay > 10) {
        let priceToReduce = numberOfCarLocationDay*40*0.05;
        return numberOfCarLocationDay*40 - priceToReduce;
    }
    return Number(numberOfCarLocationDay)*40;
}

function totalVacationCost() {
    return hotelCost() + planeRideCost() + rentalCarCost();
}

totalVacationCost();


