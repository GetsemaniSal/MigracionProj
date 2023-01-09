import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiembrosAsambleaPage } from './miembros-asamblea.page';

describe('MiembrosAsambleaPage', () => {
  let component: MiembrosAsambleaPage;
  let fixture: ComponentFixture<MiembrosAsambleaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembrosAsambleaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiembrosAsambleaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
