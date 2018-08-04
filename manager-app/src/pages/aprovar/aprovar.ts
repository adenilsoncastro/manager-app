import { UserProvider } from './../../providers/user-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

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
    public _userProvider: UserProvider,
    public loadingCtrl: LoadingController) {
  }

  unapprovedUsers = [];
  approvedUsers = [];

  ionViewDidLoad() {
    this.loadUsers();
  }

  loadUsers() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Carregando...'
    });
    loading.present();

    this._userProvider.listUnapproved().subscribe(
      res => {
        this.unapprovedUsers = res.users;
        this._userProvider.listApproved().subscribe(
          res => {
            loading.dismiss();
            this.approvedUsers = res.users;
            console.log(this.approvedUsers)
          }, error => {
            loading.dismiss();
            this.handleErrorFromApiCall(error);
          }
        ) 
      }, error => {
        loading.dismiss();
        this.handleErrorFromApiCall(error);
      }
    )      
    
  }

  aprovar(id) {
    this._userProvider.approve(id, true).subscribe(res => {
      this.loadUsers();
      this._toast.create({
        message: res.message,
        duration: 3000,
        position: 'bottom'
      }).present();
    }, error => {
      this.handleErrorFromApiCall(error);
    })
  }

  desaprovar(id) {
    debugger
    this._userProvider.approve(id, false).subscribe(res => {
      this.loadUsers();
      this._toast.create({
        message: res.message,
        duration: 3000,
        position: 'bottom'
      }).present();
    }, error => {
      this.handleErrorFromApiCall(error);
    })
  }

  handleErrorFromApiCall(error) {
    var errorMsg = "";

    if (error.error.text) {
      errorMsg = error.error.text;
    } else {
      errorMsg = error.message;
    }

    let toast = this._toast.create({
      message: "Ocorreu um erro na comunicação com o servidor",
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
