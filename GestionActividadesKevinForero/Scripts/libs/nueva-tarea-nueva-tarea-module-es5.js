(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nueva-tarea-nueva-tarea-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n      \n    \n    \n      \n        \n          <h1>Administración Tareas</h1>\n          <br />\n         \n           \n         \n                <form [formGroup]=\"formCreate\" class=\"form-control-static\" (ngSubmit)=\"CrearTarea(formupdate)\" >\n    \n                   \n    \n                    <div class=\"row\" >\n                        \n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                            <label [for]=\"txtNombres\" >Nombre</label>\n                            <input formControlName =\"txtNombres\" class=\"form-control\" [(ngModel)]=\"TareaEditar.Nombre\" >\n                        </div>\n                        </div>\n                \n                    \n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                             \n                                    <label [for]=\"txtEstado\" >Estado</label>\n                                    <input formControlName =\"txtEstado\" class=\"form-control\" [(ngModel)]=\"TareaEditar.Estado\"  >\n                               \n                                </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" >\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                            <label [for]=\"dtfecha\" >Fecha Proyectada</label>\n                            <input formControlName =\"dtfecha\" class=\"form-control\"  type=\"date\" [(ngModel)]=\"TareaEditar.FechaProyectada\">\n                        </div>\n                        </div>\n                \n                    \n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                             \n                                <label [for]=\"ddlEmpelado\"  >Selecciona un empleado:</label>\n                                <select id=\"ddlEmpelado\"  formControlName=\"ddlTramite\" placeholder=\"Selecciona\" class=\"form-control\" >\n                                    <option value=\"\">Selecciona</option>\n                                    <option *ngFor=\"let a of ListEmpleados\" [value]=\"a.IdEmpleado\">{{a.Nombre}}</option>\n                                  </select>\n                                </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" >\n                        <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                            <label [for]=\"txtDescripcion\" >Descripcion</label>\n                            <input formControlName =\"txtDescripcion\"  class=\"form-control\" type=\"text\" [(ngModel)]=\"TareaEditar.Descripcion\">\n                        </div>\n                        </div>\n                \n                    </div>\n                \n                       \n                    <div class=\"row\" >\n                    \n                        <div class=\"col-md-6\" >\n                            <div class=\"form-group\">\n                                <label [for]=\"btnModificar\" id=\"validar1\" class=\"validacion\" >{{validacion}}</label>\n                            <button  type=\"submit\" #btnModificar class=\"btn btn-default\"    >Actualizar</button>\n                        </div>\n                        </div>\n                \n                \n                </div>\n                </form>\n            \n          \n        \n    "

/***/ }),

/***/ "./src/app/Servicios/general.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Servicios/general.service.ts ***!
  \**********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GeneralService = /** @class */ (function () {
    function GeneralService(http) {
        this.http = http;
    }
    GeneralService.prototype.ConsularEmpleados = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                debugger;
                var UrlLogin = JSON.parse('http://localhost:64565/Empleados/ConsultarEmpleados');
                _this.get(UrlLogin, false).subscribe(function (response) {
                    resolve(response);
                }, function (exception) {
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    GeneralService.prototype.ConsularTareas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                debugger;
                var UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion + '/Tareas/ConsultarTareas?IdTarea=0';
                _this.get(UrlLogin, false).subscribe(function (response) {
                    debugger;
                    resolve(response);
                }, function (exception) {
                    debugger;
                });
            }
            catch (ex) {
                debugger;
                reject(ex);
            }
        });
    };
    GeneralService.prototype.EditarTarea = function (T) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                debugger;
                var UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion;
                _this.post(UrlLogin, '/Tareas/EditarTarea', T, false).subscribe(function (response) {
                    if (!response.error) {
                        resolve(response);
                    }
                    else {
                        reject(response);
                    }
                }, function (exception) {
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    GeneralService.prototype.CrearTarea = function (T) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                debugger;
                var UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion;
                _this.post(UrlLogin, '/Tareas/CrearTarea', T, false).subscribe(function (response) {
                    if (!response.error) {
                        resolve(response);
                    }
                    else {
                        reject(response);
                    }
                }, function (exception) {
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    GeneralService.prototype.EliminarTarea = function (idtarea) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                debugger;
                var UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion + '/Tareas/EliminarTarea?IdTarea=' + idtarea;
                _this.get(UrlLogin, false).subscribe(function (response) {
                    resolve(response);
                }, function (exception) {
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    GeneralService.prototype.get = function (url, auth, token) {
        if (auth) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            });
            var options = { headers: headers };
            return this.http.get(url, options);
        }
        else {
            return this.http.get(url);
        }
    };
    GeneralService.prototype.post = function (url, metodo, body, auth, token) {
        if (auth) {
            ////debugger;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            });
            var options = { headers: headers };
            return this.http.post("" + url + metodo, body, options);
        }
        else {
            return this.http.post("" + url + metodo, body);
        }
    };
    GeneralService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GeneralService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/modulos/nueva-tarea/nueva-tarea-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modulos/nueva-tarea/nueva-tarea-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NuevaTareaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaTareaRoutingModule", function() { return NuevaTareaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nueva_tarea_nueva_tarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nueva-tarea/nueva-tarea.component */ "./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.ts");




var EC_ROUTES = [
    { path: ':idModulo', component: _nueva_tarea_nueva_tarea_component__WEBPACK_IMPORTED_MODULE_3__["NuevaTareaComponent"] }
];
var NuevaTareaRoutingModule = /** @class */ (function () {
    function NuevaTareaRoutingModule() {
    }
    NuevaTareaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(EC_ROUTES)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], NuevaTareaRoutingModule);
    return NuevaTareaRoutingModule;
}());



/***/ }),

/***/ "./src/app/modulos/nueva-tarea/nueva-tarea.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modulos/nueva-tarea/nueva-tarea.module.ts ***!
  \***********************************************************/
/*! exports provided: NuevaTareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaTareaModule", function() { return NuevaTareaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nueva_tarea_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nueva-tarea-routing.module */ "./src/app/modulos/nueva-tarea/nueva-tarea-routing.module.ts");
/* harmony import */ var _nueva_tarea_nueva_tarea_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nueva-tarea/nueva-tarea.component */ "./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.ts");






var NuevaTareaModule = /** @class */ (function () {
    function NuevaTareaModule() {
    }
    NuevaTareaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_nueva_tarea_nueva_tarea_component__WEBPACK_IMPORTED_MODULE_5__["NuevaTareaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _nueva_tarea_routing_module__WEBPACK_IMPORTED_MODULE_4__["NuevaTareaRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], NuevaTareaModule);
    return NuevaTareaModule;
}());



/***/ }),

/***/ "./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvbnVldmEtdGFyZWEvbnVldmEtdGFyZWEvbnVldmEtdGFyZWEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.ts ***!
  \**************************************************************************/
/*! exports provided: NuevaTareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaTareaComponent", function() { return NuevaTareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_Servicios_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Servicios/general.service */ "./src/app/Servicios/general.service.ts");
/* harmony import */ var src_app_Servicios_alerta_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Servicios/alerta-service.service */ "./src/app/Servicios/alerta-service.service.ts");







var NuevaTareaComponent = /** @class */ (function () {
    function NuevaTareaComponent(router, formBuilder, activatedRoute, generalService, AlertaService) {
        //this.SpinnerService.show();
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.generalService = generalService;
        this.AlertaService = AlertaService;
        this.Tareas = [];
        this.ListEmpleados = [];
        this.ConsultarEmplados();
    }
    NuevaTareaComponent.prototype.ngOnInit = function () {
        this.formCreate = this.formBuilder.group({
            txtid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
            txtNombres: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
            txtEstado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
            dtfecha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
            ddlEmpelado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
            txtDescripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]]
        });
    };
    NuevaTareaComponent.prototype.ConsultarEmplados = function () {
        var _this = this;
        try {
            debugger;
            //this.SpinnerService.show();
            this.generalService.ConsularEmpleados().then(function (res) {
                debugger;
                _this.ListEmpleados = res;
                //this.SpinnerService.hide();
            }, function (rej) {
                console.log(rej);
            });
        }
        catch (error) {
            console.log(error);
            //this.SpinnerService.hide();
        }
    };
    NuevaTareaComponent.prototype.CrearUsuario = function (T) {
        var _this = this;
        //this.SpinnerService.show();
        try {
            debugger;
            if (this.formCreate.invalid) {
                this.AlertaService.error('Debe diligenciar todos los campos', true, 3000);
            }
            this.TareaEditar.Nombre = this.formCreate.get('txtNombres').value;
            this.TareaEditar.Estado = this.formCreate.get('txtEstado').value;
            this.TareaEditar.FechaProyectada = this.formCreate.get('dtfecha').value;
            this.TareaEditar.IdEmpleado = this.formCreate.get('ddlEmpelado').value;
            this.TareaEditar.Descripcion = this.formCreate.get('txtDescripcion').value;
            //this.SpinnerService.show();
            this.generalService.CrearTarea(this.TareaEditar).then(function (res) {
                debugger;
                if (res.valido) {
                    _this.TareaEditar = undefined;
                    _this.AlertaService.success('Se ha actualizado la actividad exitosamente', true, 3000);
                }
                //this.SpinnerService.hide();
            }, function (rej) {
                console.log(rej);
                //this.SpinnerService.hide();
            });
        }
        catch (error) {
            console.log(error);
            //this.SpinnerService.hide();
        }
    };
    NuevaTareaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_Servicios_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"] },
        { type: src_app_Servicios_alerta_service_service__WEBPACK_IMPORTED_MODULE_5__["AlertaService"] }
    ]; };
    NuevaTareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nueva-tarea',
            template: __webpack_require__(/*! raw-loader!./nueva-tarea.component.html */ "./node_modules/raw-loader/index.js!./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.html"),
            styles: [__webpack_require__(/*! ./nueva-tarea.component.scss */ "./src/app/modulos/nueva-tarea/nueva-tarea/nueva-tarea.component.scss")]
        })
    ], NuevaTareaComponent);
    return NuevaTareaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=nueva-tarea-nueva-tarea-module-es5.js.map