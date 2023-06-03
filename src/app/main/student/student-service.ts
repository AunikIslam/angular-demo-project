import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Student } from "./student";

@Injectable({ providedIn: 'root'})

export class StudentService {
  // // Base url
  private heroesUrl = 'api/students';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getStudents (): Observable<Student[]> {
    return this.http.get<Student[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  addStudent (student: Student): Observable<Student> {
    return this.http.post<Student>(this.heroesUrl, student, this.httpOptions).pipe(
      catchError(this.handleError<Student>('addStudent'))
    );
  }
}
