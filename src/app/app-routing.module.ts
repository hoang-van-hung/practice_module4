import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'add', component: BookCreateComponent },
  { path: 'update/:id', component: BookEditComponent },
  { path: 'details/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
