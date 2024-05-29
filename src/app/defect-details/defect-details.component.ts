import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Defect } from '../services/defect';
import { DefectService } from '../services/defect.service';
 import { UpdateDefectDTO } from '../services/update-defect.dto';
 @Component({
  selector: 'app-defect-details',
  templateUrl: './defect-details.component.html',
  styleUrls: ['./defect-details.component.css']
})
export class DefectDetailsComponent implements OnInit {
  currentDate: Date = new Date();
  defectId!: number;
  defect!: Defect;
  resolution!: string;
  status!: string;
  acknowledgment!: string;
  showForm: boolean = false;
  showButton: boolean = false;
 
  constructor(private route: ActivatedRoute, private defectService: DefectService) { }
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.defectId = +params['id'];
      this.loadDefectDetails();
    });
  }
 
  loadDefectDetails() {
    this.defectService.getDefectById(this.defectId).subscribe(defect => {
      if (defect) {
        this.defect = defect;
      } else {
        console.error(`Defect with ID ${this.defectId} not found.`);
      }
    });
  }

 
  updateDefect() {
    const updatedDefect: UpdateDefectDTO = {
      id: this.defectId,
      status: this.status,
      resolutions: [{
        resolution: this.resolution,
        resolutiondate: this.currentDate // Current date in YYYY-MM-DD format
      }]
    };
 
    this.defectService.updateDefect(updatedDefect).subscribe(() => {
      this.acknowledgment = 'Defect updated successfully!';
      this.loadDefectDetails();
    });
    this.showForm = false;
    this.showButton = false;
  }
 
  showUpdateForm() {
    this.showForm = true;
    this.showButton = true;
  }
}
// export class DefectDetailsComponent implements OnInit {
//   currentDate: Date = new Date();
//   defectId!: number;
//   defect!: Defect;
//   resolution!: string;
//   status!: string;
//   acknowledgment!: string;
//   showForm: boolean = false; // Variable to track whether form should be shown
//   showButton: boolean = false; 

//   constructor(private route: ActivatedRoute, private defectService: DefectService) { }
 
//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.defectId = +params['id'];
//       this.loadDefectDetails();
//     });
//   }
 
//   loadDefectDetails() {
//     this.defectService.getDefectById(this.defectId).subscribe(defect => {
//       if (defect) {
//         this.defect = defect;
//       } else {
//         console.error(`Defect with ID ${this.defectId} not found.`);
//       }
//     });
//   }
 
   
//   updateDefect() {
//     const updatedDefect: UpdateDefectDTO = {
//       id: this.defectId,
//       status: this.status,
//       resolutions: [{
//         resolution: this.resolution,
//         resolutiondate: this.currentDate // Current date in YYYY-MM-DD format
//       }]
//     };
 
//     this.defectService.updateDefect(updatedDefect).subscribe(
//       response => {
//         this.acknowledgment = 'Defect updated successfully!';
//         // Optionally reload defect details after update
//         this.loadDefectDetails();
//       },
//       error => {
//         console.error('Error updating defect:', error);
//       }
//     );
//   }
// }