# 📌 YouTube Data API v3 — Complete Attribute Reference

---

## 🎥 Video (`youtube#video`)

{
  "kind": "youtube#video",
  "etag": "string",
  "id": "string",
  "snippet": {
    "publishedAt": "datetime",
    "channelId": "string",
    "title": "string",
    "description": "string",
    "thumbnails": {},
    "channelTitle": "string",
    "tags": [],
    "categoryId": "string",
    "liveBroadcastContent": "string",
    "defaultLanguage": "string",
    "localized": {
      "title": "string",
      "description": "string"
    },
    "defaultAudioLanguage": "string"
  },
  "contentDetails": {
    "duration": "ISO8601",
    "dimension": "string",
    "definition": "string",
    "caption": "string",
    "licensedContent": "boolean",
    "regionRestriction": {
      "allowed": [],
      "blocked": []
    },
    "contentRating": {}
  },
  "status": {},
  "statistics": {
    "viewCount": "string",
    "likeCount": "string",
    "favoriteCount": "string",
    "commentCount": "string"
  },
  "player": {
    "embedHtml": "string"
  },
  "recordingDetails": {},
  "fileDetails": {},
  "processingDetails": {},
  "suggestions": {},
  "liveStreamingDetails": {},
  "topicDetails": {}
}

---

## 📺 Channel (`youtube#channel`)

{
  "kind": "youtube#channel",
  "etag": "string",
  "id": "string",
  "snippet": {
    "title": "string",
    "description": "string",
    "customUrl": "string",
    "publishedAt": "datetime",
    "thumbnails": {},
    "localized": {}
  },
  "contentDetails": {},
  "statistics": {
    "viewCount": "string",
    "subscriberCount": "string",
    "hiddenSubscriberCount": "boolean",
    "videoCount": "string"
  },
  "brandingSettings": {},
  "status": {},
  "auditDetails": {},
  "topicDetails": {},
  "contentOwnerDetails": {},
  "localizations": {}
}

---

## 📃 Playlist (`youtube#playlist`)

{
  "kind": "youtube#playlist",
  "etag": "string",
  "id": "string",
  "snippet": {
    "publishedAt": "datetime",
    "channelId": "string",
    "title": "string",
    "description": "string",
    "thumbnails": {},
    "channelTitle": "string",
    "localized": {}
  },
  "status": {},
  "contentDetails": {
    "itemCount": "number"
  }
}

---

## 📋 Playlist Item (`youtube#playlistItem`)

{
  "kind": "youtube#playlistItem",
  "etag": "string",
  "id": "string",
  "snippet": {
    "publishedAt": "datetime",
    "channelId": "string",
    "title": "string",
    "description": "string",
    "thumbnails": {},
    "channelTitle": "string",
    "playlistId": "string",
    "position": "number",
    "resourceId": {
      "kind": "string",
      "videoId": "string"
    }
  },
  "contentDetails": {
    "videoId": "string",
    "videoPublishedAt": "datetime"
  },
  "status": {}
}

---

## 🔎 Search Result (`youtube#searchResult`)

{
  "kind": "youtube#searchResult",
  "etag": "string",
  "id": {
    "kind": "string",
    "videoId": "string",
    "channelId": "string",
    "playlistId": "string"
  },
  "snippet": {
    "publishedAt": "datetime",
    "channelId": "string",
    "title": "string",
    "description": "string",
    "thumbnails": {},
    "channelTitle": "string",
    "liveBroadcastContent": "string"
  }
}

---

## 💬 Comment Thread (`youtube#commentThread`)

{
  "kind": "youtube#commentThread",
  "etag": "string",
  "id": "string",
  "snippet": {
    "videoId": "string",
    "channelId": "string",
    "topLevelComment": {},
    "canReply": "boolean",
    "totalReplyCount": "number",
    "isPublic": "boolean"
  },
  "replies": {}
}

---

## 🗣 Comment (`youtube#comment`)

{
  "kind": "youtube#comment",
  "etag": "string",
  "id": "string",
  "snippet": {
    "authorDisplayName": "string",
    "authorProfileImageUrl": "string",
    "authorChannelUrl": "string",
    "authorChannelId": {
      "value": "string"
    },
    "videoId": "string",
    "textDisplay": "string",
    "textOriginal": "string",
    "parentId": "string",
    "canRate": "boolean",
    "viewerRating": "string",
    "likeCount": "number",
    "moderationStatus": "string",
    "publishedAt": "datetime",
    "updatedAt": "datetime"
  }
}

---

## 🔔 Subscription (`youtube#subscription`)

{
  "kind": "youtube#subscription",
  "etag": "string",
  "id": "string",
  "snippet": {
    "publishedAt": "datetime",
    "channelTitle": "string",
    "title": "string",
    "description": "string",
    "resourceId": {
      "kind": "string",
      "channelId": "string"
    },
    "thumbnails": {},
    "channelId": "string"
  },
  "contentDetails": {},
  "subscriberSnippet": {}
}

---

## 📈 Activity (`youtube#activity`)

{
  "kind": "youtube#activity",
  "etag": "string",
  "id": "string",
  "snippet": {
    "publishedAt": "datetime",
    "channelId": "string",
    "title": "string",
    "description": "string",
    "thumbnails": {},
    "channelTitle": "string",
    "type": "string"
  },
  "contentDetails": {}
}

---

## 🌍 i18n Language (`youtube#i18nLanguage`)

{
  "kind": "youtube#i18nLanguage",
  "etag": "string",
  "id": "string",
  "snippet": {
    "hl": "string",
    "name": "string"
  }
}

---

## 🗺 i18n Region (`youtube#i18nRegion`)

{
  "kind": "youtube#i18nRegion",
  "etag": "string",
  "id": "string",
  "snippet": {
    "gl": "string",
    "name": "string"
  }
}

---

## 📊 Video Category (`youtube#videoCategory`)

{
  "kind": "youtube#videoCategory",
  "etag": "string",
  "id": "string",
  "snippet": {
    "title": "string",
    "assignable": "boolean"
  }
}

---

## 📦 Caption (`youtube#caption`)

{
  "kind": "youtube#caption",
  "etag": "string",
  "id": "string",
  "snippet": {
    "videoId": "string",
    "lastUpdated": "datetime",
    "trackKind": "string",
    "language": "string",
    "name": "string",
    "audioTrackType": "string",
    "isCC": "boolean",
    "isLarge": "boolean",
    "isEasyReader": "boolean",
    "isDraft": "boolean",
    "isAutoSynced": "boolean",
    "status": "string"
  }
}

---

## 🖼 Thumbnail Object

{
  "default": { "url": "string", "width": number, "height": number },
  "medium": { "url": "string", "width": number, "height": number },
  "high": { "url": "string", "width": number, "height": number },
  "standard": { "url": "string", "width": number, "height": number },
  "maxres": { "url": "string", "width": number, "height": number }
}

---
