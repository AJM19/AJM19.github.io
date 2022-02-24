import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value = "";

  word: any;
  definitions: any;
  phonetics: any;

  constructor(private httpService: ApiHttpService) { }

  ngOnInit(): void {
  }

  searchDictionary() {
    const value = this.httpService.getWord(this.value).subscribe((data: any) => {
      this.word = (data[0].word).toUpperCase();
      this.definitions = data[0].meanings

      this.definitions.forEach((definition: any) => {
        console.log(definition);
      });
      console.log(data[0].meanings);
    },
      (error: any) => {
        this.word = "Sorry, couldn't find that word...";
        console.log('error caught in component: ', error)
      });
    console.log(value);
  }

  clear() {
    this.value = '';
    this.word = '';
    this.definitions = '';
  }

}
