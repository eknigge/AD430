# Project Description
An interactive walking tour map app where users can add and edit points of interest to help travelers find good things to do and see. The app is open to anyone to join, use, and edit. Locals can share points of interest with travelers, or travelers who are learning about a place can share points of interest with other travelers, too. You can look at other peoples’ added points of interest on the map, choose what you want to see, and the app creates a path between the points of interest so you can walk to each one efficiently. The app has a voice guide so you can put in headphones and go from point to point and listen to other people’s descriptions. Each user can add or delete photos and update descriptions.

# Project Documentation
Stored on Google Drive to protect privacy of collaborators. 

# Getting Started
## Pre-Requisites
- Android Studio and Android Virtual Device (AVD), with Android 29. [Installation Instructions](https://reactnative.dev/docs/environment-setup)
- Yarn version
	- v1.22.15
- Node version
	- v16.11.1
- Expo version
	- v4.12.10

## Download and Run
- Download the repository to a local directory
- Navigate to the local directory and run `yarn install`
- Run `expo start`
- After expo has started either use the web UI or command prompt to start the AVD. If using the command prompt enter `a`
	- If the first attempt to start the application does not work enter `a` again

## API Key 
How to get the API key and generate the `.env` file - this file is necessary to connect to cloud services. Without it, it's not possible to load maps or access other data.

1. Navigate to the Firebase project page.
2. In the left navigation pane next to the text *Project Overview*, click on the gear, then click on *Project Settings.*
3. Scroll down and you should see something similar to the following figure.

!["API Setup Image"](./Project_Docs/api_setup.png)

4. In the main project directory create a `.env` file and copy the relevant elements to the `.env` file. For example, copy the `apiKey: 12345` from Firebase to the `API_KEY = 12345` field in the `.env` file. After you are done the file should look like the following.

```sh
API_KEY= [apiKey]
AUTH_DOMAIN= [authDomain]
PROJECT_ID= [projectId]
STORAGE_BUCKET= [storageBucket]
MESSAGING_SENDER_ID= [messagingSenderId]
APP_ID= [appId]
```

# Database
The project uses the key-value database Firestore to store information and quickly retrieve it. The top-level collection is called `PointsOfInterest`, and represents all points of interest. Each point contains a `Description`, `Location`, `Title`, and `URL` field. The information in each field can be changed, and new fields can be added. 