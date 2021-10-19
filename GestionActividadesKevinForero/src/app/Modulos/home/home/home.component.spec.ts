import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GeneralService } from 'src/app/Servicios/general.service';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let home: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let genService: GeneralService;
    let http: HttpClient;
    let handler: HttpHandler;
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


});
