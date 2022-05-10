import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamiliaMembersPage } from './familia-members.page';

describe('FamiliaMembersPage', () => {
  let component: FamiliaMembersPage;
  let fixture: ComponentFixture<FamiliaMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliaMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamiliaMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
