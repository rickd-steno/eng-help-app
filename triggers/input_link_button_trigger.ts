import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";
import CollectUserInputWorkflow from "../workflows/collect_user_input_workflow.ts";

const InputLinkButtonTrigger: Trigger<typeof CollectUserInputWorkflow.definition> = {
  type: TriggerTypes.Shortcut,
  name: "Input link button trigger",
  description: "A button (link) trigger for collecting user input",
  workflow: `#/workflows/${CollectUserInputWorkflow.definition.callback_id}`,
  inputs: {
    channel_id: {
      value: TriggerContextData.Shortcut.channel_id,
    },
    interactivity: {
      value: TriggerContextData.Shortcut.interactivity,
    },
    user_id: {
      value: TriggerContextData.Shortcut.user_id,
    },
    message_ts: {
      customizable: true,
    },
    message_text: {
      customizable: true,
    },
    poster_user_id: {
      customizable: true,
    },
  },
};

export default InputLinkButtonTrigger;