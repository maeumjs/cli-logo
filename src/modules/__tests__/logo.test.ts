import getColor from '#modules/getColor';
import getFont from '#modules/getFont';
import type TChalkColorFunction from '#modules/interfaces/TChalkColorFunction';
import showLogo from '#modules/showLogo';
import figlet from 'figlet';
import 'jest';

describe('getColor', () => {
  test('pass', () => {
    const r = getColor('red');
    expect(r).toEqual('red');
  });

  test('pass', () => {
    const r = getColor();
    expect(r).toBeUndefined();
  });

  test('pass', () => {
    const r = getColor('invalid-color' as TChalkColorFunction);
    expect(r).toBeUndefined();
  });
});

describe('getFont', () => {
  test('pass', () => {
    const r = getFont('ANSI Shadow');
    expect(r).toEqual('ANSI Shadow');
  });

  test('pass', () => {
    const r = getFont();
    expect(r).toEqual('ANSI Shadow');
  });

  test('pass', () => {
    const r = getFont('invalid-fonts' as figlet.Fonts);
    expect(r).toEqual('ANSI Shadow');
  });
});

describe('showLogo', () => {
  test('pass', async () => {
    await showLogo();
  });

  test('pass', async () => {
    await showLogo({ color: 'red' });
  });

  test('pass', async () => {
    const spy = jest
      .spyOn(figlet, 'text')
      .mockImplementationOnce(
        (
          _txt: string,
          _options: figlet.Options | undefined,
          cb: (error: Error | null, result?: string) => void,
        ) => {
          cb(new Error('> raise error'));
        },
      );

    try {
      await showLogo();
    } catch (caught) {
      spy.mockRestore();
      expect(caught).toBeTruthy();
    }
  });
});
