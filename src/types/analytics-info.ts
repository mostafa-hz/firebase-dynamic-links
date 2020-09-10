import { GooglePlayAnalytics } from './google-play-analytics';
import { ItunesConnectAnalytics } from './itunes-connect-analytics';

export interface AnalyticsInfo {
  googlePlayAnalytics?: GooglePlayAnalytics;
  itunesConnectAnalytics?: ItunesConnectAnalytics;
}
