import { injectCSS } from "../src/injectCSS";

describe('injectCSS()', () => {
  it('should inject styled on the page <header />', () => {
    const spy = jest.spyOn(document, 'createTextNode');
    injectCSS(`body {background: black;}`);

    expect(document.head.childElementCount).toEqual(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).lastCalledWith(`body {background: black;}`);
  });
});
