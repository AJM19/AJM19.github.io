import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiHttpService {
  constructor(private http: HttpClient) { }

  public getWord(word: any) {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
    return this.http.get(url);
  }
}