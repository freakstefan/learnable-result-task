import { studentsResults } from "./studentsObject";

export function calcAverage(data) {
  const sum = data.reduce((acc, score) => acc + score, 0);

  const average = (sum / data.length) * 10;

  return Math.floor(average);
}

// sort by id
export function loadStudentData(id) {
  return studentsResults.find((std) => std.studentId === Number(id));
}

// sort by searchInput {studentName}

export function findStudent(query) {
  const student = studentsResults.filter((std) =>
    std.name.toLowerCase().includes(query.toLowerCase())
  );

  return student;
}

// sort by track

export function findTrack(trackName) {
  const student = studentsResults.filter((std) =>
    std.track.toLowerCase().includes(trackName.toLowerCase())
  );

  return student;
}
