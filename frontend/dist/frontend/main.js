(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+4L4":
/*!********************************************************!*\
  !*** ./src/app/pages/task-view/task-view.component.ts ***!
  \********************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/task.service */ "GglZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a1) { return ["/lists", a1]; };
const _c1 = function () { return ["is-active"]; };
function TaskViewComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_a_6_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const list_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onListDelete(list_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, list_r3._id))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, list_r3.title));
} }
function TaskViewComponent_div_12_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_12_p_3_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onTaskClick(task_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", task_r6.body, "");
} }
function TaskViewComponent_div_12_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_12_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const task_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.extendItem = task_r6._id; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskViewComponent_div_12_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_12_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.extendItem = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1) { return { "complete": a0, "extended": a1 }; };
const _c3 = function (a1, a2) { return ["/lists", a1, a2, "edit-task"]; };
function TaskViewComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_12_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const task_r6 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onTaskClick(task_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskViewComponent_div_12_p_3_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_12_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const task_r6 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onTaskDelete(task_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskViewComponent_div_12_a_9_Template, 2, 0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskViewComponent_div_12_a_10_Template, 2, 0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, task_r6.completed, ctx_r1.extendItem == task_r6._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Title: ", task_r6.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.extendItem == task_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c3, task_r6._listId, task_r6._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.extendItem != task_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.extendItem === task_r6._id);
} }
function TaskViewComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TaskViewComponent {
    constructor(taskService, route, rt) {
        this.taskService = taskService;
        this.route = route;
        this.rt = rt;
        this.listId = "";
    }
    ngOnInit() {
        this.taskService.getList().subscribe((res) => {
            this.taskService.lists = res;
            if (this.taskService.lists.length == 0) {
                this.rt.navigateByUrl('new-list');
            }
        });
        this.route.params.subscribe((params) => {
            if (params.listId) {
                this.listId = params.listId;
            }
            this.taskService.getTasks(params.listId).subscribe((tasks) => {
                this.taskService.tasks = tasks;
            });
        });
    }
    // set the task to complete
    onTaskClick(task) {
        this.taskService.complete(task).subscribe(() => {
            task.completed = !task.completed;
        });
    }
    // delete the task
    onTaskDelete(task) {
        this.taskService.deleteTask(task).subscribe(() => {
            this.taskService.tasks = this.taskService.tasks.filter((h) => h._id != task._id);
        });
    }
    onListDelete(list) {
        this.taskService.deleteList(list).subscribe(() => {
            // update frontend
            this.taskService.lists = this.taskService.lists.filter((l) => list._id != l._id);
            // if this list is pressed while deleting it - return to main screen >
            if (this.listId == list._id) {
                this.rt.navigateByUrl('lists');
            }
        }).add(() => {
            // remove all the tasks that were associated with this list
            this.taskService.deleteAllTasksFromList(list).subscribe(() => {
                this.taskService.tasks = this.taskService.tasks.filter((l) => {
                    l._listId != list._id;
                });
            });
        });
    }
}
TaskViewComponent.ɵfac = function TaskViewComponent_Factory(t) { return new (t || TaskViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TaskViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskViewComponent, selectors: [["app-task-view"]], decls: 14, vars: 3, consts: [[1, "centered-content"], [1, "task-manager-container"], [1, "sidebar", "has-background-white"], [1, "title", "has-text-primary"], [1, "list-menu"], ["class", "list-menu-item", 3, "routerLink", "routerLinkActive", 4, "ngFor", "ngForOf"], ["routerLink", "/new-list", 1, "button", "is-primary", "has-text-white"], [1, "task-list-container", "has-background-light"], ["class", "task", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "circle-add-button button is-primary", "routerLink", "./new-task", 4, "ngIf"], [1, "list-menu-item", 3, "routerLink", "routerLinkActive"], [1, "button", "is-pulled-right", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "task", 3, "ngClass"], [3, "click"], ["class", "description", 3, "click", 4, "ngIf"], [1, "buttons"], [1, "button", "is-pulled-right", 3, "routerLink"], [1, "fas", "fa-edit"], ["class", "button is-pulled-right", 3, "click", 4, "ngIf"], [1, "description", 3, "click"], [1, "fas", "fa-angle-down"], [1, "fas", "fa-angle-up"], ["routerLink", "./new-task", 1, "circle-add-button", "button", "is-primary"]], template: function TaskViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lists ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskViewComponent_a_6_Template, 6, 8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " + New List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskViewComponent_div_12_Template, 11, 12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskViewComponent_button_13_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskService.lists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.taskService.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml[_ngcontent-%COMP%] {\n  background: linear-gradient(to right top, #44ddd0, #00b894);\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.modal-box[_ngcontent-%COMP%] {\n  min-height: 200px;\n  width: 100%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n  animation: fadeIn 2s;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: lato;\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.task-manager-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 1000px;\n  max-height: 680px;\n  animation: fadeIn 2s;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  background-color: white;\n  padding: 42px;\n  border-radius: 8px 0px 0px 8px;\n}\n.task-list-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 2;\n  padding: 43px;\n  border-radius: 0px 8px 8px 0px;\n}\n.list-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  flex-grow: 1;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  width: 100%;\n  color: #5f5f5f;\n  margin-bottom: 5px;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  opacity: 0;\n  font-size: 12px;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]:hover   .button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item.is-active[_ngcontent-%COMP%] {\n  background-color: #cff8ef;\n  color: #006450;\n}\n.extended[_ngcontent-%COMP%] {\n  height: 150px;\n  overflow: scroll;\n}\n.task[_ngcontent-%COMP%] {\n  background: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  margin-top: 15px;\n  position: relative;\n}\n.task[_ngcontent-%COMP%]:hover   .buttons[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.task[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  border-top: 1px solid #e4e4e4;\n  padding-top: 10px;\n  color: #818181;\n}\n.task[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.task[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 35px;\n}\n.task[_ngcontent-%COMP%]:not(.complete) {\n  cursor: pointer;\n  transition: box-shadow 0.2s ease, transform 0.2 ease;\n}\n.task[_ngcontent-%COMP%]:not(.complete):active {\n  transform: scale(0.95);\n}\n.task[_ngcontent-%COMP%]:not(.complete):hover {\n  box-shadow: 0 0 0 5px #eeeeee;\n}\n.task.complete[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 80%;\n}\n.circle-add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 35px;\n  right: 35px;\n  height: 35px;\n  width: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.circle-add-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  align-self: center;\n  font-size: 35px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL21haW4tc3R5bGUuc2NzcyIsIi4uLy4uLy4uLy4uL3Rhc2stdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUSxrRkFBQTtBQXFCUjtFQUNFLDJEQUFBO0FDckJGO0FEd0JBOztFQUVFLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQTtFQUNFO0lBQ0UsVUFBQTtFQ3JCRjtFRHVCQTtJQUNFLFVBQUE7RUNyQkY7QUFDRjtBQXhDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTBDRjtBQXZDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQTBDRjtBQXZDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQTBDRjtBQXZDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTBDRjtBQXhDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUEwQ0o7QUF4Q0k7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQTBDTjtBQXZDSTtFQUNFLHlCRDVDRTtBQ3FGUjtBQXhDTTtFQUNFLFVBQUE7QUEwQ1I7QUF0Q0k7RUFDRSx5QkFBQTtFQUNBLGNEbkRPO0FDMkZiO0FBcENBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBdUNGO0FBcENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXVDRjtBQXJDSTtFQUNFLFVBQUE7QUF1Q047QUFuQ0U7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBcUNKO0FBbENFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFvQ0o7QUFuQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXFDTjtBQWpDRTtFQUNFLGVBQUE7RUFDQSxvREFBQTtBQW1DSjtBQWxDSTtFQUNFLHNCQUFBO0FBb0NOO0FBakNJO0VBQ0UsNkJBQUE7QUFtQ047QUEvQkU7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUFpQ0o7QUE3QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWdDRjtBQS9CRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBaUNKIiwiZmlsZSI6InRhc2stdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgaXMgd2hlcmUgd2UgcHV0IGdsb2JhbCBzdHlsZXMgYW5kIGNoYW5nZSB2YXJpYWJsZSB2YWx1ZXNcblxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwXCIpO1xuXG4kdHVycXVvaXNlOiAjNDRkZGQwO1xuJGdyZWVuOiAjMDBiODk0O1xuJGxpZ2h0LWdyZWVuOiAjNTVlZmM0O1xuJGxpZ2h0OiAjZjhmOGY4O1xuJGRhcmstZ3JlZW46IHJnYigwLCAxMDAsIDgwKTtcblxuLy8gdXBkYXRlIGJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuJHByaW1hcnk6ICRncmVlbjtcbiRsaW5rOiAkbGlnaHQtZ3JlZW47XG5cbi8vIFVwZGF0ZSBidWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcblxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XG4kaW5wdXQtYm9yZGVyLWNvbnRyb2w6IHRyYW5zcGFyZW50O1xuJGlucHV0LXNoYWRvdzogbm9uZTtcblxuLy8gU2V0IGN1c3RvbSBnbG9iYWwgc3R5bGVzXG5cbmh0bWwge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAkdHVycXVvaXNlLCAkZ3JlZW4pO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1vZGFsLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1ODBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMzVweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBsYXRvO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL21haW4tc3R5bGUuc2Nzc1wiO1xuXG4udGFzay1tYW5hZ2VyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXgtaGVpZ2h0OiA2ODBweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDBweCAwcHggOHB4O1xufVxuXG4udGFzay1saXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAyO1xuICBwYWRkaW5nOiA0M3B4O1xuICBib3JkZXItcmFkaXVzOiAwcHggOHB4IDhweCAwcHg7XG59XG5cbi5saXN0LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgLmxpc3QtbWVudS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICM1ZjVmNWY7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgLmJ1dHRvbiB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5pcy1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjhlZjtcbiAgICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcbiAgICB9XG4gIH1cbn1cbi5leHRlbmRlZCB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi50YXNrIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6aG92ZXIge1xuICAgIC5idXR0b25zIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjI4LCAyMjgsIDIyOCk7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgY29sb3I6IHJnYigxMjksIDEyOSwgMTI5KTtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgYSB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICB9XG4gIH1cblxuICAmOm5vdCguY29tcGxldGUpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjIgZWFzZTtcbiAgICAmOmFjdGl2ZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNlZWVlZWU7XG4gICAgfVxuICB9XG5cbiAgJi5jb21wbGV0ZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgb3BhY2l0eTogODAlO1xuICB9XG59XG5cbi5jaXJjbGUtYWRkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzNXB4O1xuICByaWdodDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHAge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-view',
                templateUrl: './task-view.component.html',
                styleUrls: ['./task-view.component.scss']
            }]
    }], function () { return [{ type: src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/orisayag/Desktop/task-manager-project/api/taskManager/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "6V8c":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoginPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 20, vars: 0, consts: [[1, "centered-content"], [1, "login-box"], [1, "title", "has-text-primary"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["type", "email", "placeholder", "Email", 1, "input", "has-background-light"], [1, "icon", "is-small", "is-left"], [1, "fas", "fa-envelope"], [1, "icon", "is-small", "is-right"], [1, "fas", "fa-check"], [1, "control", "has-icons-left"], ["type", "password", "placeholder", "Password", 1, "input", "has-background-light"], [1, "fas", "fa-lock"], [1, "control"], [1, "button", "is-primary", "has-text-white", "is-pulled-right"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".login-box[_ngcontent-%COMP%] {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYm94IHtcbiAgcGFkZGluZzogMzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6XLR":
/*!******************************************************!*\
  !*** ./src/app/pages/new-task/new-task.component.ts ***!
  \******************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/task.service */ "GglZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NewTaskComponent {
    constructor(task, router, route) {
        this.task = task;
        this.router = router;
        this.route = route;
        this.listId = "";
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.listId = params['listId'];
        });
    }
    createTask(body, title) {
        let newTask = { title: title, body: body };
        this.task.createTask(newTask, this.listId).subscribe((newTask) => {
            this.router.navigate(['/lists', this.listId]);
        });
    }
}
NewTaskComponent.ɵfac = function NewTaskComponent_Factory(t) { return new (t || NewTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
NewTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewTaskComponent, selectors: [["app-new-task"]], decls: 19, vars: 0, consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], [1, "field", "is-grouped"], [1, "control", "is-expanded"], ["type", "text", "placeholder", "Add a Task Title", 1, "input", "is-medium"], ["listTitleInput", ""], ["type", "text", "placeholder", "Add a Task Description (optional)", 1, "input", "is-medium"], ["listBodyInput", ""], [1, "field", "is-grouped", "is-grouped-right"], [1, "control"], [1, "button", "is-primary", 3, "click"], ["routerLink", "", 1, "button", "is-light"]], template: function NewTaskComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create a new task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTaskComponent_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.createTask(_r1.value, _r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctdGFzay5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-task',
                templateUrl: './new-task.component.html',
                styleUrls: ['./new-task.component.scss']
            }]
    }], function () { return [{ type: src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "GglZ":
/*!*****************************************!*\
  !*** ./src/app/service/task.service.ts ***!
  \*****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "cnH2");



class TaskService {
    constructor(webReqService) {
        this.webReqService = webReqService;
        this.lists = [];
        this.tasks = [];
    }
    createList(title) {
        // send a web request to create a new list
        return this.webReqService.post('lists', { title });
    }
    getList() {
        // send a web request to create a new list
        return this.webReqService.get('lists');
    }
    getTasks(listId) {
        return this.webReqService.get(`lists/${listId}/tasks`);
    }
    createTask(body, listId) {
        console.log(body);
        return this.webReqService.post(`lists/${listId}/tasks`, body);
    }
    complete(task) {
        return this.webReqService.put(`lists/${task._listId}/tasks/${task._id}`, { completed: !task.completed });
    }
    deleteTask(task) {
        return this.webReqService.delete(`lists/${task._listId}/tasks/${task._id}`);
    }
    deleteList(list) {
        return this.webReqService.delete(`lists/${list._id}`);
    }
    deleteAllTasksFromList(list) {
        return this.webReqService.delete(`lists/${list._id}`);
    }
    editTask(task) {
        return this.webReqService.put(`lists/${task._listId}/tasks/${task._id}`, task);
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "OCoP":
/*!********************************************!*\
  !*** ./src/app/pages/new/new.component.ts ***!
  \********************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/task.service */ "GglZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class NewComponent {
    constructor(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    ngOnInit() {
    }
    createNewList(title) {
        this.taskService.createList(title).subscribe((res) => {
            this.taskService.lists.push(res);
            // navigate to /lists/res.id
            this.router.navigate(['/lists', res._id]);
        });
    }
}
NewComponent.ɵfac = function NewComponent_Factory(t) { return new (t || NewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewComponent, selectors: [["app-new"]], decls: 15, vars: 0, consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], [1, "field", "is-grouped"], [1, "control", "is-expanded"], ["type", "text", "placeholder", "Create a new list here", 1, "input", "is-medium", 3, "keyup.enter"], ["listTitleInput", ""], [1, "field", "is-grouped", "is-grouped-right"], [1, "control"], [1, "button", "is-primary", 3, "click"], ["routerLink", "", 1, "button", "is-light"]], template: function NewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create a new list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NewComponent_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.createNewList(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewComponent_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.createNewList(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new',
                templateUrl: './new.component.html',
                styleUrls: ['./new.component.scss']
            }]
    }], function () { return [{ type: src_app_service_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "+4L4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_new_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/new/new.component */ "OCoP");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "6XLR");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "pnAd");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_4__["TaskViewComponent"],
        _pages_new_new_component__WEBPACK_IMPORTED_MODULE_6__["NewComponent"],
        _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_7__["NewTaskComponent"],
        _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
        _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_4__["TaskViewComponent"],
                    _pages_new_new_component__WEBPACK_IMPORTED_MODULE_6__["NewComponent"],
                    _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_7__["NewTaskComponent"],
                    _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
                    _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cnH2":
/*!************************************************!*\
  !*** ./src/app/service/web-request.service.ts ***!
  \************************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WebRequestService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = '';
    }
    get(uri) {
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }
    post(uri, body) {
        return this.http.post(`${this.ROOT_URL}/${uri}`, body);
    }
    put(uri, body) {
        return this.http.put(`${this.ROOT_URL}/${uri}`, body);
    }
    delete(uri) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }
}
WebRequestService.ɵfac = function WebRequestService_Factory(t) { return new (t || WebRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WebRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebRequestService, factory: WebRequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pnAd":
/*!********************************************************!*\
  !*** ./src/app/pages/edit-task/edit-task.component.ts ***!
  \********************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/task.service */ "GglZ");




class EditTaskComponent {
    constructor(route, taskService, rt) {
        this.route = route;
        this.taskService = taskService;
        this.rt = rt;
        this.listId = "";
        this.task = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.listId = params.listId;
            this.task = this.taskService.tasks.filter((ta) => ta._id == params.taskId);
        });
        // console.log(this.task)
        if (this.task.length === 0) {
            this.rt.navigateByUrl(`lists`);
        }
    }
    editTask(title, body) {
        this.task[0].body = body;
        this.task[0].title = title;
        this.taskService.editTask(this.task[0]).subscribe(() => {
            this.rt.navigate(['/lists', this.listId]);
        });
    }
}
EditTaskComponent.ɵfac = function EditTaskComponent_Factory(t) { return new (t || EditTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
EditTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditTaskComponent, selectors: [["app-edit-task"]], decls: 19, vars: 2, consts: [[1, "centered-content"], [1, "modal-box"], [1, "title"], [1, "field", "is-grouped"], [1, "control", "is-expanded"], ["type", "text", "placeholder", "Add a Task Title", 1, "input", "has-background-light", "is-medium", 3, "value", "keyup.enter"], ["listTitleInput", ""], ["type", "text", "placeholder", "Add a Task Body (optional)", 1, "input", "has-background-light", "is-medium", 3, "value", "change"], ["listBodyInput", ""], [1, "field", "is-grouped", "is-grouped-right"], [1, "control"], [1, "button", "is-primary", 3, "click"], ["routerLink", "", 1, "button", "is-light"]], template: function EditTaskComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function EditTaskComponent_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.editTask(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditTaskComponent_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.editTask(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditTaskComponent_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.editTask(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.task[0] && ctx.task[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.task[0] && ctx.task[0].body);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-task',
                templateUrl: './edit-task.component.html',
                styleUrls: ['./edit-task.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_service_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/edit-task/edit-task.component */ "pnAd");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/new-task/new-task.component */ "6XLR");
/* harmony import */ var _pages_new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/new/new.component */ "OCoP");
/* harmony import */ var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/task-view/task-view.component */ "+4L4");









const routes = [
    { path: '', redirectTo: 'lists', pathMatch: 'full' },
    { path: 'new-list', component: _pages_new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
    { path: 'lists', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_6__["TaskViewComponent"] },
    { path: 'lists/:listId', component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_6__["TaskViewComponent"] },
    { path: 'lists/:listId/new-task', component: _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__["NewTaskComponent"] },
    { path: 'lists/:listId/:taskId/edit-task', component: _pages_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_2__["EditTaskComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map