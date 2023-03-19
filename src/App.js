import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import { useState } from "react";

function App() {
  const [data, setData] = useState({video:[],selectedVideo:null})

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", { params: { q: searchTerm } });
    setData({...data,video:response.data.items,selectedVideo:response.data.items[0]})
  }; 
  const onVideoSelect = (video) => {
    setData({...data,selectedVideo:video})
  }
  return (
    <div className="App">
      <Grid justifyContent="center " container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={data.selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos ={data.video} onVideoSelect={onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
