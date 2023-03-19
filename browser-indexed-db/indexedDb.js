// example from mdn
// https://github.com/mdn/dom-examples/blob/main/to-do-notifications/scripts/todo.js

// indexedDB is an object store database
// we can store javascript objects, even files

console.log("Indexed db script running");

// step 1 is creating a database in indexedDB with a version number
const request = indexedDB.open("myDatabase", 1);

// everything with indexed is asynchronous and works with event based programming
// when we create a database or change it's version, upgradeneeded event is fired. we cna listen to it with request.onupgradeneeded or with request.addEventListener('upgradeneeded')

// so this doesn't run every time. runs on version upgrade or first time
// run this once to setup your schema

request.addEventListener("upgradeneeded", (event) => {
  // get the database.

  const database = event.target.result;

  console.log(database);

  // creating a user object store (like a table. )
  // keyPath specifies the primary key for the store.
  // here we are saying every user will have an id as the primary key
  const userStore = database.createObjectStore("users", { keyPath: "id" });

  console.log(userStore);

  // we can create index on a key
  // first parameter is the name of the index
  // second parameter is the name of the field we are indexing. we are going to be searching for users using their name
  userStore.createIndex("name", "name");

  // adding a record

  userStore.add({
    id: 0,
    name: "Samrood",
    isWorking: true,
  });

  userStore.add({
    id: 1,
    name: "Abhiram",
    isWorking: true,
  });
});

// on error

// request.addEventListener("error", console.error);

// runs every time.
request.addEventListener("success", (event) => {
  const database = event.target.result;
  console.log(database);

  // do transactions
  // transaction takes in
  // first being an array of the the object stores we are accessing
  // second being the type of transactions we are doing
  {
    const transaction = database.transaction(["users"], "readwrite");

    const req = transaction.objectStore("users").add({
      id: 1,
      name: "Samrood",
      isWorking: true,
    });

    req.addEventListener("success", (event) => {
      console.log(event, "user added");
    });
  }

  {
    const transaction = database.transaction(["users"], "readwrite");

    transaction.objectStore("users").add({
      id: 2,
      name: "Abhiram",
      isWorking: true,
    });
  }

  // deleting a record
  {
    const transaction = database.transaction(["users"], "readwrite");

    transaction.objectStore("users").delete(2);
  }

  // getting a record
  {
    const transaction = database.transaction(["users"], "readwrite");

    const req = transaction.objectStore("users").get(1);

    req.addEventListener("success", (event) => {
      console.log(event.target.result); // record
    });
  }

  // getting a record with index

  {
    const transaction = database.transaction(["users"], "readwrite");

    const req = transaction.objectStore("users").index("name").get("Samrood"); // if there are multiple users with Samrood, it's gonna return the first one

    req.addEventListener("success", (event) => {
      console.log(event.target.result, "got with index"); // record
    });
  }

  {
    const transaction = database.transaction(["users"], "readwrite");

    const req = transaction.objectStore("users").put({
      // we can also get the record first,
      // mutate necessary field in the record and
      // pass it here if we want to avoid specifying every field again
      id: 1,
      name: "Samrood Ali",
      isWorking: true,
    });

    req.addEventListener("success", (event) => {
      console.log(event.target.result, "update"); // record
    });

    req.addEventListener("error", (error) => {
      console.log(error);
    });
  }
});
