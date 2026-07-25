(function () {
  "use strict";

  /* ---------- icon set (18x18, stroke style) ---------- */
  var ICONS = {
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-3-3.87"/><path d="M9 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="3"/><path d="M5 21v-1a3 3 0 0 1 3-3"/><path d="M19 21v-1a3 3 0 0 0-3-3"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    leaf: '<path d="M5 21c9 0 13-6 13-15-9 0-13 6-13 15z"/><path d="M5 21c4-4 6-8 13-15"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>',
    star: '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    flame: '<path d="M12 2c1 4-3 5-3 9a3 3 0 0 0 6 0c0-1-1-2-1-2 2 1 3 3 3 5a5 5 0 0 1-10 0c0-5 3-6 5-12z"/>',
    book: '<path d="M4 4.5h6a3 3 0 0 1 3 3V19a2.5 2.5 0 0 0-2.5-2.5H4z"/><path d="M20 4.5h-6a3 3 0 0 0-3 3V19a2.5 2.5 0 0 1 2.5-2.5H20z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    sparkle: '<path d="M12 2 13.5 9 20 10.5 13.5 12 12 19 10.5 12 4 10.5 10.5 9 12 2Z"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
    trending: '<path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/>'
  };

  function icon(key) {
    var body = ICONS[key] || ICONS.star;
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + body + '</svg>';
  }

  function tag(label, iconKey) {
    return { label: label, icon: iconKey };
  }

  /* ---------- vertical data (drives the popup) ---------- */
  var VERTICALS = {
    rasava: {
      name: "Rasava",
      logo: "assets/verticals/rasava.png",
      tagline: "Consumer Lifestyle Brand",
      desc: "Rasava brings vibrant energy to everyday living, crafting products and experiences designed to delight modern lifestyles across every touchpoint.",
      tags: [tag("Vibrant Identity", "sparkle"), tag("Customer First", "heart"), tag("Modern Design", "sparkle"), tag("Quality Assured", "shield")]
    },
    tawouk: {
      name: "Al Tawouk",
      logo: "assets/verticals/tawouk.png",
      url: "https://malakaltawouk.com/",
      tagline: "Grilled Chicken & Middle Eastern Flavors",
      desc: "Al Tawouk serves authentic Middle Eastern grilled specialties, bringing bold flavors and time-honored recipes to every plate.",
      tags: [tag("Authentic Recipes", "flame"), tag("Fresh Ingredients", "leaf"), tag("Fast Casual", "clock"), tag("Bold Flavors", "flame")]
    },
    tre: {
      name: "TRE",
      logo: "assets/verticals/tre.png",
      tagline: "Mechanical | Electrical | Plumbing",
      desc: "TRE delivers end-to-end MEP solutions with a commitment to quality, safety, and innovation. With a team of skilled professionals and years of expertise, we power modern infrastructure and enable sustainable environments.",
      tags: [tag("MEP Solutions", "gear"), tag("Expert Team", "users"), tag("Quality Assurance", "shield"), tag("Sustainable Approach", "leaf")]
    },
    trgg: {
      name: "Toprock Glass",
      logo: "assets/verticals/trg.png",
      tagline: "Glass & Glazing Solutions",
      desc: "Toprock Glass specializes in premium glass and glazing systems, delivering precision craftsmanship for architectural and interior applications.",
      tags: [tag("Precision Craft", "gear"), tag("Custom Glazing", "gear"), tag("Durable Materials", "shield"), tag("Timely Delivery", "clock")]
    },
    trglobal: {
      name: "Toprock Global",
      logo: "assets/verticals/trgg.png",
      url: "https://toprockglobal.com/",
      tagline: "Global Trading & Investments",
      desc: "Toprock Global drives cross-border trade and investment, connecting markets and building strategic partnerships that fuel sustainable growth.",
      tags: [tag("Global Reach", "globe"), tag("Strategic Partnerships", "trending"), tag("Market Expertise", "trending"), tag("Trusted Network", "star")]
    },
    tri: {
      name: "Toprock Interiors",
      logo: "assets/verticals/tri.png",
      url: "https://www.toprockinteriors.com/",
      tagline: "Interior Fit-Out & Design, Since 2004",
      desc: "Toprock Interiors LLC has been shaping refined spaces since 2004, blending functional design with meticulous execution for residential and commercial interiors.",
      tags: [tag("Since 2004", "star"), tag("Bespoke Design", "sparkle"), tag("Quality Finishes", "shield"), tag("On-Time Delivery", "clock")]
    },
    trj: {
      name: "Toprock Joinery",
      logo: "assets/verticals/trj.png",
      tagline: "Custom Joinery & Woodwork",
      desc: "Toprock Joinery crafts custom woodwork and joinery solutions, combining traditional craftsmanship with modern precision for refined interiors.",
      tags: [tag("Custom Woodwork", "gear"), tag("Precision Joinery", "gear"), tag("Quality Materials", "shield"), tag("Skilled Artisans", "users")]
    },
    trk: {
      name: "Toprock Kitchen",
      logo: "assets/verticals/trk.png",
      url: "https://toprockkitchen.com/",
      tagline: "Commercial Kitchen Equipment",
      desc: "Toprock Kitchen Equipment outfits professional kitchens with reliable, high-performance equipment built for demanding hospitality environments.",
      tags: [tag("Durable Equipment", "shield"), tag("Hygiene Standards", "shield"), tag("Expert Installation", "users"), tag("After-Sales Support", "clock")]
    },
    trm: {
      name: "Toprock Marble",
      logo: "assets/verticals/trm.png",
      tagline: "Natural Stone & Marble",
      desc: "Toprock Marble sources and crafts premium natural stone, delivering timeless elegance for landmark interiors and facades.",
      tags: [tag("Premium Stone", "star"), tag("Skilled Craftsmanship", "users"), tag("Custom Finishes", "sparkle"), tag("Global Sourcing", "globe")]
    },
    trs: {
      name: "Toprock Steel",
      logo: "assets/verticals/trs.png",
      tagline: "Structural Steel & Fabrication",
      desc: "Toprock Steel delivers structural steel and fabrication solutions engineered for strength, precision, and long-term reliability.",
      tags: [tag("Structural Strength", "shield"), tag("Precision Fabrication", "gear"), tag("Safety First", "shield"), tag("Reliable Delivery", "clock")]
    },
    vb: {
      name: "VB World",
      logo: "assets/verticals/vb.png",
      url: "https://www.vbworldrestaurant.com/",
      tagline: "Global Cuisine",
      desc: "VB World brings the flavors of the world together, crafting a global dining experience rooted in quality ingredients and culinary passion.",
      tags: [tag("Global Menu", "globe"), tag("Culinary Passion", "flame"), tag("Quality Ingredients", "leaf"), tag("Warm Hospitality", "heart")]
    },
    bhavan: {
      name: "Vasanta Bhavan",
      logo: "assets/verticals/bhavan.png",
      tagline: "Vegetarian Family Restaurant, Since 1974",
      desc: "Namma Veedu Vasanta Bhavan has served authentic vegetarian cuisine since 1974, a family tradition rooted in taste, warmth, and heritage recipes.",
      tags: [tag("Since 1974", "star"), tag("Authentic Vegetarian", "leaf"), tag("Family Recipes", "users"), tag("Consistent Quality", "shield")]
    },
    cmg: {
      name: "Chandramari Group",
      logo: "assets/verticals/cmg.png",
      url: "https://chandramarigroup.com/",
      tagline: "Diversified Business Group",
      desc: "Chandramari Group is a diversified business group nurturing ventures across education, hospitality, and community-focused initiatives.",
      tags: [tag("Diversified Portfolio", "trending"), tag("Community Focus", "heart"), tag("Long-Term Vision", "trending"), tag("Trusted Legacy", "star")]
    },
    cmis: {
      name: "CMIS",
      logo: "assets/verticals/cmis.png",
      url: "https://cmis.ac.in/",
      tagline: "Chandramari International School",
      desc: "Chandramari International School nurtures young minds with a holistic, globally-minded curriculum that balances academics, values, and creativity.",
      tags: [tag("Holistic Learning", "book"), tag("Global Curriculum", "globe"), tag("Values-Driven", "heart"), tag("Creative Growth", "sparkle")]
    },
    jehangir: {
      name: "Jehangir's",
      logo: "assets/verticals/jehangir.png",
      tagline: "Indian Cuisine",
      desc: "Jehangir's celebrates the richness of Indian cuisine, pairing authentic spices and traditional techniques with a refined dining experience.",
      tags: [tag("Authentic Spices", "flame"), tag("Traditional Techniques", "users"), tag("Refined Dining", "star"), tag("Signature Recipes", "star")]
    },
    podusu: {
      name: "Podusu",
      logo: "assets/verticals/podusu.png",
      tagline: "Kids' Lifestyle Brand",
      desc: "Podusu creates playful, joyful products designed for children, bringing color and imagination to everyday moments.",
      tags: [tag("Playful Design", "sparkle"), tag("Child-Safe", "shield"), tag("Vibrant Colors", "sparkle"), tag("Imaginative Fun", "heart")]
    },
    kuppana: {
      name: "Junior Kuppanna",
      logo: "assets/verticals/kuppana.png",
      tagline: "Heritage Restaurant Brand",
      desc: "Junior Kuppanna carries forward a cherished culinary legacy, serving traditional recipes with the warmth of home-style hospitality.",
      tags: [tag("Heritage Recipes", "star"), tag("Home-Style Cooking", "heart"), tag("Family Legacy", "users"), tag("Warm Hospitality", "heart")]
    },
    lof: {
      name: "Lab of Future",
      logo: "assets/verticals/lof.png",
      tagline: "Be Curious — STEM & Innovation Learning",
      desc: "Lab of Future ignites curiosity through hands-on STEM education, empowering young innovators to explore, build, and dream beyond limits.",
      tags: [tag("Hands-On STEM", "book"), tag("Innovation Mindset", "sparkle"), tag("Future Skills", "trending"), tag("Curiosity-Led Learning", "book")]
    }
  };

  /* ---------- modal ---------- */
  var overlay = document.getElementById("vertModalOverlay");
  var modalLogo = document.getElementById("vertModalLogo");
  var modalName = document.getElementById("vertModalName");
  var modalTagline = document.getElementById("vertModalTagline");
  var modalDesc = document.getElementById("vertModalDesc");
  var modalTags = document.getElementById("vertModalTags");
  var modalClose = document.getElementById("vertModalClose");

  function openModal(id) {
    var data = VERTICALS[id];
    if (!data || !overlay) return;
    modalLogo.src = data.logo;
    modalLogo.alt = data.name;
    modalName.textContent = data.name;
    modalTagline.textContent = data.tagline;
    modalDesc.textContent = data.desc;
    modalTags.innerHTML = data.tags.map(function (t) {
      return '<span class="vert-modal-tag">' + icon(t.icon) + "<span>" + t.label + "</span></span>";
    }).join("");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    if (window.lenis) window.lenis.stop();
  }

  function closeModal() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    if (window.lenis) window.lenis.start();
  }

  if (overlay) {
    modalClose.addEventListener("click", closeModal);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ---------- slider (auto-scroll marquee, seamless loop) ---------- */
  function initSlider(trackId, prevId, nextId, pauseId, pauseIconId, progressId, speed) {
    var track = document.getElementById(trackId);
    var prevBtn = document.getElementById(prevId);
    var nextBtn = document.getElementById(nextId);
    var pauseBtn = document.getElementById(pauseId);
    var pauseIcon = document.getElementById(pauseIconId);
    var progress = document.getElementById(progressId);
    if (!track) return;

    track.innerHTML += track.innerHTML; // duplicate for seamless loop

    track.addEventListener("click", function (e) {
      var card = e.target.closest(".vert-card");
      if (card) openModal(card.getAttribute("data-vert"));
    });

    var pos = 0;
    var paused = false;
    var half = 0;

    function measure() {
      half = track.scrollWidth / 2;
    }
    measure();
    window.addEventListener("resize", measure);

    function render() {
      track.style.transform = "translateX(-" + pos + "px)";
      if (progress && half > 0) {
        progress.style.width = ((pos / half) * 100) + "%";
      }
    }

    function tick() {
      if (!paused && half > 0) {
        pos += speed;
        if (pos >= half) pos -= half;
        if (pos < 0) pos += half;
        render();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    var pauseSVG = pauseIcon.innerHTML;
    var playSVG = '<path d="M7 4l13 8-13 8z"/>';

    pauseBtn.addEventListener("click", function () {
      paused = !paused;
      pauseIcon.innerHTML = paused ? playSVG : pauseSVG;
      pauseBtn.setAttribute("aria-label", paused ? "Resume auto-scroll" : "Pause auto-scroll");
    });

    prevBtn.addEventListener("click", function () {
      pos -= 220;
      if (pos < 0) pos += half;
      render();
    });
    nextBtn.addEventListener("click", function () {
      pos += 220;
      if (pos >= half) pos -= half;
      render();
    });
  }

  initSlider("vertTrack1", "vertPrev1", "vertNext1", "vertPause1", "vertPauseIcon1", "vertProgress1", 0.45);
  initSlider("vertTrack2", "vertPrev2", "vertNext2", "vertPause2", "vertPauseIcon2", "vertProgress2", -0.35);
})();
