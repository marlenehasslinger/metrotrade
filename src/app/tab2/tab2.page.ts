import { Component } from '@angular/core';
import { MetrocardsService } from '../services/metrocards.service';
import { ToastController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public myForm: FormGroup;
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

  constructor(public formBuilder: FormBuilder, private vibration: Vibration, private metroCardService: MetrocardsService, public toastController: ToastController) {
      this.myForm = this.formBuilder.group({
        name: ['', Validators.required],
        days: ['', Validators.required],
        price: ['', Validators.required],
        neighborhood: ['', Validators.required],
        });
  }

  get name() {
    return this.myForm.get('name');
  }
  get days() {
    return this.myForm.get('days');
  }
  get price() {
    return this.myForm.get('price');
  }
  get neighborhood() {
    return this.myForm.get('neighborhood');
  }

  addCard(){
    if(this.myForm.valid){
      this.vibration.vibrate(1000);
      console.log(this.myForm.value);
      this.metroCardService.addCard(this.myForm.value);
      this.presentToast();
      this.myForm.reset();
    }
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
