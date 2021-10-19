import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AlertaComponent = class AlertaComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
                case 'warning':
                    message.cssClass = 'alert alert-warning';
                    break;
                case 'primary':
                    message.class = 'alert alert-primary';
                    break;
                case 'secondary':
                    message.class = 'alert alert-secondary';
                    break;
                case 'info':
                    message.class = 'alert alert-info';
                    break;
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertaComponent = tslib_1.__decorate([
    Component({ selector: 'alerta', templateUrl: 'alerta.component.html' })
], AlertaComponent);
export { AlertaComponent };
//# sourceMappingURL=alerta.component.js.map