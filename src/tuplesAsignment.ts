//! Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.


type RelianceStore = [string,number,number]

const displayProducts = (store:RelianceStore) =>{
    const [Pname, Pprice, Pstock] = store;
    console.log(`Product Name: ${Pname} Price of each unit: ₹${Pprice} Stock Available: ${Pstock>200 ? "Availabe" : "Not Availabe"}`)
}

const prod1:RelianceStore = ["Apple", 120, 250]
const prod2:RelianceStore = ["Banana", 80, 180]

displayProducts(prod1);
displayProducts(prod2);


//! Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

type StudentGrade = [string, number]

const displayStudentGrade = (marks:StudentGrade) =>{
    const [Sname, grade] = marks;
    console.log(`You have scored ${grade} in subject ${Sname}`)
}

const sub1: StudentGrade = ["DAA" , 20]
const sub2: StudentGrade = ["OS" , 18]

displayStudentGrade(sub1);
displayStudentGrade(sub2);

//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

type Weatherdata = [string, number, string]

const displayWeather = (local:Weatherdata) => {
    const [cityName, Temperature, weatherCondition] = local;
    console.log(`Today in ${cityName} weather will be ${weatherCondition} and average temperature will be ${Temperature}°C `)
}
const city1:Weatherdata = ["Narainagarh", 30, "Sunny"];
const city2:Weatherdata = ["Kharar", 27, "Cloudy"];
const city3:Weatherdata = ["Chnadigarh", 24, "Rainy"];

displayWeather(city1);
displayWeather(city2);
displayWeather(city3);