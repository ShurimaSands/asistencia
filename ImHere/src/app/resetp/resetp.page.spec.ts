import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetpPage } from './resetp.page';

describe('ResetpPage', () => {
  let component: ResetpPage;
  let fixture: ComponentFixture<ResetpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResetpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
