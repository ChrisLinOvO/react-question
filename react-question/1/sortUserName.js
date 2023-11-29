/** All following exams please using Javascript only **/

/** 
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,
‘engineer’ or ‘systemAnalytics’.
**/

/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)
to sort this array and print it out.
**/

const usersA = [
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "123",
    note: "Note1",
    profession: "student",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    customerID: "456",
    note: "Note2",
    profession: "freelancer",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    customerID: "789",
    note: "Note3",
    profession: "engineer",
  },
];

function sortUserName(users) {
  const sortedUsers = users.slice().sort((a, b) => {
    const nameA = `${a.firstName}${a.lastName}${a.customerID}`;
    const nameB = `${b.firstName}${b.lastName}${b.customerID}`;
    return nameA.localeCompare(nameB);
  });

  console.log("sortedUsers1", sortedUsers);

  document.getElementById("sortedUsersByName").innerHTML = JSON.stringify(sortedUsers);
}

sortUserName(usersA);
