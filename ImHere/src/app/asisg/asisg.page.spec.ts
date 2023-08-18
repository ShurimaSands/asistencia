import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsisgPage } from './asisg.page';

describe('AsisgPage', () => {
  let component: AsisgPage;
  let fixture: ComponentFixture<AsisgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsisgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
