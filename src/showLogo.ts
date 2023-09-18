import type { ForegroundColor } from 'chalk';
import chalk from 'chalk';
import figlet from 'figlet';
import getColor from 'src/getColor';
import getFont from 'src/getFont';

export default async function showLogo(option?: {
  message?: string;
  figlet?: figlet.Options;
  color?: typeof ForegroundColor;
  log?: typeof console.log;
}) {
  const message = option?.message ?? 'Logo';
  const color = getColor(option?.color);
  const log = option?.log ?? console.log;

  const figletOption = { ...(option?.figlet ?? {}) };
  figletOption.font = getFont(figletOption.font);
  figletOption.width = figletOption.width ?? 80;
  figletOption.whitespaceBreak = figletOption.whitespaceBreak ?? true;

  const figure = await new Promise<string | undefined>((resolve, reject) => {
    figlet.text(message, figletOption, (err, data) => {
      if (err != null) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  if (figure != null && color != null) {
    log(chalk[color](figure));
  } else if (figure != null) {
    log(figure);
  }
}
