// This is your entry file! Refer to it when you render:
// npx remotion render <entry-file> MainSequence out/video.mp4

import { registerRoot } from "remotion"
import { RemotionRoot } from "./Root"

registerRoot(RemotionRoot)
