import { Component } from '@angular/core';
import { MetrocardsService } from '../services/metrocards.service';
import { ToastController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  card = {
    name: "",
    days: "",
    price: "",
    neighborhood: ""
  }

  cardForm;
  public paymentMethods = [
    { val: 'Venmo', path: 'assets/venmo.png'},
    { val: 'PayPal', path: 'assets/paypal.png' },
    { val: 'Zelle', path: 'assets/zelle.png' },
    { val: 'Apple Pay', path: 'assets/apple.png' },
    { val: 'Cash', path: 'assets/cash.png' } 
  ];

  constructor(private vibration: Vibration, private metroCardService: MetrocardsService, public toastController: ToastController) {

  }

  addCard(){
    this.vibration.vibrate(1000);
    console.log(this.card);
    this.metroCardService.addCard(this.card);
    this.presentToast();
    this.clearForm();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your Card has been posted.',
      duration: 3000,
      position: "top"
    });
    toast.present();
  }

  clearForm(){
    this.card = {
      name: "",
      days: "",
      price: "",
      neighborhood: ""
    }
    console.log(this.card);
  }

}
