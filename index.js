// AIzaSyASUn9QEM6YQew1RGw_z3N8Ip5f_o0q6Fg

// https://youtube.googleapis.com/youtube/v3/search?q=csk&type=video&key=[YOUR_API_KEY]

// console.log(fetch("https://youtube.googleapis.com/youtube/v3/search?q=csk&type=video&key=AIzaSyASUn9QEM6YQew1RGw_z3N8Ip5f_o0q6Fg"))

let parent = document.getElementById("parent")

async function searchVideos() {
    let inp = document.getElementById("search").value
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${inp}&type=video&key=AIzaSyASUn9QEM6YQew1RGw_z3N8Ip5f_o0q6Fg&maxResults=20`)

    let data = await res.json()
    console.log(data.items)
    appendVideos(data.items)
}

function appendVideos(video_data) {
    parent.innerHTML = null
    video_data.forEach(({ id: { videoId } }) => {

        console.log(videoId)
        let div = document.createElement("div");

        div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        parent.append(div)
    });

}