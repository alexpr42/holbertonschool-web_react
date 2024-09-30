// Create the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Define two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Render a table using vanilla JS
const table: HTMLTableElement = document.createElement('table');
const tableHead: HTMLTableSectionElement = table.createTHead();
const tableRowHead: HTMLTableRowElement = tableHead.insertRow();
const th1: HTMLTableCellElement = tableRowHead.insertCell();
th1.textContent = "First Name";
const th2: HTMLTableCellElement = tableRowHead.insertCell();
th2.textContent = "Location";

// Append rows
studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    const cell2: HTMLTableCellElement = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

// Append the table to the document
document.body.appendChild(table);
