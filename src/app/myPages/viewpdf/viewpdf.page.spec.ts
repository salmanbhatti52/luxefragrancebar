import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewpdfPage } from './viewpdf.page';

describe('ViewpdfPage', () => {
  let component: ViewpdfPage;
  let fixture: ComponentFixture<ViewpdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewpdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
