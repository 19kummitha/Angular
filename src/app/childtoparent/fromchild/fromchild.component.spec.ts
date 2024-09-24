import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromchildComponent } from './fromchild.component';

describe('FromchildComponent', () => {
  let component: FromchildComponent;
  let fixture: ComponentFixture<FromchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FromchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
