import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interface/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  private photos: Photo[] = [];
  constructor(private sevices: PhotoService) { }

  ngOnInit(): void {
    const data = this.sevices.getPhotos().subscribe({next: data => {console.log(data)}})
  }

}
