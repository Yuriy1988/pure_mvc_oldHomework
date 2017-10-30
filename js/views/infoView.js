'use strict';
function InfoView () {

    this.info = function (student) {
        var infoUl = h.getById('infoUl'),
            json = student.toJSON(),
            li;

        h.clearNode(infoUl);

        li = templator.infoView(json);
        infoUl.insertAdjacentHTML('beforeend', li);
    };

    return this;
}