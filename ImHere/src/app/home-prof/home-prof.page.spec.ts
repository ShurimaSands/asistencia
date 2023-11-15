import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { HomeProfPage } from './home-prof.page';
import {IonicModule} from "@ionic/angular";

describe('HomeProfPage', () => {
  let component: HomeProfPage;
  let fixture: ComponentFixture<HomeProfPage>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule( {
      declarations: [HomeProfPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
