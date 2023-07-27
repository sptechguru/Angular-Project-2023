import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSidbarComponent } from './new-sidbar.component';

describe('NewSidbarComponent', () => {
  let component: NewSidbarComponent;
  let fixture: ComponentFixture<NewSidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSidbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
