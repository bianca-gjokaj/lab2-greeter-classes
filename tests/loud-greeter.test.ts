import { LoudGreeter } from "../src/loud-greeter";
describe('Test with and without calling addVolume. Test calling addVolume different numbers of times', () => {
  test('Test without calling addVolume', () => {
    const loudGreet = new LoudGreeter('Hello')

    expect(loudGreet).toBe(loudGreet);
  })

  test('Test with calling addVolume', () => {
    const loudGreet = new LoudGreeter('Hello')
    loudGreet.addVolume();

    expect(loudGreet.extra).toBe('!');
  })

  test('Test with calling addVolume', () => {
    const loudGreet = new LoudGreeter('Hello')
    loudGreet.addVolume();
    loudGreet.addVolume();
    loudGreet.addVolume();

    expect(loudGreet.extra).toBe('!!!');
  })
})