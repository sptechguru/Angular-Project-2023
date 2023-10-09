import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderSelectorComponent } from './builder-selector.component';

describe('BuilderSelectorComponent', () => {
  let component: BuilderSelectorComponent;
  let fixture: ComponentFixture<BuilderSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
