import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnePage } from './one.page';

describe('OnePage', () => {
  let component: OnePage;
  let fixture: ComponentFixture<OnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
