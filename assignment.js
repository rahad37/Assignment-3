
// ========== Problem-1 ===========

function kilometerToMeter(kilometer){
    var distance = kilometer * 1000;
    return distance;
}


// ========== Problem-2 ============

function budgetCalculator(clock, mobile, laptop){
    var firstItem = clock * 5;
    var secondItem = mobile * 6;
    var thirdItem = laptop * 7;

    var totalPrice = firstItem + secondItem + thirdItem;
    return totalPrice;
}


// =========== Problem-3 ============

function hotalCost(days){
   
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
        var thirdRestDays = remainingDays * 50;
        totalTaka = firstTenDays + secondTenDays + thirdRestDays;
    }
    return totalTaka;
}

// ============ Problem-4 ============

function megaFriend(names){
    var largeName = names[0];
    for(var i=0; i< names.length; i++){
        var items = names[i];
        if(items.length>largeName.length){
            largeName = items;
        }
    }
    return largeName;
}