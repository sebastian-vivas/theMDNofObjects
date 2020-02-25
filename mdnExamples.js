
let student1 = {
  firstName : "Abigail",
  lastName : "Ezedonmwen ",
  'isValid' : true,
  age : 24,
  hand : "left",
  favColor : "Cash Money Green"
};
// let teacher={
//   function createTeacher(firstName,lastName,'isValid',age,hand,favColor){
//     student1.call{this,firstName,lastName,'isValid',age,hand,favColor}
//     firstName : "Alex",
//     console.log(teacher)
//   }
// };
//
//
// teacher.prototype = object.create(student1.prototype)
// console.log(teacher)




function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

class A
  { display()
    {
      document.writeln("A is invoked");
    }
  }
class B extends A
  {
  }
var b=new B();
b.display();
