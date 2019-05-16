import Stateful from './Stateful';
import React from 'react';

const statefulPropNames = Object.keys(Stateful.defaultProps);

const getProps = props =>
    Object.keys(props).reduce(
        (result, key) => {
            if (statefulPropNames.includes(key)) {
                result.statefulProps[key] = props[key];
            } else {
                result.childProps[key] = props[key];
            }
            return result;
        },
        { statefulProps: {}, childProps: {} }
    );

const StatefulHOC = (DecoratedClass, options) => props => {
    const { statefulProps, childProps } = getProps(props);
    return (
        <Stateful {...options} {...statefulProps}>
            <DecoratedClass {...childProps} />
        </Stateful>
    );
};

export default StatefulHOC;
