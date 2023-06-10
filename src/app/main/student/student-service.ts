import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Student } from "./student";

@Injectable({ providedIn: 'root'})

export class StudentService {
  
  private baseUrl = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  getStudents (data?: any): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl, {
      params: new HttpParams({fromObject: data})
    })
      .pipe(
        catchError(this.handleError('getStudents', []))
      );
  }

  addStudent (student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student, this.httpOptions).pipe(
      catchError(this.handleError<Student>('addStudent'))
    );
  }

  editStudent (student: Student): Observable<Student> {
    return this.http.put<Student>(this.baseUrl, student, this.httpOptions).pipe(
      catchError(this.handleError<Student>('editStudent'))
    );
  }

  deleteStudent (): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
