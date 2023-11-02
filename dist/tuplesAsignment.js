"use strict";
const displayProducts = (store) => {
    const [Pname, Pprice, Pstock] = store;
    console.log(`Product Name: ${Pname} Price of each unit: ₹${Pprice} Stock Available: ${Pstock > 200 ? "Availabe" : "Not Availabe"}`);
};
const prod1 = ["Apple", 120, 250];
const prod2 = ["Banana", 80, 180];
displayProducts(prod1);
displayProducts(prod2);
const displayStudentGrade = (marks) => {
    const [Sname, grade] = marks;
    console.log(`You have scored ${grade} in subject ${Sname}`);
};
const sub1 = ["DAA", 20];
const sub2 = ["OS", 18];
displayStudentGrade(sub1);
displayStudentGrade(sub2);
const displayWeather = (local) => {
    const [cityName, Temperature, weatherCondition] = local;
    console.log(`Today in ${cityName} weather will be ${weatherCondition} and average temperature will be ${Temperature}°C `);
};
const city1 = ["Narainagarh", 30, "Sunny"];
const city2 = ["Kharar", 27, "Cloudy"];
const city3 = ["Chnadigarh", 24, "Rainy"];
displayWeather(city1);
displayWeather(city2);
displayWeather(city3);
//# sourceMappingURL=tuplesAsignment.js.map