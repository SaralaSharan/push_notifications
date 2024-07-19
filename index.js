const Expo = require("expo-server-sdk").default;

const expo = new Expo();

const TOKEN = process.argv[2];

async function sendNotification(token) {
  if (Expo.isExpoPushToken(token)) {
    const notificationResponse = await expo.sendPushNotificationsAsync([
      {
        to: token,
        title: "Hello",
        body: "This is an expo notification",
        data: { blbla: 123 },
      },
    ]);
    console.log("Notifixation sent: ", notificationResponse);
  } else {
    console.log("Invalid token ", token);
  }
}

sendNotification(TOKEN);
