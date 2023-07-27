import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageCrudComponent } from './local-storage-crud.component';

describe('LocalStorageCrudComponent', () => {
  let component: LocalStorageCrudComponent;
  let fixture: ComponentFixture<LocalStorageCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalStorageCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStorageCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
