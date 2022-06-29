import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemberPointsPage } from './member-points.page';

describe('MemberPointsPage', () => {
  let component: MemberPointsPage;
  let fixture: ComponentFixture<MemberPointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemberPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
