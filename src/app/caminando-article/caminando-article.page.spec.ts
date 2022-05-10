import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminandoArticlePage } from './caminando-article.page';

describe('CaminandoArticlePage', () => {
  let component: CaminandoArticlePage;
  let fixture: ComponentFixture<CaminandoArticlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminandoArticlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminandoArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
