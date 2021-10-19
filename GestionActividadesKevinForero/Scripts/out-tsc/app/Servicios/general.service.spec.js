import { TestBed } from '@angular/core/testing';
import { GeneralService } from './general.service';
import { HttpClientModule } from '@angular/common/http';
describe('GeneralService', () => {
    let httpMock;
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [GeneralService]
        });
        service = TestBed.get(GeneralService);
    });
    it('should be created', () => {
        const service = TestBed.get(GeneralService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=general.service.spec.js.map