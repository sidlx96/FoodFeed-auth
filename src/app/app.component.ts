import { Component,ViewChild  } from '@angular/core';
import { Platform,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { firebaseConfig } from './credentials.backup';
import { Unsubscribe } from '@firebase/util';
import { TabsPage } from '../pages/tabs/tabs';

 import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
   @ViewChild(Nav) nav: Nav;


  constructor(
    platform: Platform,
  
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    firebase.initializeApp(firebaseConfig);

    const unsubscribe: Unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.rootPage = TabsPage;
        unsubscribe();
      } else {
        this.rootPage = 'LoginPage';
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  goHome(){
    this.nav.push(HomePage);

  }
  
  goToAbout(){
    this.nav.push(AboutPage);
  }

  goToContact(){
    this.nav.push(ContactPage);
  }
}
