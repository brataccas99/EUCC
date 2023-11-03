import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LlamaService {
  private readonly apiUrl = 'http://localhost:5000'; // replace with your backend API URL

  constructor(private http: HttpClient) {}

  getLlama2(id: number) {
    return this.http.get(`${this.apiUrl}/llama2/${id}`);
  }

  getLlama(id: number) {
    return this.http.get(`${this.apiUrl}/llamas/${id}`);
  }

  createLlama(data: any) {
    return this.http.post(`${this.apiUrl}/llamas`, data);
  }

  updateLlama(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/llamas/${id}`, data);
  }

  deleteLlama(id: number) {
    return this.http.delete(`${this.apiUrl}/llamas/${id}`);
  }
}
