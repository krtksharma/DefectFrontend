import { Component, OnInit } from '@angular/core';
import { Defect } from '../services/defect';
import { DefectService } from '../services/defect.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalDefects: number = 0;
  defectsByPriority: { priority: string, count: number }[] = [];
  unresolvedDefects: number = 0;
 
  constructor(private defectService: DefectService) { }
 
  ngOnInit() {
    this.fetchDefectData();
  }
 
  fetchDefectData() {
    this.defectService.getAllDefects().subscribe((defects: Defect[]) => {
      this.totalDefects = defects.length;
 
    const p1Defects: Defect[] = [];
    const p2Defects: Defect[] = [];
    const p3Defects: Defect[] = [];
 
    defects.map(defect => {
      if (defect.priority === 'P1') {
        p1Defects.push(defect);
      } else if (defect.priority === 'P2') {
        p2Defects.push(defect);
      } else if (defect.priority === 'P3') {
        p3Defects.push(defect);
      }
    });
 
    this.defectsByPriority = [
      { priority: 'P1', count: p1Defects.length },
      { priority: 'P2', count: p2Defects.length },
      { priority: 'P3', count: p3Defects.length }
    ];
 
      this.unresolvedDefects = defects.filter(defect => defect.status !== 'Resolved').length;
    });
  }
}