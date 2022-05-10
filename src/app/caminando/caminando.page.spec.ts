import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminandoPage } from './caminando.page';

describe('CaminandoPage', () => {
  let component: CaminandoPage;
  let fixture: ComponentFixture<CaminandoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminandoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
