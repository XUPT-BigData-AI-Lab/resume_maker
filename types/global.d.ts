/// <reference types="vite/client" />
import type { PropType as VuePropType } from "vue";

declare global {
  //   vue
  type PropType<T> = VuePropType<T>;
  type Recordable<T = any> = Record<string, T>;
  type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };
  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }
  interface ViteEnv {
    VITE_ENV: string;
    VITE_OUTPUT_DIR: string;
    VITE_PUBLIC_PATH: string;
    VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none";
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  }
}

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
