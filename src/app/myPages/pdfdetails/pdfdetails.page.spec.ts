import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdfdetailsPage } from './pdfdetails.page';

describe('PdfdetailsPage', () => {
  let component: PdfdetailsPage;
  let fixture: ComponentFixture<PdfdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdfdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
