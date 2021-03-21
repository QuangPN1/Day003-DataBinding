import { Component } from "@angular/core";
@Component({
  selector: "hello",
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <button (click)="showInfo()">Click me!</button>
  `
})
export class HelloComponent {
  showInfo() {
    alert("Inside Angular Component method");
  }
  user = {
    name: "Quangpn",
    age: 32
  };
}
