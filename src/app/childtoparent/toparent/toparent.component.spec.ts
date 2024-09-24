import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToparentComponent } from './toparent.component';

describe('ToparentComponent', () => {
  let component: ToparentComponent;
  let fixture: ComponentFixture<ToparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
