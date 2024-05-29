// defect-list.component.ts
 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Defect } from '../services/defect';
import { DefectService } from '../services/defect.service';
 
@Component({
  selector: 'app-defect-list',
  templateUrl: './defect-list.component.html',
  styleUrls: ['./defect-list.component.css']
})
export class DefectListComponent implements OnInit {
  defects: Defect[] = [];
 
  constructor(private router: Router, private defectService: DefectService) { }
 
  ngOnInit(): void {
    this.defectService.getAllDefects().subscribe(
      defects => {
        this.defects = defects;
      },
      error => {
        console.error('Error fetching defects:', error);
      }
    );
  }
 
  viewDetails(id: number): void {
    this.router.navigate(['/defect-details', id]);
  }
}