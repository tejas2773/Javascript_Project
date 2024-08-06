const music = new Audio('songs/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songsName: `Main Koi Aisa Geet Gaoon <br>
        <div class="subtitle">Abijit Yagnik</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 2,
        songsName: `Matargashti <br>
        <div class="subtitle">Mohit Chauhan</div>`,
        poster: "images/2.jpeg"
    },
    {
        id: 3,
        songsName: `Koi Mil Gaya<br>
        <div class="subtitle">Udit Narayan</div>`,
        poster: "images/3.jpeg"
    },
    {
        id: 4,
        songsName: `Balam Pichkari<br>
        <div class="subtitle">Vishal Dadlani & Shalmali Kholgade</div>`,
        poster: "images/4.jpg"
    },
    {
        id: 5,
        songsName: `Ghagra<br>
        <div class="subtitle">Vishal Dadlani & Shalmali Kholgade</div>`,
        poster: "images/4.jpg"
    },
    {
        id: 6,
        songsName: ` Kajra Re <br>
        <div class="subtitle"> Alisha Chinai, Shankar Mahadevan, Javed Ali</div>`,
        poster: "images/6.jpeg"
    },
    {
        id: 7,
        songsName: `Ik Junoon<br>
        <div class="subtitle">Vishal Dadlani</div>`,
        poster: "images/7.jpeg"
    },
    {
        id: 8,
        songsName: `Mast Magan <br>
        <div class="subtitle">Arijit Singh, Chinmayi Sripada</div>`,
        poster: "images/8.jpeg"
    },
    {
        id: 9,
        songsName: `Gallan Goodiyaan <br>
        <div class="subtitle">Yashita Sharma, Manish Kumar Tipu, Farhan Akhtar, Shankar Mahadevan Sukhwinder Singh, ShankarEhsaanLoy</div>`,
        poster: "images/9.jpg"
    },
    {
        id: 10,
        songsName: `Kabhi Kabhi Aditi Zindagi<br>
        <div class="subtitle">Rashid Ali</div>`,
        poster: "images/10.jpeg"
    },
    {
        id: 11,
        songsName: `Make Some Noise For The Desi Boyz <br>
        <div class="subtitle">KK,Pritam</div>`,
        poster: "images/11.jpg"
    },
    {
        id: 12,
        songsName: `Badtameez Dill <br>
        <div class="subtitle">Benny Dayal & Shefali Alvaris</div>`,
        poster: "images/4.jpg"
    },
    {
        id: 13,
        songsName: `Senorita <br>
        <div class="subtitle">Farhan Akhtar</div>`,
        poster: "images/7.jpeg"
    },
    {
        id: 14,
        songsName: `The Nights<br>
        <div class="subtitle">Avicii</div>`,
        poster: "images/14.jpg"
    },
    {
        id: 15,
        songsName: `Aasma Ko Chhukar <br>
        <div class="subtitle">Daler Mehndi</div>`,
        poster: "images/15.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songsName;
})

// .forEach((e, i) => { ... }): This iterates over each element (e) in the array, along with its index (i).

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName('pop_song')[0];
let item = document.querySelector(".item");
let pop_art_left = document.getElementById("pop_art_left")
let pop_art_right = document.getElementById("pop_art_right")
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");
let title = document.getElementById("title");
let currentEnd = document.getElementById("end")
let currentStart = document.getElementById("start")
let seek = document.getElementById("seek")
let bar2 = document.getElementById("bar2")
let dot = document.getElementById("dot")
let vol = document.getElementById("vol")
let vol_icon = document.getElementById("vol_icon")
let vol_id = document.getElementById("vol_id");
let vol_bar = document.getElementById("vol_bar")
let back = document.getElementById("back")
let next = document.getElementById("next")
let download_music = document.getElementById("download_music")
let song_poster= document.getElementById("song_poster");

pop_song_right.addEventListener("click", () => {
    pop_song.scrollLeft = pop_song.scrollLeft + 301;
})

pop_song_left.addEventListener("click", () => {
    pop_song.scrollLeft = pop_song.scrollLeft - 301;
})

pop_art_right.addEventListener("click", () => {
    item.scrollLeft = item.scrollLeft + 150;
})

pop_art_left.addEventListener("click", () => {
    item.scrollLeft = item.scrollLeft - 150;
})

// song_poster.addEventListener("click", () => {
//     if (music.paused || music.currentTime <= 0) {
//         music.play();
//         wave.classList.add("active1");
//         song_poster.classList.remove("bi-play-circle-fill");
//         song_poster.classList.add("bi-pause-fill");
//     }
//     else {
//         music.pause();
//         wave.classList.remove("active1");
//         song_poster.classList.add("bi-play-circle-fill");
//         song_poster.classList.remove("bi-pause-fill");

//     }
// })



masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add("active1");
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
    }
    else {
        music.pause();
        wave.classList.remove("active1");
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");

    }
})

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (event) => {
        index = event.target.id;
        music.src = `songs/${index}.mp3`
        // poster_master_play.src=`images/${index}.jpeg`   //we can add img to masterplay 
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        
        
        download_music.href = `songs/${index}.mp3`

        let songTitle = songs.filter((a) => {
            return a.id == index;
            // create variable which stores array object by filtering "a.id==index"
        });
        songTitle.forEach((b => {
            let { songsName, poster } = b;
            title.innerHTML = songsName;         //we can add songname to masterplay 
            poster_master_play.src = poster;    //we can also add img to masterplay 
            download_music.setAttribute("download", songsName)
            // when the user clicks on the download button or link it triggered id -(download_music), the file specified by songsName will be downloaded with that name.
        }))
        makeallplays();
        event.target.classList.add("bi-pause-circle")
        event.target.classList.remove("bi-play-fill")
        // for curent music playing,it removes icon which added by makeallplays() fn & add special icon.  
    })
})

const makeallplays = () => {
    // it removes all previous icons and add new icon.
    Array.from(document.getElementsByClassName('playListPlay')).forEach((z) => {
        z.classList.remove("bi-play-circle-fill");
        z.classList.add("bi-play-fill");
        wave.classList.add("active1");
    })
}

// music.addEventListener("timeupdate",()=>{
//     let music_currentTime=music.currentTime;
//     let music_duration=music.duration;

//     let min1=Math.floor(music_duration / 60);
//     let sec1=Math.floor(music_duration % 60);

//     // if(sec1<10)
//     // {
//     //     sec1=`0${sec1}`;
//     // }

//     currentEnd.innerText=`${min1}:${sec1}`;
// })

music.addEventListener("timeupdate", () => {
    let music_currentTime = music.currentTime;
    let music_duration = music.duration;

    let min1 = Math.floor(music_currentTime / 60);
    let sec1 = Math.floor(music_currentTime % 60);

    // Format seconds to have leading zero if less than 10
    // sec1 = sec1 < 10 ? `0${sec1}` : sec1;
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentStart.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_duration / 60);
    let sec2 = Math.floor(music_duration % 60);

    // Format seconds to have leading zero if less than 10
    // sec2 = sec2 < 10 ? `0${sec2}` : sec2;
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentEnd.innerText = `${min2}:${sec2}`;

    let progressbar = parseInt((music_currentTime / music_duration) * 100);
    // gives % value, how much song is covered .
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`

});

seek.addEventListener("input", () => {
    // Calculate the duration of the audio file
    let music_duration = music.duration;

    // Set the current time of the audio based on the seek bar value
    music.currentTime = (seek.value * music_duration) / 100;
});

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.add('bi-volume-off-fill')

    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill')
        vol_icon.classList.add('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-off-fill')
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill')
        vol_icon.classList.remove('bi-volume-down-fill')
        vol_icon.classList.remove('bi-volume-off-fill')
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.width = `${vol_a}%`;
    music.volume = vol_a / 100;   //set music volume 
    

})

// it plays previous music.
back.addEventListener('click', () => {
    index = index - 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length
    }

    music.src = `songs/${index}.mp3`
    // poster_master_play.src=`images/${index}.jpeg`   //we can add img to masterplay 
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitle = songs.filter((a) => {
        return a.id == index;
        // create variable which stores array object by filtering "a.id==index"
    });
    songTitle.forEach((b => {
        let { songsName, poster } = b;
        title.innerHTML = songsName;         //we can add songname to masterplay 
        poster_master_play.src = poster;    //we can also add img to masterplay 
    }))
    makeallplays();
    event.target.classList.add("bi-pause-circle")
    event.target.classList.remove("bi-play-fill")
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `songs/${index}.mp3`
    // poster_master_play.src=`images/${index}.jpeg`   //we can add img to masterplay 
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitle = songs.filter((a) => {
        return a.id == index;
        // create variable which stores array object by filtering "a.id==index"
    });
    songTitle.forEach((b => {
        let { songsName, poster } = b;
        title.innerHTML = songsName;         //we can add songname to masterplay 
        poster_master_play.src = poster;    //we can also add img to masterplay 
    }))
    makeallplays();
    event.target.classList.add("bi-pause-circle")
    event.target.classList.remove("bi-play-fill")
})


//when music ends it starts with new songs.
music.addEventListener("ended", () => {
    index++;
    music.src = `songs/${index}.mp3`

    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitle = songs.filter((a) => {
        return a.id == index;

    });
    songTitle.forEach((b => {
        let { songsName, poster } = b;
        title.innerHTML = songsName;         //we can add songname to masterplay 
        poster_master_play.src = poster;    //we can also add img to masterplay 
    }))
    makeallplays();
    event.target.classList.add("bi-pause-circle")
    event.target.classList.remove("bi-play-fill")
})

//search
let search_result=document.getElementsByClassName("search_result")[0];
songs.forEach(element => {
    const {id,songsName,poster}=element;
    let card=document.createElement('a') 
    card.classList.add('cards')
    card.innerHTML=`
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songsName}
                                </div>
    `
    search_result.appendChild(card)
});

let input=document.getElementsByTagName("input")[0];
input.addEventListener("keyup",()=>{
    let input_value=input.value.toUpperCase();
    let items=search_result.getElementsByTagName("a"); 
    for (let index = 0; index < items.length; index++) {
        const as = items[index].getElementsByClassName("content")[0];
        let textvalue=as.textContent || as.innerHTML;

        if (textvalue.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display="flex";

        } else {
            items[index].style.display="none";
        }

        if (input_value == 0) {
            search_result.style.display="none"
        } else {
            search_result.style.display=""
        }
    }
})