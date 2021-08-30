import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { BillboardResponse } from '../interfaces/billboard-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getBillboard(): Observable<BillboardResponse> {
    return this.http.get<BillboardResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=920c2b99da9df62debac1e029e56f84b&language=en-US&page=1'
    );
  }
}
