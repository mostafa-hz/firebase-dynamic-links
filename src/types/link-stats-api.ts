export enum StatPlatform {
  ANDROID = 'ANDROID',
  IOS = 'IOS',
  DESKTOP = 'DESKTOP',
  OTHER = 'OTHER',
}

export enum StatEvent {
  CLICK = 'CLICK',
  REDIRECT = 'REDIRECT',
  APP_INSTALL = 'APP_INSTALL',
  APP_FIRST_OPEN = 'APP_FIRST_OPEN',
  APP_RE_OPEN = 'APP_RE_OPEN',
}

export interface LinkEventStat {
  platform: StatPlatform;
  count: string;
  event: StatEvent;
}

export interface LinkStatsResponse {
  linkEventStats?: LinkEventStat[];
}
