import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { OpmetData, OpmetResponse } from '../../opmet-interface';

const URL = 'https://ogcie.iblsoft.com/ria/opmetquery';

@Injectable({
  providedIn: 'root',
})
export class OpmetLoaderService {
  constructor(private http: HttpClient) {}

  getOpmetData(data: OpmetData): Observable<OpmetResponse> {
    return this.http
      .post<OpmetResponse>(URL, {
        id: 'aviinfo',
        method: 'query',
        params: [
          {
            id: 'aviinfoparams',
            ...data,
          },
        ],
      })
      .pipe(take(1));
  }
}
