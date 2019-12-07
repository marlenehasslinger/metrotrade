import { Injectable } from '@angular/core';
import { CommandName } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MetrocardsService {
  metroCards = [
        {
            name: "Gina Smith",
            days: 13,
            neighborhood: "Queens",
            price: 39,
        },
        {
          name: "John Doe",
          days: 5,
          neighborhood: "Williamsburg",
          price: 15,
        },
        {
          name: "Lucas Will",
          neighborhood: "Crown Heights",
          days: 20,
          price: 60,
        }
      ];

  constructor() { }

  getCards(){
    console.log(this.metroCards);
    return this.metroCards;
  }

  addCard(card){
    this.metroCards.push(
      {
        name: card.name,
        days: card.days,
        neighborhood: card.neighborhood,
        price: card.price,
      }
    )
  }
}
