import { RoundNumberPipe } from './round-number.pipe';

describe('RandomPipe', () => {
  it('create an instance', () => {
    const pipe = new RoundNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
