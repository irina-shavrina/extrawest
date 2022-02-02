const carRentPrice = 40;
const sevenDayDiscount = 50;
const threeDayDiscount = 20;
export const calculateRentalCost = rentalDay => {
    if(typeof(rentalDay) !== "number"){
        return 0;
    }
    let totalCost = carRentPrice * rentalDay;
    if (rentalDay >= 7){
        totalCost -= sevenDayDiscount;
    }
    else if(rentalDay >= 3){
        totalCost -= threeDayDiscount;
    }
    return totalCost;
}