import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaProfesorPage } from './vista-profesor.page';

describe('VistaProfesorPage', () => {
  let component: VistaProfesorPage;
  let fixture: ComponentFixture<VistaProfesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VistaProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
