import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditstPage } from './editst.page';

describe('EditstPage', () => {
  let component: EditstPage;
  let fixture: ComponentFixture<EditstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
