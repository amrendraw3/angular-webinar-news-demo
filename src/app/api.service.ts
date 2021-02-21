import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class ApiService {

	constructor(private http: HttpClient) {}

	public getNews(country = 'in', category = 'business') {
		return this.http.get('https://newsapi.org/v2/top-headlines?country=' + country + '&category=' + category + '&apiKey=cdd81f39b52140eba0da0ef1301c5273').pipe(
			map((res: any) => res),
			catchError(error => throwError(error.error || 'Server Error')));
	}
}
