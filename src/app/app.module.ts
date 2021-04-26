import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './components/book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
