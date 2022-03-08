import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    // if this.state.currentPlaying does not equal the video clicked
    // update state
    console.log(e);

    // this.setState({
    //   playing: !this.state.playing
    // });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={exampleVideoData[0]} />
          </div>
          <div className="col-md-5">
            <VideoList test={this.onClickHandler} videos={exampleVideoData} />
          </div>
        </div>
      </div>
    );
  }
}
/*
var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={exampleVideoData[0]} />
        <div><h5><em>videoPlayer</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData} />
        <div><h5><em>videoList</em> view goes here</h5></div>
      </div>
    </div>
  </div>
);

*/
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
