'use strict';
function GroupView () {
    var addedStudent = group.getAddedStudent(),
        groupName = group.getGroupName(),
        students = group.getStudents(),
        groupDiv = h.getById('group'),
        studentViews = [],
        selectedStudent,
        removedEl;

    templator.infoContainer();
    templator.groupContainer(groupDiv, groupName);
    initStudentViews();

    this.studentRemove = function (id) {
        removedEl = h.getById(id);
        removedEl.remove();
        group.remove(id);
    };

    this.getSelectedStudent = function (student) {
        return selectedStudent = student;
    };

    this.update = function (student) {
        selectedStudent.update(student);
        h.clearNode(groupDiv);
        templator.groupContainer(groupDiv, groupName);
        initStudentViews();
        m.publish('show_info', selectedStudent)
    };

    this.add = function (student) {
        group.add(student);
        addedStudent = group.getAddedStudent();
        m.publish('show_info', addedStudent);
        studentViews.push(new StudentView (addedStudent));
        studentViews[studentViews.length-1].renderStudentsNames();
    };

    function initStudentViews () {
        students.forEach(function (student, i) {
            studentViews[i] = new StudentView(student);
            studentViews[i].renderStudentsNames();
        });
    }

    return this;
}
