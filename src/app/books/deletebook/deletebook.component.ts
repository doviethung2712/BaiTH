import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  id: number;
  deletebook: FormGroup;
  constructor(private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getById(this.id);
    });
  }

  ngOnInit() {
  }

  getById(id) {
    return this.bookService.getById(id).subscribe(book => {
      this.deletebook = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    });
  }
  deleteBook(id) {
    let x = confirm("are you sure");
    if (x) {
      this.bookService.deleteBook(id).subscribe(() => {
        alert("Success!");
        this.router.navigate(['/book/list']);
      }, () => {
        alert('error');
      });
    } else {
      this.router.navigate(['/book/list']);
    }

  }
}
