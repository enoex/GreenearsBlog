---

layout: "content"

title: "The Requirements for Leaderboards in Simple Games"

description:    "I discuss the minimum required features for a leaderboard implementation in a simple game."

date: "2014-11-22"

---

## From the perspective of one independent game developer


##### This post describes the leaderboards in [GobSmack](http://greeneargames.com/GobSmack "GobSmack!"), available on the iOS App Store

---

As I neared completion of the simple iOS game mentioned in [my first blog post](http://greeneargames.com/posts/the-importance-of-complexity-in-game-design.html "The Importance of Complexity in Game Design"), I started researching different Game Center leaderboard implementations, and found an unexpectedly small amount of helpful information. Surely, I thought, my fellow iPhone game devs understand the importance of [leaderboards in games](http://vasir.net/blog/data-visualization/data-visualization-in-games-leaderboards "Data Visualization in Games: Leaderboards"), right?  As it turns out, most of us seem to have a "Set it and forget it" approach to leaderboards - they plug their game into Game Center and drop in a button to summon the default interface provided by GameKit. Game Center is a useful tool that works great for powering a simple leaderboard system, but GameKit's default interface is underwhelming at best. A few simple improvements can increase the motivational power of your leaderboards dramatically.

One of the biggest problems with the default leaderboard interface is that it doesn't give the user very much information about their own placement in the global leaderboard.

![A screenshot of a default leaderboard interface](http://i.imgur.com/ah9gbDd.png "So I'm number one compared to my one friend. What about everyone else?")

Additionally, this interface accentuates one of the glaring downsides to using Game Center - cheaters. If the first thing I see when I look at the leaderboards is a wall of identical, unreasonably high scores, I do not get motivated to see how close I can get, I just get frustrated. Perhaps it makes sense, then, to reduce the scope of the leaderboard to, say, one player on either side of myself?

[![A much more compelling leaderboard](http://i.imgur.com/yLzekdN.jpg "Ooh! I only need 9 more to increase my global rank!")](http://greeneargames.com/GobSmack "GobSmack!")

There's no scrolling, no filtering, no distraction, and no confusion. I do still provide a leaderboard button, just in case one of my users simply must see the wall of cheaters, but I make it deliberately low-contrast and unattractive. I'd rather most of my users didn't click it, because it presents a thematically inconsistent and utterly unexciting view.

To accomplish this, I simply report the user's new score to Game Center, then fetch data about the leaderboard (to retrieve the user's rank) and perform an additional fetch with the desired range around the player's rank. This multi-fetch approach is a little counterintuitive, and is further complicated by GameCenter's caching, which necessitates validating the value of the newly fetched score against the recently reported score. Within the next few weeks, I'll release a simple library for handling the fetching of scores around the local player's, to allow other developers to try this approach.

Another benefit to a simple in-line interface like this is that it can be displayed after every game. By not hiding the leaderboard behind a button, you get an opportunity to motivate even the players who wouldn't normally seek out the leaderboards. I also take advantage of that foot in the door by showing arrows indicating that more leaderboards are available to browse through. By doing this, I increase the chance that a player will find a leaderboard they want to increase their rank on. Whatever leaderboard is being displayed when the player restarts will be shown first after the next game.


## The short version
___

- Leaderboards are better if you center their position on the local player's rank. I'll be releasing a library soon to handle fetching scores within a certain number of ranks of the local player.
- Leaderboards should be shown to the user as frictionlessly as possible, to take advantage of their motivational effects on as many players as possible.
- You can see what I'm talking about if you [download GobSmack from the iOS App Store](http://greeneargames.com/GobSmack "GobSmack!")
