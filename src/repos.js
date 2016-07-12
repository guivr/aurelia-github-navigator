import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
 
@inject(HttpClient)
export class Repo {
	constructor(http) {
		http.configure(config => {
            config
              .useStandardConfiguration()
              .withBaseUrl('https://api.github.com/');
        });
 
        this.http = http;
	}

	activate(params){
		this.repoOwner = params.owner;
		this.repoName =  params.name;
		const repoAdress = 'repos/' + params.owner + '/' + params.name;

		this.http.fetch(repoAdress)
          .then(response => response.json())
          .then(repoInfoResult => this.repoInfoResult = repoInfoResult);

		this.http.fetch(repoAdress + '/issues')
          .then(response => response.json())
          .then(repoIssuesResult => this.repoIssuesResult = repoIssuesResult);

		this.http.fetch(repoAdress + '/commits')
          .then(response => response.json())
          .then(repoCommitsResult => this.repoCommitsResult = repoCommitsResult);

		this.http.fetch(repoAdress + '/pulls')
          .then(response => response.json())
          .then(repoPullsResult => this.repoPullsResult = repoPullsResult);
	}
}