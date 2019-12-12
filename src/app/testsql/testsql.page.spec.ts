import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestsqlPage } from './testsql.page';

describe('TestsqlPage', () => {
  let component: TestsqlPage;
  let fixture: ComponentFixture<TestsqlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsqlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestsqlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
