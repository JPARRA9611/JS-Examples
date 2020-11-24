var module = require('colombia-holidays');

var holidaysColombia = module.getColombiaHolidaysByYear('2020');
let januaryHolidays = holidaysColombia.filter((holidays) => {
                            let dateHoliday = new Date(holidays.celebrationDay)
                            return (dateHoliday.getMonth()+1) == 1
                        });

console.log(januaryHolidays)
