let subPageLinks = document.querySelectorAll(".subPageLink");
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();

    subPageLinks.forEach((link) => {
        let linkText = link.querySelector(".linkLine");

        if (link.getAttribute("href") === currentPage) {
            if (linkText) linkText.innerText = "/";
        } else {
            link.addEventListener("mouseover", () => {
                if (linkText) linkText.innerText = "/";
            });
            link.addEventListener("mouseout", () => {
                if (linkText) linkText.innerText = "|";
            });
        }
    });
});

let events = [
    {
        title: "House Openning",
        date: "September 19, 2017",
        location: "HIZZ, Cairo",
        poster: "House Openning Poster.jpg"
    },
    {
        title: "Khaleet 001 / خليط ٠٠١",
        date: "December 14, 2017",
        location: "HIZZ, Cairo",
        poster: "KHALEET1.jpg"
    },
    {
        title: "Khaleet 002 / خليط ٠٠٢",
        date: "December 29, 2017",
        location: "HIZZ, Cairo",
        poster: "KHALEET2.jpg"
    },
    {
        title: "Khaleet 003 / خليط ٠٠٣",
        date: "January 13, 2018",
        location: "HIZZ, Cairo",
        poster: "KHALEET3.jpg"
    },
    {
        title: "Thursday Night Beat Down feat. R A G E H",
        date: "January 18, 2018",
        location: "HIZZ, Cairo",
        poster: "BEATDOWN.jpg"
    },
    {
        title: "Smash Beats / INSIN / RAMA",
        date: "January 15, 2018",
        location: "Cairo Jazz Club",
        poster: "insinramasmash.jpg"
    },
    {
        title: "Khaleet 004 / خليط ٠٠٤",
        date: "January 26, 2018",
        location: "Uncle Sam Pub, Amman",
        poster: "KHALEET4.jpg"
    },
    {
        title: "IV IV أربعة أربعة",
        date: "February 3, 2018",
        location: "HIZZ, Cairo",
        poster: "44.jpg"
    },
    {
        title: "Drummer B x ONSY x Bashar Suleiman",
        date: "March 14, 2018",
        location: "Zigzag, Cairo",
        poster: "Drummer B x ONSY x Bashar Suleiman.gif"
    },
    {
        title: "Khaleet 005 / خليط ٠٠٥",
        date: "April 25, 2018",
        location: "HIZZ, Cairo",
        poster: "khalet5.jpg"
    },
    {
        title: "Khaleet 006 / خليط ٠٠٦",
        date: "May 27, 2018",
        location: "Kiesling, Detroit",
        poster: "KHALEET6.jpg"
    },
    {
        title: "Livestream w Youssef Abouzeid X Bashar Suleiman X Torkhy",
        date: "July 20, 2018",
        location: "HIZZ, Cairo",
        poster: "Livestream.jpg"
    },
    {
        title: "INSIN - Livestream",
        date: "August 8, 2018",
        location: "HIZZ, Cairo",
        poster: "insinlive.jpg"
    },
    {
        title: "Youssef Abouzeid 'Captain Solo' Release Party",
        date: "August 29, 2018",
        location: "Bardo Clubhouse, Maadi",
        poster: "CAPTAIN SOLO RELEASE PARTY.jpg"
    },
    {
        title: "assembli X Hizz present Cairo Invasion",
        date: "November 16, 2018",
        location: "MENA Tyche Hotel, Amman",
        poster: "assembli X Hizz.gif"
    },
    {
        title: "Electronic Night with Youssef Abouzeid at Room",
        date: "January 19, 2019",
        location: "ROOM Art Space",
        poster: "YOUSSEF ABOUZEIDROOM.jpg"
    },
    {
        title: "Weight of the Heart :: Bana Kabalan",
        date: "March 21, 2019",
        location: "HIZZ, Cairo",
        poster: "Weight of the Heart  Bana Kabalan.jpg"
    },
    {
        title: "Shake and Destroy :: DJ Haram x Drummer B x Bashar Suleiman",
        date: "March 28, 2019",
        location: "Unicorn Garden, Cairo",
        poster: "Shake and Destroy  DJ Haram x Drummer B x Bashar Suleiman.jpg"
    },
    {
        title: "Record Store Day OPEN HOUSE",
        date: "April 13, 2019",
        location: "HIZZ, Cairo",
        poster: "Record Store Day OPEN HOUSE.jpg"
    },
    {
        title: "Open House",
        date: "July 27, 2019",
        location: "HIZZ, Cairo",
        poster: "Open House.jpg"
    },
    {
        title: "Kafr El-Dauwar Records X HIZZ (Open House)",
        date: "August 10, 2019",
        location: "HIZZ, Cairo",
        poster: "hizz open house.jpg"
    },
    {
        title: "J!N Album Release",
        date: "September 14, 2019",
        location: "HIZZ, Cairo",
        poster: "jin.jpg"
    },
    {
        title: "Ya Khal Album Release",
        date: "October 17, 2019",
        location: "HIZZ, Cairo",
        poster: "Kafr El-Dauwar Records.jpg"
    },
    {
        title: "Fuzzylittlebrain Album Release",
        date: "November 15, 2019",
        location: "HIZZ, Cairo",
        poster: "fuzzylittlebrain.jpg"
    },
    {
        title: "HIZZ Detroit Black Friday Grand Opening",
        date: "November 29, 2019",
        location: "HIZZ, Cairo",
        poster: "HIZZ Detroit Black Friday Grand Opening.jpg"
    },
    {
        title: "JessicaSligter + OwenGardner LIVE",
        date: "November 29, 2019",
        location: "HIZZ, Cairo",
        poster: "JessicaSligter + OwenGardner LIVE.jpg"
    },
    {
        title: "TAKH Album Release",
        date: "December 5, 2019",
        location: "HIZZ, Cairo",
        poster: "takh.jpg"
    },
    {
        title: "Slovvdk سلوديكاي",
        date: "December 13, 2019",
        location: "HIZZ, Cairo",
        poster: "slovvdk.jpg"
    },
    {
        title: "MauriceLouca + MaxtonFort",
        date: "January 10, 2020",
        location: "HIZZ, Cairo",
        poster: "MAURICEMAXTON.jpg"
    },
    {
        title: "amélie legrand ft Alan Bishop + mmmalak",
        date: "January 10, 2020",
        location: "HIZZ, Cairo",
        poster: "amélie legrand.jpg"
    },
    {
        title: "FredericOberland + GregoryDargent + guests",
        date: "January 16, 2020",
        location: "HIZZ, Cairo",
        poster: "FREDERIC.jpg"
    },
    {
        title: "TURQUOISE DESERT RESEARCH PROGRAMME PRESENTATIONS + AFTERPARTY",
        date: "January 20, 2020",
        location: "HIZZ, Cairo",
        poster: "TURQUOISE DESERT RESEARCH PROGRAMME PRESENTATIONS + AFTERPARTY.jpg"
    },
    {
        title: "Juliana Huxtable X Nadah El Shazly X KZLK",
        date: "January 21, 2020",
        location: "HIZZ, Cairo",
        poster: "JULIANAHUXTABLE-NADAHELSHAZLY-KZLK.jpg"
    },
    {
        title: "Kid Fourteen + Prof.k",
        date: "January 24, 2020",
        location: "HIZZ, Cairo",
        poster: "KID FOURTEEN.jpg"
    },
    {
        title: "الشُك",
        date: "February 15, 2020",
        location: "HIZZ, Cairo",
        poster: "shk.jpg"
    },
    {
        title: "hizz party",
        date: "February 25, 2022",
        location: "Maadi, Cairo",
        poster: "hizz party.jpg"
    },
    {
        title: "Abosahar at CJC",
        date: "July 20, 2024",
        location: "Cairo Jazz Club",
        poster: "turbo.jpg"
    },
    {
        title: "HIZZ Tour: Yverdon",
        date: "August 10, 2024",
        location: "Festival Le Castrum, Yverdon, Switzerland",
        poster: "turbo.jpg"
    },
    {
        title: "HIZZ Tour: Montpellier",
        date: "August 12, 2024",
        location: "Montpellier, France",
        poster: "turbo.jpg"
    },
    {
        title: "HIZZ Tour: Toulouse",
        date: "August 13, 2024",
        location: "Troisième Loutre, Toulouse",
        poster: "turbo.jpg"
    },
    {
        title: "HIZZ Tour: Pau",
        date: "August 14, 2024",
        location: "Galaxie 23 x Live, Pau, France",
        poster: "turbo.jpg"
    },
    {
        title: "HIZZ Tour: Geneva",
        date: "August 16, 2024",
        location: "Théâtre de l’Orangerie, Geneva, Switzerland",
        poster: "turbo.jpg"
    },
    {
        title: "Abosahar at Chilloposite Festival",
        date: "October 5, 2024",
        location: "Dahab, EG",
        poster: "chill.jpg"
    },
    {
        title: "HIZZ Tour: Radicalisms Festival",
        date: "October 11, 2024",
        location: "Rotterdam, Netherlands",
        poster: "oct24.jpg"
    },
    {
        title: "HIZZ Tour: La Chaux d’Ouvron",
        date: "October 13, 2024",
        location: "Geneva, Switzerland",
        poster: "oct24.jpg"
    },
    {
        title: "HIZZ Tour: Bar Rouine",
        date: "October 17, 2024",
        location: "Geneva, Switzerland",
        poster: "oct24.jpg"
    },
    {
        title: "HIZZ Tour: Sonic Lyon",
        date: "October 18, 2024",
        location: "Lyon, France",
        poster: "oct24.jpg"
    },
    {
        title: "HIZZ Tour: Garage Noord",
        date: "October 19, 2024",
        location: "Amsterdam, Netherlands",
        poster: "oct24.jpg"
    }
];
function reformatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

let eventsContiner = document.querySelector(".events");
if (eventsContiner) {
    events.forEach((event, index) => {
        event.id = index + 1
        event.date = reformatDate(event.date);
    })
    events = events.reverse()

    let eventsHTML = ``;
    events.forEach((event, index) => {
        eventsHTML += `
    <div class="event" id="event${event.id}" data-id="${event.id}">
        <span class="eventDate">${event.date}</span>
        <span class="eventTitle">${event.title}</span>
        <span class="eventLocation">${event.location}</span>
    </div>`
    })
    eventsContiner.innerHTML += eventsHTML

    let eventElements = document.querySelectorAll(".event");
    let posterElement = document.querySelector("#poster");

    document.addEventListener("mousemove", (event) => {
        posterElement.style.left = `${event.clientX + 10}px`;

        let posterHeight = parseFloat(window.getComputedStyle(posterElement).height);
        if (event.clientY > window.innerHeight * 0.5) {
            posterElement.style.top = `${event.clientY - posterHeight}px`;
        } else {
            posterElement.style.top = `${event.clientY + 10}px`;
        }
    });

    eventElements.forEach(eventElement => {
        eventElement.addEventListener("mouseover", () => {
            let eventId = eventElement.dataset.id;
            let selectedEvent = events.find(event => event.id === Number(eventId));
            if (selectedEvent) {
                posterElement.src = '/assets/imgs/eventcovers/' + selectedEvent.poster;
                posterElement.style.visibility = "visible";
            }
        });

        eventElement.addEventListener("mouseleave", () => {
            posterElement.style.visibility = "hidden";
        });

        eventElement.addEventListener("touchmove", (e) => {
            const touch = e.touches[0];
            const touchedElement = document.elementFromPoint(touch.clientX, touch.clientY);

            if (touchedElement && touchedElement.classList.contains('event-item')) {
                let eventId = touchedElement.dataset.id;
                let selectedEvent = events.find(event => event.id === Number(eventId));

                if (selectedEvent) {
                    posterElement.src = '/assets/imgs/eventcovers/' + selectedEvent.poster;
                    posterElement.style.visibility = "visible";
                }
            }
        });

        eventElement.addEventListener("touchend", () => {
            posterElement.style.visibility = "hidden";
        });
    });
}


// albums // albums // albums // albums
let albumsArray = [
    {
        id: 1,
        title: "Inside the Blue",
        artist: "RAGEH",
        link: "https://hizzme.bandcamp.com/album/inside-the-blue"
    },
    {
        id: 2,
        title: "Shway Trooby",
        artist: "ABOsahar",
        link: "https://hizzme.bandcamp.com/album/shway-trooby"
    },
    {
        id: 3,
        title: "Pink Tape",
        artist: "Bashar Suliman X Drummer B",
        link: "https://hizzme.bandcamp.com/album/pink-tape"
    },
    {
        id: 4,
        title: "captain solo",
        artist: "youssef abouzeid",
        link: "https://hizzme.bandcamp.com/album/captain-solo"
    },
    {
        id: 5,
        title: "Throwbacks",
        artist: "Bashar Suleiman",
        link: "https://hizzme.bandcamp.com/album/throwbacks"
    },
    {
        id: 6,
        title: "KOMBILE 001",
        artist: "HIZZ",
        link: "https://hizzme.bandcamp.com/album/kombile-001"
    },
    {
        id: 7,
        title: "LSTEFA",
        artist: "KZLK",
        link: "https://hizzme.bandcamp.com/album/lstefa"
    },
    {
        id: 8,
        title: "mmkn as3dk l2 mrci",
        artist: "YK",
        link: "https://soundcloud.com/hizzme/sets/mmkn-as3dk-l2-mrci"
    },
    {
        id: 9,
        title: "SADSUN",
        artist: "INSIN",
        link: "https://hizzme.bandcamp.com/album/sadsun"
    },
    {
        id: 10,
        title: "∞σ",
        artist: "DG Hadi",
        link: "https://hizzme.bandcamp.com/album/-"
    },
    {
        id: 11,
        title: "b7bk ysta",
        artist: "YK",
        link: "https://soundcloud.com/hizzme/sets/yk-b7bk-ysta"
    },
    {
        id: 12,
        title: "The Caveman",
        artist: "ABOsahar",
        link: "https://hizzme.bandcamp.com/album/the-caveman"
    },
    {
        id: 13,
        title: "pink stm & wite ptl",
        artist: "J!N",
        link: "https://hizzme.bandcamp.com/album/pink-stm-wite-ptl-2"
    },
    {
        id: 14,
        title: "KOMBILE 002",
        artist: "HIZZ",
        link: "https://hizzme.bandcamp.com/album/kombile-002"
    },
    {
        id: 15,
        title: "fuzzylittlebrain",
        artist: "fuzzylittlebrain",
        link: "https://hizzme.bandcamp.com/album/fuzzylittlebrain"
    },
    {
        id: 16,
        title: "aho",
        artist: "youssef abouzeid",
        link: "https://hizzme.bandcamp.com/album/aho"
    },
    {
        id: 17,
        title: "Foreigner",
        artist: "JIN",
        link: "https://hizzme.bandcamp.com/album/foreigner"
    },
    {
        id: 18,
        title: "Attraction",
        artist: "DAHB",
        link: "https://hizzme.bandcamp.com/album/attraction"
    },
    {
        id: 19,
        title: "Anterior",
        artist: "Timmy Mowafi",
        link: "https://hizzme.bandcamp.com/album/anterior"
    },
    {
        id: 20,
        title: "BAD SECTOR",
        artist: "[machine.condition]",
        link: "https://hizzme.bandcamp.com/album/bad-sector"
    },
    {
        id: 21,
        title: "Entity",
        artist: "Gast",
        link: "https://hizzme.bandcamp.com/album/entity"
    },
    {
        id: 22,
        title: "Shuttle Juice",
        artist: "Hebatallah",
        link: "https://hizzme.bandcamp.com/album/shuttle-juice"
    },
    {
        id: 23,
        title: "Ma2ali",
        artist: "ARRAKK",
        link: "https://hizzme.bandcamp.com/album/ma2ali"
    },
    {
        id: 24,
        title: "many sins, mini synths",
        artist: "Centum/ˈsɛntəm/",
        link: "https://hizzme.bandcamp.com/album/many-sins-mini-synths"
    },
    {
        id: 25,
        title: "Mechanical Love",
        artist: "J!N",
        link: "https://hizzme.bandcamp.com/album/mechanical-love"
    },
    {
        id: 26,
        title: "Electric*té Du Liban",
        artist: "Baytee Baytak",
        link: "https://hizzme.bandcamp.com/album/electric-t-du-liban"
    },
    {
        id: 27,
        title: "MoultingKICK_23652",
        artist: "Centum/ˈsɛntəm/",
        link: "https://hizzme.bandcamp.com/album/moultingkick-23652"
    },
    {
        id: 28,
        title: "KOMBILE 003",
        artist: "HIZZ",
        link: "https://hizzme.bandcamp.com/album/kombile-003"
    },
    {
        id: 29,
        title: "تلاته",
        artist: "Lotfy",
        link: "https://hizzme.bandcamp.com/album/--2"
    },
    {
        id: 30,
        title: "bb",
        artist: "DG Hadi",
        link: "https://hizzme.bandcamp.com/album/bb"
    },
    {
        id: 31,
        title: "TassTooz",
        artist: "Baytee Baytak",
        link: "https://hizzme.bandcamp.com/album/tasstooz"
    },
    {
        id: 32,
        title: "باندا",
        artist: "سته ستميه باند",
        link: "https://hizzme.bandcamp.com/album/--4"
    },
    {
        id: 33,
        title: "Egram",
        artist: "Eyad",
        link: "https://heatcrimes.bandcamp.com/album/egram"
    },
    {
        id: 34,
        title: "rhlt jdi",
        artist: "Elkotsh",
        link: "https://heatcrimes.bandcamp.com/album/rhlt-jdi"
    },
];

let albums = albumsArray.reverse()

let albumsContiner = document.querySelector(".albums");
let albumsScroll;

function startAutoScroll() {
    albumsScroll = setInterval(() => {
        albumsContiner.scrollLeft += 1.1;
        if (albumsContiner.scrollLeft >= albumsContiner.scrollWidth - albumsContiner.clientWidth) {
            clearInterval(albumsScroll);
            albumsScroll = null;
            albumsContiner.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    }, 30);
}


if (albumsContiner) {
    let albumsHTML = ``;
    albums.forEach(album => {
        albumsHTML += `
                    <a class="album" id="album${album.id}" href="${album.link}" target="_blank">
                        <img src="assets/imgs/albumcovers/${album.title}.webp" alt="${album.title} cover">
                        <div class="albumInfo">
                        <span class="albumTitle">${album.title}</span>
                        <span class="albumArtist">${album.artist}</span>
                        </div>
                        </a>`
    })
    albumsContiner.innerHTML = albumsHTML

    albumsContiner.addEventListener("scroll", function () {
        if (albumsContiner.scrollLeft === 0 && albumsScroll === null) {
            setTimeout(startAutoScroll, 300);
        }
    });

    const minBreakpoint = 768;
    const contentWidth = document.body.scrollWidth;
    const viewportWidth = window.innerWidth;

    const isWideEnough = viewportWidth > minBreakpoint;
    const noHorizontalOverflow = contentWidth <= viewportWidth;

    if (isWideEnough && noHorizontalOverflow) {
        startAutoScroll();
    }
}


// gallery // gallery // gallery // gallery 
let galleryContiner = document.querySelector(".gallery");
if (galleryContiner) {
    for (let index = 0; index < 68; index++) {
        let img = document.createElement("img");
        img.src = `/assets/imgs/photos/hizzGlry${index + 1}.jpg`;
        img.loading = "lazy";
        img.style.width = "70vw";
        galleryContiner.appendChild(img);
    }
}


// residency  // residency  // residency

let residentsOG = [
    { name: "Abdullah Miniawy", year: "2017", work: "https://soundcloud.com/abdullahmadm/sets/an-overview-of-ihsan-means" },
    { name: "Youssef Abouzeid", year: "2018-2019", work: "https://hizzme.bandcamp.com/album/captain-solo" },
    { name: "Bashar Suleiman", year: "2018", work: "/BasharSuleiman" },
    { name: "Abo Sahar", year: "2018-2019", work: "https://hizzme.bandcamp.com/album/the-caveman" },
    { name: "Drummer B", year: "2018", work: "/DrummerB" },
    { name: "Insin", year: "2018", work: "https://hizzme.bandcamp.com/album/sadsun" },
    { name: "Bana Kabalan", year: "2019", work: "https://www.facebook.com/events/783780695327694" },
]
let residents = residentsOG.reverse()

let residencyContiner = document.querySelector(".residencyContent");

if (residencyContiner) {
    let residencyHTML = '';
    residents.forEach(resident => {
        residencyHTML += `
                        <a class="resident" href="../residency/${resident.work}">
                            <img src="/assets/imgs/residency/${resident.name.replace(/\s+/g, '')}/cardIMG.jpg" alt="photo of ${resident.name}">
                            <div class="residentInfo">
                                <span>${resident.name}</span>
                                <span>${resident.year}</span>
                            </div>
                        </a>`
    })
    residencyContiner.innerHTML += residencyHTML;
}













































































// let logoDiv = document.querySelector(".logo")
// let logoHandle = document.getElementById("logo-handle")
// console.log(logoDiv);
// console.log(logoHandle);


// let isDragging = false;
// let offsetX, offsetY;

// logoHandle.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     const rect = logoDiv.getBoundingClientRect();
//     offsetX = e.clientX - rect.left;
//     offsetY = e.clientY - rect.top;
// });

// document.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//         logoDiv.style.left = (e.clientX - offsetX) + 'px';
//         logoDiv.style.top = (e.clientY - offsetY) + 'px';
//     }
// });

// document.addEventListener('mouseup', () => {
//     isDragging = false;
// });


// let testImg = document.getElementById("test");
// testImg.addEventListener("mouseenter", () => {
//     testImg.src = "/assets/imgs/residency/BasharSuleiman/main2.png"
// })
// testImg.addEventListener("mouseleave", () => {
//     testImg.src = "/assets/imgs/residency/BasharSuleiman/main1.png"
// })
