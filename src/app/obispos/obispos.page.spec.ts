import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObisposPage } from './obispos.page';

describe('ObisposPage', () => {
  let component: ObisposPage;
  let fixture: ComponentFixture<ObisposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObisposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObisposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
