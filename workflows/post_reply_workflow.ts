import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";

const PostReplyWorkflow = DefineWorkflow({
  callback_id: "post_reply_workflow",
  title: "Eng Help Bot",
  description: "Eng Help Bot is here to help",
  input_parameters: {
    properties: {
      channel_id: {
        type: Schema.slack.types.channel_id,
      },
      // message_text: {
      //   type: Schema.types.string,
      // },
      message_ts: {
        type: Schema.types.string,
      },
      // user_id: {
      //   type: Schema.slack.types.user_id,
      // },
    },
    required: [
      "channel_id",
      // "message_text",
      "message_ts",
      // "user_id"
    ],
  },
});

PostReplyWorkflow.addStep(Schema.slack.functions.ReplyInThread, {
  message:
    "Please click the button and fill out the form to provide more info on the issue you're having. Once you submit, I'll send it over to the Engineering team.",
  message_context: {
    channel_id: PostReplyWorkflow.inputs.channel_id,
    message_ts: PostReplyWorkflow.inputs.message_ts,
  },
  // interactive_blocks: [
  //   {
  //     type: "actions",
  //     elements: {
  //       type: "workflow_button",
  //       text: {
  //         type: "plain_text",
  //         text: "Create Issue"
  //       },
  //       workflow: {
  //         trigger: {
  //           url: "ADD TRIGGER URL HERE",
  //           customizable_input_parameters: [
  //             // {
  //             //   name: "message_text",
  //             //   value: PostReplyWorkflow.inputs.message_text
  //             // },
  //             {
  //               name: "message_ts",
  //               value: PostReplyWorkflow.inputs.message_ts,
  //             },
  //             // {
  //             //   name: "poster_user_id",
  //             //   value: PostReplyWorkflow.inputs.user_id
  //             // }
  //           ],
  //         },
  //       }
  //     }
  //   }
  // ]
});

// const inputForm = EngHelpBotWorkflow.addStep(
//   Schema.slack.functions.OpenForm,
//   {
//     title: "Please provide more info on your issue",
//     interactivity: EngHelpBotWorkflow.inputs.interactivity,
//     submit_label: "Send to Eng Team",
//     fields: {
//       elements: [{
//         name: "channel",
//         title: "Channel to send message to",
//         type: Schema.slack.types.channel_id,
//         default: EngHelpBotWorkflow.inputs.channel_id,
//       }, {
//         name: "message",
//         title: "Message",
//         type: Schema.types.string,
//         long: true,
//       }],
//       required: ["channel", "message"],
//     },
//   },
// );

// const sampleFunctionStep = EngHelpBotWorkflow.addStep(
//   SampleFunctionDefinition,
//   {
//     message: inputForm.outputs.fields.message,
//     user: EngHelpBotWorkflow.inputs.user,
//   },
// );

export default PostReplyWorkflow;
