import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  constructor(public navCtrl: NavController, private redditService:RedditService) {

  }

  ngOnInit(){
    this.getPosts('sports', 5);
  }

  getPosts(category, limit){
    this.redditService.getPosts(category, limit).subscribe(respons => {
      console.log(respons);
    });
  }

}
