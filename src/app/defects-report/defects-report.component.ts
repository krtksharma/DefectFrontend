import { Component, OnInit } from '@angular/core';
import { DefectReport } from '../services/defectReport';
import { DefectService } from '../services/defect.service';
 
@Component({
  selector: 'app-defects-report',
  templateUrl: './defects-report.component.html',
  styleUrls: ['./defects-report.component.css']
})
export class DefectsReportComponent implements OnInit {
  projectId: string = '';
  defectReport: DefectReport | null = null;
 
  constructor(private defectService: DefectService) { }
 
  ngOnInit(): void {
  }
 
  getDefectReport(): void {
    if (this.projectId.trim() === '') {
      // Display some error message or handle empty input
      console.error('Project ID cannot be empty');
      return;
    }
 
    this.defectService.getDefectReport(parseInt(this.projectId, 10))
      .subscribe(
        defectReport => {
          this.defectReport = defectReport;
        },
        error => {
          console.error('Error fetching defect report:', error);
          // Handle error, display error message, etc.
        }
      );
  }
}