'use strict';
function Student (name, surname, gender, skype) {
    var name = name || 'n/a',
        surname = surname || 'n/a',
        gender = gender || 'n/a',
        skype = skype || 'n/a',
        id = 0;

    this.toJSON = function () {
        return {
            name: name,
            surname: surname,
            gender: gender,
            skype: skype
        }
    };

    this.update = function (updated) {
        name = updated.name || 'n/a';
        surname = updated.surname || 'n/a';
        gender = updated.gender || 'n/a';
        skype = updated.skype || 'n/a';
    };

    this.setId = function (setId) {
        id = setId;
    };

    this.getId = function () {
        return id;
    };

    return this;
}
