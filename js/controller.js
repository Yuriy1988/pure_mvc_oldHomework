'use strict';
var templator = new Templator(),
    h = new Helper,
    m = new Mediator();

function Controller () {
    templator.AddBtn();
    templator.ChangeBtn();
    templator.form();

    var groupView = new GroupView(group),
        infoView = new InfoView(),
        upadate = new Update();

    m.subscribe('show_info', infoView.info);
    m.subscribe('show_info', groupView.getSelectedStudent);
    m.subscribe('show_info', upadate.setFormValue);
    m.subscribe('delete', groupView.studentRemove);
    m.subscribe('add', groupView.add);
    m.subscribe('update', groupView.update);

    return this;
}
