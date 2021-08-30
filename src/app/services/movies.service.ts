import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { BillboardResponse } from '../interfaces/billboard-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private billboardPage = 1;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '920c2b99da9df62debac1e029e56f84b',
      language: 'en-US',
      page: this.billboardPage.toString(),
    };
  }

  getBillboard(): Observable<BillboardResponse> {
    return this.http
      .get<BillboardResponse>(`${this.baseUrl}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        tap(() => {
          this.billboardPage += 1;
        })
      );
  }
}
