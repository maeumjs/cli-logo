import getColor from '#modules/getColor';
import getFont from '#modules/getFont';
import type TChalkColorFunction from '#modules/interfaces/TChalkColorFunction';
import chalk from 'chalk';
import figlet from 'figlet';

export default async function showLogo(option?: {
  message?: string;
  figlet?: figlet.Options;
  color?: TChalkColorFunction;
  log?: typeof console.log;
}) {
  const message = option?.message ?? 'Logo';
  const color = getColor(option?.color);

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
    option?.log?.(chalk[color](figure));
  } else if (figure != null) {
    option?.log?.(figure);
  }
}
