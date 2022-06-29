import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopounCodePage } from './copoun-code.page';

describe('CopounCodePage', () => {
  let component: CopounCodePage;
  let fixture: ComponentFixture<CopounCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopounCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CopounCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
