import { AndroidInfo } from './android-info';
import { IosInfo } from './ios-info';
import { NavigationInfo } from './navigation-info';
import { AnalyticsInfo } from './analytics-info';
import { SocialMetaTagInfo } from './social-meta-tag-info';

export interface DynamicLinkInfo {
  domainUriPrefix: string;
  link: string;
  androidInfo?: AndroidInfo;
  iosInfo?: IosInfo;
  navigationInfo?: NavigationInfo;
  analyticsInfo?: AnalyticsInfo;
  socialMetaTagInfo?: SocialMetaTagInfo;
}
