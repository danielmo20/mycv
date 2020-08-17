import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  uri = '/api/comments/';

  constructor(private http: HttpClient) { }

   addComment(comments) {
    
	
    console.log("to service", comments);
    this.http.post(`${this.uri}`, comments)
        .subscribe(res => console.log('Done'));
        
  }
  
}