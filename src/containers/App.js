import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        );
        if (!robots.length) {
            return (
                <div className = "container-loader">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <header id="Header" className="jumbotron text-center m-0">
                        <h1>RoboFriends</h1>
                        <div className="d-flex justify-content-center">
                            <SearchBox searchChange={this.onSearchChange} />
                        </div>
                    </header>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;