import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllfilesPage } from './allfiles.page';

describe('AllfilesPage', () => {
  let component: AllfilesPage;
  let fixture: ComponentFixture<AllfilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllfilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
