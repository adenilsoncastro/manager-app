import { UserProvider } from './../../providers/user-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-aprovar',
  templateUrl: 'aprovar.html',
  providers: [UserProvider]
})
export class AprovarPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _toast: ToastController,
    public _userProvider: UserProvider) {
  }

  users = [];

  ionViewDidLoad() {
    this._userProvider.listUnapproved().subscribe(
      res => {
        console.log(res.users);
        this.users = res.users;
      }, error => {

      }
    )
  }

  aprovar(id) {
    this._userProvider.approve(id, true).subscribe(res => {
      this._toast.create({
        message: res.message,
        duration: 3000,
        position: 'bottom'
      }).present();
    }, error => {

    })
  }
}
