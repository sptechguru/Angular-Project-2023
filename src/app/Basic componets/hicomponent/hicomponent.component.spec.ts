import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HicomponentComponent } from './hicomponent.component';

describe('HicomponentComponent', () => {
  let component: HicomponentComponent;
  let fixture: ComponentFixture<HicomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HicomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
