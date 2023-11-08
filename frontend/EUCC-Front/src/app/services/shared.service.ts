import { Injectable } from '@angular/core';
import { environment } from 'src/env/envinronments';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private scriptURL = environment.scriptURL;

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any): Observable<any> {
    const params = new HttpParams({
      fromObject: emailData,
    });

    return this.http.get(this.scriptURL, { params });
  }
}
