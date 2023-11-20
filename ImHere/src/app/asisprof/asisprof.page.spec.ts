import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsisprofPage } from './asisprof.page';

describe('AsisprofPage', () => {
  let component: AsisprofPage;
  let fixture: ComponentFixture<AsisprofPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsisprofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
