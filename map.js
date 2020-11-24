var module = require('colombia-holidays');

var holidaysColombia = module.getColombiaHolidaysByYear('2020');
let nameHolidaysDates = holidaysColombia.map(holidays => holidays.celebration)
let holidaysDates = holidaysColombia.map(({holiday, celebration}) => ({holiday, celebration:celebration.toUpperCase()}))
console.log(holidaysDates)