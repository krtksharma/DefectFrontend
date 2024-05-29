// // defect.ts
 
// export interface Defect {
//     id: number;
//     title: string;
//     description: string;
//     priority: string;
//     resolution : string;
//     stepsToReproduce : string;
//     severity: string;
//     status: string;
//     assignedDeveloper: string;
//     createdBy: string;
//     createdAt: Date;
//     updatedAt: Date;
//   }
export interface Defect {
    id: number;
    title: string;
    defectdetails: string;
    stepstoreproduce: string;
    priority: string;
    detectedon: Date;
    expectedresolution: Date;
    reportedbytesterid: string;
    assignedtodeveloperid: string;
    severity: string;
    status: string ;
    projectcode: number;
    resolutions: Resolution[];
  }
   
  interface Resolution {
    id: number;
    resolutiondate: Date;
    resolution: string;
  }
