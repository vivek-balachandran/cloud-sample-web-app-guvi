class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Admin extends User {
  constructor(name, permissions) {
    super(name); // Calls the User constructor
    this.permissions = permissions;
  }

  deleteUser(user) {
    console.log(`${this.name} deleted ${user.name}`);
  }
}

let adminUser = new Admin("Vivek", "Admin");
console.log(adminUser);
adminUser.sayHello();
adminUser.deleteUser(new Admin("Sachin"));
