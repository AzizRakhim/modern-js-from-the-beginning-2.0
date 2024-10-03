// fetch("https://httpstat.us/200")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   });

// fetch("https://httpstat.us/404")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success"); // This will run no matter what. Even though, the response status is 404 and there is a browser error, we can see stull success in the console 'cause it will get run no matter what
//   })
//   .catch((error) => {
//     console.log(error);
//   }); // We might think that if we add catch, .then won't fire off and catch will work. But with fetch, it is different. Instead, catch won't work and .then will fire off even though we have a catch. With axios, it is handled, if the status code is not around 200 range, the catch will fire off. But with fetch, it is kinda manual. U yourself need to add checks for that. With fetch, catch is usually for network errors

// Catch runs on a network error
// fetch("https://hello123.net")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((error) => {
//     console.log(error);
//   }); // Catch won't fire off on a status error like 404. Instead, it will fire off when there is a network error like when there is not such kinda url at all

// Test with response.ok
// fetch("https:/httpstat.us/404")
//   .then((response) => {
//     console.log(response.status);
//     console.log(response.ok);
//     console.log(response.statusText);

//     if (!response.ok) {
//       throw new Error("Request Failed"); // As the fetch won't trigger catch when there is a status error, we need to handle it manually and the easiest way is by checking response.ok. If it is not ok, we simply throw a new error and this will cause catch to fire up. What we pass to new Error() will be passed as an error props on catch
//     }
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Check for specific code
fetch("https:/httpstat.us/200")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else if (response.status === 500) {
      throw new Error("Server Error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
    return response;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  });
