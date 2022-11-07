const yt = require("ytdl-core");
const fs = require("fs")

const url = "https://www.youtube.com/watch?v=_RFXtPp0bN8&list=RDMM&index=2";

const getData  = () => {
    return yt.getInfo(url);
}

async function getFormats (){
    let formatos = (await getData()).formats;

    formatos.map(x => {
        console.log("****************************")
        console.log(x.mimeType)
        console.log(x.itag)
        console.log(x.qualityLabel)
        console.log(x.url)
        console.log(x.approxDurationMs)
        console.log("****************************")

    })
}

getFormats();


