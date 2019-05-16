declare module '@loopmode/stateful' {
    import React from 'react';
    type PolyType = Function | string | string[];
    interface StatefulProps {
        callbacks?: PolyType;
        children?: React.ReactChild;

        pendingProps?: PolyType;
        pendingClasses?: PolyType;

        busyDelay?: number;
        busyProps?: PolyType;
        busyClasses?: PolyType;

        successProps?: PolyType;
        successClasses?: PolyType;

        errorProps?: PolyType;
        errorClasses?: PolyType;

        hintDuration?: number;
        successDuration?: number;
        errorDuration?: number;

        delimiter?: string;

        rejectValue?: () => void;
    }

    export default class Stateful extends React.Component<StatefulProps, any> {}

    export function StatefulHOC(
        DecoratedClass: React.Component | React.FunctionComponent,
        options?: StatefulProps
    ): React.FunctionComponent;
}
