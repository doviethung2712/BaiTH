import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get<any>(environment.api_url + 'books');
  }

  getById(id): Observable<any> {
    return this.http.get<any>(environment.api_url + `books/${id}`);
  }

  createBook(data): Observable<any> {
    return this.http.post<any>(environment.api_url + 'books', data);
  }

  deleteBook(id): Observable<any> {
    return this.http.delete<any>(environment.api_url + `books/${id}`);
  }

  updatebook(id,data): Observable<any> {
    return this.http.put<any>(environment.api_url + `books/${id}`, data);
  }

}
