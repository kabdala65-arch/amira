import { useEffect, useRef, useState } from "react";
import { Heart, ChevronLeft, ChevronRight, Sparkles, Music2, LockKeyhole, Play, Pause } from "lucide-react";

const photos = [
<<<<<<< HEAD
  { src: "/media/amira-01.jpeg", alt: "أول صورة تجمع أميرة بحبيبها", label: "أول نظرة", comment: "من أول نظرة، قلبي عرفك.", memory: "يوم الدهب: ______________" },
  { src: "/media/amira-02.jpeg", alt: "لحظة لطيفة تجمع أميرة بحبيبها", label: "ضحكتك", comment: "ضحكتك هي غروب يومي الجميل.", memory: "التاريخ / الذكرى: ______________" },
  { src: "/media/amira-03.jpeg", alt: "لقطة من ذكريات أميرة", label: "كل الطرق", comment: "أي طريق يحلو، طالما إنتي فيه.", memory: "التاريخ / الذكرى: ______________" },
  { src: "/media/amira-04.jpeg", alt: "أول لقاء في بيتهم", label: "الفاتحة", comment: "أول بيت جمعنا، وأجمل بداية.", memory: "03.03.2026 — أول لقاء في بيتهم" },
  { src: "/media/amira-05.jpeg", alt: "صورة الخطوبة ولبس الدبلة", label: "الخطوبة", comment: "يوم لبسنا الدبلة، لبسنا الوعد.", memory: "29.05.2026 — الخطوبة ولبس الدبلة" },
=======
  { src: "/manus-storage/amira-01_5a38b8c0.jpeg", alt: "أول صورة تجمع أميرة بحبيبها", label: "أول نظرة", comment: "من أول نظرة، قلبي عرفك.", memory: "يوم الدهب: ______________" },
  { src: "/manus-storage/amira-02_7dc993b5.jpeg", alt: "لحظة لطيفة تجمع أميرة بحبيبها", label: "ضحكتك", comment: "ضحكتك هي غروب يومي الجميل.", memory: "التاريخ / الذكرى: ______________" },
  { src: "/manus-storage/amira-03_61c5cb02.jpeg", alt: "لقطة من ذكريات أميرة", label: "كل الطرق", comment: "أي طريق يحلو، طالما إنتي فيه.", memory: "التاريخ / الذكرى: ______________" },
  { src: "/manus-storage/amira-04_42a68ba5.jpeg", alt: "أول لقاء في بيتهم", label: "الفاتحة", comment: "أول بيت جمعنا، وأجمل بداية.", memory: "03.03.2026 — أول لقاء في بيتهم" },
  { src: "/manus-storage/amira-05_92f546d4.jpeg", alt: "صورة الخطوبة ولبس الدبلة", label: "الخطوبة", comment: "يوم لبسنا الدبلة، لبسنا الوعد.", memory: "29.05.2026 — الخطوبة ولبس الدبلة" },
>>>>>>> 817f8c89ea6caa425266fc84324ba0a80bf18ec7
  { src: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=85", alt: "سماء مليئة بالنجوم", label: "ليالينا", comment: "إنتي نجمة كل ليلة في عمري.", memory: "التاريخ / الذكرى: ______________" },
  { src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=85", alt: "قلب من الورد", label: "حب كبير", comment: "قلبي اختارك، وكل يوم بيختارك أكتر.", memory: "التاريخ / الذكرى: ______________" },
  { src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=85", alt: "زهور وردية", label: "أميرة", comment: "أجمل وردة في حكاية عمري.", memory: "التاريخ / الذكرى: ______________" },
];

// يمكن استبدال الرابطين بملفات الأغاني الخاصة بك عند إرسالها.
const songs = [
<<<<<<< HEAD
  { title: "أغنيتنا الأولى", subtitle: "لما القلب اختارك", src: "/media/first-song.mpeg" },
  { title: "أغنيتنا الثانية", subtitle: "وجودك أجمل لحن", src: "/media/second-song.mp3" },
=======
  { title: "أغنيتنا الأولى", subtitle: "لما القلب اختارك", src: "/manus-storage/amira-first-song_c661a100.mpeg" },
  { title: "أغنيتنا الثانية", subtitle: "وجودك أجمل لحن", src: "/manus-storage/amira-second-song_3e9b8eae.mp3" },
>>>>>>> 817f8c89ea6caa425266fc84324ba0a80bf18ec7
];

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [message, setMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!entered || paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % photos.length), 4800);
    return () => window.clearInterval(timer);
  }, [entered, paused]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); return; }
    try { await audioRef.current.play(); setIsPlaying(true); } catch { setIsPlaying(false); }
  };

  const changeSong = (index: number) => {
    setSongIndex(index);
    setIsPlaying(false);
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.load(); }
  };

  const go = (direction: number) => setActive((current) => (current + direction + photos.length) % photos.length);
  const unlock = () => {
    if (message.trim() === "بحبك") { setPasswordError(false); setEntered(true); }
    else setPasswordError(true);
  };

  if (!entered) {
    return (
      <main className="gate-screen" dir="rtl">
        <div className="glow glow-one" /><div className="glow glow-two" />
        <div className="floating-heart heart-a">♥</div><div className="floating-heart heart-b">♡</div>
        <section className="gate-card">
<<<<<<< HEAD
          <div className="avatar-wrap"><div className="avatar"><img src="/media/amira-01.jpeg" alt="أميرة" /></div><div className="avatar-ring" /></div>
=======
          <div className="avatar-wrap"><div className="avatar"><img src="/manus-storage/amira-01_5a38b8c0.jpeg" alt="أميرة" /></div><div className="avatar-ring" /></div>
>>>>>>> 817f8c89ea6caa425266fc84324ba0a80bf18ec7
          <div className="tiny-kicker"><Sparkles size={13} /> حكاية مكتوبة بحب</div>
          <h1>عالم <em>أميرة</em></h1>
          <p className="gate-question">مفتاح قلب أميرة إيه؟</p>
          <div className={`field-wrap ${passwordError ? "field-error" : ""}`}><LockKeyhole size={16} /><input type="password" value={message} onChange={(e) => { setMessage(e.target.value); setPasswordError(false); }} placeholder="اكتبي كلمة السر..." aria-label="كلمة السر" onKeyDown={(e) => e.key === "Enter" && unlock()} /></div>
          {passwordError && <p className="password-error">الكلمة دي مش هي المفتاح... جرّبي تاني بحب ❤️</p>}
          <button className="primary-button" onClick={unlock}>ادخلي عالمنا <Heart size={17} fill="currentColor" /></button>
          <p className="gate-note">جواكي حكاية تستاهل تتكتب بكل حب</p>
        </section>
      </main>
    );
  }

  return (
    <main className="site" dir="rtl">
      <audio ref={audioRef} src={songs[songIndex].src} onEnded={() => setIsPlaying(false)} />
      <nav className="topbar"><div className="brand"><span className="brand-mark">♡</span><span>أميرة</span></div><div className="nav-meta"><span>حكاية لا تشبه غيرها</span><span className="dot" /><span>08 صور من القلب</span></div><button className={`music-button ${isPlaying ? "playing" : ""}`} onClick={toggleMusic} aria-label={isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"} title={isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"}>{isPlaying ? <Pause size={16} /> : <Music2 size={17} />}</button></nav>
      <section className="music-dock"><div className="music-dock-title"><Music2 size={15} /> موسيقى الحكاية</div><div className="song-tabs">{songs.map((song, index) => <button key={song.title} className={songIndex === index ? "active-song" : ""} onClick={() => changeSong(index)}><span>{index + 1}</span><strong>{song.title}</strong><small>{song.subtitle}</small></button>)}</div><button className="play-song" onClick={toggleMusic}>{isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />} {isPlaying ? "إيقاف" : "تشغيل"}</button></section>
      <section className="hero">
        <div className="hero-copy"><div className="eyebrow"><span /> إلى أجمل أميرة <span /></div><h1>وجودك<br /><em>بيخلّي الدنيا أحلى</em></h1><p>مش كل الحكايات بتبدأ بكلمة. في حكايات بتبدأ بإحساس صغير، وبعدين تكبر لحد ما تبقى أمان، وونس، وضحكة بنستناها كل يوم. وإنتي يا أميرة، كنتي أجمل حكاية بدأت من غير ميعاد.</p><button className="scroll-cta" onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}>اقري الحكاية <ChevronLeft size={18} /></button></div>
        <div className="hero-visual"><div className="photo-frame" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}><div className="photo-shade" />{photos.map((photo, index) => <img key={photo.src} className={`hero-photo ${index === active ? "is-active" : ""}`} src={photo.src} alt={photo.alt} />)}<div className="photo-caption"><span>0{active + 1} / 08</span><strong>{photos[active].label}</strong></div><button className="arrow arrow-right" onClick={() => go(1)} aria-label="الصورة التالية"><ChevronRight size={20} /></button><button className="arrow arrow-left" onClick={() => go(-1)} aria-label="الصورة السابقة"><ChevronLeft size={20} /></button></div><div className="frame-orbit">أميرة <Heart size={12} fill="currentColor" /></div></div>
      </section>
      <section className="quote-section"><div className="quote-mark">“</div><p>في ناس بنقابلهم صدفة،<br /><strong>وبنكتشف إنهم أجمل حاجة حصلت لنا.</strong></p><div className="signature">— من قلب شايفك أجمل من كل الكلام</div></section>
      <section className="timeline-section"><div className="section-heading"><div><span className="eyebrow">تواريخ من حكاية أميرة</span><h2>أيام صغيرة<br /><em>بقت عمر كامل</em></h2></div><p>كل تاريخ هنا مش مجرد رقم؛<br />ده يوم بدأ فيه فصل جديد من حكايتكم.</p></div><div className="timeline"><article className="timeline-card"><span className="timeline-date">03.03.2026</span><div className="timeline-icon">♡</div><h3>أول لقاء في بيتهم</h3><p>يوم الفاتحة، وأول خطوة في حكاية اتكتبت بنية حلوة وقلب مطمّن.</p></article><article className="timeline-card"><span className="timeline-date">29.05.2026</span><div className="timeline-icon">♢</div><h3>الخطوبة ولبس الدبلة</h3><p>اليوم اللي لبسنا فيه الدبلة، وبقى الوعد قدام العين وعلى القلب.</p></article></div></section>
      <section className="story-section" id="story"><div className="story-intro"><span className="eyebrow">رسالة صغيرة لقلب كبير</span><h2>إلى أميرة،<br /><em>اللي وجودها فرق</em></h2></div><div className="story-body"><p>يا أميرة، يمكن الكلام ده كله ما يكفيش يوصف مكانتك، بس أنا حابب أقولك إن وجودك مش عادي. إنتي من الناس اللي لما بتدخل حياة حد، بتسيب فيها نور ما بيروحش. في ضحكتك حاجة بتطمن، وفي كلامك دفء يخلي أصعب يوم يعدّي أخف.</p><p>بحب فيكي التفاصيل اللي يمكن إنتي مش واخدة بالك منها؛ طريقتك وإنتي بتحكي، اهتمامك الصغير اللي بيبان كبير، قلبك اللي بيدي من غير ما يستنى، وحتى سكوتك له معنى. بحب إنك حقيقية، مش محتاجة تعملي أي حاجة عشان تبقي مميزة، لأنك مميزة وأنتي على طبيعتك.</p><p>ولو الدنيا في يوم بقت تقيلة، افتكري إن في حد شايفك نعمة، وممتن لكل لحظة جمعتكم، وبيحب يشوفك مبسوطة حتى لو من بعيد. إنتي مش مجرد صورة حلوة في حكاية؛ إنتي الحكاية كلها، وأجمل فصل فيها لسه ما اتكتبش.</p><div className="story-sign">بحبك قد كل مرة خلتيني أبتسم <Heart size={16} fill="currentColor" /></div></div></section>
      <section className="reasons-section"><div className="section-heading"><div><span className="eyebrow">ولسه عندي كلام كتير</span><h2>حاجات صغيرة<br /><em>بتخلّيكي مختلفة</em></h2></div><p>مش لازم سبب كبير عشان نحب حد.<br />كفاية تفاصيله الصغيرة.</p></div><div className="reasons-grid"><article><b>01</b><h3>لأنك أمان</h3><p>وجودك بيخلّي الواحد يحس إنه مش لوحده، حتى من غير كلام كتير.</p></article><article><b>02</b><h3>لأنك بتشبهي الفرح</h3><p>ضحكتك مش بس بتفرّحك، دي بتعدّي لأي حد قريب منك.</p></article><article><b>03</b><h3>لأن قلبك نادر</h3><p>طيبتك مش ضعف، دي أجمل قوة فيكي، وأغلى حاجة في العالم.</p></article><article><b>04</b><h3>لأنك أميرة فعلًا</h3><p>مش بالاسم بس؛ بالروح، بالحضور، وبالأثر اللي بتسيبيه في كل مكان.</p></article></div></section>
      <section className="gallery-section" id="gallery"><div className="section-heading"><div><span className="eyebrow">لحظات تستاهل تتخزن</span><h2>ثمانية أسباب<br /><em>تخلّيكي تبتسمي</em></h2></div><p>بدّلي الصور بالسهمين أو سيبيها تتغير لوحدها.<br />مرّري الماوس على أي صورة عشان تقري الرسالة واكتبي الذكرى.</p></div><div className="thumb-grid">{photos.map((photo, index) => <button key={photo.src} className={`thumb ${index === active ? "selected" : ""}`} onClick={() => setActive(index)} aria-label={`عرض ${photo.label}: ${photo.comment}. ${photo.memory}`}><img src={photo.src} alt={photo.alt} /><span>0{index + 1}</span><b className="thumb-comment">{photo.comment}</b><small className="thumb-memory">{photo.memory}</small></button>)}</div></section>
      <footer><div className="footer-heart"><Heart size={19} fill="currentColor" /></div><p>لأميرة، <span>أجمل صدفة في العمر.</span></p><div className="footer-line" /></footer>
    </main>
  );
}

export { photos, songs };
