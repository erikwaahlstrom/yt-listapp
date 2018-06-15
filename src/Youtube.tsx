import * as React from 'react';

const URL = 'https://www.googleapis.com/youtube/v3/search';
const KEY = 'AIzaSyB2gmaBHYLim0wrHh8xsB93yvTriLJHIjY';
// const channelID = 'UC59K-uG2A5ogwIrHw4bmlEg';

const channelID = 'UCsFlSnAIMgTQbasYrlK1vpw';

const maxRes = 10;

const finalURL = `${URL}?key=${KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxRes}`;

class Youtube extends React.Component<{}, {resultyt: any}> {

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
            .then((responseJson) => {
                // console.log(responseJson);
                const resultyt = responseJson.items.map((obj: any) => "https://www.youtube.com/embed/" + obj.id.videoId);
                this.setState({resultyt});
                
            })
            // console.log(data))
            .catch((error) => {
                console.error(error);
            })
    }

    public render() {
        // console.log(finalURL);
        // console.log(this.state.resultyt);
        return (
        <div>
            <button onClick={this.clicked}>Get youtube videos</button>

                {
                    this.state.resultyt.map((link: any, i: number) => {
                        // console.log(link);
                        return <div key={i}>
                            <iframe
                            width="560"
                            height="315"
                            src={link}
                            frameBorder="0"
                            allowFullScreen={true} /></div>

                        // return frame;
                    })
                }

        </div>
        )
    }
}

export default Youtube;