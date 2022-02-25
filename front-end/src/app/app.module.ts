import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { DeviceManagementComponent } from './device-management/device-management.component';
import { CategoryAddComponent } from './category-management/category-add/category-add.component';
import { CategoryListComponent } from './category-management/category-list/category-list.component';
import { DeviceAddComponent } from './device-management/device-add/device-add.component';
import { DeviceListComponent } from './device-management/device-list/device-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryManagementComponent,
    DeviceManagementComponent,
    CategoryAddComponent,
    CategoryListComponent,
    DeviceAddComponent,
    DeviceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
