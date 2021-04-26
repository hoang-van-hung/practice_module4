import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/class/book';
import { BookService } from 'src/app/service/book.service';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import {BookDetailComponent} from '../book-detail/book-detail.component';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Observable<Book[]>;

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.books = this.bookService.getBookList();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
