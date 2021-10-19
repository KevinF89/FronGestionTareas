import { async, TestBed } from '@angular/core/testing';
import { NuevaTareaComponent } from './nueva-tarea.component';
describe('NuevaTareaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NuevaTareaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(NuevaTareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=nueva-tarea.component.spec.js.map