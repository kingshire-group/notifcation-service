import { startSession } from "mongoose";
//define emmit notification
//define create notification

// /**
//  * Emitts the new notifications to all administrators and specified user
//  * @param {Object} notification New notification document
//  */
// async function emitNotifications(notification, ignoreUser) {
//   const notifiableUsers = [];
//   const { createdBy } = notification;

//   // emitt the new notification
//   global._emitter.emit(eventName.NEW_NOTIFICATION, {
//     notification,
//   });
// }

// // eslint-disable-next-line import/prefer-default-export
// export async function createNotification(ignoreUser = false) {
//   const { modelType } = this;
//   const session = await startSession();

//   // await emitNotifications(notification, ignoreUser);
// }
