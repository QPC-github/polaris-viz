export interface Data {
  label: string;
  rawValue: number;
}

export interface DataSeries {
  name: string;
  data: Data[];
  color?: Color;
}

export type Color = TokensColor | VizPaletteColor;

export type TokensColor =
  | 'colorBlack'
  | 'colorBlue'
  | 'colorBlueDark'
  | 'colorBlueDarker'
  | 'colorBlueLight'
  | 'colorBlueLighter'
  | 'colorBlueText'
  | 'colorGreen'
  | 'colorGreenDark'
  | 'colorGreenDarker'
  | 'colorGreenLight'
  | 'colorGreenLighter'
  | 'colorGreenText'
  | 'colorIndigo'
  | 'colorIndigoDark'
  | 'colorIndigoDarker'
  | 'colorIndigoLight'
  | 'colorIndigoLighter'
  | 'colorIndigoText'
  | 'colorInk'
  | 'colorInkLight'
  | 'colorInkLighter'
  | 'colorInkLightest'
  | 'colorOrange'
  | 'colorOrangeDark'
  | 'colorOrangeDarker'
  | 'colorOrangeLight'
  | 'colorOrangeLighter'
  | 'colorOrangeText'
  | 'colorPurple'
  | 'colorPurpleDark'
  | 'colorPurpleDarker'
  | 'colorPurpleLight'
  | 'colorPurpleLighter'
  | 'colorPurpleText'
  | 'colorRed'
  | 'colorRedDark'
  | 'colorRedDarker'
  | 'colorRedLight'
  | 'colorRedLighter'
  | 'colorRedText'
  | 'colorSky'
  | 'colorSkyDark'
  | 'colorSkyLight'
  | 'colorSkyLighter'
  | 'colorTeal'
  | 'colorTealDark'
  | 'colorTealDarker'
  | 'colorTealLight'
  | 'colorTealLighter'
  | 'colorTealText'
  | 'colorWhite'
  | 'colorYellow'
  | 'colorYellowDark'
  | 'colorYellowDarker'
  | 'colorYellowLight'
  | 'colorYellowLighter';

export type VizPaletteColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'primaryProminent'
  | 'secondaryProminent'
  | 'tertiaryProminent'
  | 'quaternaryProminent'
  | 'pastComparison'
  | 'positive'
  | 'negative';

export type StringLabelFormatter = (
  value: string,
  index?: number,
  data?: string[],
) => string;

export type NumberLabelFormatter = (value: number) => string;
