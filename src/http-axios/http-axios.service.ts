import { Injectable } from '@nestjs/common';
import { HttpService, HttpModule } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpAxiosService {
  constructor(private http: HttpService) {}

  findAll(): Observable<Array<Object>> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data;
      }),
    );
  }
}
