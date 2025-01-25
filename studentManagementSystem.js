// //Base class representing a person
class Person {
    #name;  // Private field for name (encalpsulation)
    #id;    // Private field for ID (encalpsulation)

    constructor(name, id) {
        this.#name = name;
        this.#id = id;
    }

    getDetails() {
        return `Name: ${this.#name}, ID: ${this.#id}`;
    }

    getName() {
        return this.#name;
    }

    getId() {
        return this.#id;
    }
}

// Student class inheriting from Person class
class Student extends Person {
    #grades = [];  // Private field to store grades (encalpsulation)

    constructor(name, id) {
        super(name, id);
    }

    // Method to add a grade
    addGrade(grade) {
        if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
            this.#grades.push(grade);
        } else {
            console.log('Invalid grade. Please enter a number between 0 and 100.');
        }
    }

    // Method to calculate average grade
    calculateAverage() {
        if (this.#grades.length === 0) {
            return 'No grades available';
        }
        const sum = this.#grades.reduce((total, grade) => total + grade, 0);
        return (sum / this.#grades.length).toFixed(2);
    }

    getDetails() {
        return `${super.getDetails()}, Grades: [${this.#grades.join(', ')}], Average: ${this.calculateAverage()}`;
    }
}

// StudentManager class to manage students
class StudentManager {
    #students = [];  // Private field to store student list

    // Method to add a new student
    addStudent(name, id) {
        const student = new Student(name, id);
        this.#students.push(student);
        return student;
    }

    // Method to retrieve a student by ID
    getStudent(id) {
        return this.#students.find(student => student.getId() === id) || 'Student not found';
    }

    // Method to list all students
    listAllStudents() {
        return this.#students.map(student => student.getDetails()).join('\n');
    }
}

// Example usage
const manager = new StudentManager();
const student1 = manager.addStudent('Alice Johnson', 101);
const student2 = manager.addStudent('Bob Smith', 102);

student1.addGrade(85);
student1.addGrade(90);
student2.addGrade(78);
student2.addGrade(88);
student2.addGrade(92);

console.log(manager.listAllStudents());

console.log(manager.getStudent(101).getDetails());

