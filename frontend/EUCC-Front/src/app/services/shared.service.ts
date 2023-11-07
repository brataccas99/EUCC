import { Injectable } from '@angular/core';
import { environment } from 'src/env/envinronments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private scriptURL = environment.scriptURL;

  constructor(private http: HttpClient) {}

  sendEmail(email: string) {
    return this.http.post(this.scriptURL, { email });
  }
}
