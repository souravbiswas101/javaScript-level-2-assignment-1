function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare = 50;

    if(distance>2){
        fare += (distance -2) * 15;
    }

    fare += waitingMinutes * 2;

    if(isNight){
        fare *= 1.2;
    }

    return fare;
}

console.log(getCngFare(2));
console.log(getCngFare(1));