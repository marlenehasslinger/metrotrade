import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetrocardsService {
  metroCards = [
        {
            id: 1,
            seller: "Gina Smith",
            days: 13,
            price: 39,
        },
        {
          id: 2,
          seller: "John Doe",
          days: 5,
          price: 15,
        },
        {
          id: 3,
          seller: "Lucas Will",
          days: 20,
          price: 60,
        }
      ];

  constructor() { }

  getCards(){
    console.log(this.metroCards);
    return this.metroCards;
  }
}
