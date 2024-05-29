import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewDefectComponent } from './new-defect/new-defect.component';
 
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Import HttpClientModule
import { navbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefectListComponent } from './defect-list/defect-list.component';
import { DefectDetailsComponent } from './defect-details/defect-details.component';
import { DefectbydeveloperlistComponent } from './defectbydeveloperlist/defectbydeveloperlist.component';
import { DefectsReportComponent } from './defects-report/defects-report.component';
import { LoginComponent } from './login/login.component';

@NgModule({ declarations: [
        AppComponent,
        NewDefectComponent,
        navbarComponent,
        DashboardComponent,
        DefectListComponent,
        DefectDetailsComponent,
        DefectbydeveloperlistComponent,
        DefectsReportComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }