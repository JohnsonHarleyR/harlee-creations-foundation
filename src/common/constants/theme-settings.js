import { LogoScale } from "../components/layout/theme/helpers/logo-helper";

export const SettingProp = {
  headerHeight: '--header-height',

  cornerLogoTextColor: null,
  cornerLogoIconColor: null,
  cornerLogoHeight: '--corner-logo-height',
  cornerLogoWidth: '--corner-logo-width',

}

export const DefaultSettings = {
  headerHeight: '10vh',

  cornerLogoHeight: '10vh',
  cornerLogoWidth: `${LogoScale.corner.getWidth(10)}vh`,
};