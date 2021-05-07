export interface Suffix {
  option: 'SHORT' | 'UNGUESSABLE';
}

export interface NavigationInfo {
  enableForcedRedirect?: boolean;
}
export interface ItunesConnectAnalytics {
  at?: string;
  ct?: string;
  mt?: string;
  pt?: string;
}

export interface IosInfo {
  iosBundleId: string;
  iosFallbackLink?: string;
  iosCustomScheme?: string;
  iosIpadFallbackLink?: string;
  iosIpadBundleId?: string;
  iosAppStoreId?: string;
}

export interface GooglePlayAnalytics {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
}

export interface SocialMetaTagInfo {
  socialTitle?: string;
  socialDescription?: string;
  socialImageLink?: string;
}

export interface AndroidInfo {
  androidPackageName: string;
  androidFallbackLink?: string;
  androidMinPackageVersionCode?: string;
}

export interface AnalyticsInfo {
  googlePlayAnalytics?: GooglePlayAnalytics;
  itunesConnectAnalytics?: ItunesConnectAnalytics;
}

export interface DynamicLinkInfo {
  domainUriPrefix: string;
  link: string;
  androidInfo?: AndroidInfo;
  iosInfo?: IosInfo;
  navigationInfo?: NavigationInfo;
  analyticsInfo?: AnalyticsInfo;
  socialMetaTagInfo?: SocialMetaTagInfo;
}

export interface ShortLinkRequestBody {
  longDynamicLink?: string;
  dynamicLinkInfo?: DynamicLinkInfo;
  suffix?: Suffix;
}

export interface ShortLinkResponse {
  shortLink: string;
  previewLink: string;
}
