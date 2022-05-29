import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:81/articles';
  article: any;// ajouté
  constructor(private http: HttpClient) { }

  // upload(file: File): Observable<HttpEvent<any>> {
    upload(article:any , file: File): Observable<HttpEvent<any>> { // ajouté

      const providerId = Number(article.providerId);
      //var numberValue = Number(stringToConvert);

    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('article',article);

    const req = new HttpRequest('POST', `${this.baseUrl}/add/`+providerId, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    // return this.http.get(`${this.baseUrl}/files`);
    return this.http.get(`${this.baseUrl}/list`);
  }
}
