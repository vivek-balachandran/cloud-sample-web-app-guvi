class User {
  
  #balance = 10;
  
  interest = 10;
  
  constructor(name) {
    this.name = name;
  }
  
  setMobile(mobile) {
    this.mobile = mobile;
  }

  sayHello() {
    console.log(`Hello, I am ${this.name}`);
  }
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  showBalance() {
    return `Your balance is ${this.#balance}`;
  }
}

let user = new User("Vivek");
console.log(user);
user.sayHello();

console.log(user.name);
user.setMobile(9788);
console.log(user.balance);
user.deposit(100);
console.log(user.balance);
console.log(user.showBalance());

console.log(user.interest);
