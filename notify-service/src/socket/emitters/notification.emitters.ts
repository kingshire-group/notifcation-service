// const { _emitter } = global;

// // eslint-disable-next-line import/prefer-default-export
// export default (socket) => {
//   _emitter.on("eventName", (payload) => {
//     const { notification, users } = payload;
//     const { _id } = socket.request.user;
//     if (users.includes(_id.toString())) {
//       const {
//         seenBy,
//         clickedBy,
//         modelType,
//         model,
//         actionType,
//         content,
//         createdBy,
//         createdAt,
//         updatedAt,
//         userType,
//         parentId,
//       } = notification;

//       const seen = seenBy.includes(_id);
//       const clicked = clickedBy.includes(_id);
//       socket.emit("eventName", {
//         _id: notification._id,
//         seen,
//         clicked,
//         model,
//         modelType,
//         actionType,
//         content,
//         seenBy,
//         clickedBy,
//         createdBy,
//         createdAt,
//         updatedAt,
//         userType,
//         parentId,
//       });
//     }
//   });
// };
