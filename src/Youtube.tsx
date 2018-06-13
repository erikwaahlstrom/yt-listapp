import * as React from 'react';

class Youtube extends React.Component {
    public render() {
        return (<div>
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/c6t3bW7kx6E"
            frameBorder="0"
            allowFullScreen />
        </div>)
    }
}

export default Youtube;