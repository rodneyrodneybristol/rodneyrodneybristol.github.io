---
layout: default
---

## DoYou Radio Hardware TrackIDs
### Kinda pointless IOT using ESP32, OLED & Arduino

The code is basically written in C, constrained by some limitations of the Arduino IDE.
Hardware is ESP32 DevKit1, rotary clickable encoder and an 0.96" OLED display connected using SPI.
The ESP32 connects to WiFi to be able to handle http requests
The hardwafe relies on a daily json from the doyoutrackid app.
```c
char URL[100] = "https://3rqvxp6o77.execute-api.eu-central-1.amazonaws.com/api/today";

```
I created a struct array to store the data i needed
```c
#define Total_Entries 50
typedef struct
{
  char artist[100];
  char played_date[50];
  char album[100];
  char played_datetime[50];
  char title[100];
} Tracks;
Tracks t[Total_Entries];
```

Then I ran a function which requests, checks and stores new JSON entries in the struct
```c
void GetTrackID(char *url)
{
  // Pass the URL to the http request
  http.begin(url);
  // Request from URL
  int httpCode = http.GET();
  // Store the request in a string
  String message = http.getString();
  // if there is a message in the String...
  if (message.length() > 0)
  {
    message.trim();

    if (message.startsWith("{") && message.endsWith("}"))
    { 
      // Create the JSON buffer
      DynamicJsonBuffer jsonBuffer;
      JsonObject &root = jsonBuffer.parseObject(message);
      if (root.success())
      {
        // Get the track info
        JsonArray &tracks = root["tracks"];
        // how many tracks are there?
        trackSize = tracks.size();
        // Set the limit of the rotary encoder to the trackSize
        rotaryEncoder.setBoundaries(0, trackSize, true);
        for (int i = 0; i < tracks.size(); i++)
        { 
          JsonObject &track = tracks[i];
          // Initially store the info in strings
          String artist = track["artist"];
          String album = track["album"];
          String played_datetime = track["played_datetime"];
          String title = track["title"];
          // copy those strings to c type strings in struct.
          strcpy(t[i].artist, artist.c_str());
          strcpy(t[i].title, title.c_str());
          strcpy(t[i].album, album.c_str());
          strcpy(t[i].played_datetime, played_datetime.c_str());
        }
      }
    }
  }
}
```

[back](./)
