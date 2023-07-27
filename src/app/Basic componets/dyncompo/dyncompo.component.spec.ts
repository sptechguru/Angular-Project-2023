import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyncompoComponent } from './dyncompo.component';

describe('DyncompoComponent', () => {
  let component: DyncompoComponent;
  let fixture: ComponentFixture<DyncompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyncompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DyncompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
