<<<<<<< HEAD
let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 10, 12, 30, 0);

d = new Date("2021-07-10T12:30:00");
d = new Date("07/10/2021 12:30:00");
d = new Date("2022-07-10");
d = new Date("07-10-2022");

d = Date.now();
// 1698421573286. Current date in milliseconds

d = new Date();
d = d.getTime();
// 1657438200000. Gets current time in milliseconds

d.valueOf();

d = new Date(1698421801925);
// can get current date by time stamp

d = Math.floor(Date.now() / 1000);
// 1698421920. Current date in seconds. 1 second is 1000 milliseconds

console.log(d);
=======
let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 10, 12, 30, 0);

d = new Date("2021-07-10T12:30:00");
d = new Date("07/10/2021 12:30:00");
d = new Date("2022-07-10");
d = new Date("07-10-2022");

d = Date.now();
// 1698421573286. Current date in milliseconds

d = new Date();
d = d.getTime();
// 1657438200000. Gets current time in milliseconds

d.valueOf();

d = new Date(1698421801925);
// can get current date by time stamp

d = Math.floor(Date.now() / 1000);
// 1698421920. Current date in seconds. 1 second is 1000 milliseconds

console.log(d);
>>>>>>> test
