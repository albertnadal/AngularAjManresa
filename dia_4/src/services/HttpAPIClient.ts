import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpAPIClient {

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    let error_msg: string = "Backend returned code "+error.status+" Error: "+error.error;
    console.error(error_msg);
    return throwError(error_msg);
  }

  public getContentFromURL(url: string):any {
    let requestURL = url;

    const httpHeaders = new HttpHeaders({
      "Accept": "application/json"
    });

    return this.http.get(requestURL, {
      headers: httpHeaders,
      withCredentials: true,
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  public deleteContentFromURL(url: string):any {
    let requestURL = url;

    const httpHeaders = new HttpHeaders({
      "Accept": "application/json",
    });

    return this.http.delete(requestURL, {
      headers: httpHeaders,
      withCredentials: true,
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  public putContentToURL(url: string, content: string):any {
    let requestURL = url;

    const httpHeaders = new HttpHeaders({
      "Accept": "application/json",
      "Content-Type": "application/json",
    });

    return this.http.put(requestURL, content, {
      headers: httpHeaders,
      withCredentials: true,
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  public postContentToURL(url: string, content: string):any {
    let requestURL = url;

    const httpHeaders = new HttpHeaders({
      "Accept": "application/json",
      'Content-Type': 'application/json'
    });

    return this.http.post(requestURL, content, {
      headers: httpHeaders,
      withCredentials: true,
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

}
