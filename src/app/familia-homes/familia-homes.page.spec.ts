import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamiliaHomesPage } from './familia-homes.page';

describe('FamiliaHomesPage', () => {
  let component: FamiliaHomesPage;
  let fixture: ComponentFixture<FamiliaHomesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliaHomesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamiliaHomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
