import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalElegirParticipantePage } from './modal-elegir-participante.page';

describe('ModalElegirParticipantePage', () => {
  let component: ModalElegirParticipantePage;
  let fixture: ComponentFixture<ModalElegirParticipantePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalElegirParticipantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalElegirParticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
