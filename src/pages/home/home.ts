import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Observable<any[]>;
  defaultImageUrl:string="https://firebasestorage.googleapis.com/v0/b/foodfeed-96339.appspot.com/o/Pratt_Next_Level_Burger_Seattle_012.jpg?alt=media&token=0274fb42-5bbb-443a-91b0-38dd0d957530";

  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    afDB: AngularFireDatabase) {
      this.posts = afDB.list('posts');
    }

  async logOut(): Promise<void> {
    await this.authProvider.logoutUser();
    this.navCtrl.setRoot('LoginPage');
  }
}
