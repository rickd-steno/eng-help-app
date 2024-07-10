import { Manifest } from "deno-slack-sdk/mod.ts";
import PostReplyWorkflow from "./workflows/post_reply_workflow.ts";
import CollectUserInputWorkflow from "./workflows/collect_user_input_workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "eng-help-app",
  description: "A template for building Slack apps with Deno",
  icon: "assets/default_new_app_icon.png",
  workflows: [PostReplyWorkflow],
  outgoingDomains: [],
  datastores: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "channels:history",
    "groups:history",
    "im:read",
    "mpim:read",
  ],
});
