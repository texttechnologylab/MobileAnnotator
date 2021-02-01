
export interface IChangeCas {
    casId: string;
    updates: {
        [type: string]: {
            [addr: string]: IToolElement;
        };
    };
}

export interface ICas {
    casId: string;
    iaa: number;
    iaas: unknown[];
    name: string;
    permission: number;
    text: string;
    classes: ICasClass[];
    predefined: ICasPredefined[];
    typesystem: { [name: string]: ICasTypesystem };
    views: ICasView[];
}

interface ICasClass {
    classcheck: boolean;
    name: string;
    short: string;
}

interface ICasPredefined {
    name: string;
    types: string[];
}

interface ICasTypesystem {
    features: ICasTypesystemFeature[];
    parent: string;
    primitive: boolean;
}

interface ICasTypesystemFeature {
    domain: string;
    name: string;
    primitive: boolean;
    range: string;
}

export interface ICasView {
    iaacheck: boolean;
    permission?: number;
    view: string;
}


export interface ITool {
    casId: string;
    currentView: string;
    finish: boolean;
    toolElements: {
        [key: string]: {
            [key: string]: IToolElement | {};
        };
    };
    toolName: string;
}

export interface IToolElement {
    features: {
        begin: number;
        end: number;
        [key: string]: string | number | number[];
    };
    _addr: number;
    _type: string;
}

export interface IDocument {
    access: number;
    depth: number;
    iconCls: string;
    id: string;
    leaf: boolean;
    parent: string;
    qtip: string;
    text: string;
    type: string;
    uri: string;
}

export interface ICasViewExtended extends ICasView {
    id: number;
    label: string;
}

export interface IMessage {
    text: string;
    level: 'success' | 'warning' | 'error' | 'info';
}

export interface ITask {
    id: string;
    isDone?: boolean;
    cas: string;
    view: string;
    tool: string;
    data: unknown;
    toolLabel?: string;
}

export interface IImplementedTool {
    label: string;
    id: string;
    url: string[];
}

export interface IUserData {
    user: string;
    userName: string;
    fullName: string;
    session: string;
}

export interface IWSCommunicationObject {
    cmd: string;
    data: unknown;
}
