import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {

  createbookForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
  }

  create() {
    console.log(this.createbookForm.value);

    this.bookService.createBook(this.createbookForm.value).subscribe(() => {
      this.router.navigate(['/book/list']);
      alert("Create Success");
    }, () => {
      alert("Create Failure");
    });
  }

}
