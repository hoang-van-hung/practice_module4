import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/class/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = new Book();
  submitted = false;
  error_msg = '';

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookService
      .createBook(this.book).subscribe((data: any) => {
        if (data.status != undefined && data.status != 'undefined') {
          if (data.status.includes('Authorization Token not found')) {
            this.error_msg = 'Authorization Token not found';
          } else if (data.status.includes('Token is Invalid')) {
            this.error_msg = 'Token is Invalid';
          }
        }

        this.book = new Book();
        //this.gotoList();
      },
        (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
