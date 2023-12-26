// STEP 1 - My version
// const library = [
//   {
//     title: "Title 1",
//     author: "Author 1",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: "Title 2",
//     author: "Author 2",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
//   {
//     title: "Title 3",
//     author: "Author 3",
//     status: {
//       own: true,
//       reading: false,
//       read: false,
//     },
//   },
// ];

// STEP 1 - His vefsion

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Mockingjay",
    author: "Suzanne Collins ",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// STEP 2 - My version

const changedLibrary = library.map((library) => {
  return {
    ...library,
    status: {
      ...library.status,
      read: true,
    },
  };
});

// STEP 2 - His version

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// STEP 3 - My Version and his version - the same

const { title: firstBook } = library[0];

console.log(firstBook);

// STEP 4 - My version and his version - the same

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
