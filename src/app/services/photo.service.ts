import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Photo } from '../interface/photo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url_services = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {
    console.log('services ready');
  }

  getPhotos(){
    return this.http.get(this.url_services);
  }
}
