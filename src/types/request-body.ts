import { DynamicLinkInfo } from './dynamic-link-info';
import { Suffix } from './suffix';

export interface RequestBody {
  longDynamicLink?: string;
  dynamicLinkInfo?: DynamicLinkInfo;
  suffix?: Suffix;
}
