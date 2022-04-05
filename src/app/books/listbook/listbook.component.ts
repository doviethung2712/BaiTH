import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/module/book';
// import { Book } from 'src/app/module/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  booklist: Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(booklist => {
      this.booklist = booklist;
    });
  }
}
