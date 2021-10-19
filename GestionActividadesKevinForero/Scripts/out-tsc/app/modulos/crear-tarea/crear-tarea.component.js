import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CrearTareaComponent = class CrearTareaComponent {
    constructor(router, formBuilder, activatedRoute, generalService, AlertaService) {
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
    ngOnInit() {
        this.formCreate = this.formBuilder.group({
            txtid: ['', [Validators.required, Validators.nullValidator]],
            txtNombres: ['', [Validators.required, Validators.nullValidator]],
            txtEstado: ['', [Validators.required, Validators.nullValidator]],
            dtfecha: ['', [Validators.required, Validators.nullValidator]],
            ddlEmpelado: ['', [Validators.required, Validators.nullValidator]],
            txtDescripcion: ['', [Validators.required, Validators.nullValidator]]
        });
    }
    ConsultarEmplados() {
        try {
            debugger;
            //this.SpinnerService.show();
            this.generalService.ConsularEmpleados().then((res) => {
                debugger;
                this.ListEmpleados = res;
                //this.SpinnerService.hide();
            }, (rej) => {
                console.log(rej);
            });
        }
        catch (error) {
            console.log(error);
            //this.SpinnerService.hide();
        }
    }
    ActualizarUsuario(T) {
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
            this.generalService.CrearTarea(this.TareaEditar).then((res) => {
                debugger;
                if (res.valido) {
                    this.TareaEditar = undefined;
                    this.AlertaService.success('Se ha actualizado la actividad exitosamente', true, 3000);
                }
                //this.SpinnerService.hide();
            }, (rej) => {
                console.log(rej);
                //this.SpinnerService.hide();
            });
        }
        catch (error) {
            console.log(error);
            //this.SpinnerService.hide();
        }
    }
};
CrearTareaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-crear-tarea',
        templateUrl: './crear-tarea.component.html',
        styleUrls: ['./crear-tarea.component.scss']
    })
], CrearTareaComponent);
export { CrearTareaComponent };
//# sourceMappingURL=crear-tarea.component.js.map