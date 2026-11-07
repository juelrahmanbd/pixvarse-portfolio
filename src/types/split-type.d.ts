declare module "split-type" {
  export interface SplitTypeOptions {
    split?: "lines" | "words" | "chars" | string;
    types?: "lines" | "words" | "chars" | string;
    tagName?: string;
    lineClass?: string;
    wordClass?: string;
    charClass?: string;
    splitClass?: string;
    absolute?: boolean;
  }

  export default class SplitType {
    constructor(target: string | Element | Element[] | NodeList, options?: SplitTypeOptions);
    lines: HTMLElement[] | null;
    words: HTMLElement[] | null;
    chars: HTMLElement[] | null;
    elements: HTMLElement[];
    split(options?: SplitTypeOptions): void;
    revert(): void;
  }
}

