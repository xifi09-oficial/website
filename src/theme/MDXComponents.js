import MDXComponents from "@theme-original/MDXComponents";
import Highlight from "@site/src/components/Highlight";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { Tooltip } from "react-tooltip";
import Slash from "@site/src/components/SlashPreview";
import Showcase from "@site/src/components/WikiShowcase";
import ReactMarkdown from "react-markdown";

export default {
  ...MDXComponents,
  Highlight,
  ReactMarkdown,
  Tabs,
  Slash,
  Showcase,
  Tooltip,
  TabItem,
};