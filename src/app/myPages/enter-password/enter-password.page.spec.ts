import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterPasswordPage } from './enter-password.page';

describe('EnterPasswordPage', () => {
  let component: EnterPasswordPage;
  let fixture: ComponentFixture<EnterPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
