import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [ApiService]
})

export class HomeComponent implements OnInit {
	news: any = [];
	indiaNews: any = [];
	usNews: any = [];
	sportsNews: any = [];
	businessNews: any = [];

	constructor(private api: ApiService) {}

	ngOnInit(): void {
		this.loadCountryNews('in');
		this.loadCountryNews('us');

		this.loadCategoryNews('in', 'business');
		this.loadCategoryNews('in', 'sports');
	}

	loadCountryNews(country = 'in') {
		this.api.getNews(country).subscribe((res) => {
			switch (country) {
				case 'in':
					this.indiaNews = res.articles;
					this.indiaNews.length = 4;
					break;
				case 'us':
					this.usNews = res.articles;
					this.usNews.length = 3;
					break;
			}
		});
	}

	loadCategoryNews(country = 'in', category = 'business') {
		this.api.getNews(country, category).subscribe((res) => {
			switch (category) {
				case 'business':
					this.businessNews = res.articles;
					this.businessNews.length = 4;
					break;
				case 'sports':
					this.sportsNews = res.articles;
					this.sportsNews.length = 5;
					break;
			}
		});
	}
}
