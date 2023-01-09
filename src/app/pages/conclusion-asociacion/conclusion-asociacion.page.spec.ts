import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConclusionAsociacionPage } from './conclusion-asociacion.page';

describe('ConclusionAsociacionPage', () => {
  let component: ConclusionAsociacionPage;
  let fixture: ComponentFixture<ConclusionAsociacionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclusionAsociacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConclusionAsociacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
