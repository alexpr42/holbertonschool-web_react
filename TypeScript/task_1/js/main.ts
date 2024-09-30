// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;  // Allows additional properties
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;  // New attribute required by Directors
}

// Example object using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;  // Function signature
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));  // Output: J. Doe

// Define the interface for the class constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Define the interface for the Student class
interface StudentInterface {
  workOnHomework(): string;  // Method to return "Currently working"
  displayName(): string;     // Method to return the first name
}

// Implement the StudentClass
class StudentClass implements StudentInterface {
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

// Example usage of the StudentClass
const student1 = new StudentClass('John', 'Doe');
console.log(student1.displayName());  // Output: John
console.log(student1.workOnHomework());  // Output: Currently working
