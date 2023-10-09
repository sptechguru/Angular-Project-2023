import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderFeaturesComponent } from './builder-features.component';

describe('BuilderFeaturesComponent', () => {
  let component: BuilderFeaturesComponent;
  let fixture: ComponentFixture<BuilderFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
