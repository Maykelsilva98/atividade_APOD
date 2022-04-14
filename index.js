$("#submit").click(function (event){
    event.preventDefault();
    let data = $("#data").val();
    let urlS = "https://api.nasa.gov/planetary/apod?api_key=JOz79Y4Og1TuCJGje0ePJGCjORBFdDrR90dOwa40&date=" + data
    $.ajax({
        url: urlS,
        success: function (resposta) {
            if (resposta.media_type == "image"){
                $("#img").attr("src", resposta.url)
                console.log(resposta.url)
            } else if (resposta.media_type == "video"){ 
                console.log(resposta.url)
                $("#video").attr("src", resposta.url)
            }
        },
    }
    )
})
