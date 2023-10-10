import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestConfPsPage } from './rest-conf-ps.page';

describe('RestConfPsPage', () => {
  let component: RestConfPsPage;
  let fixture: ComponentFixture<RestConfPsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestConfPsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
