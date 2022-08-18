// Code your solution in this file!
function returnFirstTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
     return drivers.slice(0, 2)
}

function returnLastTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
     return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int) {
    return function (fare) {
        return fare * int;
    }
}

const fareMultiplier = createFareMultiplier();

const fareDoubler= (fareMultiplier) => fareMultiplier * 2;

const fareTripler = (fareMultiplier) => fareMultiplier * 3;

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers)
}