import http from "http";
import * as serverHandlers from "./serverHandlers";
import server from "./server";
import amqp from "amqplib/callback_api";
import { consume } from "./event";
// import createServer from "../../socket";
// import { initializEmitters } from "../../socket/emitters";

const Server: http.Server = http.createServer(server);

Server.listen(server.get("port"), () => {
  console.log(`${server.get("port")} Server running on localhost`);
});

// const io = createServer(server, {
//   cors: {
//     origin: "*",
//   },
// });

// io.use((socket, next) => {
//   //authenticate user before socket connection and
// });

// io.on("connection", async (socket) => {
//   // eslint-disable-next-line no-console
//   console.log("client connected");
//   initializEmitters(socket);
//   // eslint-disable-next-line no-console
//   socket.on("disconnect", () => console.log("disconnected"));
// });

Server.on("error", (error: Error) =>
  serverHandlers.onError(error, server.get("port"))
);
Server.on("listening", serverHandlers.onListening.bind(Server));

// Define an event listener for the "startup" event
Server.on("startup", async () => {
  await amqp.connect(
    "amqp://rabbitmq:rabbitmq@noti_rabbitmq:5672",
    function (err, conn) {
      if (err) {
        throw err;
      }
      conn.createChannel((err, channel) => {
        if (err) {
          throw err;
        }
        const exchangeName = "some_unique_key";
        channel.assertExchange(exchangeName, "topic", { durable: true });
        channel.assertQueue(
          "",
          {
            exclusive: true,
          },
          function (error2, q) {
            if (error2) {
              throw error2;
            }
            console.log(" [*] Waiting for logs. To exit press CTRL+C");

            channel.bindQueue(q.queue, exchangeName, "routing_key");
            consume(channel, q);
          }
        );
      });
    }
  );
});
