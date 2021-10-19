import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { GeneralService } from 'src/app/Servicios/general.service';
import { HttpClientModule } from '@angular/common/http';
describe('HomeComponent', () => {
    let home;
    let fixture;
    let genService;
    let http;
    let handler;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [GeneralService]
        });
        genService = TestBed.get(GeneralService);
        home = new HomeComponent(genService);
    });
    it('Debe traer lista de empleados', () => {
        expect(home.ConsultarEmplados()).toBeTruthy();
    });
    //beforeEach(() => {
    //  fixture = TestBed.createComponent(HomeComponent);
    //  component = fixture.componentInstance;
    //  fixture.detectChanges();
    //});
    //it('should create', () => {
    //  expect(component).toBeTruthy();
    //});
});
//# sourceMappingURL=home.component.spec.js.map