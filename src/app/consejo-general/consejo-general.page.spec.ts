import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsejoGeneralPage } from './consejo-general.page';

describe('ConsejoGeneralPage', () => {
  let component: ConsejoGeneralPage;
  let fixture: ComponentFixture<ConsejoGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejoGeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsejoGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
