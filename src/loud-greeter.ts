import { Greeter } from "./greeterclass";

export class LoudGreeter extends Greeter {
  extra: string = '';

  addVolume(): void {
    this.extra += '!'; 
  }

  greet(name: string) {
    return `${this.greeting}, ${name}!${this.extra}`
  }
}