import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const CollectUserInputWorkflow = DefineWorkflow({
  callback_id: "collect_user_input_workflow",
  title: "Eng Help Bot form",
  description: "Collect more information on the user's issue",
  input_parameters: {
    properties: {
            channel_id: {
        type: Schema.slack.types.channel_id,
      },
      interactivity: {
        type: Schema.slack.types.interactivity,
      },
      user_id: {
        type: Schema.slack.types.user_id,
      },
      // Custom attributes
      poster_user_id: {
        type: Schema.slack.types.user_id
      },
      message_text: {
        type: Schema.types.string
      },
      message_ts: {
        type: Schema.slack.types.timestamp
      },
    },
    required: ["channel_id", "interactivity", "user_id"],
  },
});

export default CollectUserInputWorkflow;
