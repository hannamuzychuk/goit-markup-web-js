// const getUserNames = (users) => {
//     const usersName = users.map(user => user.name);
//     return usersName;
// }
const getUserNames = users => users.map(user => user.name);

console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName))

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []


const sortByDescendingFriendCount = users => users.toSorted((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);


console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

const getTotalBalanceByGender = (users, gender) => users 
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0)



const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
