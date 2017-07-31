import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            position: 0,
            posts: ''
        }
        getPosts().then((response) => {this.setState({
           posts : response
        })})
        async function getPosts() {
            let response = await fetch("https://www.reddit.com/r/funny.json")
            response = await response.json()
            return response
        }

        this.renderCurrentPost = this.renderCurrentPost.bind(this)
    }

    render() {
        return (
            <div className="App">
                <h1>Reddit Carousel</h1>
                <div id="body">
                    <button onClick = {this.onLeftClick.bind(this)} name="left">left</button>
                    <div>{this.renderCurrentPost()}</div>
                    <button onClick = {this.onRightClick.bind(this)} name="right">right</button>
                </div>
            </div>
        );
    }

    renderCurrentPost() {
        const { posts, position } = this.state

       console.log(posts)

    
    }

    onLeftClick(e) {
        //TODO: wrap around

        this.setState({
            position: this.state.position - 1
        })
    }

    onRightClick(e) {
        //TODO: wrap around

        this.setState({
            position: this.state.position + 1
        })
    }
}

export default App;
