interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [propName: string]: any;
  }

  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
 
  const teacher3: Teacher = {
    firstName: "muluneh",
    lastName: "hilu",
    location: "ethiopia",
    fullTimeEmployee: false,
    contract: false,
  };
  console.log(teacher3);
  
  const director1: Directors = {
    firstName: "samrawit",
    lastName: "fetene",
    location: "hawassa",
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);
  
  
  function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }
  
  console.log(printTeacher("natnael", "girma"));
  
  
  interface classInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  
  
  interface classConstructor {
    new (firstName: string, lastName: string): classInterface;
  }
  

  class StudentClass implements classInterface {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // creating instance of StudentClass
  const studentClass: StudentClass = new StudentClass("Abdisa", "Gemechu");
  console.log(studentClass.displayName());
  console.log(studentClass.workOnHomework());