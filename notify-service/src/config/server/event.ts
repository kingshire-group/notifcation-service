import { Replies, Channel, Message } from "amqplib/callback_api";

export function consume(channel: Channel, queue: Replies.AssertQueue) {
  channel.consume(queue.queue, function (msg: Message | null) {
    console.log("=============>", msg?.content.toString());
  });
}
