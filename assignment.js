

// problem 1

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000 ;
    return meter ;
}

var meter = kilometerToMeter(156);
console.log(meter);
var meter2 = kilometerToMeter(256);
console.log(meter2);



// problem  2

function budgetCalculator(watch, phone, laptop){
    var productAndQuantity = watch * 20 + phone *10 + laptop *5;
    return productAndQuantity;
}

var totalPrice = budgetCalculator(50, 100, 500);
console.log(totalPrice)


// problem 3

function hotelCost(days) {
    var cost = 0;

    if (days <= 10){
         cost = days * 100 ;
    }
    else if(days <= 20){
        var firstTenDays = days * 100;
        var remaining = days - 10 ;
        var secondTenDays = remaining * 80 ;
        cost = firstTenDays + secondTenDays ;
    }
    else{
        var firstTenDays = 10 * 100 ;
        var secondTenDays = 10 * 80 ;
        var remaining = days - 20 ;
        var lasRemainingDays = remaining * 50 ;
        cost = firstTenDays + secondTenDays + lasRemainingDays ;
    }
    return cost ;
}

var totalCost = hotelCost(34);
console.log(totalCost);

// problem 4

