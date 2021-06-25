import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StwatchComponent } from './stwatch.component';

describe('StwatchComponent', () => {
  let component: StwatchComponent;
  let fixture: ComponentFixture<StwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
