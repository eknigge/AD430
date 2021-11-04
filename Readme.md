# Project Description
Create an interactive walking tour map app where users can add and edit points of interest to help travelers find good things to do and see. The app would be open to anyone to join, use, and edit. The idea is that locals can share points of interest with travelers, or travelers who are learning about a place can share points of interest with other travelers, too. You can look at other peoples’ added points of interest on the map, choose what you want to see, and the app creates a path between the points of interest so you can walk to each one efficiently. The app has a voice guide so you can put in headphones and go from point to point and listen to other people’s descriptions. Each user can add or delete photos and update descriptions.

# Project Documentation
Stored on Google Drive to protect privacy of collaborators. 

# Getting Started
## Pre-Requisites
- Android Studio and Android Virtual Device (AVD), with Android 29. This is the latest compatible version with Expo. 
- Yarn package manager
- Node.js

## Download and Run
- Download the repository to a local directory
- Navigate to the local directory and run `yarn install`
- Run `expo start`
- After expo has started either use the web UI or command prompt to start the AVD. If using the command prompt enter `a`
	- If the first attempt to start the application does not work enter `a` again

# Database
The project uses the key-value database Firestore to store information and quickly retrieve it. The top-level collection is called `PointsOfInterest`, and represents all points of interest. Each point contains a `Description`, `Location`, `Title`, and `URL` field. The information in each field can be changed, and new fields can be added. 