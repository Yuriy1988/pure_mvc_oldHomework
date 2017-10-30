'use strict';
function Update() {

    var changeBtn = h.getById('change'),
        closeBtn = h.getById('close'),
        apply = h.getById('apply'),
        addBtn = h.getById('add'),
        form = h.getById('Form'),
        surname = h.getById("surname"),
        gender = h.getById("gender"),
        skype = h.getById("skype"),
        name = h.getById("name"),
        pressedBtn,
        student,
        json;

    addBtn.addEventListener('click', function () {
        pressedBtn = 'add';
        clearForm();
        activateForm();
    }, false);

    closeBtn.addEventListener('click', disableForm, false);

    changeBtn.addEventListener('click', function () {
        pressedBtn = 'change';
        activateForm();
    }, false);

    apply.addEventListener('click', function () {
        getJSON();
        publishNeededChannel();
        disableForm();
        clearForm();
    }, false);

    this.setFormValue = function (student) {
        json = student.toJSON();
        name.value = json.name;
        surname.value = json.surname;
        gender.value = json.gender;
        skype.value = json.skype;
    };

        function getJSON() {
            return student = {
                name: name.value,
                surname: surname.value,
                gender: gender.value,
                skype: skype.value
            };
        }

        function publishNeededChannel () {
            return pressedBtn === 'add' ? m.publish('add', student) : m.publish('update', student);
        }

        function disableForm () {
            form.style.display = 'none';
        }

        function activateForm () {
            form.style.display = 'block';
        }

        function clearForm () {
            name.value = '';
            surname.value = '';
            gender.value = '';
            skype.value = '';
        }

    return this;
}
