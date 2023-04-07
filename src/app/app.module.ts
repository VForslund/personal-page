import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {IntroductionComponent} from "./home/introduction/introduction.component";
import {HttpClientModule} from "@angular/common/http";
import {AboutComponent} from "./about/about.component";
import {HistoryComponent} from "./about/history/history.component";
import {SkillSphereComponent} from "./home/skill-sphere/skill-sphere.component";
import {ContactDialogComponent} from "./contact-dialog/contact-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    IntroductionComponent,
    SkillSphereComponent,
    HistoryComponent,
    ContactDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
