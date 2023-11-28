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
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >
‘student’’)
**/

const usersB = [
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

function sortByType(users) {
  const professionOrder = {
    systemAnalytics: 1,
    engineer: 2,
    productOwner: 3,
    freelancer: 4,
    student: 5,
  };

  const sortedUsers = users.slice().sort((a, b) => {
    const professionA = a.profession.toLowerCase();
    const professionB = b.profession.toLowerCase();
    return professionOrder[professionA] - professionOrder[professionB];
  });

  console.log("sortedUsers2", sortedUsers);

  const resultHtml = sortedUsers
    .map((user) => `${user.firstName} ${user.lastName} ${user.profession}`)
    .join("<br>");
  document.getElementById("sortedUsersByProfession").innerHTML = resultHtml;
}

sortByType(usersB);
