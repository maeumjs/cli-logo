import type TChalkColorFunction from '#modules/interfaces/TChalkColorFunction';

export default function getColor(color?: TChalkColorFunction): TChalkColorFunction | undefined {
  if (
    color === 'black' ||
    color === 'red' ||
    color === 'green' ||
    color === 'yellow' ||
    color === 'blue' ||
    color === 'magenta' ||
    color === 'cyan' ||
    color === 'white' ||
    color === 'gray' ||
    color === 'grey' ||
    color === 'blackBright' ||
    color === 'redBright' ||
    color === 'greenBright' ||
    color === 'yellowBright' ||
    color === 'blueBright' ||
    color === 'magentaBright' ||
    color === 'cyanBright' ||
    color === 'whiteBright'
  ) {
    return color;
  }

  return undefined;
}
