document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. CANVAS: PARTÍCULAS DE CORAZONES FLOTANTES
    // ==========================================
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class HeartParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 100;
            this.size = Math.random() * 12 + 6;
            this.speedY = Math.random() * 1 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.swing = Math.random() * 0.02;
            this.swingAngle = Math.random() * Math.PI * 2;
        }

        update() {
            this.y -= this.speedY;
            this.swingAngle += this.swing;
            this.x += Math.sin(this.swingAngle) * 0.5;

            if (this.y < -20) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.fillStyle = `rgba(244, 63, 94, ${this.opacity})`;
            ctx.beginPath();
            
            const topCurveHeight = this.size * 0.3;
            ctx.moveTo(0, topCurveHeight);
            ctx.bezierCurveTo(0, 0, -this.size / 2, 0, -this.size / 2, topCurveHeight);
            ctx.bezierCurveTo(-this.size / 2, (this.size + topCurveHeight) / 2, 0, this.size, 0, this.size);
            ctx.bezierCurveTo(0, this.size, this.size / 2, (this.size + topCurveHeight) / 2, this.size / 2, topCurveHeight);
            ctx.bezierCurveTo(this.size / 2, 0, 0, 0, 0, topCurveHeight);
            
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < 40; i++) {
        particles.push(new HeartParticle());
    }

    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateCanvas);
    }
    animateCanvas();


// ==========================================
    // 2. MOSAICO DE FOTOS EN FORMA DE CORAZÓN CON MODAL
    // ==========================================
    const heartMatrix = [
        [0,1,1,0,0,0,0,0,1,1,0],
        [1,1,1,1,0,0,0,1,1,1,1],
        [1,1,1,1,1,0,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,0]
    ];

    // Colección de fotos con descripciones/dedicatorias
    const photoCollection = [
        {
            url: "fotos/foto1.jpg",
            caption: "primera citas ❤️"
        },
        {
            url: "fotos/foto2.jpg",
            caption: "pequeña foto familiar ✨"
        },
        {
            url: "fotos/foto3.jpg",
            caption: "primer concierto en un cine 🎶"
        },
        {
            url: "fotos/foto4.jpg",
            caption: "cita al shushi elegante 🍣"
        },
        {
            url: "fotos/foto5.jpg",
            caption: "una de mis citas favirtas 💖"
        },
        {
            url: "fotos/foto6.jpg",
            caption: "nuestra primera pijamada ✨"
        },
        {
            url: "fotos/foto7.jpg",
            caption: "castillo de sabanas y almohadas con desayuno 🏰"
        },
        {
            url: "fotos/foto8.jpg",
            caption: "cumpleaños numero 20 🎂"
        },
        {
            url: "fotos/foto9.jpg",
            caption: "salida al cina para ver fnaf 🎬"
        },
        {
            url: "fotos/foto10.jpg",
            caption: "amandote cada ves mas 💖"
        },
        {
            url: "fotos/foto11.jpg",
            caption: "caundo te apoye y console caundo estabas triste 💖"
        },
        {
            url: "fotos/foto12.jpg",
            caption: "caundo te llevaste uno de mis sueteres, y para certe honeste te ves radiante con el 💖✨"
        },
        {
            url: "fotos/foto13.jpg",
            caption: "me emocione como niño en jugueteria con esto 💖✨"
        },
        {
            url: "fotos/foto14.jpg",
            caption: "caundo dormiamos juntos en llamada ✨"
        },
        {
            url: "fotos/foto15.jpg",
            caption: "cuando hacamos llamada casi todoas las noches 💖✨"
        },
        {
            url: "fotos/foto16.jpg",
            caption: "mi chica gotica favorita ✨"
        },
        {
            url: "fotos/foto17.jpg",
            caption: "foto de navidad "
        },
        {
            url: "fotos/foto18.jpg",
            caption: "navidad juntos 🎄✨"
        },
        {
            url: "fotos/foto19.jpg",
            caption: "mi gotica me encatas ✨"
        },
        {
            url: "fotos/foto20.jpg",
            caption: "modo pato activado 🦆"
        },
        {
            url: "fotos/foto21.jpg",
            caption: "llamadas con filtros jeje"
        },
        {
            url: "fotos/foto22.jpg",
            caption: "cuando me prestates tu sudadera de bts lo ame 💖✨"
        },
        {
            url: "fotos/foto23.jpg",
            caption: "perfecta 💖✨"
        },
        {
            url: "fotos/foto24.jpg",
            caption: "juntos en la escuala 💖✨"
        },
        {
            url: "fotos/foto25.jpg",
            caption: "tu bellaza en esa cita me cautivo 💖"
        },
        {
            url: "fotos/foto26.jpg",
            caption: "salida al cine jiji 💖✨"
        },
        {
            url: "fotos/foto27.jpg",
            caption: "foto porque si 💖✨"
        },
        {
            url: "fotos/foto28.jpg",
            caption: "amo tu carita de emocion ✨"
        },
        {
            url: "fotos/foto29.jpg",
            caption: "amo esa sonrisa tuya 💖"
        },
        {
            url: "fotos/foto30.jpg",
            caption: "amo las llamadas contigo ✨"
        },
        {
            url: "fotos/foto31.jpg",
            caption: "foto en la escula cuando empezamos 💖✨"
        },
        {
            url: "fotos/foto32.jpg",
            caption: "foto con nuestro hijo peluche ✨"}
    ];

    // Elementos del Modal
    const photoModal = document.getElementById('photoModal');
    const photoModalCard = document.getElementById('photoModalCard');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModalBtn = document.getElementById('closeModalBtn');

    function openModal(photoData) {
        modalImage.src = photoData.url;
        modalCaption.textContent = photoData.caption;
        
        photoModal.classList.remove('opacity-0', 'pointer-events-none');
        photoModalCard.classList.remove('scale-95');
        photoModalCard.classList.add('scale-100');
    }

    function closeModal() {
        photoModal.classList.add('opacity-0', 'pointer-events-none');
        photoModalCard.classList.remove('scale-100');
        photoModalCard.classList.add('scale-95');
    }

    closeModalBtn.addEventListener('click', closeModal);
    photoModal.addEventListener('click', (e) => {
        if (e.target === photoModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    function renderHeartGrid() {
        const gridContainer = document.getElementById('heartGrid');
        if (!gridContainer) return;
        
        gridContainer.innerHTML = '';
        let photoIndex = 0;

        heartMatrix.forEach((row) => {
            row.forEach((cell) => {
                if (cell === 1) {
                    const photoData = photoCollection[photoIndex % photoCollection.length];
                    
                    const cellDiv = document.createElement('div');
                    cellDiv.className = 'heart-cell cursor-pointer';
                    
                    const img = document.createElement('img');
                    img.src = photoData.url;
                    img.alt = photoData.caption;
                    img.loading = 'lazy';

                    // Al hacer clic, se abre la foto con su descripción
                    cellDiv.addEventListener('click', () => openModal(photoData));

                    cellDiv.appendChild(img);
                    gridContainer.appendChild(cellDiv);
                    photoIndex++;
                } else {
                    const emptyDiv = document.createElement('div');
                    gridContainer.appendChild(emptyDiv);
                }
            });
        });
    }
    renderHeartGrid();


    // ==========================================
    // 3. REPRODUCTOR DE MÚSICA & AUDIO HTML5
    // ==========================================
    const songs = [
        {
            title: "Boy With Luv",
            artist: "BTS (Feat. Halsey)",
            src: "audio/Boy With Luv.mp3", // Reemplaza con tu archivo o enlace local/remoto
            cover: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=300&q=80"
        },
        {
            title: "Heartbeat",
            artist: "BTS",
            src: "audio/Heartbeat.mp3",
            cover: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=300&q=80"
        },
        {
            title: "Butterfly",
            artist: "BTS",
            src: "audio/Butterfly.mp3",
            cover: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=300&q=80"
        },
        {
            title: "Epiphany",
            artist: "BTS (Jin)",
            src: "audio/Epiphany.mp3",
            cover: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=300&q=80"
        },
        {
            title: "Spring Day",
            artist: "BTS",
            src: "audio/Spring Day.mp3",
            cover: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=300&q=80"
        }
    ];

    let currentSongIndex = 0;
    const audio = document.getElementById('audioPlayer');

    const btnPlay = document.getElementById('btnPlay');
    const playIcon = document.getElementById('playIcon');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const trackTitle = document.getElementById('trackTitle');
    const trackArtist = document.getElementById('trackArtist');
    const trackCover = document.getElementById('trackCover');
    const vinylDisc = document.getElementById('vinylDisc');
    const vinylNeedle = document.getElementById('vinylNeedle');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const totalDurationEl = document.getElementById('totalDuration');
    const playlistContainer = document.getElementById('playlistContainer');
    const equalizer = document.getElementById('equalizer');

    function loadSong(song) {
        trackTitle.textContent = song.title;
        trackArtist.textContent = song.artist;
        trackCover.src = song.cover;
        audio.src = song.src;
        updatePlaylistUI();
    }

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playIcon.className = "fa-solid fa-pause";
            vinylDisc.classList.add('spinning');
            vinylNeedle.style.transform = "rotate(0deg)";
            equalizer.classList.add('playing-eq');
        } else {
            audio.pause();
            playIcon.className = "fa-solid fa-play ml-0.5";
            vinylDisc.classList.remove('spinning');
            vinylNeedle.style.transform = "rotate(12deg)";
            equalizer.classList.remove('playing-eq');
        }
    }

    btnPlay.addEventListener('click', togglePlay);

    btnNext.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        audio.play();
        playIcon.className = "fa-solid fa-pause";
        vinylDisc.classList.add('spinning');
        vinylNeedle.style.transform = "rotate(0deg)";
        equalizer.classList.add('playing-eq');
    });

    btnPrev.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
        audio.play();
        playIcon.className = "fa-solid fa-pause";
        vinylDisc.classList.add('spinning');
        vinylNeedle.style.transform = "rotate(0deg)";
        equalizer.classList.add('playing-eq');
    });

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progressPercent;
            currentTimeEl.textContent = formatTime(audio.currentTime);
            totalDurationEl.textContent = formatTime(audio.duration);
        }
    });

    progressBar.addEventListener('input', () => {
        if (audio.duration) {
            const seekTime = (progressBar.value / 100) * audio.duration;
            audio.currentTime = seekTime;
        }
    });

    audio.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        audio.play();
    });

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function renderPlaylist() {
        playlistContainer.innerHTML = '';
        songs.forEach((song, idx) => {
            const li = document.createElement('li');
            li.className = `flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${idx === currentSongIndex ? 'bg-rose-500/20 text-rose-300' : 'hover:bg-slate-800/50 text-slate-300'}`;
            li.innerHTML = `
                <div class="flex items-center gap-3 truncate">
                    <i class="fa-solid ${idx === currentSongIndex ? 'fa-compact-disc text-rose-400' : 'fa-music text-slate-500'}"></i>
                    <span class="text-sm font-medium truncate">${song.title}</span>
                </div>
                <span class="text-xs opacity-60">${song.artist}</span>
            `;
            li.addEventListener('click', () => {
                currentSongIndex = idx;
                loadSong(songs[currentSongIndex]);
                togglePlay();
            });
            playlistContainer.appendChild(li);
        });
    }

    function updatePlaylistUI() {
        renderPlaylist();
    }

    // Inicialización al cargar la página
    loadSong(songs[currentSongIndex]);
});

// ==========================================
    // 4. SECCIÓN DE CARTAS DE AMOR
    // ==========================================
    const lettersData = [
        {
            title: "Mi profundo amor",
            preview: "Desde que te conocí, cada momento a tu lado ha sido un regalo que atesoro profundamente...",
            content: "desde que te conoci fue para mi el mejor momento de mi vida, habia encotrado al amor de mi vida pasamos momentos inoviadbles que quedaran guardados en lo mas profundo del corazon, y durante estos 4 años de relacion son los mejores 4 años de mi vida y estar a tu lado fue lo mejor de mi vida apesar de las dificultades que pasamos juntos, siempre salimos adelante. sin importar lo que pasara siempre estuve hai para ti y tu estubiste simpre para mi apesar de todo, evisto cada parte de ti, te evisto feliz, ansiosa, nerviosa, triste, enojada, frustrada, estresada, y estube a tu lado en cada momento sin importar que, porque te amo y siempre te amare."
        },
        {
            title: "deseos",
            preview: "tantos deseos que quiero cumplir a tu lado, tantos sueños que quiero hacer realidad contigo...",
            content: "emos pasado por muchos momentos juntos felices o tristre o frustrantes, pero siempre hemos superado cada desafío juntos asta hora, hicmos muchas promesas y emos planeado en como seria nuestro futuro y deso cumplir esos deseos a tu lado, aun que puede que nosea perfecto puede que sea mas dificl de lo que parece pero quiero cumplirlo contigo."
        },
        {
            title: "pensamientos que me cuesta decir",
            preview: "Quiero prometerte que estaré contigo en cada paso, apoyando tus sueños y celebrando tus éxitos...",
            content: "Se que dije cosas que no tengan sentido pero sabes que las palabras me llegan a costar y yo solo me revuelvo. se que no somos perfectos a lo largo de nuestra relación emos cometido errores y pero siempre encontramos la manera de salir adelante y superarlo, cuando pasó el beso con el, me dolió pero pudimos superarlo se que fue un beso y fuiste tu la que me lo confeso llorando aún que igual me dolio verte así se que te arrepentias por eso y te perdone y seguimos adelante cuando te hacía enojar por algo que hice hacía de todo para que me perdonarás, cuando pasó lo de ese mes se que el causante fui yo, y me dolió asta el alma porque pensé que te había perdido por qué no pensé antes de hablar, pero aún así pudimos reconciliarnos  y lo superamos,  y desde aquellos errores aprendíamos de ellos y nos esforzamos para que no se repita, aún que el cambio fuera de apoco se que nos esforzamavos y lo se porque a diferencia de cuando iniciamos ya casi no había problemas o discusiones entre nosotros, se que lo que pasó ahora con el aborto fue nuevo para nosotros y tuvimos miedo, ambos tuvimos la decisión. Se que a ti te duele más, tu pasaste por el proseso cuando tomaste la pastilla aún que no pede de estar Hai para ti físicamente aún así trataba de estar Hai para ti y superar esto juntos y poder seguir adelante y aprender de esto juntos. Al verte en como estabas en cómo te afecto creme que me siento igual de mal y  quería proponerte en ir los dos a terapia ya sea de parejas o individual yo Hiba apagar los gastos de eso no había problema, pero no quería perder a la persona más importante de mi vida y ala que amo con todo mi ser y a la que quiero construir un futuro a como lo habíamos planeado, no quería perderte. Se que las cosas no están bien y por eso quisiste terminar y está bien,  pero apesar del dolor aun quiero seguir luchando por ti, se que ahora quieres estar sola tener tu tiempo, solo quiero perdirte que no te encierres si necesitas ayuda o alguien con quién hablar aún que ya no sea yo aún están tus amigas que igual te quieren, no dejes que tus miedos e inseguridades te maneje. Se que la relación entre tu papa y yo no a sido tan buena pero estoy dispuesto a hablar con el y arreglar las cosas y demostrarle que quiero darle una vida a su hija y cuidarla, además que soy el único que ama cada parte de ti, el que te tiene la suficiente paciencia para aguantar tus cambios de humor, el único que te a valorado y respetado, el que te escucha y el que te a amado incondicionalmente. Y como te dije espérare el tiempo que sea por ti para cuando decidas volver, porque prefiero intentarlo mil veces contigo que intentar amar a alguien más desde cero."
        }
    ];

    const lettersContainer = document.getElementById('lettersContainer');
    const letterModal = document.getElementById('letterModal');
    const letterModalCard = document.getElementById('letterModalCard');
    const letterModalTitle = document.getElementById('letterModalTitle');
    const letterModalContent = document.getElementById('letterModalContent');
    const closeLetterBtn = document.getElementById('closeLetterBtn');

    function openLetterModal(letter) {
        letterModalTitle.textContent = letter.title;
        letterModalContent.textContent = letter.content;
        
        letterModal.classList.remove('opacity-0', 'pointer-events-none');
        letterModalCard.classList.remove('scale-95');
        letterModalCard.classList.add('scale-100');
    }

    function closeLetterModal() {
        letterModal.classList.add('opacity-0', 'pointer-events-none');
        letterModalCard.classList.remove('scale-100');
        letterModalCard.classList.add('scale-95');
    }

    closeLetterBtn.addEventListener('click', closeLetterModal);
    letterModal.addEventListener('click', (e) => {
        if (e.target === letterModal) closeLetterModal();
    });

    function renderLetters() {
        if (!lettersContainer) return;
        lettersContainer.innerHTML = '';

        lettersData.forEach((letter) => {
            const card = document.createElement('div');
            card.className = 'letter-card rounded-2xl p-5 cursor-pointer flex flex-col justify-between relative overflow-hidden group';
            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <i class="fa-solid fa-envelope-open-text text-rose-400 text-2xl group-hover:scale-110 transition-transform"></i>
                        <span class="text-xs text-rose-300/60 uppercase tracking-wider font-semibold">Carta Abierta</span>
                    </div>
                    <h3 class="font-dancing text-2xl text-rose-100 mb-2">${letter.title}</h3>
                    <p class="text-slate-300 text-xs md:text-sm line-clamp-3">${letter.preview}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-rose-500/10 flex items-center text-xs text-rose-400 font-medium group-hover:text-rose-300">
                    <span>Leer carta completa</span>
                    <i class="fa-solid fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                </div>
            `;
            card.addEventListener('click', () => openLetterModal(letter));
            lettersContainer.appendChild(card);
        });
    }

    renderLetters();