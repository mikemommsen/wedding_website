import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  constructor(route: ActivatedRoute,private _location: Location) { 
    const heroBackgroundImage:String = route.snapshot.data['heroImage'];
    const key:String = route.snapshot.data['contentKey'];
    const title:String = route.snapshot.data['pageTitle'];
    this.heroBackgroundImage = heroBackgroundImage;
    this.contentKey = key;
    this.pageTitle = title;
  }
  heroBackgroundImage: String = "";
  contentKey: String = "";
  pageTitle: String = "";
  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}
