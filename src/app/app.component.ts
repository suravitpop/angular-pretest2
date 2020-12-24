import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quotes;
  searchText: string;

  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getQuotes().subscribe(data => {
      this.quotes = data;

      console.log(data);
    });
  }
}
