'use strict';
var group = new Group('Dp-093 JS', [
        new Student('Vladyslava', 'Tyschenko', 'female', 'pretty_vampire777'),
        new Student('Anastasyia', 'Serheeva', 'female', 'anastacia.sergeeva'),
        new Student('Anna', 'Hranovs\'ka', 'female', 'xotja_an'),
        new Student('Yuryi', 'Tataryntsev', 'male', 'tatarincev1988'),
        new Student('Artem', 'Zhylko', 'male', 'artemzhylko'),
        new Student('Anastasiia', 'Manil\'nykova', 'female', 'lisssa7771'),
        new Student('Denys', 'Poznukhov', 'male', 'oggythetoad'),
        new Student('Yana', 'Sharipbaeva', 'female', 'sharipbaeva.yana')
    ]);

function Group (name, students) {

    var maxId = 0,
        studentId,
        id;

    this.add = function (student) {
        student = new Student(student.name, student.surname, student.gender, student.skype);
        students.push(student);
        student.setId(getNewId());
    };

    this.getGroupName = function () {
        return name;
    };

    this.getStudents = function () {
        return students;
    };

    this.remove = function (removedId) {
        students.forEach(function (student, i) {
            if (removedId === student.getId()) {
                students.splice(i, 1);
            }
        })
    };

    this.getStudentById = function (id) {
       students.forEach(function (student) {
            if (student.getId() === id) {
                return studentId = student;
            }
        });
        return studentId;
    };

    this.getAddedStudent = function () {
        return students[students.length-1];
    };

    function getNewId () {    //функция создает id, id всегда будет уникальным;
        id = maxId + 1;
        maxId = id;
        return id;
    }

      (function () {           //присваеваем всем текущим студентам группы id
        students.forEach(function (student) {
            student.setId(getNewId());
        })
    }());

    return this;
}