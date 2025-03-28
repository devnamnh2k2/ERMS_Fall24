import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfirmComponent } from './form-confirm.component';

describe('FormConfirmComponent', () => {
  let component: FormConfirmComponent;
  let fixture: ComponentFixture<FormConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
