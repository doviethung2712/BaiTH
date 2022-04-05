import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  id: number;
  updatebook: FormGroup;
  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getById(this.id);
    });
  }

  ngOnInit() {
  }
  getById(id) {
    return this.bookService.getById(id).subscribe(book => {
      this.updatebook = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    });
  }
  update(id) {
    this.bookService.updatebook(id, this.updatebook.value).subscribe(() => {
      this.router.navigate(['/book/list']);
      alert('Update Success');
    }, () => {
      alert('Update Failure');
    })
  }



}
