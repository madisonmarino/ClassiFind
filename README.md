# ClassiFind

### Overview
ClassiFind makes classical music approachable, digestible, and accessible, by offering users the opportunity to explore the world of classical music based on their current favourite artists and existing music preferences.

### Problem
In today's digital age, music streaming platforms have become an integral part of our daily lives, revolutionizing the way we engage with music. However, amidst the plethora of music choices, one genre often remains in the shadows: classical music. This timeless art form frequently finds itself underrepresented in the digital music arena. ClassiFind's goal is to close this ever-increasing and glaring gap, providing a bridge to bring classical music into the forefront of the digital music experience. ClassiFind provides a unique platform tailored for those new to classical music. It provides an intuitive starting point for newcomers, providing classical music recommendations that align with their existing musical tastes. The aim is to make classical music not only accessible but also a relatable and enriching part of the modern listener's repertoire.

### User Profile
ClassiFind is designed to cater to an ever-expanding and diverse user base, offering a tailored experience that caters to each user's unique tastes and preferences within the realm of classical music. Particularly, it will nurture and kindle the curiosity of cross-genre listeners who are looking to access a genre that they have thought nearly impossible to enjoy, thereby transforming it into a new-found source of appreciation and joy.

### Features
As a user, I can curate the beginning of my classical music journey by selecting my current favourite artists. From there, I will receive a personalized recommendation of a classical composer/artist and composition. Furthermore, I will have the opportunity to delve deeper into the world of classical music by exploring detailed information about the recommended composer, enriching my musical knowledge and appreciation. Incorporate chatGPT to allow users to deep dive into the song or composer that they were recommended. ChatGPT will be used to create a comparison between the current artists that the user has selected and the recommended artist. ChatGPT will also provide the user with education on the composer and classical music. This will allow the user to ask questions and discover more about the music they are recommended.

## Implementation:

### Tech Stack
React, Axios, Express. Client Libraries: react, react-router-dom, axios, sass. Server Libraries: express.

### APIs
Spotify API.

### Sitemap
- Home page: upon visiting the website users will be greeted with a home page.
- Artist selection page: the users will be able to click on a button that will bring them to the quiz feature. This feature will ask them to select artists they currently listen to.
- Loading screen: while the page "loads" and "generates results" users will be taken to a loading page.
- Results page: Users will automatically be taken to a result page. This will display the composer/artist and track that they are recommended.

### Mockups



### Data
Data from my server will provide an array of artists objects that will allow users to select artists they currently listen to - this will possibly be done through the Spotify API to gain access to every artist on their platform. All responses and resulting data will come from the different Spotify API endpoints.

### Endpoints
**GET/recommendations**
- get a list of recommended tracks and artists based on the parameters
- **Parameters:** a seeded genre (classical), seeded artists (up to 5 artists the user chooses)
  
Example response:
```
{
  "tracks": [
    {
      "name": "Symphony No. 5 in C Minor, Op. 67: I. Allegro con brio",
      "id": "3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d",
      "artists": [{"name": "Ludwig van Beethoven"}],
      "album": {
        "name": "Beethoven: Symphony No. 5",
        "images": [{"url": "https://example.com/image.jpg"}]
      }
    },
    // ... more tracks ...
  ]
}
```

**GET/artists/:id**
- get the artist data for the artist of the recommended track
- Parameters: the artist ID
  
Example Response:
```
{
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg"
  },
  "followers": {
    "href": null,
    "total": 10213193
  },
  "genres": [
    "dance pop",
    "miami hip hop",
    "pop"
  ],
  "href": "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg?locale=en-US%2Cen%3Bq%3D0.9",
  "id": "0TnOYISbd1XYRBk9myaseg",
  "images": [
    {
      "url": "https://i.scdn.co/image/ab6761610000e5ebee07b5820dd91d15d397e29c",
      "height": 640,
      "width": 640
    },
    {
      "url": "https://i.scdn.co/image/ab67616100005174ee07b5820dd91d15d397e29c",
      "height": 320,
      "width": 320
    },
    {
      "url": "https://i.scdn.co/image/ab6761610000f178ee07b5820dd91d15d397e29c",
      "height": 160,
      "width": 160
    }
  ],
  "name": "Pitbull",
  "popularity": 82,
  "type": "artist",
  "uri": "spotify:artist:0TnOYISbd1XYRBk9myaseg"
}
```

### Auth
There is no authorization, login, or user profile necessary in the MVP. Please see the "nice-to-haves" section at the bottom for possible user-based authorization. The Spotify api requires access tokens in order to make requests and times out every hour.

### Roadmap



### Nice-to-haves
- Incorporate Spotify authorization (OAuth 2.0) and login
- Gain access to each user's top artists and recommend based on their existing top artists
- Image of an orchestra. When hovering over a specific section or instrument, information, history, and a playable sound-clip embed will display.
