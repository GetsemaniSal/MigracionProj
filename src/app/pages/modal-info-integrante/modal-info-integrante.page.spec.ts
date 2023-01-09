import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalInfoIntegrantePage } from './modal-info-integrante.page';

describe('ModalInfoIntegrantePage', () => {
  let component: ModalInfoIntegrantePage;
  let fixture: ComponentFixture<ModalInfoIntegrantePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInfoIntegrantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalInfoIntegrantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
