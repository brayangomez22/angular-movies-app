import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { tap, map } from 'rxjs/operators';
import { BillboardResponse, Movie } from '../interfaces/billboard-response';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private billboardPage = 1;
  public loading = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '920c2b99da9df62debac1e029e56f84b',
      language: 'en-US',
      page: this.billboardPage.toString(),
    };
  }

  resetBillboardPage() {
    this.billboardPage = 1;
  }

  getBillboard(): Observable<Movie[]> {
    if (this.loading) {
      return of([]);
    }

    this.loading = true;

    return this.http
      .get<BillboardResponse>(`${this.baseUrl}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.billboardPage += 1;
          this.loading = false;
        })
      );
  }

  searchMovies(text: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: text };

    return this.http
      .get<BillboardResponse>(`${this.baseUrl}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  getMovieDetail(id: string) {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
      params: this.params,
    });
  }
}
