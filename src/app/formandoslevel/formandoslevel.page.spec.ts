import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormandoslevelPage } from './formandoslevel.page';

describe('FormandoslevelPage', () => {
  let component: FormandoslevelPage;
  let fixture: ComponentFixture<FormandoslevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormandoslevelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormandoslevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
