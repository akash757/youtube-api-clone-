import React from 'react'
import { Grid,Paper,Typography } from '@material-ui/core'

export default function VideoItem({video,onVideoSelect}) {
    console.log(video)
  return (
      <Grid item xs={12}>
          <Paper style={{display:'flex',alignItems:'center', cursor:'pointer'}} onClick={(e) => onVideoSelect(video)}>
            <img style={{marginRight:'20px'}} alt='thumbnail' src={video && video.snippet.thumbnails.medium.url}/>
            <Typography variant='subtitle1'><b>{ video && video.snippet.title}</b></Typography>

          </Paper>
      </Grid>
  )
}
