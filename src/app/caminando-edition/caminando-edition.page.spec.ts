import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminandoEditionPage } from './caminando-edition.page';

describe('CaminandoEditionPage', () => {
  let component: CaminandoEditionPage;
  let fixture: ComponentFixture<CaminandoEditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminandoEditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminandoEditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
