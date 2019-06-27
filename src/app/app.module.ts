import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/layout/body/body.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ButtonsComponent } from './components/layout/buttons/buttons.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ConsolidatedScreensComponent } from './components/pages/consolidated-screens/consolidated-screens.component';
import { TableComponent } from './components/pages/table/table.component';
import { BannerComponent } from './components/layout/banner/banner.component';
import { CustomerInfoComponent } from './components/pages/customer-info/customer-info.component';
import { RiskInfoComponent } from './components/pages/risk-info/risk-info.component';
import { ArComponent } from './components/pages/ar/ar.component';
import { Banner2Component } from './components/layout/banner2/banner2.component';
import { CustomerInfo2Component } from './components/pages/customer-info2/customer-info2.component';
// import { AgingSummaryComponent } from './aging-summary/aging-summary.component';
// import { Table } from './components/pages/table/table.component/table.component.component';
// import { Table } from './components/pages/dashboard/table/table.component/table.component.component';
// import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    ButtonsComponent,
    DashboardComponent,
    ConsolidatedScreensComponent,
    TableComponent,
    BannerComponent,
    CustomerInfoComponent,
    RiskInfoComponent,
    ArComponent,
    Banner2Component,
    CustomerInfo2Component,
    // AgingSummaryComponent,
    // Table.ComponentComponent,
    // Table.ComponentComponent,
    // ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
