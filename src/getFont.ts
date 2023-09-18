import type figlet from 'figlet';

const defaultValue: figlet.Fonts = 'ANSI Shadow';

export default function getFont(font?: figlet.Fonts): figlet.Fonts {
  switch (font) {
    case '1Row':
    case '3-D':
    case '3D Diagonal':
    case '3D-ASCII':
    case '3x5':
    case '4Max':
    case '5 Line Oblique':
    case 'AMC 3 Line':
    case 'AMC 3 Liv1':
    case 'AMC AAA01':
    case 'AMC Neko':
    case 'AMC Razor':
    case 'AMC Razor2':
    case 'AMC Slash':
    case 'AMC Slider':
    case 'AMC Thin':
    case 'AMC Tubes':
    case 'AMC Untitled':
    case 'ANSI Regular':
    case 'ANSI Shadow':
    case 'ASCII New Roman':
    case 'Acrobatic':
    case 'Alligator':
    case 'Alligator2':
    case 'Alpha':
    case 'Alphabet':
    case 'Arrows':
    case 'Avatar':
    case 'B1FF':
    case 'Banner':
    case 'Banner3-D':
    case 'Banner3':
    case 'Banner4':
    case 'Barbwire':
    case 'Basic':
    case 'Bear':
    case 'Bell':
    case 'Benjamin':
    case 'Big Chief':
    case 'Big Money-ne':
    case 'Big Money-nw':
    case 'Big Money-se':
    case 'Big Money-sw':
    case 'Big':
    case 'Bigfig':
    case 'Binary':
    case 'Block':
    case 'Blocks':
    case 'Bloody':
    case 'Bolger':
    case 'Braced':
    case 'Bright':
    case 'Broadway KB':
    case 'Broadway':
    case 'Bubble':
    case 'Bulbhead':
    case 'Caligraphy':
    case 'Caligraphy2':
    case 'Calvin S':
    case 'Cards':
    case 'Catwalk':
    case 'Chiseled':
    case 'Chunky':
    case 'Coinstak':
    case 'Cola':
    case 'Colossal':
    case 'Computer':
    case 'Contessa':
    case 'Contrast':
    case 'Cosmike':
    case 'Crawford':
    case 'Crawford2':
    case 'Crazy':
    case 'Cricket':
    case 'Cursive':
    case 'Cyberlarge':
    case 'Cybermedium':
    case 'Cybersmall':
    case 'Cygnet':
    case 'DANC4':
    case 'DOS Rebel':
    case 'DWhistled':
    case 'Dancing Font':
    case 'Decimal':
    case 'Def Leppard':
    case 'Delta Corps Priest 1':
    case 'Diamond':
    case 'Diet Cola':
    case 'Digital':
    case 'Doh':
    case 'Doom':
    case 'Dot Matrix':
    case 'Double Shorts':
    case 'Double':
    case 'Dr Pepper':
    case 'Efti Chess':
    case 'Efti Font':
    case 'Efti Italic':
    case 'Efti Piti':
    case 'Efti Robot':
    case 'Efti Wall':
    case 'Efti Water':
    case 'Electronic':
    case 'Elite':
    case 'Epic':
    case 'Fender':
    case 'Filter':
    case 'Fire Font-k':
    case 'Fire Font-s':
    case 'Flipped':
    case 'Flower Power':
    case 'Four Tops':
    case 'Fraktur':
    case 'Fun Face':
    case 'Fun Faces':
    case 'Fuzzy':
    case 'Georgi16':
    case 'Georgia11':
    case 'Ghost':
    case 'Ghoulish':
    case 'Glenyn':
    case 'Goofy':
    case 'Gothic':
    case 'Graceful':
    case 'Gradient':
    case 'Graffiti':
    case 'Greek':
    case 'Heart Left':
    case 'Heart Right':
    case 'Henry 3D':
    case 'Hex':
    case 'Hieroglyphs':
    case 'Hollywood':
    case 'Horizontal Left':
    case 'Horizontal Right':
    case 'ICL-1900':
    case 'Impossible':
    case 'Invita':
    case 'Isometric1':
    case 'Isometric2':
    case 'Isometric3':
    case 'Isometric4':
    case 'Italic':
    case 'Ivrit':
    case 'JS Block Letters':
    case 'JS Bracket Letters':
    case 'JS Capital Curves':
    case 'JS Cursive':
    case 'JS Stick Letters':
    case 'Jacky':
    case 'Jazmine':
    case 'Jerusalem':
    case 'Katakana':
    case 'Kban':
    case 'Keyboard':
    case 'Knob':
    case 'Konto Slant':
    case 'Konto':
    case 'LCD':
    case 'Larry 3D 2':
    case 'Larry 3D':
    case 'Lean':
    case 'Letters':
    case 'Lil Devil':
    case 'Line Blocks':
    case 'Linux':
    case 'Lockergnome':
    case 'Madrid':
    case 'Marquee':
    case 'Maxfour':
    case 'Merlin1':
    case 'Merlin2':
    case 'Mike':
    case 'Mini':
    case 'Mirror':
    case 'Mnemonic':
    case 'Modular':
    case 'Morse':
    case 'Morse2':
    case 'Moscow':
    case 'Mshebrew210':
    case 'Muzzle':
    case 'NScript':
    case 'NT Greek':
    case 'NV Script':
    case 'Nancyj-Fancy':
    case 'Nancyj-Improved':
    case 'Nancyj-Underlined':
    case 'Nancyj':
    case 'Nipples':
    case 'O8':
    case 'OS2':
    case 'Octal':
    case 'Ogre':
    case 'Old Banner':
    case 'Pagga':
    case "Patorjk's Cheese":
    case 'Patorjk-HeX':
    case 'Pawp':
    case 'Peaks Slant':
    case 'Peaks':
    case 'Pebbles':
    case 'Pepper':
    case 'Poison':
    case 'Puffy':
    case 'Puzzle':
    case 'Pyramid':
    case 'Rammstein':
    case 'Rectangles':
    case 'Red Phoenix':
    case 'Relief':
    case 'Relief2':
    case 'Reverse':
    case 'Roman':
    case 'Rot13':
    case 'Rotated':
    case 'Rounded':
    case 'Rowan Cap':
    case 'Rozzo':
    case 'Runic':
    case 'Runyc':
    case 'S Blood':
    case 'SL Script':
    case 'Santa Clara':
    case 'Script':
    case 'Serifcap':
    case 'Shadow':
    case 'Shimrod':
    case 'Short':
    case 'Slant Relief':
    case 'Slant':
    case 'Slide':
    case 'Small Caps':
    case 'Small Isometric1':
    case 'Small Keyboard':
    case 'Small Poison':
    case 'Small Script':
    case 'Small Shadow':
    case 'Small Slant':
    case 'Small Tengwar':
    case 'Small':
    case 'Soft':
    case 'Speed':
    case 'Spliff':
    case 'Stacey':
    case 'Stampate':
    case 'Stampatello':
    case 'Standard':
    case 'Star Strips':
    case 'Star Wars':
    case 'Stellar':
    case 'Stforek':
    case 'Stick Letters':
    case 'Stop':
    case 'Straight':
    case 'Stronger Than All':
    case 'Sub-Zero':
    case 'Swamp Land':
    case 'Swan':
    case 'Sweet':
    case 'THIS':
    case 'Tanja':
    case 'Tengwar':
    case 'Term':
    case 'Test1':
    case 'The Edge':
    case 'Thick':
    case 'Thin':
    case 'Thorned':
    case 'Three Point':
    case 'Ticks Slant':
    case 'Ticks':
    case 'Tiles':
    case 'Tinker-Toy':
    case 'Tombstone':
    case 'Train':
    case 'Trek':
    case 'Tsalagi':
    case 'Tubular':
    case 'Twisted':
    case 'Two Point':
    case 'USA Flag':
    case 'Univers':
    case 'Varsity':
    case 'Wavy':
    case 'Weird':
    case 'Wet Letter':
    case 'Whimsy':
    case 'Wow':
      return font;
    default:
      return defaultValue;
  }
}
