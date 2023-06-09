import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { ApiService } from './api-calls-service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent implements OnInit {

  displayedColumns: string[] = ['Word', 'Score', 'Category'];
  dataSource: any[] = [];
  filters = {
    limit: 15,
    t: 2023
  };
  redditContents = [];
  wordsDataSource = [];
  private unsubscribeAll: Subject<void>;
  
  constructor(private service: ApiService) {
    this.unsubscribeAll = new Subject();
    this.getFirstApiData();
    this.getSecondApiData();
   }

  ngOnInit() {
  }

  getFirstApiData(): void {
    const api = 'https://www.reddit.com/r/Wallstreetbets/top.json';
    this.service.getData(api, this.filters).subscribe(pResponse => {
      this.redditContents = pResponse['data']['children'];
      // console.log(this.redditContents);
    })
  }

  getSecondApiData(): void {
    const filters = {
      ml: 'ringning+in+the+ears'
    }
    const api = 'https://api.datamuse.com/words';
    this.service.getData(api, filters).subscribe(pResponse => {
      this.wordsDataSource = pResponse;
    })
  }

  ngOnDestroy(){
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}