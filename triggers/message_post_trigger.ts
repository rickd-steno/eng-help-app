import "std/dotenv/load.ts";
import { Trigger } from "deno-slack-sdk/types.ts";
import {
  TriggerContextData,
  TriggerEventTypes,
  TriggerTypes,
} from "deno-slack-api/mod.ts";
import PostReplyWorkflow from "../workflows/post_reply_workflow.ts";

const MessagePostTrigger: Trigger<typeof PostReplyWorkflow.definition> = {
  type: TriggerTypes.Event,
  name: "Message post trigger",
  description: "Trigger is activated when a message is posted",
  workflow: `#/workflows/${PostReplyWorkflow.definition.callback_id}`,
  event: {
    event_type: TriggerEventTypes.MessagePosted,
    //channel_ids: [getEnvVar("ENG_HELP_CHANNEL_ID", true) as string],
    channel_ids: ["C0749U1BPDY"],
    filter: {
      root: {
        operator: "AND",
        inputs: [{
          operator: "NOT",
          inputs: [{
            // Filter out posts by apps
            statement: "{{data.user_id}} == null",
          }],
        }, {
          // Filter out thread replies
          statement: "{{data.thread_ts}} == null",
        }],
      },
      version: 1,
    },
  },
  inputs: {
    channel_id: {
      value: TriggerContextData.Event.MessagePosted.channel_id,
    },
    // message_text: {
    //   value: TriggerContextData.Event.MessagePosted.text
    // },
    message_ts: {
      value: TriggerContextData.Event.MessagePosted.message_ts,
    },
    // user_id: {
    //   value: TriggerContextData.Event.MessagePosted.user_id
    // }
  },
};

function getEnvVar(keyName: string, isRequired: boolean = false) {
  const envVar = Deno.env.get(keyName);

  if (isRequired && !envVar) {
    throw new Error(`Env var ${keyName} is required`);
  }

  return envVar;
}

export default MessagePostTrigger;
