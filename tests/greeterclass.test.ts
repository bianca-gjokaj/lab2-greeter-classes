import { Greeter } from "../src/greeterclass";
describe('Greeter Class', () => {
  test('Test with different greetings and names.', () => {
    const greeterClass = new Greeter('Hello');
    const myGreet = greeterClass.greet('Bianca')

    expect(myGreet).toBe(myGreet)
  });

  test('Test with different greetings and names.', () => {
    const greeterClass = new Greeter('Guten Morgen');
    const myGreet = greeterClass.greet('Pablo')

    expect(myGreet).toBe(myGreet)
  });

  test('Test with different greetings and names.', () => {
    const greeterClass = new Greeter('Sup lil');
    const myGreet = greeterClass.greet('Dog')

    expect(myGreet).toBe(myGreet)
  })
})  