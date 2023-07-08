import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NomineeComponent } from './nominee/nominee.component';
import { GuardianDetailsComponent } from './guardian-details/guardian-details.component';
import { FormGridComponent } from './form-grid/form-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NomineeComponent,
    GuardianDetailsComponent,
    FormGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

