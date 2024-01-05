import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutDetailsComponent } from './prodcut-details.component';

describe('ProdcutDetailsComponent', () => {
  let component: ProdcutDetailsComponent;
  let fixture: ComponentFixture<ProdcutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdcutDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
