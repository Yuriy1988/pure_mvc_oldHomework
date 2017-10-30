function Helper () {
var tmp;
    this.getById = function (id) {
       return document.getElementById(id)
    };

    this.clearNode = function (node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    };

    this.createElem = function (e, id) {
        tmp = document.createElement(e);
        tmp.setAttribute('id', id);
        return tmp;
    };

    this.placeNew = function (where, e) {
        if (e) {
            e.remove();
        }
        where.appendChild(e);
    };


    return this;
}

