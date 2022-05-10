import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnaPage } from './una.page';

describe('UnaPage', () => {
  let component: UnaPage;
  let fixture: ComponentFixture<UnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
