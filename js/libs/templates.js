function Templator () {
    var infoDiv,
        tpl,
        key;

    this.infoContainer = function (parentNode) {
        infoDiv = h.getById('info');
        tpl = '<h1>Student\'s info</h1>' +
            '<ul id="infoUl"></ul>';
        infoDiv.innerHTML = tpl;
    };

    this.groupContainer = function (parentNode, groupName) {
        tpl = '<h1><%=groupName%></h1>' +
            '<ul id="groupUl"></ul></div>';
        tpl = tpl.replace('<%=groupName%>', groupName);
        parentNode.innerHTML = tpl;
    };

     this.infoView = function (json) {
        tpl = '<li><%=name%> : <%=json[key]%></li>' +
            '<li><%=surname%> : <%=json[key]%></li>'+
            '<li><%=gender%> : <%=json[key]%></li>'+
            '<li><%=skype%> : <%=json[key]%></li>';

        for (key in json) {
            tpl = tpl.replace('<%='+key+'%>', [key]);
            tpl = tpl.replace('<%=json[key]%>', json[key]);
        }
        return tpl;
    };

    this.studentView = function (json, id) {
        tpl = '<li id="<%=id%>"><%=name%></li>';
        for (key in json) {
            tpl = tpl.replace('<%='+key+'%>', json[key]);
        }
        tpl = tpl.replace('<%=id%>', id);
        return tpl;
    };

    this.form = function () {
        tpl = '<div id="Form">'+
            '<label for="name">Name</label>'+
            '<input type="text" name="name" id="name">'+
            '<br>'+
            '<label for="surname">Surname</label>'+
            '<input type="text" name="surname" id="surname">'+
            '<br>'+
            '<label for="gender">Gender</label>'+
            '<input type="text" name="gender" id="gender">'+
            '<br>'+
            '<label for="skype">Skype</label>'+
            '<input type="text" name="st_skype" id="skype">'+
            '<br>'+
            '<button id="apply"> Apply</button>'+
            '<button id="close">Close</button>'+
            '</div>';

       document.body.insertAdjacentHTML('beforeend', tpl);
    };

    this.AddBtn = function() {
        tpl = '<button id="add">add</button>';
        h.getById('main').insertAdjacentHTML('afterbegin', tpl);
    };

    this.ChangeBtn = function() {
        tpl = '<button id="change">change</button>';
        h.getById('main').insertAdjacentHTML('beforeEnd', tpl);
    };

return this;
}
