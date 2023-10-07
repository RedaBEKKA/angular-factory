import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedTableComponent } from './components/nested-table/nested-table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColumnResizeDirective } from './column-resize.directive';

@NgModule({
  declarations: [
    AppComponent,
    NestedTableComponent,
    ColumnResizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
