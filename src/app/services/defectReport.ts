export interface ResolutionDTO {
  id: number;
  defectId: number;
  resolutiondate: string; // Assuming you handle date format appropriately
  resolution: string;
}
 
export interface DefectDTO {
  id: number;
  title: string;
  defectdetails: string;
  stepstoreproduce: string;
  priority: string;
  detectedon: string; // Assuming you handle date format appropriately
  expectedresolution: string; // Assuming you handle date format appropriately
  reportedbytesterid: string;
  assignedtodeveloperid: string;
  severity: string;
  status: string;
  projectcode: number;
  resolutions: ResolutionDTO[];
}
 
export interface DefectReport {
  projectId: number;
  defects: DefectDTO[];
}