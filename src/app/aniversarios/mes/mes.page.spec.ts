import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesPage } from './mes.page';

describe('MesPage', () => {
  let component: MesPage;
  let fixture: ComponentFixture<MesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
