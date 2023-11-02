const favHobbies = (hobby: string | any[]): any => {
  if (typeof hobby === "object" || Array.isArray(hobby)) {
    console.log(hobby);
  } else {
    console.log(hobby);
  }
};

favHobbies("coding");
console.log("---------------------------")
favHobbies(["coding", "sighSeeing", "riding"]);
