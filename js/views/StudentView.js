'use strict';
function StudentView(student) {
    var groupUl = h.getById('groupUl'),
        studentId = student.getId(),
        json = student.toJSON(),
        createdEl,
        delBtn,
        li;

    this.renderStudentsNames = function () {
        li = templator.studentView(json, studentId);
        groupUl.insertAdjacentHTML('beforeend', li);
        createdEl = h.getById(studentId);

        createdEl.addEventListener('click', function () {
            m.publish('show_info', student);
        }, false);

        h.getById(studentId).addEventListener('click', function () {         //remove btn
            delBtn = h.createElem('div', 'delete');
            h.placeNew(createdEl, delBtn);
            delBtn.addEventListener('click', function () {
                m.publish('delete', studentId);
            })
        }, false);
    };

    return this;
}




