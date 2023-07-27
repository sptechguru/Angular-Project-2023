import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenabarComponent } from './sidenabar.component';

describe('SidenabarComponent', () => {
  let component: SidenabarComponent;
  let fixture: ComponentFixture<SidenabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenabarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
