import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDefectComponent } from './new-defect.component';

describe('NewDefectComponent', () => {
  let component: NewDefectComponent;
  let fixture: ComponentFixture<NewDefectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewDefectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
