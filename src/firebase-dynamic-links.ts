import { request, RequestOptions } from 'https';
import { DynamicLinkInfo } from './types/dynamic-link-info';
import { ShortLinkResponse } from './types/short-link-response';
import { RequestBody } from './types/request-body';

export class FirebaseDynamicLinks {
  private readonly webApiKey!: string;

  /**
   * @constructor
   * @param(webApiKey) API key to authenticate your requests to the API.
   * Obtain the project **Web Api Key** from [general settings]{@link https://console.firebase.google.com/project/_/settings/general/?authuser=0} in firebase console
   */
  constructor(webApiKey: string) {
    if (webApiKey == null) {
      throw new Error('Firebase Dynamic Links: Web Api Key can not be null or undefined');
    }

    this.webApiKey = webApiKey;
  }

  private async sendRequest(body: RequestBody): Promise<ShortLinkResponse> {
    const data: string = JSON.stringify(body);

    const options: RequestOptions = {
      hostname: 'firebasedynamiclinks.googleapis.com',
      path: `/v1/shortLinks?key=${this.webApiKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
      },
    };

    return new Promise((resolve, reject) => {
      const req = request(options, (res) => {
        res.on('data', (d) => {
          const resBody = JSON.parse(d);
          if (res.statusCode === 200) {
            resolve(resBody);
          } else {
            reject(resBody);
          }
        });
      });

      req.on('error', reject);
      req.write(data);
      req.end();
    });
  }

  async createShortLink(
    dynamicLinkInfo: DynamicLinkInfo,
    suffix?: 'SHORT' | 'UNGUESSABLE',
  ): Promise<ShortLinkResponse> {
    const requestBody: RequestBody = {
      dynamicLinkInfo,
      suffix: suffix && { option: suffix },
    };

    return this.sendRequest(requestBody);
  }

  async createShortLinkFromLongLink(
    longDynamicLink: string,
    suffix?: 'SHORT' | 'UNGUESSABLE',
  ): Promise<ShortLinkResponse> {
    const requestBody: RequestBody = {
      longDynamicLink,
      suffix: suffix && { option: suffix },
    };

    return this.sendRequest(requestBody);
  }
}
