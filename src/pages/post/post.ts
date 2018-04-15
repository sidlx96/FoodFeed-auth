import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class Post{
  title:string
  itemName:string
  itemDescription:string
  
  itemComments:string
  id: string

  constructor(){}
}

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post: Post = new Post();
  

  constructor(private database: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
  }

  submit() {
    this.database.list('/posts').push(this.post)
    this.post = new Post()
    this.navCtrl.parent.select(0)
  }
}
