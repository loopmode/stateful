import React, { Component } from 'react';
import Stateful from '@loopmode/stateful';
import css from './HTMLExample.scss';
import cx from 'classnames';
class ListLoader extends Component {
    state = {
        data: []
    };
    render() {
        return (
            <div className={cx(css.HTMLExample, 'example HTMLExample')}>
                <h2>Plain HTML example</h2>
                <p>
                    This example doesn't use any UI frameworks, but some simple
                    CSS rules instead.
                </p>
                <Stateful>
                    <button onClick={this.handleLoadClick}>
                        load comments
                    </button>
                </Stateful>

                <ul>
                    {this.state.data.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <code>{item.email}</code>
                            <p>{item.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    handleLoadClick = () => {
        return fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => this.setState({ data }));
    };
}

export default ListLoader;
