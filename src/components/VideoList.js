import React from 'react'
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'

export default function VideoList({videos,onVideoSelect}) {
  const videolist = videos.map((video,id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
  return (
    <Grid container spacing={10}>
      {videolist}
    </Grid>
  )  
}
