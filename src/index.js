import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppTwo from './AppTwo';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDaia78hS1GIq1NERIYClHbAINesVMK1xA';

// YTSearch({key: API_KEY,term: "surfboards"}, function(data){
// 	console.log(data);
// });

//  const App = function() {
//  	return(
//  		<div>
//  		<AppTwo/>
//  		<SearchBar />
//  		<div>hi!</div>
//  		</div>
//  		)
//  }


class App extends Component{

	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideos: null
			 };
	
this.onVideoSearch("surfboards");
	
} 

onVideoSearch(term){
	YTSearch({key: API_KEY, term: term}, (videos) => {
		this.setState({
			videos:videos,
			selectedVideos:videos[0]
		});
	});
}

	render(){
		return(
			<div>
			<AppTwo />
			<SearchBar onSearchTermChange ={term => this.onVideoSearch(term)} />
			<VideoDetail video={this.state.selectedVideos} />
			<VideoList 
			onVideoSelect={selectedVideos => this.setState({selectedVideos})}
			videos={this.state.videos} />
			</div>
			);
	}

}

ReactDOM.render(<App />,document.getElementById('container'));
