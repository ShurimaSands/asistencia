import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsislistPage } from './asislist.page';

describe('AsislistPage', () => {
  let component: AsislistPage;
  let fixture: ComponentFixture<AsislistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsislistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
