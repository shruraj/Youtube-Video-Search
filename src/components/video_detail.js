import React from 'react';
import '../style/style.css';

const VideoDetail = ({video}) => {

if(!video){
		return <div> ..... </div>;
	}

const videoId = video.id.videoId;
const url=`https://www.youtube.com/embed/${videoId}`;
console.log(url);



	return(
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>	
			</div>
		);
};

export default VideoDetail;