import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FallecidosPage } from './fallecidos.page';

describe('FallecidosPage', () => {
  let component: FallecidosPage;
  let fixture: ComponentFixture<FallecidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallecidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FallecidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
