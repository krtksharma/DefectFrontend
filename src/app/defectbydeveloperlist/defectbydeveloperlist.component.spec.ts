import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectbydeveloperlistComponent } from './defectbydeveloperlist.component';

describe('DefectbydeveloperlistComponent', () => {
  let component: DefectbydeveloperlistComponent;
  let fixture: ComponentFixture<DefectbydeveloperlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefectbydeveloperlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefectbydeveloperlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
