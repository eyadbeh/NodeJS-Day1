const fs = require('fs');
const path = require('path');

const filePath = './students.json';

const studentData = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    course: "Computer Science",
    grades: {
      math: 90,
      programming: 95,
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    course: "Data Science",
    grades: {
      statistics: 88,
      machine_learning: 92,
    },
  },
  {
    id: 3,
    name: "Carol Williams",
    age: 21,
    course: "Web Development",
    grades: {
      html: 95,
      javascript: 89,
    },
  },
];

// 1. Write Sync
function writeDataSync(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Data written synchronously');
}

// 1. Write Async
function writeDataAsync(data) {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
    if (err) return console.error('Async Write Error:', err);
    console.log('Data written asynchronously');
  });
}

// 2. Read Sync
function readDataSync() {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    if (!raw.trim()) {
      console.warn('Warning: students.json is empty');
      return [];
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read or parse students.json:', err.message);
    return [];
  }
}


// 2. Read Async
function readDataAsync(callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return console.error('Async Read Error:', err);
    callback(JSON.parse(data));
  });
}

// 3. Add new student Sync
function addStudentSync(newStudent) {
  const students = readDataSync();
  students.push(newStudent);
  writeDataSync(students);
  console.log('Student added (sync)');
}

// 3. Add new student Async
function addStudentAsync(newStudent) {
  readDataAsync((students) => {
    students.push(newStudent);
    writeDataAsync(students);
    console.log('Student added (async)');
  });
}

// 4. Update course by ID
function updateCourseSync(id, newCourse) {
  const students = readDataSync();
  const student = students.find(s => s.id === id);
  if (student) {
    student.course = newCourse;
    writeDataSync(students);
    console.log(`Course updated for ID ${id} (sync)`);
  } else {
    console.log('Student not found');
  }
}

// 5. Delete student by ID
function deleteStudentSync(id) {
  let students = readDataSync();
  students = students.filter(s => s.id !== id);
  writeDataSync(students);
  console.log(`Student with ID ${id} deleted (sync)`);
}

writeDataSync(studentData);

// writeDataAsync(studentData);

console.log(readDataSync());

readDataAsync(data => console.log(data));

addStudentSync({ id: 4, name: 'Eyad', age: 23, course: 'AI', grades: { ai: 100 } });

addStudentAsync({ id: 5, name: 'Osama', age: 60, course: 'Cybersecurity', grades: { security: 100 } });

updateCourseSync(2, 'Advanced Data Science');

deleteStudentSync(1);
