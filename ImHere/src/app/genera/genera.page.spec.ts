import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneraPage } from './genera.page';

describe('GeneraPage', () => {
  let component: GeneraPage;
  let fixture: ComponentFixture<GeneraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeneraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
