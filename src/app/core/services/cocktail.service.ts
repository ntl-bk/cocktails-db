import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DrinksModel} from '../../shared/models/cocktail.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) {}

  getCocktailsByCategory(query?: string, c = '' ): Observable<DrinksModel> {
    let params = new HttpParams();
    params = params.append('c', `${c}`);
    return this.http.get<DrinksModel>(`${environment.apiBaseURI}/filter.php${query && query.length ? '?' + query : ''}`, { params });
  }
}

