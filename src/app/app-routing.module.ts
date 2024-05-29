import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDefectComponent } from './new-defect/new-defect.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { DefectListComponent } from './defect-list/defect-list.component';
import { DefectDetailsComponent } from './defect-details/defect-details.component';
import { DefectbydeveloperlistComponent } from './defectbydeveloperlist/defectbydeveloperlist.component';
import { DefectsReportComponent } from './defects-report/defects-report.component';
import { LoginComponent } from './login/login.component';
import { RoleGuard } from './services/role.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuard], data: { expectedRole: 'tester|developer|productowner' } },
  { path: 'create-defect', component: NewDefectComponent, canActivate: [RoleGuard], data: { expectedRole: 'tester' } },
  { path: 'defects-assigned', component: DefectListComponent, canActivate: [RoleGuard], data: { expectedRole: 'developer' } },
  { path: 'defect-by-developer', component: DefectbydeveloperlistComponent, canActivate: [RoleGuard], data: { expectedRole: 'developer' } },
  { path: 'defect-report', component: DefectsReportComponent, canActivate: [RoleGuard], data: { expectedRole: 'productowner' } },
  { path: 'defect-details/:id', component: DefectDetailsComponent, canActivate: [RoleGuard], data: { expectedRole: 'tester|developer|productowner' } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
