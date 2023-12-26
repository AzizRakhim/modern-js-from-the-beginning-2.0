<<<<<<< HEAD
let x;

let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();
// they both give timestamp of current date in milliseconds

x = d.getFullYear();
x = d.getMonth() + 1;

x = d.getDate();
// 27. real date
x = d.getDay();
// 5. day of the month. Friday hence 5

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Formats date based on the locale
x = Intl.DateTimeFormat("en-US").format(d);
// 10/27/2023 - US
x = Intl.DateTimeFormat("en-GB").format(d);
// 27/10/2023 - Great Britain
x = Intl.DateTimeFormat("default").format(d);
// 27.10.2023 - My local region

x = Intl.DateTimeFormat("default", { month: "long" }).format(d);
// октябрь. Russian because of locale

// short form
x = d.toLocaleString("default", { month: "short" });
// окт.

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
});

console.log(x);
=======
let x;

let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();
// they both give timestamp of current date in milliseconds

x = d.getFullYear();
x = d.getMonth() + 1;

x = d.getDate();
// 27. real date
x = d.getDay();
// 5. day of the month. Friday hence 5

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Formats date based on the locale
x = Intl.DateTimeFormat("en-US").format(d);
// 10/27/2023 - US
x = Intl.DateTimeFormat("en-GB").format(d);
// 27/10/2023 - Great Britain
x = Intl.DateTimeFormat("default").format(d);
// 27.10.2023 - My local region

x = Intl.DateTimeFormat("default", { month: "long" }).format(d);
// октябрь. Russian because of locale

// short form
x = d.toLocaleString("default", { month: "short" });
// окт.

x = d.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
});

console.log(x);
>>>>>>> test
