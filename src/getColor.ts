import type { ForegroundColor } from 'chalk';

export default function getColor(
  color?: typeof ForegroundColor,
): typeof ForegroundColor | undefined {
  switch (color) {
    case 'black':
    case 'red':
    case 'green':
    case 'yellow':
    case 'blue':
    case 'magenta':
    case 'cyan':
    case 'white':
    case 'gray':
    case 'grey':
    case 'blackBright':
    case 'redBright':
    case 'greenBright':
    case 'yellowBright':
    case 'blueBright':
    case 'magentaBright':
    case 'cyanBright':
    case 'whiteBright':
      return color;
    default:
      return undefined;
  }
}
