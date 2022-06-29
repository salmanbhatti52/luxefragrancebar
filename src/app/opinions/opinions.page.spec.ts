import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpinionsPage } from './opinions.page';

describe('OpinionsPage', () => {
  let component: OpinionsPage;
  let fixture: ComponentFixture<OpinionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpinionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
