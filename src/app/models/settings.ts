export interface Settings {
  tenant: Settings.Tenant,
  colors: Settings.Colors,
}

export namespace Settings {
  export interface Tenant {
    name: string,
    logoUrl: string,
  }

  export interface Colors {
    header: string,
    body: string,
    primary: string,
    primaryText: string,
    accent: string,
    accentText: string,
    title: string,
    subtitle: string,
    text: string,
    input: Colors.Inputs,
    card: Colors.Cards,
  }

  export namespace Colors {
    export namespace Inputs {
      export interface Base {
        text: string,
        background: string
      }
    }

    export interface Inputs extends Inputs.Base {
      labelBorder: string,
      hover: Inputs.Base
    }

    export interface Cards {
      background: string,
      border: string,
    }
  }
}
