
// ========== Problem-1 ===========

function kilometerToMeter(kilometer){
    var distance = kilometer * 1000;
    return distance;
}
// var result = kilometerToMeter();
// console.log(result);

// ========== Problem-2 ============

function budgetCalculator(clock, mobile, laptop){
    var firstItem = clock * 50;
    var secondItem = mobile * 100;
    var thirdItem = laptop * 500;

    var totalPrice = firstItem + secondItem + thirdItem;
    return totalPrice;
}
// var result = budgetCalculator();
// console.log(result);


// =========== Problem-3 ============

function hotelCost(days){
   
    var totalTaka = 0;

    if(days <= 10){
        totalTaka = days * 100;
    }

    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;
        totalTaka = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var RestOfDays = remainingDays * 50;
        totalTaka = firstTenDays + secondTenDays + RestOfDays;
    }
    return totalTaka;
}
// var result = hotelCost();
// console.log(result);

// ============ Problem-4 ============

function megaFriend(names){
    var longestName = names[0];
    for(var i=0; i< names.length; i++){
        var items = names[i];
        if(items.length>longestName.length){
            longestName = items;
        }
    }
    return longestName;
}
// var result = megaFriend([]);
// console.log(result);