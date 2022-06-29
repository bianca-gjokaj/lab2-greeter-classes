import { Greeter } from "./greeterclass";

export class JavaScriptGreeter extends Greeter {
  greet(name: string) {
    return `${this.greeting}, ${name}!`
  }
}
