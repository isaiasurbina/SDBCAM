import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LecturaPage } from './lectura.page';

describe('LecturaPage', () => {
  let component: LecturaPage;
  let fixture: ComponentFixture<LecturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LecturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
