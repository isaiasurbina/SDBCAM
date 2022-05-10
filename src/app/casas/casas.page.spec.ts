import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CasasPage } from './casas.page';

describe('CasasPage', () => {
  let component: CasasPage;
  let fixture: ComponentFixture<CasasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CasasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
