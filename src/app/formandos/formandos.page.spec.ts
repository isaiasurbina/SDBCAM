import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormandosPage } from './formandos.page';

describe('FormandosPage', () => {
  let component: FormandosPage;
  let fixture: ComponentFixture<FormandosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormandosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormandosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
