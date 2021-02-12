const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{

name: "1",
title: "52 Gaj Ka Daman",
artist: "Renuka Panwar",
},
{

    name: "2",
    title: "Can't take my eyes off you",
    artist: "Craymer",
    },
    {

        name: "3",
        title: "Love Your Voice",
        artist: "Jony",
        },
        {

            name: "4",
            title: "Bird-Machine",
            artist: "DJ Snake",
            },
            {

                name: "5",
                title: "Albatraoz",
                artist: "AronChupa",
                },
                {

                    name: "6",
                    title: "Dancin'Krono",
                    artist: "Aaron Smith",
                    },
                    {

                        name: "7",
                        title: "Bad Karma",
                        artist: "Axel Thesleff",
                        },
                        {

                            name: "8",
                            title: "Cybperpunk-Hyper",
                            artist: "Disappointed",
                            },
                            {

                                name: "9",
                                title: "Devil Eyes",
                                artist: "Hippie Sabotage",
                                },
                                {

                                    name: "10",
                                    title: "Play Date",
                                    artist: "Melanie Martinez",
                                    },
                                    {

                                        name: "11",
                                        title: "Afterhours",
                                        artist: "TroyBoi",
                                        },


];

let isPlaying = false;


// for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play" , "fa-pause");
    img.classList.add("anime");
};


// for pause function
const pauseMusic =  () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause" , "fa-play");
    img.classList.remove("anime");
    
};

play.addEventListener('click' , () => {

    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});


// changing the music data

const loadSong = (songs) => {

    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";


};

//loadSong(songs[2]);

songIndex = 0;
const nextSong = () => {

    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();


};

const prevSong = () => {

    songIndex = (songIndex - 1  + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();


};

next.addEventListener('click' , nextSong);
prev.addEventListener('click' , prevSong);










