import type figlet from 'figlet';

const defaultValue: figlet.Fonts = 'ANSI Shadow';

export default function getFont(font?: figlet.Fonts): figlet.Fonts {
  if (
    font === '1Row' ||
    font === '3-D' ||
    font === '3D Diagonal' ||
    font === '3D-ASCII' ||
    font === '3x5' ||
    font === '4Max' ||
    font === '5 Line Oblique' ||
    font === 'AMC 3 Line' ||
    font === 'AMC 3 Liv1' ||
    font === 'AMC AAA01' ||
    font === 'AMC Neko' ||
    font === 'AMC Razor' ||
    font === 'AMC Razor2' ||
    font === 'AMC Slash' ||
    font === 'AMC Slider' ||
    font === 'AMC Thin' ||
    font === 'AMC Tubes' ||
    font === 'AMC Untitled' ||
    font === 'ANSI Regular' ||
    font === 'ANSI Shadow' ||
    font === 'ASCII New Roman' ||
    font === 'Acrobatic' ||
    font === 'Alligator' ||
    font === 'Alligator2' ||
    font === 'Alpha' ||
    font === 'Alphabet' ||
    font === 'Arrows' ||
    font === 'Avatar' ||
    font === 'B1FF' ||
    font === 'Banner' ||
    font === 'Banner3-D' ||
    font === 'Banner3' ||
    font === 'Banner4' ||
    font === 'Barbwire' ||
    font === 'Basic' ||
    font === 'Bear' ||
    font === 'Bell' ||
    font === 'Benjamin' ||
    font === 'Big Chief' ||
    font === 'Big Money-ne' ||
    font === 'Big Money-nw' ||
    font === 'Big Money-se' ||
    font === 'Big Money-sw' ||
    font === 'Big' ||
    font === 'Bigfig' ||
    font === 'Binary' ||
    font === 'Block' ||
    font === 'Blocks' ||
    font === 'Bloody' ||
    font === 'Bolger' ||
    font === 'Braced' ||
    font === 'Bright' ||
    font === 'Broadway KB' ||
    font === 'Broadway' ||
    font === 'Bubble' ||
    font === 'Bulbhead' ||
    font === 'Caligraphy' ||
    font === 'Caligraphy2' ||
    font === 'Calvin S' ||
    font === 'Cards' ||
    font === 'Catwalk' ||
    font === 'Chiseled' ||
    font === 'Chunky' ||
    font === 'Coinstak' ||
    font === 'Cola' ||
    font === 'Colossal' ||
    font === 'Computer' ||
    font === 'Contessa' ||
    font === 'Contrast' ||
    font === 'Cosmike' ||
    font === 'Crawford' ||
    font === 'Crawford2' ||
    font === 'Crazy' ||
    font === 'Cricket' ||
    font === 'Cursive' ||
    font === 'Cyberlarge' ||
    font === 'Cybermedium' ||
    font === 'Cybersmall' ||
    font === 'Cygnet' ||
    font === 'DANC4' ||
    font === 'DOS Rebel' ||
    font === 'DWhistled' ||
    font === 'Dancing Font' ||
    font === 'Decimal' ||
    font === 'Def Leppard' ||
    font === 'Delta Corps Priest 1' ||
    font === 'Diamond' ||
    font === 'Diet Cola' ||
    font === 'Digital' ||
    font === 'Doh' ||
    font === 'Doom' ||
    font === 'Dot Matrix' ||
    font === 'Double Shorts' ||
    font === 'Double' ||
    font === 'Dr Pepper' ||
    font === 'Efti Chess' ||
    font === 'Efti Font' ||
    font === 'Efti Italic' ||
    font === 'Efti Piti' ||
    font === 'Efti Robot' ||
    font === 'Efti Wall' ||
    font === 'Efti Water' ||
    font === 'Electronic' ||
    font === 'Elite' ||
    font === 'Epic' ||
    font === 'Fender' ||
    font === 'Filter' ||
    font === 'Fire Font-k' ||
    font === 'Fire Font-s' ||
    font === 'Flipped' ||
    font === 'Flower Power' ||
    font === 'Four Tops' ||
    font === 'Fraktur' ||
    font === 'Fun Face' ||
    font === 'Fun Faces' ||
    font === 'Fuzzy' ||
    font === 'Georgi16' ||
    font === 'Georgia11' ||
    font === 'Ghost' ||
    font === 'Ghoulish' ||
    font === 'Glenyn' ||
    font === 'Goofy' ||
    font === 'Gothic' ||
    font === 'Graceful' ||
    font === 'Gradient' ||
    font === 'Graffiti' ||
    font === 'Greek' ||
    font === 'Heart Left' ||
    font === 'Heart Right' ||
    font === 'Henry 3D' ||
    font === 'Hex' ||
    font === 'Hieroglyphs' ||
    font === 'Hollywood' ||
    font === 'Horizontal Left' ||
    font === 'Horizontal Right' ||
    font === 'ICL-1900' ||
    font === 'Impossible' ||
    font === 'Invita' ||
    font === 'Isometric1' ||
    font === 'Isometric2' ||
    font === 'Isometric3' ||
    font === 'Isometric4' ||
    font === 'Italic' ||
    font === 'Ivrit' ||
    font === 'JS Block Letters' ||
    font === 'JS Bracket Letters' ||
    font === 'JS Capital Curves' ||
    font === 'JS Cursive' ||
    font === 'JS Stick Letters' ||
    font === 'Jacky' ||
    font === 'Jazmine' ||
    font === 'Jerusalem' ||
    font === 'Katakana' ||
    font === 'Kban' ||
    font === 'Keyboard' ||
    font === 'Knob' ||
    font === 'Konto Slant' ||
    font === 'Konto' ||
    font === 'LCD' ||
    font === 'Larry 3D 2' ||
    font === 'Larry 3D' ||
    font === 'Lean' ||
    font === 'Letters' ||
    font === 'Lil Devil' ||
    font === 'Line Blocks' ||
    font === 'Linux' ||
    font === 'Lockergnome' ||
    font === 'Madrid' ||
    font === 'Marquee' ||
    font === 'Maxfour' ||
    font === 'Merlin1' ||
    font === 'Merlin2' ||
    font === 'Mike' ||
    font === 'Mini' ||
    font === 'Mirror' ||
    font === 'Mnemonic' ||
    font === 'Modular' ||
    font === 'Morse' ||
    font === 'Morse2' ||
    font === 'Moscow' ||
    font === 'Mshebrew210' ||
    font === 'Muzzle' ||
    font === 'NScript' ||
    font === 'NT Greek' ||
    font === 'NV Script' ||
    font === 'Nancyj-Fancy' ||
    font === 'Nancyj-Improved' ||
    font === 'Nancyj-Underlined' ||
    font === 'Nancyj' ||
    font === 'Nipples' ||
    font === 'O8' ||
    font === 'OS2' ||
    font === 'Octal' ||
    font === 'Ogre' ||
    font === 'Old Banner' ||
    font === 'Pagga' ||
    font === "Patorjk's Cheese" ||
    font === 'Patorjk-HeX' ||
    font === 'Pawp' ||
    font === 'Peaks Slant' ||
    font === 'Peaks' ||
    font === 'Pebbles' ||
    font === 'Pepper' ||
    font === 'Poison' ||
    font === 'Puffy' ||
    font === 'Puzzle' ||
    font === 'Pyramid' ||
    font === 'Rammstein' ||
    font === 'Rectangles' ||
    font === 'Red Phoenix' ||
    font === 'Relief' ||
    font === 'Relief2' ||
    font === 'Reverse' ||
    font === 'Roman' ||
    font === 'Rot13' ||
    font === 'Rotated' ||
    font === 'Rounded' ||
    font === 'Rowan Cap' ||
    font === 'Rozzo' ||
    font === 'Runic' ||
    font === 'Runyc' ||
    font === 'S Blood' ||
    font === 'SL Script' ||
    font === 'Santa Clara' ||
    font === 'Script' ||
    font === 'Serifcap' ||
    font === 'Shadow' ||
    font === 'Shimrod' ||
    font === 'Short' ||
    font === 'Slant Relief' ||
    font === 'Slant' ||
    font === 'Slide' ||
    font === 'Small Caps' ||
    font === 'Small Isometric1' ||
    font === 'Small Keyboard' ||
    font === 'Small Poison' ||
    font === 'Small Script' ||
    font === 'Small Shadow' ||
    font === 'Small Slant' ||
    font === 'Small Tengwar' ||
    font === 'Small' ||
    font === 'Soft' ||
    font === 'Speed' ||
    font === 'Spliff' ||
    font === 'Stacey' ||
    font === 'Stampate' ||
    font === 'Stampatello' ||
    font === 'Standard' ||
    font === 'Star Strips' ||
    font === 'Star Wars' ||
    font === 'Stellar' ||
    font === 'Stforek' ||
    font === 'Stick Letters' ||
    font === 'Stop' ||
    font === 'Straight' ||
    font === 'Stronger Than All' ||
    font === 'Sub-Zero' ||
    font === 'Swamp Land' ||
    font === 'Swan' ||
    font === 'Sweet' ||
    font === 'THIS' ||
    font === 'Tanja' ||
    font === 'Tengwar' ||
    font === 'Term' ||
    font === 'Test1' ||
    font === 'The Edge' ||
    font === 'Thick' ||
    font === 'Thin' ||
    font === 'Thorned' ||
    font === 'Three Point' ||
    font === 'Ticks Slant' ||
    font === 'Ticks' ||
    font === 'Tiles' ||
    font === 'Tinker-Toy' ||
    font === 'Tombstone' ||
    font === 'Train' ||
    font === 'Trek' ||
    font === 'Tsalagi' ||
    font === 'Tubular' ||
    font === 'Twisted' ||
    font === 'Two Point' ||
    font === 'USA Flag' ||
    font === 'Univers' ||
    font === 'Varsity' ||
    font === 'Wavy' ||
    font === 'Weird' ||
    font === 'Wet Letter' ||
    font === 'Whimsy' ||
    font === 'Wow'
  ) {
    return font;
  }

  return defaultValue;
}
