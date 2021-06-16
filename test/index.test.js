import testingtest from '../src/index';

it('display msg say hello world', () => {
  expect(testingtest()).toBe('hello world');
});