let object = {
    Name,
    Address,
    Age,

    Print: () => {
        console.log(`Name: ${this.Name} Address: ${this.Address}`);
    },
    constructor(Name, Address, Age) {
        this.Name = Name;
        this.Address = Address;
        this.Age = Age;
    }
}

var a = new object("Ahmad", "Cairo Egypt", 25);
a.Print();