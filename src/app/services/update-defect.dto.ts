// update-defect.dto.ts
 
export interface UpdateDefectDTO {
    id: number;
    status: string;
    resolutions: UpdateResolutionDTO[];
  }
   
  export interface UpdateResolutionDTO {
    resolution: string;
    resolutiondate: Date;
  }
  
