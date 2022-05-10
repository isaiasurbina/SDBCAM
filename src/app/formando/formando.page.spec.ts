import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormandoPage } from './formando.page';

describe('FormandoPage', () => {
  let component: FormandoPage;
  let fixture: ComponentFixture<FormandoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormandoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
