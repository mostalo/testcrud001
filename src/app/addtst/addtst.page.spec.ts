import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtstPage } from './addtst.page';

describe('AddtstPage', () => {
  let component: AddtstPage;
  let fixture: ComponentFixture<AddtstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtstPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
