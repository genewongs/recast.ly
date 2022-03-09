import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../../src/lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // NOTE: exampleVideoData[0] is what was below.
    this.state = {
      videoList: {
        data: []
      },

      playing: {
        id: {videoId: ''},
        snippet: {title: ''}
      },

      autoPlay: {
        play: false
      }
    };

    this.onClickHandler = this.onClickHandler.bind(this);
    this.updateVideoData = this.updateVideoData.bind(this);
    this.makeSearchQuery = this.makeSearchQuery.bind(this);
  }

  componentDidMount() {
    searchYouTube('dogs', this.updateVideoData);
  }

  makeSearchQuery(input) {
    // let callback = () => {
    //   this.props.searchYouTube(input, this.updateVideoData);
    // };

    // (_.debounce(() => {
    //   searchYouTube(input, this.updateVideoData);
    // }, 500))();
    // the string that the user wants to search for in youtube
    // invoke api - passing in the `input` and callback - updateVideoData'
    searchYouTube(input, this.updateVideoData); // FIXME: potentially uncomment
    console.log('Query: ', input);
  }

  // handleDebounce = _.debounce(makeSearchQuery(e.target.value), 1000);

  updateVideoData(data) {
    if (data.length !== 0 && this.state.playing.id.videoId !== data[0].id.videoId) {
      this.setState({
        videoList: {
          data: data
        },
        playing: data[0]
      });
    }
  }

  onClickHandler(data) {
    let currVidId = this.state.playing.id.videoId;
    // update video list from state here?

    if (currVidId !== data.id.videoId) {
      // this.updateVideoData(data);
      this.setState({
        playing: data
      });
    }
  }

  render() {
    return (
      <div>
        {/* {this.componentDidMount()} */}
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search updateFeed={this.makeSearchQuery} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playing} />
          </div>
          <div className="col-md-5">
            <VideoList test={this.onClickHandler} videos={this.state.videoList.data} />
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
