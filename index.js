// Code your solution in this file!

const returnFirstTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(-2);
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


  function createFareMultiplier(someIntger){
    return function(){
      return someIntger * someIntger;
    }
  }
  
   function fareDoubler(someIntger){
    return someIntger * 2;
  }