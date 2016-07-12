import {HttpClient} from 'aurelia-http-client';

export class Home {
  results = [];

  constructor() {
    this.http = new HttpClient();
  }

  search(query, searchType) {
    return this.http
      .get('https://api.github.com/search/'+searchType+'?q='+query)
      .then(response => {
      	this.results = response.content.items
      });
  }
}