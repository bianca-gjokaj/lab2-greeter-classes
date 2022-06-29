import { JavaScriptGreeter } from "../src/javascript-greeter";
describe('Javascript Greeter', () => {
  test('Test with different greetings and names', () => {
    const javascriptGreeter = new JavaScriptGreeter('Hello');
    const javaGreet = javascriptGreeter.greet('Bianca')

    expect(javaGreet).toBe(javaGreet)
  })

  test('Test with different greetings and names', () => {
    const javascriptGreeter = new JavaScriptGreeter('Greetings');
    const javaGreet = javascriptGreeter.greet('Sam')

    expect(javaGreet).toBe(javaGreet)
  })
})