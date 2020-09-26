import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './components/cours/cours.component';
import { HelloComponent } from './components/home/hello.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestComponent } from './components/test/test.component';
import { Cours1Component } from './components/cours1/cours1.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    CodemirrorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NotFoundComponent,
    HomeComponent,
    TestComponent,
    CoursComponent,
    Cours1Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
