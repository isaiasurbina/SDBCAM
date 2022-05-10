import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminandoIndexPage } from './caminando-index.page';

describe('CaminandoIndexPage', () => {
  let component: CaminandoIndexPage;
  let fixture: ComponentFixture<CaminandoIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminandoIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminandoIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
