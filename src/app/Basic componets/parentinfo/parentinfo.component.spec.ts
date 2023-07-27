import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentinfoComponent } from './parentinfo.component';

describe('ParentinfoComponent', () => {
  let component: ParentinfoComponent;
  let fixture: ComponentFixture<ParentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
