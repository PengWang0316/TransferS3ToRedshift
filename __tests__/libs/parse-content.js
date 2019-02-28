import parseContent from '../../functions/libs/parse-content';
import fakeContent from '../../examples/fakeContent';

describe('parse-content', () => {
  test('', () => {
    const result = parseContent(fakeContent);

    expect(result.length).toBe(237);
    expect(result[0]).toBe('**MISC**  ,**TEST**  ,**Test**                 ');
    expect(result[result.length - 1]).toBe('Y&F PROGS ,YF:PNO    ,Parents Night Out');
  });
});
