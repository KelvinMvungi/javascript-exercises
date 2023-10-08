const findTheOldest = function(people) {
    if (people.length === 0) {
        return null; 
      }
    
      let personWithGreatestAge = people[0];
      const currentYear = new Date().getFullYear();
    
      for (let i = 1; i < people.length; i++) {
        const currentPerson = people[i];
        let currentAge;

        if (currentPerson.yearOfDeath){
            currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        } else {
            currentAge = currentYear - currentPerson.birthYear;
        }
        
        
        const oldestAge = personWithGreatestAge.yearOfDeath ? personWithGreatestAge.yearOfDeath - personWithGreatestAge.yearOfBirth : currentYear - personWithGreatestAge.yearOfBirth;
        
        if (currentAge > oldestAge) {
          personWithGreatestAge = currentPerson
        }
      }
    
      return personWithGreatestAge;
};

// Do not edit below this line
module.exports = findTheOldest;
