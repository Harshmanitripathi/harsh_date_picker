import { daysOfWeek } from "../constants/rootPage";

export const getNoOfDaysInMonths = (presentMonth, presentYear) => {
    const noOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (presentMonth === 1) { // February
        if(presentYear % 4 === 0 || presentYear % 100 === 0 || presentYear % 400 === 0){
            noOfDays[1] = 29;
        }
    }
    return noOfDays[presentMonth];
}

export const getMonthStartingDay = (presentMonth, presentYear) => {
    const getFirstDay = new Date(presentYear, presentMonth, 1);
    const getDayOfWeek = getFirstDay.getDay();
    const weekDayToStartTheMonth = daysOfWeek[getDayOfWeek];
    return weekDayToStartTheMonth;
}

export const dayOfArray = (noOfDays) => {
   const datesArray = Array.from({length: noOfDays}, (_, i) => i+1);
   return datesArray;
}

export const tenYears = (presentYear) => {
    let years = [presentYear];
    for(let i = 0 ; i< 5; i++ ){
        years.unshift(presentYear - i);
        years.push(presentYear + i);
    }
    return years;
}