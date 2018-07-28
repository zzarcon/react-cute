import { cutify } from "../src/cutify";

describe('cutify()', () => {
  it('should highlight colons', () => {
    expect(cutify({name: 'hector'})).toEqual(`
    {
  <span class=cute-key>name<span class=cute-colon>:</span></span> <span class=cute-string>hector</span>
}
    `.trim());
  });
});