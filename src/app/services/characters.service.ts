import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult } from '../interfaces/api-result';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAllCharacters(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseApiUrl}/character?page=${page}`);
  }
}
