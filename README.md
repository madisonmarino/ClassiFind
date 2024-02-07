# ClassiFind

### Overview

ClassiFind makes classical music approachable, digestible, and accessible, by offering users the opportunity to explore the world of classical music based on their current favourite artists and existing music preferences.

### Problem

In today's digital age, music streaming platforms have become an integral part of our daily lives, revolutionizing the way we engage with music. However, amidst the plethora of music choices, one genre often remains in the shadows: classical music. This timeless art form frequently finds itself underrepresented in the digital music arena. ClassiFind's goal is to close this ever-increasing and glaring gap, providing a bridge to bring classical music into the forefront of the digital music experience. ClassiFind provides a unique platform tailored for those new to classical music. It provides an intuitive starting point for newcomers, providing classical music recommendations that align with their existing musical tastes. The aim is to make classical music not only accessible but also a relatable and enriching part of the modern listener's repertoire.

### User Profile

ClassiFind is designed to cater to an ever-expanding and diverse user base, offering a tailored experience that caters to each user's unique tastes and preferences within the realm of classical music. Particularly, it will nurture and kindle the curiosity of cross-genre listeners who are looking to access a genre that they have thought nearly impossible to enjoy, thereby transforming it into a new-found source of appreciation and joy.

### Features

As a user, I can curate the beginning of my classical music journey by selecting my current favourite artists. From there, I will receive a personalized recommendation of a classical composer/artist and composition. Furthermore, I will have the opportunity to delve deeper into the world of classical music by exploring detailed information about the recommended composer, enriching my musical knowledge and appreciation. Incorporate chatGPT to allow users to deep dive into the song or composer that they were recommended. ChatGPT will be used to create a comparison between the current artists that the user has selected and the recommended artist. ChatGPT will also provide the user with education on the composer and classical music. This will allow the user to ask questions and discover more about the music they are recommended.

### Images of the site

![Home Page](./proposal/FinalSiteImages/FireShot%20Capture%20002%20-%20ClassiFind%20-%20localhost.png)
![Artist Selection Page](./proposal/FinalSiteImages/FireShot%20Capture%20004%20-%20ClassiFind%20-%20localhost.png)
![Recommendation Results Page](./proposal/FinalSiteImages/FireShot%20Capture%20005%20-%20ClassiFind%20-%20localhost.png)
![MyFinds Page](./proposal/FinalSiteImages/FireShot%20Capture%20006%20-%20ClassiFind%20-%20localhost.png)

## Implementation:

### Tech Stack

Client-side: react, react-router-dom, axios, sass. Server-side: express, mySQL, knex.

### APIs

This project uses the [Spotify API](https://developer.spotify.com/documentation/web-api) as well as the [ChatGPT API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis).

### Sitemap

- Home page: upon visiting the website users will be greeted with a home page.
- Artist selection page: the users can select an artist from any genre that they currently listen to. This will redirect them to a results page where they will be able to see information about their recommended listenings. This includes information about what the piece is, a spotify embed to allow listeners to hear the piece immediately, as well as a personalized description as to why they might enjoy these specific pieces based on the artist they originally selected.
- MyFinds page: users who create an account will be able to save and delete songs from their "MyFinds" page. By clicking the heart to add a song, or the trash can to delete a song, users will be able to tailor this page to their exact classical music desires and interests.

