import { Component, OnInit } from '@angular/core';
import { Defect } from '../services/defect';
import { DefectService } from '../services/defect.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-defectbydeveloperlist',
  templateUrl: './defectbydeveloperlist.component.html',
  styleUrl: './defectbydeveloperlist.component.css'
})
export class DefectbydeveloperlistComponent implements OnInit {
  defects: Defect[] = [];
  developerId: string = '';
 
  constructor(private defectService: DefectService, private router: Router) { }
 
  ngOnInit(): void {
  }
 
  searchDefectsByDeveloperId(): void {
    if (this.developerId.trim() === '') {
      // Display some error message or handle empty input
      console.error('Developer ID cannot be empty');
      return;
    }
   
    this.defectService.getDefectsByDeveloperId(this.developerId)
      .subscribe(
        (defects: Defect[]) => {
          this.defects = defects;
        },
        (error) => {
          console.error('Error fetching defects:', error);
        }
      );
    
  }
  viewDefectDetails(id: number): void {
    this.router.navigate(['/defect-details', id]);
  }
}