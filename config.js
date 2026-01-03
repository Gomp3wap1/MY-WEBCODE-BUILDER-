// config.js

// Add up to 10 API keys
const API_KEYS = [
  "AIzaSyDGmjm1-ZgBKjHbh9r9slExiHZNWCxpbZ4","API_KEY_2","API_KEY_3","API_KEY_4","API_KEY_5",
  "API_KEY_6","API_KEY_7","API_KEY_8","API_KEY_9","API_KEY_10"
];

let currentApiIndex = 0;

// Rotate API key
function getApiKey() {
  const key = API_KEYS[currentApiIndex];
  currentApiIndex = (currentApiIndex + 1) % API_KEYS.length;
  return key;
}

// Fetch search results (videos, channels, playlists)
async function fetchYouTubeSearch(query, maxResults=5) {
  const API_KEY = getApiKey();
  const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?` +
    new URLSearchParams({
      part: "snippet",
      q: query,
      type: "video,channel,playlist",
      maxResults,
      key: API_KEY
    });

  const res = await fetch(searchUrl);
  const data = await res.json();

  const videos = data.items.filter(i => i.id.kind === "youtube#video").map(i => i.id.videoId);
  const playlists = data.items.filter(i => i.id.kind === "youtube#playlist").map(i => i.id.playlistId);
  const channels = data.items.filter(i => i.id.kind === "youtube#channel").map(i => i.id.channelId);

  // Video details
  let videoDetails = [];
  if(videos.length){
    const vRes = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?` +
      new URLSearchParams({
        part: "snippet,statistics,contentDetails,player,topicDetails,status",
        id: videos.join(","),
        key: API_KEY
      }));
    videoDetails = (await vRes.json()).items;
  }

  // Channel details
  let channelDetails = [];
  if(channels.length){
    const cRes = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?` +
      new URLSearchParams({
        part: "snippet,statistics,contentDetails,status,brandingSettings",
        id: channels.join(","),
        key: API_KEY
      }));
    channelDetails = (await cRes.json()).items;
  }

  // Playlist details
  let playlistDetails = [];
  if(playlists.length){
    const pRes = await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?` +
      new URLSearchParams({
        part: "snippet,contentDetails,status",
        id: playlists.join(","),
        key: API_KEY
      }));
    playlistDetails = (await pRes.json()).items;
  }

  return { videoDetails, channelDetails, playlistDetails };
}

// Fetch top comments with replies
async function fetchComments(videoId, maxResults=5){
  const API_KEY = getApiKey();
  const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?` +
    new URLSearchParams({
      part: "snippet,replies",
      videoId,
      maxResults,
      key: API_KEY
    });
  const res = await fetch(url);
  const data = await res.json();
  return data.items || [];
}
