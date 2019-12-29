import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Przykłady interpolacji';
  happy = true;
  dog = { name: 'Reksio' };

  getInfo() {
    return 'Tekst z metody';
  }

  get info() {
    return 'Tekst z gettera';
  }

  getNumber() {
    return 2;
  }

  getPerson() {
    return {
      name: 'Jhon',
      age: 23,
    };
  }
}
