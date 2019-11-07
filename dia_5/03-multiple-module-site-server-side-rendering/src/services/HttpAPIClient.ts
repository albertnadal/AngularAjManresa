import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export type ResponseType = 'arraybuffer' | 'blob' | 'json' | 'text' | 'xml';

@Injectable()
export class HttpAPIClient {

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    let error_msg: string = "Backend returned code "+error.status+" Error: "+error.error;
    console.error(error_msg);
    return throwError(error_msg);
  }

  public getContentFromURL(url: string, _responseType: ResponseType = 'json'):any {
    let requestURL = url;

    const httpHeaders = new HttpHeaders({
      "Accept": "application/json,application/xml"
    });

    return this.http.get(requestURL, {
      headers: httpHeaders,
      responseType: _responseType as 'text'
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  public deleteContentFromURL(url: string, _responseType: ResponseType = 'json'):any {
    let requestURL = url;

    const httpHeaders = new HttpHeaders({
      "Accept": "application/json,application/xml"
    });

    return this.http.delete(requestURL, {
      headers: httpHeaders,
      responseType: _responseType as 'text'
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  public putContentToURL(url: string, content: string, _responseType: ResponseType = 'json'):any {
    let requestURL = url;

    const httpHeaders = new HttpHeaders({
      "Accept": "application/json,application/xml",
      "Content-Type": "application/json"
    });

    return this.http.put(requestURL, content, {
      headers: httpHeaders,
      responseType: _responseType as 'text'
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  public postContentToURL(url: string, content: string, _responseType: ResponseType = 'json'):any {
    let requestURL = url;

    const httpHeaders = new HttpHeaders({
      "Accept": "application/json,application/xml",
      'Content-Type': 'application/json'
    });

    return this.http.post(requestURL, content, {
      headers: httpHeaders,
      responseType: _responseType as 'text'
    }).pipe(
      catchError(this.handleError.bind(this))
    );
  }

}
