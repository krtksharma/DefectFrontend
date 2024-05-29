// defect.service.ts
 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Defect } from './defect';
import { UpdateDefectDTO } from './update-defect.dto';
import { DefectReport } from './defectReport';
 
@Injectable({
  providedIn: 'root'
})
export class DefectService {
  private baseUrl = 'https://defectmanagement-production.up.railway.app/api/defects';
 
  constructor(private http: HttpClient) { }

  createDefect(defectData: any) {
    return this.http.post<any>(`${this.baseUrl}/new`, defectData);
  }
 
  getAllDefects(): Observable<Defect[]> {
    return this.http.get<Defect[]>(`${this.baseUrl}/getAll`);
  }
  getDefectsByDeveloper(developerId: string): Observable<Defect[]> {
    return this.http.get<Defect[]>(`${this.baseUrl}/assignedto/${developerId}`);
  }
  getDefectsByDeveloperId(developerId: string): Observable<Defect[]> {
    return this.http.get<Defect[]>(`${this.baseUrl}/assignedto/${developerId}`);
  }
  getDefectReport(projectId: number): Observable<DefectReport> {
    const url = `${this.baseUrl}/report/${projectId}`;
    return this.http.get<DefectReport>(url);
  }

  getDefectById(defectId: number): Observable<Defect> {
    return this.http.get<Defect>(`${this.baseUrl}/${defectId}`);
  }
 
  updateDefect(updateDefectDto: UpdateDefectDTO): Observable<any> {
    return this.http.put(`${this.baseUrl}/resolve`, updateDefectDto);
  }
}