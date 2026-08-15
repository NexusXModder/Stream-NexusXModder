const channelsData = [
    { name: "CAZE TV", logo: "https://images.seeklogo.com/logo-png/61/1/cazetv-logo-png_seeklogo-619708.png", url: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8", group: "Sports", desc: "Premier sports broadcasting network providing live coverage of global athletic events, matches, and specialized sports commentary." },
    { name: "CAZE TV (1080p)", logo: "https://images.seeklogo.com/logo-png/61/1/cazetv-logo-png_seeklogo-619708.png", url: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/1080p-vtt/index.m3u8", group: "Sports", desc: "Ultra high-definition crisp feed of Caze TV optimized for fast-paced sporting events with smooth 60 FPS delivery." },
    { name: "Goal TV", logo: "https://media.unreel.me/prod/freelivesports/logo/3b9ff291-5825-4cd3-b8f0-5d03a3f1e3c1", url: "https://streams2.sofast.tv/sofastplayout/WiseM3U8_1/master.m3u8", group: "Sports", desc: "Dedicated football and global sports channel covering live leagues, expert analysis, and tournament highlights." },
    { name: "DD Sports", logo: "https://s3.aynaott.com/storage/188500190395c4de0e506d518925dcc4", url: "https://cdn-6.pishow.tv/live/13/master.m3u8", group: "Sports", desc: "Public sports broadcaster delivering national and international sporting tournaments, cricket, and athletic championships." },
    { name: "KTV Sport Plus", logo: "https://s3.aynaott.com/storage/b54495ee3cdd53ddaa19d1f98120f488", url: "https://kwtsplta.cdn.mangomolo.com/spl/smil:spl.stream.smil/chunklist.m3u8", group: "Sports", desc: "Exclusive regional and international sports channel featuring live arena events and championship coverages." },
    { name: "Oman Sports TV", logo: "https://s3.aynaott.com/storage/33f87783637fc95fdb8837ba9344c9e9", url: "https://partneta.cdn.mgmlcdn.com/omsport/smil:omsport.stream.smil/chunklist.m3u8", group: "Sports", desc: "State sports channel broadcasting regional championships, football leagues, and cultural sporting events." },
    { name: "Bleav Football", logo: "https://a.jsrdn.com/hls/23091/bleav-football/logo_20231219_184637_64.png", url: "https://linear-493.frequency.stream/dist/glewedtv/493/hls/master/playlist.m3u8", group: "Sports", desc: "Deep-dive football network covering professional soccer insights, match breakdowns, and player analytics." },
    { name: "NBC Sports", logo: "https://s3.aynaott.com/storage/0a241a80bf51d2c3b3722531706ce086", url: "https://xumo-xumoent-vc-122-sjv70.fast.nbcuni.com/live/master.m3u8", group: "Sports", desc: "World-renowned American sports network featuring major league events, live commentary, and premium sports programs." },
    { name: "speed sports 1", logo: "https://s3.aynaott.com/storage/06f5b193bfa4d31310ee934eb3c2222e", url: "https://linear-599.frequency.stream/dist/stirr/599/hls/master/playlist.m3u8", group: "Sports", desc: "High-octane racing and action-packed extreme sports channel bringing high speed competitions straight to screen." },
    { name: "Bahrain Sports 1", logo: "https://s3.aynaott.com/storage/f55bea3263be1af187fe1122e4f44142", url: "https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8", group: "Sports", desc: "Official Bahrain sports feed broadcasting national football tournaments, handball, and regional cups." },
    { name: "MORE THEN SPORTS TV", logo: "https://s3.aynaott.com/storage/39174e32d4f8d29a95c881637fe1ecdb", url: "https://mts1.iptv-playoutcenter.de/mts/mts-web/playlist.m3u8", group: "Sports", desc: "Multi-discipline sports network offering action sports, combat sports, and international athletic showcases." },
    { name: "SPORTS FIRST TV", logo: "https://s3.aynaott.com/storage/748d28752dcf95740561f1ac39e15fc3", url: "https://d4ddgdmj1cvnm.cloudfront.net/scheduler/scheduleMaster/409.m3u8", group: "Sports", desc: "Round-the-clock sports programming focusing on global athletic events and live match transmissions." },
    { name: "Xtrem Sports", logo: "https://s3.aynaott.com/storage/e1749cf3040f11c63e722c941f213927", url: "https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/e0b81a5c-6ab5-48cd-aaa9-f82de4ab5bf9/manifest.m3u8", group: "Sports", desc: "Action-packed channel featuring extreme sports, adrenaline-pumping stunts, and adventure sports coverage." },
    { name: "WOF 1", logo: "https://s3.aynaott.com/storage/1a580ee2636a0c4761e623bc131ba7a6", url: "https://mainstreammedia-worldoffreesportsintl-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-mainstreammediafreesportsintl-rakuten/CDN/master.m3u8", group: "Sports", desc: "World of Free Sports network bringing niche sports, outdoor adventures, and international competitions." },
    { name: "Fox Cricket 501", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Fox_Cricket_Logo.png", url: "http://y3fqd48g.megatv.fun/iptv/NRLXRWSBWBPLN4/19146/index.m3u8", group: "Sports", desc: "Dedicated 24/7 cricket channel featuring live test matches, ODIs, T20s, and expert pitch analysis." },
    { name: "MTRSPT1", logo: "https://a.jsrdn.com/hls/23099/mtrspt1/logo_20250122_232635_70.png", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg02873-kravemedia-mtrspt1-distrotv/playlist.m3u8", group: "Sports", desc: "Motorsports television network covering auto racing, superbike championships, and rally sports." },
    { name: "UFC TV", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpk7qcLQpJwBYzXGY25LdrndzWRDs3tgwp5rY0W-pkxJQ9UVDcWvE88Ng6AGWlHpHNhjQrb28lJ2r4V_BW1fVkLySo3sB1nzTwt_LuRQ9cYGim_FInDnyZWBuULFUFI_Vr9YdIpTs7KvDsVb0CEy_XYJCmUXB4Jpo1uPnXTjh09EqP_sJLqgb6Dwf1uA/s1080/1000060530.png", url: "https://linear-893.frequency.stream/mt/plex/893/hls/master/playlist_640x360.m3u8", group: "Sports", desc: "Ultimate Fighting Championship feed featuring mixed martial arts, weigh-ins, fighter profiles, and classic bouts." },
    { name: "Redbull TV", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I_gjgaJYlqDQGjAj96xh8S-5GZe_CZQK3w&usqp=CAU", url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8", group: "Sports", desc: "Global entertainment and sports channel featuring breathtaking extreme sports, music festivals, and cultural events." },
    { name: "Alkass One (1080p)", logo: "https://i.imgur.com/10mmlha.png", url: "https://liveeu-gcp.alkassdigital.net/alkass1-p/main.m3u8", group: "Sports", desc: "Premium Middle-Eastern sports channel broadcasting premier football leagues, tournaments, and studio shows in full HD." },
    { name: "beIN SPORTS XTRA (1080p)", logo: "https://i.ibb.co/HT49GPmB/XTRA-2.png", url: "https://bein-xtra-bein.amagi.tv/playlist.m3u8", group: "Sports", desc: "Global sports network offering world-class soccer matches, tournament analysis, and international sports news." },
    { name: "FIFA+ (720p)", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/FIFA%2B_(2025).svg/960px-FIFA%2B_(2025).svg.png", url: "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1_FJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8", group: "Sports", desc: "Official FIFA streaming home for archive matches, live youth tournaments, documentaries, and global football stories." },

    // --- Bangla Section ---
    { name: "TV9 Bangla", logo: "https://images.tv9bangla.com/wp-content/themes/tv9bangla/images/tv9-bangla-logo.svg", url: "https://dyjmyiv3bp2ez.cloudfront.net/pub-iotv9banaen8yq/liveabr/playlist.m3u8", group: "Bangla", desc: "Popular Bengali news and current affairs channel delivering fast-paced updates, investigative reports, and talk shows." },
    { name: "R Plus News", logo: "https://rplus.in/wp-content/uploads/2025/06/RPLUS_NEWS.png", url: "https://thelegitpro.in/pntv/rplusnews24x7/index.m3u8", group: "Bangla", desc: "24-hour Bengali news channel keeping viewers informed with local reports, cultural segments, and breaking news." },
    { name: "News 24", logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/News%2024.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8", group: "Bangla", desc: "Leading Bangladeshi satellite news channel known for unbiased journalism, live reports, and insightful discussions." },
    { name: "SOMOY NEWS", logo: "https://static.wikia.nocookie.net/logopedia/images/8/8e/Somoy_Television.svg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8", group: "Bangla", desc: "Top-rated 24/7 Bengali news network delivering minute-by-minute updates across politics, economy, and sports." },
    { name: "Jamuna TV", logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Jamuna%20TV.jpeg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8", group: "Bangla", desc: "Dynamic news broadcaster focusing on investigative journalism, live ground reporting, and social issues." },
    { name: "Channel 24", logo: "https://yt3.googleusercontent.com/8Q8MCd6ypr2Hzbp60VE_stJPl063kQYfeTxdIQkAXRfhdzxByLl0sJYHsk43uTM4W_cOzwcbPQ=s160-c-k-c0x00ffffff-no-rj", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8", group: "Bangla", desc: "Prominent entertainment and news channel featuring popular talk shows, bulletins, and cultural programs." },
    { name: "ATN News", logo: "https://static.wikia.nocookie.net/etv-gspn-bangla/images/4/4d/ATN_News_HD.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8", group: "Bangla", desc: "First 24-hour news channel in Bangladesh providing comprehensive national and international news coverage." },
    { name: "Independent Television", logo: "https://static.wikia.nocookie.net/etv-gspn-bangla/images/b/bb/Independent_logo_2011.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8", group: "Bangla", desc: "Modern news platform famous for tech shows, sports updates, corporate news, and accurate reporting." },
    { name: "Zee 24 Ghanta", logo: "https://static.wikia.nocookie.net/logopedia/images/b/bc/Zee_24_Ghanta_2025_Logo_2025.png", url: "https://d2dsoyvkr33m05.cloudfront.net/index_1.m3u8", group: "Bangla", desc: "Leading regional news channel from West Bengal reporting on political developments, local events, and culture." },
    { name: "News18 Bangla", logo: "https://static.wikia.nocookie.net/logopedia/images/8/85/News18_Bangla1.svg/", url: "https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/ts-eu-w1-n2/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8", group: "Bangla", desc: "Trusted Bengali news channel bringing crisp headlines, debates, and deep analysis of daily news." },
    { name: "ABP Ananda", logo: "https://static.wikia.nocookie.net/logopedia/images/a/a2/Abp-ananda.png", url: "https://amg01448-samsungin-abpananda-samsungin-ad-pw.amagi.tv/playlist/amg01448-samsungin-abpananda-samsungin/playlist.m3u8", group: "Bangla", desc: "Premier Bengali news network renowned for fearless journalism, cultural insights, and fast news updates." },
    { name: "BTV HD", logo: "https://static.wikia.nocookie.net/logopedia/images/1/12/BTV_HD_Logo.svg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8", group: "Bangla", desc: "Bangladesh Television state broadcaster transmitting national heritage programs, dramas, and official news." },
    { name: "DEEPTO TV HD", logo: "https://jcwsw2vt33.gpcdn.net/uploads/images/2022/07/25/logos_1384ea456744d5914ba331fa72df78c8_goplay_deepto_logo_final_white.svg", url: "https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8", group: "Bangla", desc: "Leading entertainment channel offering high-quality mega serials, dubbed cartoons, movies, and reality shows." },

    // --- Premium / Extra Feeds Section ---
    { name: "ICC TV FHD", logo: "", url: "https://live-d-01-icc-we.akamaized.net/variant/v1blackout/vcg-01-d/DASH_DASH/Live/channel(vcg-01-ch-hd-02)/hdntl=exp=1783702529~acl=%2fvariant%2fv1blackout%2fvcg-01-d%2f*~data=hdntl~hmac=41341b330805b9c5a1cb484abbf27034c64edf771e4349ca37bfecb54f4a1792/manifest.mpd", group: "Premium", desc: "Official International Cricket Council high-definition feed featuring global World Cup tournaments and cricket fixtures." },
    { name: "WILLOW FHD", logo: "https://s21.q4cdn.com/819998841/files/doc_news/2024/May/Willow-logo-transparent-cb.png", url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/orxueyvu1q/out/v1/4f512a0c1bf2470c875bf8b26b563c80/cenc.mpd", group: "Premium", desc: "Premier 24/7 dedicated cricket broadcaster streaming international series, T20 leagues, and exclusive matches in FHD." },
    { name: "SKY CRICKET FHD", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqp1Plsy44x_6pIyvUttdbXc5LMugRMGfldjYKQbI9X_X7txzS2d7WPph", url: "https://bl.rutube.ru/livestream/7c13a51576b9ff2601f08f5d57dd5169/index.m3u8?s=uiXES2ePt7xTpQnbJxn7Dg&e=2074684474&scheme=https", group: "Premium", desc: "Elite cricket channel offering expert punditry, live test matches, county cricket, and ball-by-ball analysis." },
    { name: "TSN SPORTS FHD", logo: "https://www.bellmedia.ca/lede/wp-content/uploads/2024/09/18581592_10155403529061055_8240563011649656197_n.jpg", url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd",group: "Premium", desc: "The Sports Network high-definition stream delivering premier hockey, football, basketball, and racing coverages." },
    { name: "Fox Sports Premium", logo: "https://images.seeklogo.com/logo-png/28/1/fox-sports-logo-png_seeklogo-284763.png", url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/fdx74zqzhu/out/v1/7d7a8c6981a842b98a683e9fbfe51d17/cenc.mpd", group: "Premium", desc: "Top-tier premium sports network providing multi-sport coverage including major league championships and racing." },
    { name: "TSports BDIX", logo: "", url: "http://103.165.93.31:8095/tsports/video.m3u8", group: "Premium", desc: "Bangladesh's premier satellite sports channel utilizing high-speed BDIX routing for buffer-free live sports viewing." },
    { name: "SomoyTV BDIX", logo: "", url: "http://103.165.93.31:8095/somoyTv/index.m3u8", group: "Premium", desc: "High-speed BDIX optimized feed of Somoy TV ensuring instant loading and uninterrupted news streaming." }
];

const grid = document.getElementById('channelsGrid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('playerModal');
const videoPlayer = document.getElementById('videoPlayer');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');
const tabBtns = document.querySelectorAll('.tab-btn');
const swapperScroll = document.getElementById('swapperScroll');
const infoChannelName = document.getElementById('infoChannelName');
const infoChannelDesc = document.getElementById('infoChannelDesc');
const netSpeedEl = document.getElementById('netSpeed');
const resBadgeEl = document.getElementById('resBadge');

let currentHls = null;

function renderChannels(channels) {
    grid.innerHTML = '';
    if (channels.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No channels found!</p>`;
        return;
    }

    channels.forEach(channel => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        const logoUrl = channel.logo && channel.logo.trim() !== "" ? channel.logo : 'https://cdn-icons-png.flaticon.com/512/3334/3334886.png';

        card.innerHTML = `
            <img src="${logoUrl}" alt="${channel.name}" class="channel-logo" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3334/3334886.png'">
            <h4 class="channel-name">${channel.name}</h4>
            <span class="channel-group">${channel.group || 'Live'}</span>
        `;

        card.addEventListener('click', () => playChannel(channel));
        grid.appendChild(card);
    });
}

function renderQuickSwapper() {
    swapperScroll.innerHTML = '';
    channelsData.forEach(channel => {
        const mini = document.createElement('div');
        mini.className = 'mini-card';
        const logoUrl = channel.logo && channel.logo.trim() !== "" ? channel.logo : 'https://cdn-icons-png.flaticon.com/512/3334/3334886.png';
        
        mini.innerHTML = `
            <img src="${logoUrl}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3334/3334886.png'">
            <span>${channel.name}</span>
        `;
        mini.addEventListener('click', () => playChannel(channel));
        swapperScroll.appendChild(mini);
    });
}

function playChannel(channel) {
    modalTitle.innerText = channel.name;
    infoChannelName.innerText = channel.name;
    infoChannelDesc.innerText = channel.desc || "High definition broadcast stream with global server balancing.";
    
    // Dynamic simulated telemetry metrics
    const randomSpeed = (Math.random() * (6.5 - 2.8) + 2.8).toFixed(1) + " MB/s";
    netSpeedEl.innerText = randomSpeed;
    resBadgeEl.innerText = channel.name.includes("1080p") || channel.name.includes("FHD") ? "1080p FHD" : "720p HD";

    modal.style.display = 'flex';

    if (currentHls) {
        currentHls.destroy();
        currentHls = null;
    }

    if (channel.url.endsWith('.m3u8')) {
        if (Hls.isSupported()) {
            currentHls = new Hls();
            currentHls.loadSource(channel.url);
            currentHls.attachMedia(videoPlayer);
            currentHls.on(Hls.Events.MANIFEST_PARSED, () => {
                videoPlayer.play();
            });
        } else if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            videoPlayer.src = channel.url;
            videoPlayer.addEventListener('loadedmetadata', () => {
                videoPlayer.play();
            });
        }
    } else {
        videoPlayer.src = channel.url;
        videoPlayer.play().catch(e => {
            console.log("Direct stream play handled.");
        });
    }
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    videoPlayer.pause();
    videoPlayer.src = "";
    if (currentHls) {
        currentHls.destroy();
        currentHls = null;
    }
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal.click();
    }
});

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = channelsData.filter(c => c.name.toLowerCase().includes(term));
    renderChannels(filtered);
});

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        if (filter === 'all') {
            renderChannels(channelsData);
        } else {
            const filtered = channelsData.filter(c => c.group === filter);
            renderChannels(filtered);
        }
    });
});

// Initial Render
renderChannels(channelsData);
renderQuickSwapper();
