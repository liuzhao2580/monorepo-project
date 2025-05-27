// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

declare module "*.svg?react" {
  import * as React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
