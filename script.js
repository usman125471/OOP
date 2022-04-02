'use strict';

/*
//// CONSTRUCTER FUNCTIONS AND NEW OPERATOR //////

const Man = function (fName, lName,birthYear, age,) {
    this.fName = fName;
    this.lName = lName;
    this.birthYear = birthYear;
    this.age = age;

    // DON'T DO THIS
    // this.calcAga = function () {
    //     console.log(2022-this.birthYear);
    // }
}

const usman = new Man('Muhammad', 'Usman',2002, 20);
console.log(usman); 

/// FUCTIONALITY
// 1: An EMPTY OBJECT CREATED like ('New{}')
// 2: then function is CALLED (this = new)
// 3: newly created object is linked to PROTOTYPE
// 4: function automatically RETURNS

const saifal = new Man('Saifal', 'Bilal', 2004, 18);
const salman = new Man('Salman', 'Bilal', 2006, 14);
const Ali = new Man('Ali', 'Hassan', 2004, 16);
console.log();
console.log();
console.log(Ali, saifal, salman);

const me = 'usman';
console.log(usman instanceof Man);
console.log(me instanceof Man);

///// PROTOTYPES /////

console.log(Man.prototype);

Man.prototype.calcAga = function () {
  console.log(2022 - this.birthYear);
};

Ali.calcAga();
usman.calcAga();
console.log(usman.__proto__);  
console.log(usman.__proto__ === Man.prototype);

Man.prototype.relation = 'Friends';
console.log(usman.relation, Ali.relation);
console.log(usman.hasOwnProperty('fName'));

console.log(usman.__proto__);
console.log(usman.__proto__.__proto__);
console.log(usman.__proto__.__proto__.__proto__);

console.log(Man.prototype.costructor);
console.dir(Man.prototype.costructor);


const arr = [2, 6, 1, 2, 6, 13, 16];
console.log(arr.__proto__);
console.log(arr.__proto__===Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)]
};

console.log(arr.unique());

const h1=document.querySelector('h1')
console.log(h1);

//      CODING CHALANGE      //

const Car = function (carName,speed) {
  this.carName = carName;
  this.speed = speed;
}

Car.prototype.accelrate = function () {
  this.speed += 10;
  console.log(`My ${this.carName} car is moving with speed of ${this.speed} km/h.`);
}

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`My ${this.carName} car is moving with speed of ${this.speed} km/h.`);
}
const bmw = new Car('BMW', 120);

bmw.accelrate();
bmw.brake();


///// ES6 SLASSES /////

// -class expression- //
//const Mancl = class { };

// -class declaration- //
class Mancl{
constructor(firstName,birthYear){  
  this.firstName = firstName;
  this.birthYear = birthYear;
}
  calcAge() {
    return console.log(2022 - this.birthYear);
  };

  greet() {
  console.log(`Hey ${this.firstName}!`);
};

get age() {
  return 2000-this.birthYear;
}
  set fullName(name) {
    if (name.includes(' ')) this, _fullName = name;
    else alert(`${name} is not a fullname.`)
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey = function () {
  console.log(`Hey there...😍😍😍`);
}
}

Mancl.hey();

const dogger = new Mancl('waqas', 2000);
console.log(dogger);
dogger.calcAge();

console.log(dogger.__proto__ === Mancl.prototype);

Mancl.hey();

// Mancl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}!`);
// }
dogger.greet();


///// SETTERS AND GETTERS /////

const acc = {
  user: 'usman',
  movments: [12, 547, 392, 300],

  get latest() {
    return this.movments.slice(-1).pop();
  },

  set latest(mov) {
    return this.movments.push(mov);
  }
};

console.log(acc.latest);

acc.latest = 100;
console.log(acc.latest,acc.movments);


///// STATIC METHODS /////

const Man = function (fName, lName, birthYear, age) {
  this.fName = fName;
  this.lName = lName;
  this.birthYear = birthYear;
  this.age = age;

  // DON'T DO THIS
  // this.calcAga = function () {
  //     console.log(2022-this.birthYear);
  // }
};

const usman = new Man('Muhammad', 'Usman', 2002, 20);

const me = 'usman';
console.log(usman instanceof Man);
console.log(me instanceof Man);

Man.hey = function () {
  console.log(`Hey there...😍😍😍`);
};
Man.hey();


//      CODING CHALLANGE      //

class Carcl {
  constructor(carName, speed) {
    this.carName = carName;
    this.speed = speed;
  };

  accelrate() {
    this.speed += 10;
    console.log(
      `My ${this.carName} car is moving with speed of ${this.speed} km/h.`
    )
  }

  brake() {
    this.speed -= 5;
    console.log(
      `My ${this.carName} car is moving with speed of ${this.speed} km/h.`
    )
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    return this.speed=speed * 1.6;
  }

}

const Baugati = new Carcl('Baugati', 210);

console.log(Baugati.speedUS);
Baugati.accelrate();

Baugati.speedUS = 100;
console.log(Baugati);


///// INHERITANCE /////

const Man = function (fName, lName, birthYear) {
  this.fName = fName;
  this.lName = lName;
  this.birthYear = birthYear;
}

Man.prototype.calcAga = function () {
  console.log(2022 - this.birthYear);
}

const Child = function (fName, lName, birthYear, course) {
  Man.call(this, fName, lName, birthYear);
  this.course = course;
}

Child.prototype = Object.create(Man.prototype);

Child.prototype.introduce = function () {
 console.log(`My name is ${this.fName} and currently i am doing ${this.course} course...`); 

}

const faizan = new Child('Faizan', 'Fazooo', 2016, 'Web Devolper');

faizan.introduce();
faizan.calcAga();


//      CODING CHALLANGE     //

const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed;
};

Car.prototype.accelrate = function () {
  this.speed += 10;
  console.log(
    `My ${this.carName} car is moving with speed of ${this.speed} km/h.`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `My ${this.carName} car is moving with speed of ${this.speed} km/h.`
  )
}


const Ev = function (carName, speed, battery) {
  Car.call(this, carName, speed);
  this.battery = battery;
}

Ev.prototype = Object.create(Car.prototype);
Ev.prototype.batteryCharged = function (chargedTo) {
  return this.battery= chargedTo;
}

Ev.prototype.accelrate = function () {
  this.speed += 20;
  this.battery--;
  console.log(
    `My ${this.carName} car is moving with speed of ${this.speed} km/h, having battery ${this.battery} %.`
  );
}

const suzuki = new Ev('suzuki', 90, 22);

console.log(suzuki);

suzuki.batteryCharged(95);

console.log(suzuki);

suzuki.accelrate(20);


///// INHERITNCE BY ES6 CLASSES /////

class Mancl{
  constructor(firstName,birthYear){  
   this.firstName = firstName;
   this.birthYear = birthYear;
  }

  calcAge() {
    return console.log(2022 - this.birthYear);
  };

  greet() {
   console.log(`Hey ${this.firstName}!`);
  }

  get age() {
    return 2000-this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this, _fullName = name;
    else alert(`${name} is not a fullname.`)
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey = function () {
   console.log(`Hey there...😍😍😍`);
  } 
}

class ChildCl extends (Mancl) {

  constructor(firstName, birthYear, course) {
  
    super(firstName, birthYear)

    this.course = course; 

  }   
  
  introduce(){
    console.log(
      `My name is ${this.firstName} and currently i am doing ${this.course} course...`
    );
  }

}
 
const ranjha = new ChildCl('Ranjha Shb', 2009, 'Web Devolpment');

console.log(ranjha);

ranjha.introduce();
ranjha.calcAge();


///// INHERITANCE BY OBJECT.CREATE /////

const ManProto = {
  calcAge() {
    console.log(2030-this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const maani = Object.create(ManProto);
const boyProto = Object.create(ManProto);

boyProto.init = function (firstName, birthYear, course) {
  ManProto.init.call(this, firstName, birthYear)
  this.course = course;

}

const ansar = Object.create(boyProto);
ansar.init('Ansar Abbas', 2005, 'Webber');

console.log(ansar);
// ansar.introduce();
ansar.calcAge();


///// EXAMPLES /////

class Acount{
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this._movments = [];
    this.local = navigator.language;

    console.log(`Thanks for opening an account, Dear ${this.owner}`);
  }

  // PUBLIC INTERFACE

  getMovements() {
    return this._movments;
  }

  deposit(val) {
    this._movments.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approvalLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approvalLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const usmanAcc = new Acount('maani bhai', 'EUR', 125471);

// usmanAcc.deposit(5890);
// usmanAcc.withdraw(5890);
// usmanAcc.requestLoan(5890);
// usmanAcc.approvalLoan(5890);

// // usmanAcc._movments.push(451);
// // usmanAcc._movments.push(1394);
// // console.log(usmanAcc.getMovments());

// console.log(usmanAcc);
// console.log(usmanAcc.pin);


///// ENCAPSULATION /////

// 1)--> public fields
// 2)--> private fields
// 3)--> public methods
// 4)--> private methods

class Acount {
  // 1)--> public fields
  local = navigator.language;
  // _movments = [];

  // // 2)--> private fields
  // #movments = [];
  // #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movments = [];
    this.local = navigator.language;

    console.log(`Thanks for opening an account, Dear ${this.owner}`);
  }

  // 3)--> public methods
  // PUBLIC INTERFACE

  getMovements() {
    // return this._movments;
    return this.movments;
  }

  deposit(val) {
    // this._movments.push(val);
    this.movments.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  approvalLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approvalLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
   return this
  }
  
  // // 4)--> private methods
  // #approvalLoan(val) {
  //   return true;
  // }
    
  static helper() {
    console.log(`Hey Myself USMAN, Here...!
   -->HELPER ONE`);    
  }

}

const usmanAcc = new Acount('maani bhai', 'EUR', 125471);

usmanAcc.deposit(5890);
usmanAcc.withdraw(5890);
usmanAcc.requestLoan(5890);
usmanAcc.approvalLoan(5890);

// usmanAcc._movments.push(451);
// usmanAcc._movments.push(1394);

console.log(usmanAcc.getMovements());

console.log(usmanAcc);
console.log(usmanAcc._pin);
// console.log(usmanAcc.#pin);

Acount.helper();


///// CHAINING METHODS /////

usmanAcc.deposit(5000).deposit(200).requestLoan(600).withdraw(2059);

console.log(usmanAcc.getMovements());
*/


/////     _---> DONE <---_      \\\\\
