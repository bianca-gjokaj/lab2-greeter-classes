import { Greeter } from "./greeterclass";
export class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName: string = "<h1>") {
    super(greeting)
    this.tagName = tagName
    this.greeting = greeting
  }

  greet(name: string) {
    return `${this.tagName}${this.greeting}, ${name}!${this.tagName}`
  }
}