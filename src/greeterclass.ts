export class Greeter {
  constructor(public greeting: string) {}

  greet(name: string){
    return `${this.greeting}, ${name}!`
  }
}