import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros:any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='
              + parametros.pais + '&category' + parametros.categoria + '=business&apiKey=2046f56906aa4afd80e738198f9493a7'

              return this.http.get(URL);
  }
}
