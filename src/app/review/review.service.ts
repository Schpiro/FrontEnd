import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Review } from './review-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewUrl = 'http://localhost:8080/review';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient
  ) { }

  getReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(this.reviewUrl)
    .pipe(
      tap(_ => console.log('fetched Review')),
      catchError(this.handleError<Review[]>('getReviews', []))
    );
  }

  getReviewsByHardwareCode(code: String): Observable<Review[]> {
    const url = `${this.reviewUrl}/${code}`;
    return this.http.get<Review[]>(url)
    .pipe(
      tap(_ => console.log('fetched Review')),
      catchError(this.handleError<Review[]>('getReviewsByHardwareId'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
