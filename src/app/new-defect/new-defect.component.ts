import { Component,ViewChild } from '@angular/core';
import { DefectService } from '../services/defect.service';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-defect',
  templateUrl: './new-defect.component.html',
  styleUrls: ['./new-defect.component.css']
})
export class NewDefectComponent {
  @ViewChild('defectForm') defectForm!: NgForm;
  defectTitle: string = '';
  defectDetails: string = '';
  stepsToReproduce: string = '';
  defectPriority: string = '';
  defectSeverity: string = '';
  assignedToDeveloperId: string = '';
  reportedByTesterId: string = '';
  detectedOn: string = '';
  projectCode: number = 0;
  status: string = 'Open';
  submitted: boolean = false;
  today: string; // Property to hold today's date in the required format
  successMessage : string = "";
  errorMessage :  string = "";

  
 
  constructor(private defectService: DefectService,private router: Router) {
    // Initialize the today property with today's date in the required format (YYYY-MM-DD)
    const now = new Date();
    const month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1).toString();
    const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate().toString();
    this.today = `${now.getFullYear()}-${month}-${day}`;
    this.detectedOn = this.today;
    console.log(this.today);
  }
 
  submitForm(defectForm: NgForm) {
    if (defectForm.invalid) {
      return;
    }
 
    const defectData = {
      title: this.defectTitle,
      defectdetails: this.defectDetails,
      stepstoreproduce: this.stepsToReproduce,
      priority: this.defectPriority,
      severity: this.defectSeverity,
      assignedtodeveloperid: this.assignedToDeveloperId,
      reportedbytesterid: this.reportedByTesterId,
      detectedon: this.detectedOn,
      projectcode: this.projectCode,
      status: this.status
    };
 
    this.defectService.createDefect(defectData).subscribe({
      next: response => {
        console.log("success");
        this.successMessage = response.successMessage;
        this.submitted = true;
      },
      error: errorMsg => {
        console.error('Error:', errorMsg);
        if (errorMsg === 'Bad request. Please check your data.') {
          this.errorMessage = 'Bad request. Please check your data.';
        } else if (errorMsg === 'Maximum bug assignment limit reached for today.' || errorMsg.status===403) {
          this.errorMessage = 'Maximum bug assignment limit reached for today.';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
    });
 
    // Clear form fields after submission
    setTimeout(() => {
      this.defectForm.resetForm();
      this.clearForm();
      this.router.navigate(['/dashboard']);
    }, 5000); 
    
  }
 
  // Method to clear form fields
  clearForm() {
    this.defectTitle = '';
    this.defectDetails = '';
    this.stepsToReproduce = '';
    this.defectPriority = '';
    this.defectSeverity = '';
    this.assignedToDeveloperId = '';
    this.reportedByTesterId = '';
    this.detectedOn = this.today;
    this.projectCode = 0;
    this.status = 'Open';
  }
}