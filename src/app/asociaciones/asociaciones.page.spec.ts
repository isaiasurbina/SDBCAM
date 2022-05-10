import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsociacionesPage } from './asociaciones.page';

describe('AsociacionesPage', () => {
  let component: AsociacionesPage;
  let fixture: ComponentFixture<AsociacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsociacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
