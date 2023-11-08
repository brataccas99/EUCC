import { Injectable } from '@angular/core';
import { environment } from 'src/env/envinronments';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs'; 

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private scriptURL = environment.scriptURL;
  private countriesURL = 'https://restcountries.com/v3.1/independent?status=true'

  constructor(private http: HttpClient) {}

  sendForm(formData: any): Observable<any> {
    return this.http.post(this.scriptURL, formData); 
  }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.countriesURL).pipe(
      map((countries) => countries.map((country) => country.name.common).sort((a, b) => a.localeCompare(b)))
    );
  }
  
}
