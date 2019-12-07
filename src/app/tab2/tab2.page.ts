import { Component } from '@angular/core';
import { MetrocardsService } from '../services/metrocards.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  card = {};
  cardForm;
  public paymentMethods = [
    { val: 'Venmo', isChecked: true, path: './../assets/venmo.png'},
    { val: 'PayPal', isChecked: false, path: './../assets/paypal.png' },
    { val: 'Zelle', isChecked: false, path: './../assets/zelle.png' },
    { val: 'Apple Pay', isChecked: false, path: './../assets/apple.png' },
    { val: 'Cash', isChecked: false, path: './../assets/metrocard.png' } 
  ];

  constructor(private metroCardService: MetrocardsService, public toastController: ToastController) {

  }

  addCard(){
    console.log(this.card);
    this.metroCardService.addCard(this.card);
    this.presentToast();
    this.clearForm();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your Card has been posted.',
      duration: 3000
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
