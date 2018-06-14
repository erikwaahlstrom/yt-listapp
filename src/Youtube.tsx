import * as React from 'react';

const URL = 'https://www.googleapis.com/youtube/v3/search';
const KEY = 'AIzaSyB2gmaBHYLim0wrHh8xsB93yvTriLJHIjY';
const channelID = 'UCp8lM3X0hpFDVlaFuZBvw0g';
const maxRes = 10;

// const result = 10;

const finalURL = `${URL}?key=${KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxRes}`;

class Youtube extends React.Component {

    constructor(props: any) {
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }

    // Fetch youtube api
    public clicked() {
        fetch(finalURL)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((error) => {
                return console.error(error);
            })
    }

    public render() {
        console.log(finalURL);
        return (
        <div>
            <button onClick={this.clicked}>Get youtube videos</button>

            <div>
                <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/c6t3bW7kx6E"
                frameBorder="0"
                allowFullScreen={true} />
            </div>
        </div>
        )
    }
}

export default Youtube;