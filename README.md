# Firebase Dynamic Links

[![npm](https://badge.fury.io/js/firebase-dynamic-links.svg)](https://badge.fury.io/js/firebase-dynamic-links)

## Overview
 
This package provides a wrapper for [Firebase Dynamic Links](https://firebase.google.com/docs/dynamic-links/rest) and [View Dynamic Links Analytics Data](https://firebase.google.com/docs/dynamic-links/analytics) REST APIs.
It aims to define types for this APIs.
 
**In order to use this package, you can read [Short Link API](https://firebase.google.com/docs/reference/dynamic-links/link-shortener) and [Analytics API](https://firebase.google.com/docs/reference/dynamic-links/analytics) full API documentations**.

## Installation

The Firebase Dynamic Links is available on npm as `firebase-dynamic-links`:

```bash
$ npm install --save firebase-dynamic-links
```

## Usage

### Setup

Take note of your project `Web Api Key` from [setting page](https://console.firebase.google.com/project/_/settings/general/) of the Firebase console.
Import the package and then create an instance of the `FirebaseDynamicLinks` as follow:

```typescript
import { FirebaseDynamicLinks } from 'firebase-dynamic-links';

const firebaseDynamicLinks = new FirebaseDynamicLinks(/* Web Api Key */);
```

### Examples

#### Create Dynamic Links

##### [Create a short link from a long link](https://firebase.google.com/docs/dynamic-links/rest#create_a_short_link_from_a_long_link)

```typescript
const { shortLink, previewLink } = await firebaseDynamicLinks.createLink({
  longDynamicLink: 'https://example.page.link/?link=https://www.example.com/&apn=com.example.android&ibi=com.example.ios',
});
```

##### [Create a short link from parameters](https://firebase.google.com/docs/dynamic-links/rest#create_a_short_link_from_parameters)

```typescript
const { shortLink, previewLink } = await firebaseDynamicLinks.createLink({
  dynamicLinkInfo: {
    domainUriPrefix: 'https://example.page.link',
    link: 'https://www.example.com/',
    androidInfo: {
      androidPackageName: 'com.example.android',
    },
    iosInfo: {
      iosBundleId: 'com.example.ios',
    },
  },
});
```

##### [Set the length of a short Dynamic Link](https://firebase.google.com/docs/dynamic-links/rest#set_the_length_of_a_short)

```typescript
const { shortLink, previewLink } = await firebaseDynamicLinks.createLink({
  longDynamicLink: 'https://example.page.link/?link=http://www.example.com/&apn=com.example.android&ibi=com.example.ios',
  suffix: {
    option: 'UNGUESSABLE',
  },
});
```

#### View Dynamic Links Analytics Data

##### [Get statistics for a single Dynamic Link](https://firebase.google.com/docs/reference/dynamic-links/analytics#get_statistics_for_a_single)
```typescript
const { linkEventStats } = await firebaseDynamicLinks.getLinkStats('https://example.page.link/wXYz', 7, accessToken);
```
