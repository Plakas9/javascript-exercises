const findTheOldest = function(people) {
  const date = new Date();
  currYear = date.getFullYear();
    people.sort((younger,older)=>{
        
      if(!older["yearOfDeath"]){older["yearOfDeath"] = currYear;}
      if(!younger["yearOfDeath"]){younger["yearOfDeath"] = currYear;}
        
        
        let youngAge = younger.yearOfDeath - younger.yearOfBirth;
        let oldAge = older.yearOfDeath - older.yearOfBirth;
        return oldAge - youngAge; 
    });
    console.log(people[0]);
    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
 const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
console.log(findTheOldest(people).name);