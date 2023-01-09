import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CambiosExtraordinariosPage } from './cambios-extraordinarios.page';

describe('CambiosExtraordinariosPage', () => {
  let component: CambiosExtraordinariosPage;
  let fixture: ComponentFixture<CambiosExtraordinariosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiosExtraordinariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CambiosExtraordinariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
