import { request, RequestOptions } from 'https';
import { DynamicLinkInfo } from './types/dynamic-link-info';
import { ShortLinkResponse } from './types/short-link-response';
import { ShortLinkRequestBody } from './types/short-link-request-body';

export class FirebaseDynamicLinks {
  private readonly webApiKey!: string;

  /**
   * @constructor
   * @param(webApiKey) API key to authenticate your requests to the API.
   * Take note of your project `Web Api Key` from [setting page](https://console.firebase.google.com/project/_/settings/general/) of the Firebase console.
   */
  constructor(webApiKey: string) {
    if (webApiKey == null) {
      throw new Error('Firebase Dynamic Links: Web Api Key can not be null or undefined');
    }

    this.webApiKey = webApiKey;
  }

  /**
   * You can use this function to generate short Dynamic Links.
   * @param body read full documentation [here](https://firebase.google.com/docs/reference/dynamic-links/link-shortener#request_body)
   * @return read full documentation [here](https://firebase.google.com/docs/reference/dynamic-links/link-shortener#response_body)
   */
  async createLink(body: ShortLinkRequestBody): Promise<ShortLinkResponse> {
    const data: string = JSON.stringify(body);

    const options: RequestOptions = {
      hostname: 'firebasedynamiclinks.googleapis.com',
      path: `/v1/shortLinks?key=${this.webApiKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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

  /**
   * @deprecated Use {@link createLink} instead
   */
  async createShortLink(
    dynamicLinkInfo: DynamicLinkInfo,
    suffix?: 'SHORT' | 'UNGUESSABLE',
  ): Promise<ShortLinkResponse> {
    const requestBody: ShortLinkRequestBody = {
      dynamicLinkInfo,
      suffix: suffix && { option: suffix },
    };

    return this.createLink(requestBody);
  }

  /**
   * @deprecated Use {@link createLink} instead
   */
  async createShortLinkFromLongLink(
    longDynamicLink: string,
    suffix?: 'SHORT' | 'UNGUESSABLE',
  ): Promise<ShortLinkResponse> {
    const requestBody: ShortLinkRequestBody = {
      longDynamicLink,
      suffix: suffix && { option: suffix },
    };

    return this.createLink(requestBody);
  }
}
