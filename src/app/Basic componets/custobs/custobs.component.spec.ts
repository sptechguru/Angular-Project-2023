import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustobsComponent } from './custobs.component';

describe('CustobsComponent', () => {
  let component: CustobsComponent;
  let fixture: ComponentFixture<CustobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
