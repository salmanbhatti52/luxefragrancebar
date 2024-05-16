import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdffilesPage } from './pdffiles.page';

describe('PdffilesPage', () => {
  let component: PdffilesPage;
  let fixture: ComponentFixture<PdffilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdffilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdffilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
