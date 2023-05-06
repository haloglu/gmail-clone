
# Gmail Clone

This project is a clone of the popular email service Gmail. It is built using Vue.js, Tailwind CSS, and Firebase, with Node.js and Express.js for the backend.

## Getting Started

To get started with this project, you will need to have Node.js and npm installed on your local machine. You can install them by following the instructions on the official Node.js website.

You will also need to have Vue CLI installed on your machine. You can install it by running the following command:

``npm install -g @vue/cli``

After installing the required tools, you can clone this repository to your local machine using the following command:

``git clone https://github.com/haloglu/gmail-clone.git``

After cloning the repository, navigate to the project directory and install the dependencies using the following command:

``npm install``

You will also need to create a Firebase project and enable Google Authentication for the project. You can follow the instructions on the official Firebase documentation for setting up Firebase and enabling Google Authentication.

Once you have set up Firebase and enabled Google Authentication, you can add the Firebase configuration to the project by creating a .env.local file in the project root directory with the following contents:

``
VUE_APP_API_KEY=<your-firebase-api-key>
VUE_APP_AUTH_DOMAIN=<your-firebase-auth-domain>
VUE_APP_PROJECT_ID=<your-firebase-project-id>
VUE_APP_STORAGE_BUCKET=<your-firebase-storage-bucket>
VUE_APP_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
VUE_APP_APP_ID=<your-firebase-app-id>
``

Replace the placeholders with the appropriate values from your Firebase project.

Finally, start the development server using the following command:

``npm run serve``

This will start the Vue.js development server and you can access the project at `http://localhost:8080`.

## Features

- Google Authentication using Firebase Authentication
- Compose and send emails
- View inbox, sent, and draft emails
- View email details and reply to emails
- Delete emails

## Credits

This project was built using the following technologies:

- Vue.js
- Tailwind CSS
- Node.js
- Firebase

