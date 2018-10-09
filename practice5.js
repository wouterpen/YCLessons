const practiceObject = {
    firstname : "Wouter",
    lastname : "Pen",
    age: 26,
    height: 1.80,
    weight: 90,
    fullname : function(){
        return this.firstname + ' ' + this.lastname;
    },
    BMI : function(){
        return this.weight / (this.height * 2);
    },
};

// var BMIWouter = practiceObject.BMI

console.log(practiceObject.fullname());
console.log(practiceObject.BMI());
console.log(practiceObject.firstname); 