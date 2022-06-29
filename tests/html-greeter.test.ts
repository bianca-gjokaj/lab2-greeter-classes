import { HtmlGreeter } from "../src/html-greeter";
describe('Test with different greetings, names, and tagNames', () => {
  test('Test with different greetings, names, and tagNames', () => {
    const htmlGreet = new HtmlGreeter('Hello')
    const html = htmlGreet.greet('Bianca')

    expect(html.this.tagName).toBe(this.tagName);
  })
})