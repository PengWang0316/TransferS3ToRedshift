import getRecords from '../../functions/libs/get-records';
import fakeContentArray from '../../examples/fakeContentArray';

describe('get-records', () => {
  test('396 records', () => {
    const result = getRecords(fakeContentArray);

    expect(result.length).toBe(1);
    expect(result[0].length).toBe(396);
    expect(result[0][0].Data).not.toBeUndefined();
    expect(result[0][0].Data).not.toBeNull();

    const data = JSON.parse(result[0][0].Data.toString());
    expect(data.timestamp).not.toBeNull();
    expect(data.timestamp).not.toBeUndefined();
    expect(data.a).not.toBeNull();
    expect(data.a).not.toBeUndefined();
    expect(data.b).not.toBeNull();
    expect(data.b).not.toBeUndefined();
    expect(data.c).not.toBeNull();
    expect(data.c).not.toBeUndefined();
  });

  test('396 * 2 records', () => {
    const result = getRecords([...fakeContentArray, ...fakeContentArray]);

    expect(result.length).toBe(2);
    expect(result[0].length).toBe(500);
    expect(result[1].length).toBe(292);
    expect(result[0][0].Data).not.toBeUndefined();
    expect(result[0][0].Data).not.toBeNull();
    expect(result[1][0].Data).not.toBeUndefined();
    expect(result[1][0].Data).not.toBeNull();
  });
});
