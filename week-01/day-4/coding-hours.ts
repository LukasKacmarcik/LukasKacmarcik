//coding-hours

let codeHoursDay = 6;
let weeksInSemester = 17;
let attendeeCodingHoursPerSemester = (6*5*17);
let workHoursPerSemester = (52*17);
let percentage = Math.round((attendeeCodingHoursPerSemester/workHoursPerSemester)*100);

console.log(attendeeCodingHoursPerSemester);

console.log(percentage + "%");
