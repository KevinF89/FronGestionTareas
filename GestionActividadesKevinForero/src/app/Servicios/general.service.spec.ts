import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { GeneralService } from './general.service';
import { HttpClientModule } from '@angular/common/http';

describe('GeneralService', () => {
    let httpMock: HttpTestingController;
    let service: GeneralService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [GeneralService]
        });
        service = TestBed.get(GeneralService);
    });

    it('should be created', () => {
        const service: GeneralService = TestBed.get(GeneralService);
        expect(service).toBeTruthy();
    });

});