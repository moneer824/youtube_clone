// AIzaSyASUn9QEM6YQew1RGw_z3N8Ip5f_o0q6Fg

// https://youtube.googleapis.com/youtube/v3/search?q=csk&type=video&key=[YOUR_API_KEY]

// console.log(fetch("https://youtube.googleapis.com/youtube/v3/search?q=csk&type=video&key=AIzaSyASUn9QEM6YQew1RGw_z3N8Ip5f_o0q6Fg"))



// https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=flag&type=video&videoEmbeddable=true&key=




let parent = document.getElementById("parent")

async function searchVideos() {
    let inp = document.getElementById("search").value
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${inp}&maxResults=20&type=video&part=snippet&videoEmbeddable=true&key=AIzaSyASUn9QEM6YQew1RGw_z3N8Ip5f_o0q6Fg`)

    let data = await res.json()
    console.log(data)
    appendVideos(data.items)
}

function appendVideos(video_data) {
    parent.innerHTML = null
    video_data.forEach(({ id: { videoId },snippet:{channelTitle,description} }) => {

        console.log(videoId)
        let div = document.createElement("div");
        let div_video = document.createElement("div");
        let div_info = document.createElement("div");
        let title = document.createElement("p");
        title.innerText = channelTitle
        let disc = document.createElement("p");
        disc.innerText = description
       

        div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
       div_info.append(title,disc)
       div_video.append(div,div_info)
        console.log(div)
        
        parent.append(div_video)
    });

}