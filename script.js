// Combined and Organized Channel List from All Data Sources
const channelsData = [
    // --- Sports Section ---
    { name: "CAZE TV", logo: "https://images.seeklogo.com/logo-png/61/1/cazetv-logo-png_seeklogo-619708.png", url: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8", group: "Sports" },
    { name: "CAZE TV (1080p)", logo: "https://images.seeklogo.com/logo-png/61/1/cazetv-logo-png_seeklogo-619708.png", url: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/1080p-vtt/index.m3u8", group: "Sports" },
    { name: "Goal TV", logo: "https://media.unreel.me/prod/freelivesports/logo/3b9ff291-5825-4cd3-b8f0-5d03a3f1e3c1", url: "https://streams2.sofast.tv/sofastplayout/WiseM3U8_1/master.m3u8", group: "Sports" },
    { name: "DD Sports", logo: "https://s3.aynaott.com/storage/188500190395c4de0e506d518925dcc4", url: "https://cdn-6.pishow.tv/live/13/master.m3u8", group: "Sports" },
    { name: "KTV Sport Plus", logo: "https://s3.aynaott.com/storage/b54495ee3cdd53ddaa19d1f98120f488", url: "https://kwtsplta.cdn.mangomolo.com/spl/smil:spl.stream.smil/chunklist.m3u8", group: "Sports" },
    { name: "Oman Sports TV", logo: "https://s3.aynaott.com/storage/33f87783637fc95fdb8837ba9344c9e9", url: "https://partneta.cdn.mgmlcdn.com/omsport/smil:omsport.stream.smil/chunklist.m3u8", group: "Sports" },
    { name: "Bleav Football", logo: "https://a.jsrdn.com/hls/23091/bleav-football/logo_20231219_184637_64.png", url: "https://linear-493.frequency.stream/dist/glewedtv/493/hls/master/playlist.m3u8", group: "Sports" },
    { name: "NBC Sports", logo: "https://s3.aynaott.com/storage/0a241a80bf51d2c3b3722531706ce086", url: "https://xumo-xumoent-vc-122-sjv70.fast.nbcuni.com/live/master.m3u8", group: "Sports" },
    { name: "speed sports 1", logo: "https://s3.aynaott.com/storage/06f5b193bfa4d31310ee934eb3c2222e", url: "https://linear-599.frequency.stream/dist/stirr/599/hls/master/playlist.m3u8", group: "Sports" },
    { name: "Bahrain Sports 1", logo: "https://s3.aynaott.com/storage/f55bea3263be1af187fe1122e4f44142", url: "https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8", group: "Sports" },
    { name: "MORE THEN SPORTS TV", logo: "https://s3.aynaott.com/storage/39174e32d4f8d29a95c881637fe1ecdb", url: "https://mts1.iptv-playoutcenter.de/mts/mts-web/playlist.m3u8", group: "Sports" },
    { name: "SPORTS FIRST TV", logo: "https://s3.aynaott.com/storage/748d28752dcf95740561f1ac39e15fc3", url: "https://d4ddgdmj1cvnm.cloudfront.net/scheduler/scheduleMaster/409.m3u8", group: "Sports" },
    { name: "Xtrem Sports", logo: "https://s3.aynaott.com/storage/e1749cf3040f11c63e722c941f213927", url: "https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/e0b81a5c-6ab5-48cd-aaa9-f82de4ab5bf9/manifest.m3u8", group: "Sports" },
    { name: "WOF 1", logo: "https://s3.aynaott.com/storage/1a580ee2636a0c4761e623bc131ba7a6", url: "https://mainstreammedia-worldoffreesportsintl-rakuten.amagi.tv/hls/amagi_hls_data_rakutenAA-mainstreammediafreesportsintl-rakuten/CDN/master.m3u8", group: "Sports" },
    { name: "Fox Cricket 501", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Fox_Cricket_Logo.png", url: "http://y3fqd48g.megatv.fun/iptv/NRLXRWSBWBPLN4/19146/index.m3u8", group: "Sports" },
    { name: "MTRSPT1", logo: "https://a.jsrdn.com/hls/23099/mtrspt1/logo_20250122_232635_70.png", url: "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg02873-kravemedia-mtrspt1-distrotv/playlist.m3u8", group: "Sports" },
    { name: "UFC TV", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpk7qcLQpJwBYzXGY25LdrndzWRDs3tgwp5rY0W-pkxJQ9UVDcWvE88Ng6AGWlHpHNhjQrb28lJ2r4V_BW1fVkLySo3sB1nzTwt_LuRQ9cYGim_FInDnyZWBuULFUFI_Vr9YdIpTs7KvDsVb0CEy_XYJCmUXB4Jpo1uPnXTjh09EqP_sJLqgb6Dwf1uA/s1080/1000060530.png", url: "https://linear-893.frequency.stream/mt/plex/893/hls/master/playlist_640x360.m3u8", group: "Sports" },
    { name: "Redbull TV", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I_gjgaJYlqDQGjAj96xh8S-5GZe_CZQK3w&usqp=CAU", url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8", group: "Sports" },
    { name: "Alkass One (1080p)", logo: "https://i.imgur.com/10mmlha.png", url: "https://liveeu-gcp.alkassdigital.net/alkass1-p/main.m3u8", group: "Sports" },
    { name: "beIN SPORTS XTRA (1080p)", logo: "https://i.ibb.co/HT49GPmB/XTRA-2.png", url: "https://bein-xtra-bein.amagi.tv/playlist.m3u8", group: "Sports" },
    { name: "FIFA+ (720p)", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/FIFA%2B_(2025).svg/960px-FIFA%2B_(2025).svg.png", url: "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1_FJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8", group: "Sports" },

    // --- Bangla Section ---
    { name: "TV9 Bangla", logo: "https://images.tv9bangla.com/wp-content/themes/tv9bangla/images/tv9-bangla-logo.svg", url: "https://dyjmyiv3bp2ez.cloudfront.net/pub-iotv9banaen8yq/liveabr/playlist.m3u8", group: "Bangla" },
    { name: "R Plus News", logo: "https://rplus.in/wp-content/uploads/2025/06/RPLUS_NEWS.png", url: "https://thelegitpro.in/pntv/rplusnews24x7/index.m3u8", group: "Bangla" },
    { name: "News 24", logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/News%2024.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8", group: "Bangla" },
    { name: "SOMOY NEWS", logo: "https://static.wikia.nocookie.net/logopedia/images/8/8e/Somoy_Television.svg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8", group: "Bangla" },
    { name: "Jamuna TV", logo: "https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Jamuna%20TV.jpeg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1701/output/index.m3u8", group: "Bangla" },
    { name: "Channel 24", logo: "https://yt3.googleusercontent.com/8Q8MCd6ypr2Hzbp60VE_stJPl063kQYfeTxdIQkAXRfhdzxByLl0sJYHsk43uTM4W_cOzwcbPQ=s160-c-k-c0x00ffffff-no-rj", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/index.m3u8", group: "Bangla" },
    { name: "ATN News", logo: "https://static.wikia.nocookie.net/etv-gspn-bangla/images/4/4d/ATN_News_HD.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1706/output/index.m3u8", group: "Bangla" },
    { name: "Independent Television", logo: "https://static.wikia.nocookie.net/etv-gspn-bangla/images/b/bb/Independent_logo_2011.png", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1704/output/index.m3u8", group: "Bangla" },
    { name: "Zee 24 Ghanta", logo: "https://static.wikia.nocookie.net/logopedia/images/b/bc/Zee_24_Ghanta_2025_Logo_2025.png", url: "https://d2dsoyvkr33m05.cloudfront.net/index_1.m3u8", group: "Bangla" },
    { name: "News18 Bangla", logo: "https://static.wikia.nocookie.net/logopedia/images/8/85/News18_Bangla1.svg/", url: "https://amg01448-samsungin-news18bangla-samsungin-ad-qy.amagi.tv/ts-eu-w1-n2/playlist/amg01448-samsungin-news18bangla-samsungin/playlist.m3u8", group: "Bangla" },
    { name: "ABP Ananda", logo: "https://static.wikia.nocookie.net/logopedia/images/a/a2/Abp-ananda.png", url: "https://amg01448-samsungin-abpananda-samsungin-ad-pw.amagi.tv/playlist/amg01448-samsungin-abpananda-samsungin/playlist.m3u8", group: "Bangla" },
    { name: "BTV HD", logo: "https://static.wikia.nocookie.net/logopedia/images/1/12/BTV_HD_Logo.svg", url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8", group: "Bangla" },
    { name: "DEEPTO TV HD", logo: "https://jcwsw2vt33.gpcdn.net/uploads/images/2022/07/25/logos_1384ea456744d5914ba331fa72df78c8_goplay_deepto_logo_final_white.svg", url: "https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8", group: "Bangla" },

    // --- Premium / Extra Feeds Section ---
    { name: "ICC TV FHD", logo: "", url: "https://live-d-01-icc-we.akamaized.net/variant/v1blackout/vcg-01-d/DASH_DASH/Live/channel(vcg-01-ch-hd-02)/hdntl=exp=1783702529~acl=%2fvariant%2fv1blackout%2fvcg-01-d%2f*~data=hdntl~hmac=41341b330805b9c5a1cb484abbf27034c64edf771e4349ca37bfecb54f4a1792/manifest.mpd", group: "Premium" },
    { name: "WILLOW FHD", logo: "https://s21.q4cdn.com/819998841/files/doc_news/2024/May/Willow-logo-transparent-cb.png", url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/orxueyvu1q/out/v1/4f512a0c1bf2470c875bf8b26b563c80/cenc.mpd", group: "Premium" },
    { name: "SKY CRICKET FHD", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqp1Plsy44x_6pIyvUttdbXc5LMugRMGfldjYKQbI9X_X7txzS2d7WPph", url: "https://bl.rutube.ru/livestream/7c13a51576b9ff2601f08f5d57dd5169/index.m3u8?s=uiXES2ePt7xTpQnbJxn7Dg&e=2074684474&scheme=https", group: "Premium" },
    { name: "TSN SPORTS FHD", logo: "https://www.bellmedia.ca/lede/wp-content/uploads/2024/09/18581592_10155403529061055_8240563011649656197_n.jpg", url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/w0rehjjrwe/out/v1/69a2a7041395406b970598f61680e7cf/cenc.mpd", group: "Premium" },
    { name: "Fox Sports Premium", logo: "https://images.seeklogo.com/logo-png/28/1/fox-sports-logo-png_seeklogo-284763.png", url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/dash/enc/fdx74zqzhu/out/v1/7d7a8c6981a842b98a683e9fbfe51d17/cenc.mpd", group: "Premium" },
    { name: "TSports BDIX", logo: "", url: "http://103.165.93.31:8095/tsports/video.m3u8", group: "Premium" },
    { name: "SomoyTV BDIX", logo: "", url: "http://103.165.93.31:8095/somoyTv/index.m3u8", group: "Premium" }
];

const grid = document.getElementById('channelsGrid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('playerModal');
const videoPlayer = document.getElementById('videoPlayer');
const modalTitle = document.getElementById('modalTitle');
const closeModal = document.getElementById('closeModal');
const tabBtns = document.querySelectorAll('.tab-btn');

let currentHls = null;

// Render Channels
function renderChannels(channels) {
    grid.innerHTML = '';
    if (channels.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No channels found!</p>`;
        return;
    }

    channels.forEach(channel => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        
        const logoUrl = channel.logo && channel.logo.trim() !== "" 
            ? channel.logo 
            : 'https://cdn-icons-png.flaticon.com/512/3334/3334886.png';

        card.innerHTML = `
            <img src="${logoUrl}" alt="${channel.name}" class="channel-logo" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3334/3334886.png'">
            <h4 class="channel-name">${channel.name}</h4>
            <span class="channel-group">${channel.group || 'Live'}</span>
        `;

        card.addEventListener('click', () => playChannel(channel));
        grid.appendChild(card);
    });
}

// Play Channel Function
function playChannel(channel) {
    modalTitle.innerText = `Now Playing: ${channel.name}`;
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
        // Fallback for direct links or dash if browser supports or basic video source
        videoPlayer.src = channel.url;
        videoPlayer.play().catch(e => {
            alert("Stream format requires advanced player or proxy configuration.");
        });
    }
}

// Close Modal
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

// Search Filter
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = channelsData.filter(c => c.name.toLowerCase().includes(term));
    renderChannels(filtered);
});

// Category Tabs Filter
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

// Initial Load
renderChannels(channelsData);
