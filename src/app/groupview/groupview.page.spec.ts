import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupviewPage } from './groupview.page';

describe('GroupviewPage', () => {
  let component: GroupviewPage;
  let fixture: ComponentFixture<GroupviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
