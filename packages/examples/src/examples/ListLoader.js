import React, { Component } from 'react';
import Stateful from '@loopmode/stateful';

class ListLoader extends Component {
    state = {
        data: []
    };
    render() {
        return (
            <div className="ListLoader example">
                <header>
                    <h2>ListLoader example</h2>
                    <Stateful>
                        <button onClick={this.handleLoadClick}>
                            load comments
                        </button>
                    </Stateful>
                </header>
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
