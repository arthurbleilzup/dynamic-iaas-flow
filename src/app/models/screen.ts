export interface Screen {
  title: string,
  stepNumber: number,
  components: Screen.Component[],
  operations: Screen.Operation[],
}

export namespace Screen {
  export interface Component {
    type: string,
    properties: Record<string, any>,
    children: Component[],
  }

  export interface Operation {
    type: string,
    title: string,
  }
}
