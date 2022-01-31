const carRentPrice = 40;
export const calculateRentalCost = rentalDay => {
    if(typeof(rentalDay) !== "number"){
        return 0;
    }
    let totalCost = carRentPrice*rentalDay;
    if (rentalDay >= 7){
        totalCost -= 50;
    }
    else if(rentalDay >= 3){
        totalCost -= 20;
    }
    return totalCost;
}