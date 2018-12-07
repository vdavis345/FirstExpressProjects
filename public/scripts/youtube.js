
// result.forEach(function(entry){


// })


$("#search-button").on("click", function () {


    tubeSearch = $("#youtube").val()
    // console.log(tubeSearch)

    const youtubeUrl = "https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=" + apiKey + "&part=snippet&global=true&order=viewcount&q=" + tubeSearch
    // console.log(youtubeUrl)


    $.ajax({
        url: youtubeUrl, success: function (data) {
            // console.log(data)
            const videos = data.items
            for (i = 0; i < videos.length; i++) {
                // console.log(videos[i], `video${i}`)
                const youtubeEmbed = "https://www.youtube.com/embed/" + videos[i].id.videoId 
                console.log(youtubeEmbed)
                // console.log(data.items)

                $("#video" + i).attr('src', youtubeEmbed)
            };


            // const youtubeEmbed = "https://www.youtube.com/embed/" + videos.id.videoId + "?autoplay=1"
            // console.log(data.items)

            // $("#video").attr('src',youtubeEmbed)
            // $("#videoTwo").attr('src',youtubeEmbed)
            // $("#videoThree").attr('src',youtubeEmbed)
            // $("#videoFour").attr('src',youtubeEmbed)
            console.log(videos)


            // videos.forEach(video => {
            //     $("#results").append(`<li>${video.snippet.channelTitle.thumbnails}</li>`)

            // });
            // console.log(videos)
        }



    })
})
// $.ajax({
//     url: youtubeUrl,
//     success: const showVideos = (data) => {
//         const videos= data.items.snippet.tittle

//         console.log(videos)
//     }
// })




// part=snippet&global=true&order=viewcount&q=${searchParams}&type=video+&videoDefinition=high&maxResults=10&key=${key}`