import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
let AlertaService = class AlertaService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, isTimeOut, secondsTimeOut = 0, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
        this.setTimeOutAlert(isTimeOut, secondsTimeOut);
    }
    error(message, isTimeOut, secondsTimeOut = 0, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
        this.setTimeOutAlert(isTimeOut, secondsTimeOut);
    }
    info(message, isTimeOut, secondsTimeOut = 0, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'info', text: message });
        this.setTimeOutAlert(isTimeOut, secondsTimeOut);
    }
    warning(message, isTimeOut, secondsTimeOut = 0, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'warning', text: message });
        this.setTimeOutAlert(isTimeOut, secondsTimeOut);
    }
    primary(message, isTimeOut, secondsTimeOut = 0, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'primary', text: message });
        this.setTimeOutAlert(isTimeOut, secondsTimeOut);
    }
    secondary(message, isTimeOut, secondsTimeOut = 0, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'secondary', text: message });
        this.setTimeOutAlert(isTimeOut, secondsTimeOut);
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
    setTimeOutAlert(isTimeOut, secondsTimeOut) {
        if (isTimeOut) {
            if (secondsTimeOut > 0) {
                setTimeout(() => { this.clear(); }, secondsTimeOut);
            }
            else { //1 segundo  por defecto para mantener la notificación visible
                setTimeout(() => { this.clear(); }, 1000);
            }
        }
    }
};
AlertaService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], AlertaService);
export { AlertaService };
//# sourceMappingURL=alerta-service.service.js.map