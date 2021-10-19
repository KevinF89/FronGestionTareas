import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let GeneralService = class GeneralService {
    constructor(http) {
        this.http = http;
    }
    ConsularEmpleados() {
        return new Promise((resolve, reject) => {
            try {
                debugger;
                let UrlLogin = 'http://localhost:64565/Empleados/ConsultarEmpleados';
                this.get(UrlLogin, false).subscribe((response) => {
                    resolve(response);
                }, (exception) => {
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
    ConsularTareas() {
        return new Promise((resolve, reject) => {
            try {
                debugger;
                let UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion + '/Tareas/ConsultarTareas?IdTarea=0';
                this.get(UrlLogin, false).subscribe((response) => {
                    debugger;
                    resolve(response);
                }, (exception) => {
                    debugger;
                });
            }
            catch (ex) {
                debugger;
                reject(ex);
            }
        });
    }
    EditarTarea(T) {
        return new Promise((resolve, reject) => {
            try {
                debugger;
                let UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion;
                this.post(UrlLogin, '/Tareas/EditarTarea', T, false).subscribe((response) => {
                    if (!response.error) {
                        resolve(response);
                    }
                    else {
                        reject(response);
                    }
                }, (exception) => {
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
    CrearTarea(T) {
        return new Promise((resolve, reject) => {
            try {
                debugger;
                let UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion;
                this.post(UrlLogin, '/Tareas/CrearTarea', T, false).subscribe((response) => {
                    if (!response.error) {
                        resolve(response);
                    }
                    else {
                        reject(response);
                    }
                }, (exception) => {
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
    EliminarTarea(idtarea) {
        return new Promise((resolve, reject) => {
            try {
                debugger;
                let UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion + '/Tareas/EliminarTarea?IdTarea=' + idtarea;
                this.get(UrlLogin, false).subscribe((response) => {
                    resolve(response);
                }, (exception) => {
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
    get(url, auth, token) {
        debugger;
        if (auth) {
            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            });
            let options = { headers: headers };
            return this.http.get(url, options);
        }
        else {
            return this.http.get(url);
        }
    }
    post(url, metodo, body, auth, token) {
        if (auth) {
            ////debugger;
            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + token
            });
            let options = { headers: headers };
            return this.http.post(`${url}${metodo}`, body, options);
        }
        else {
            return this.http.post(`${url}${metodo}`, body);
        }
    }
};
GeneralService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GeneralService);
export { GeneralService };
//# sourceMappingURL=general.service.js.map