import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActaPrevisualizacionPage } from './acta-previsualizacion.page';

describe('ActaPrevisualizacionPage', () => {
  let component: ActaPrevisualizacionPage;
  let fixture: ComponentFixture<ActaPrevisualizacionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActaPrevisualizacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActaPrevisualizacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
