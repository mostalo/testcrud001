import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tst2Page } from './tst2.page';

describe('Tst2Page', () => {
  let component: Tst2Page;
  let fixture: ComponentFixture<Tst2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tst2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tst2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
