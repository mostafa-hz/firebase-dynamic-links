import { DynamicLinkInfo } from './dynamic-link-info';
import { Suffix } from './suffix';

export interface ShortLinkRequestBody {
  longDynamicLink?: string;
  dynamicLinkInfo?: DynamicLinkInfo;
  suffix?: Suffix;
}
