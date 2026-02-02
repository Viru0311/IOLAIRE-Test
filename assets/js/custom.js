(function initializeSplash() {
  const splashScreen = document.getElementById("splash-screen");
  const body = document.body;

  if (!splashScreen) return;

  // Storage wrapper for persistent storage API
  const storage = {
    async get(key) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        return null;
      }
    },
    async set(key, value) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (e) {
        return false;
      }
    },
    async delete(key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch (e) {
        return false;
      }
    },
  };

  async function checkSplashStatus() {
    const hasSeenSplash = await storage.get("homeSplashShown");

    if (hasSeenSplash === "true") {
      // Skip splash immediately
      skipSplash();
      return;
    }

    // Show splash for first-time visitors
    showSplashSequence();
  }

  function skipSplash() {
    body.classList.add("splash-complete");
    splashScreen.remove();
  }

  async function showSplashSequence() {
    const SPLASH_DURATION = 1500;
    const FADE_DURATION = 600;

    // Wait for splash duration
    await new Promise((resolve) => setTimeout(resolve, SPLASH_DURATION));

    // Start fade out
    splashScreen.classList.add("fade-out");

    // Wait for fade animation
    await new Promise((resolve) => setTimeout(resolve, FADE_DURATION));

    // Mark as complete
    await storage.set("homeSplashShown", "true");
    body.classList.add("splash-complete");
    splashScreen.remove();
  }


  window.resetSplash = async function () {
    await storage.delete("homeSplashShown");
    await storage.delete("cookieBannerAccepted");
    alert("Splash screen reset! Refresh the page to see it again.");
  };

  // Initialize
  checkSplashStatus();
})();

const scrollBtn = document.getElementById("scrollTopBtn");
const progressRing = document.querySelector(".progress-ring");
const circumference = 2 * Math.PI * 45;

progressRing.style.strokeDasharray = circumference;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollTop / docHeight;
  const offset = circumference - progress * circumference;

  progressRing.style.strokeDashoffset = offset;

  if (scrollTop > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

(function () {
  const contactBtn = document.getElementById("contactUsBtn");
  const contactModal = document.getElementById("contactModal");
  const closeBtn = document.getElementById("closeModal");

  if (!contactBtn || !contactModal) return;

  contactBtn.addEventListener("click", () => {
    contactModal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
  });

  contactModal
    .querySelector(".contact-overlay")
    .addEventListener("click", () => {
      contactModal.style.display = "none";
    });
})();
// Intellimize initialization
localStorage.removeItem("intellimize_opt_out_117647518");
if (localStorage.getItem("intellimize_data_tracking_type") !== "always") {
  localStorage.setItem("intellimize_data_tracking_type", "always");
}

// Webflow initialization
(function (e) {
  var s = { r: [] };
  e.wf = {
    r: s.r,
    ready: (t) => {
      s.r.push(t);
    },
  };
})(window);

// Intellimize anti-flicker
(function (e, t, p) {
  var n = document.documentElement,
    s = { p: [], r: [] },
    u = {
      p: s.p,
      r: s.r,
      push: function (e) {
        s.p.push(e);
      },
      ready: function (e) {
        s.r.push(e);
      },
    };
  (e.intellimize = u),
    (n.className += " " + p),
    setTimeout(function () {
      n.className = n.className.replace(RegExp(" ?" + p), "");
    }, t);
})(window, 4000, "anti-flicker");

// Intellimize client script
var wfClientScript = document.createElement("script");
(wfClientScript.src = "../cdn.intellimize.co/snippet/117647518.js"),
  (wfClientScript.async = !0),
  (wfClientScript.onerror = function () {
    document.documentElement.className =
      document.documentElement.className.replace(RegExp(" ?anti-flicker"), "");
  }),
  document.head.appendChild(wfClientScript);

// Google Analytics consent
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("consent", "default", {
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  personalization_storage: "denied",
  functionality_storage: "granted",
  security_storage: "granted",
  wait_for_update: 500,
});
gtag("set", "ads_data_redaction", true);
gtag("set", "url_passthrough", true);

// Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "../www.googletagmanager.com/gtm5445.html?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-MCGH8RV");

// Header scroll effect
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 991) {
    const header = document.querySelector(".header");
    if (!header) return; // safety check
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 50) {
        header.classList.add("is-compact");
      } else {
        header.classList.remove("is-compact");
      }
    });
  }
});

// Vehicle Detection System
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("vehicle-detection-overlay");
  const cardEl = document.getElementById("anpr-card");
  const plateEl = document.querySelector(".js-plate-number");
  const regionEl = document.querySelector(".js-plate-region");
  const typeEl = document.querySelector(".js-vehicle-model");
  const makeEl = document.querySelector(".js-vehicle-make");
  const colorEl = document.querySelector(".js-vehicle-color");
  const directionEl = document.querySelector(".js-vehicle-direction");
  const confidenceEl = document.querySelector(".js-vehicle-confidence");
  const statusEl = document.querySelector(".js-anpr-status");
  if (
    !overlay ||
    !cardEl ||
    !plateEl ||
    !regionEl ||
    !typeEl ||
    !colorEl ||
    !directionEl ||
    !confidenceEl ||
    !statusEl
  )
    return;

  // Vehicles mapped to the current "City Scape.jpg" banner
  // Each plate has separate fallback boxes for desktop and Mac 1280px
  const vehicles = [
    {
      id: "car-1",
      label: "BMW 3 Series Sedan",
      fallbackPlate: "LQR-A216",
      fallbackBox: { left: 0.15, top: 0.51, width: 50, height: 0.1 },
      fallbackBoxMac1280: { left: 0.15, top: 0.51, width: 50, leftOffset: "-2px", topOffset: "2px" },
      model: "3 Series (F30)",
      make: "BMW",
      color: "Silver",
      direction: "Moving East",
      confidence: "97.2%",
      region: "Texas",
    },
    {
      id: "car-2",
      label: "Volvo",
      fallbackPlate: "YSAM000",
      fallbackBox: { left: 0.377, top: 0.4, width: 41, height: 0.3 },
      fallbackBoxMac1280: { left: 0.377, top: 0.4, width: 41, leftOffset: "10px", topOffset: "3px" },
      model: "9700 Coach",
      make: "Volvo",
      color: "Blue",
      direction: "Moving East",
      confidence: "98.1%",
      region: "Texas",
    },
    {
      id: "car-3",
      label: "Tayota",
      fallbackPlate: "2AQC214",
      fallbackBox: { left: 0.72, top: 0.51, width: 44, height: 0.1 },
      fallbackBoxMac1280: { left: 0.72, top: 0.51, width: 44, leftOffset: "-2px", topOffset: "2px" },
      model: "Camry",
      make: "Tayota",
      color: "Red",
      direction: "Moving East",
      confidence: "96.5%",
      region: "California",
    },
    {
      id: "car-4",
      label: "BMW 4 Series",
      fallbackPlate: "GXB-5332",
      fallbackBox: { left: 0.32, top: 0.86, width: 105, height: 0.1 },
      fallbackBoxMac1280: { left: 0.32, top: 0.78, width: 105, leftOffset: "-2px", topOffset: "2px" },
      model: "4 Series Gran",
      make: "BMW",
      color: "Blue",
      direction: "Moving East",
      confidence: "97.9%",
      region: "New York",
    },
    {
      id: "car-5",
      label: "Honda Accord Sedan",
      fallbackPlate: "EST-1788",
      fallbackBox: { left: 0.59, top: 0.4, width: 35, height: 0.1 },
      fallbackBoxMac1280: { left: 0.59, top: 0.4, width: 35, leftOffset: "-2px", topOffset: "3px" },
      model: "Accord",
      make: "Honda",
      color: "Silver",
      direction: "Moving East",
      confidence: "96.8%",
      region: "Florida",
    },
  ];

  let isDetecting = false;
  let currentIndex = 0;

  function drawOverlayBox(box, plate, mac1280Box = null) {
    // Get existing box if any
    const existingBox = overlay.querySelector(".vehicle-detection-box");

    // If there's an existing box, fade it out first
    if (existingBox) {
      existingBox.classList.remove("active");
      existingBox.classList.add("fading-out");

      // Wait for fade out to complete (300ms), then remove and add new box
      setTimeout(() => {
        overlay.innerHTML = "";
        createNewBox(box, plate, mac1280Box);
      }, 300);
    } else {
      // No existing box, create new one directly
      createNewBox(box, plate, mac1280Box);
    }
  }

  function createNewBox(box, plate, mac1280Box = null) {
    const boxEl = document.createElement("div");
    boxEl.className = "vehicle-detection-box fading-in";

    // Check if Mac 1280px or smaller for positioning adjustments
    const isMac1280 = window.matchMedia("(max-width: 1280px)").matches;

    // Use Mac 1280px box if available and screen matches, otherwise use desktop box
    const activeBox = (isMac1280 && mac1280Box) ? mac1280Box : box;

    // Determine offsets based on plate and screen size
    let leftOffset = "0px";
    let topOffset = "3px";

    if (isMac1280 && mac1280Box) {
      // Use Mac 1280px specific offsets
      leftOffset = mac1280Box.leftOffset || "-2px";
      topOffset = mac1280Box.topOffset || "2px";
    } else {
      // Desktop: use plate-specific offsets
      const isVolvoBus = plate === "YSAM000";
      leftOffset = isVolvoBus ? "12px" : "0px";
      topOffset = "3px";
    }

    // Apply positioning
    boxEl.style.left = `calc(${activeBox.left * 100}% + ${leftOffset})`;
    boxEl.style.top = `calc(${activeBox.top * 100}% + ${topOffset})`;
    // Use custom width from active box data, or default to 60px
    const customWidth = activeBox.width || box.width || 60;
    boxEl.style.width = `${customWidth}px`;
    boxEl.style.minWidth = `${customWidth}px`;
    boxEl.style.maxWidth = `${customWidth}px`;
    // Ensure no padding/margin that would offset the green line
    boxEl.style.padding = "0";
    boxEl.style.margin = "0";
    boxEl.style.boxSizing = "border-box";
    // Height remains fixed for all boxes - consistent 40px height
    boxEl.style.height = "40px";
    boxEl.style.minHeight = "40px";
    boxEl.style.maxHeight = "40px";
    // Use box dimensions if provided, otherwise use defaults
    const label = document.createElement("span");
    label.className = "vehicle-detection-label";
    label.textContent = plate || "Plate";
    boxEl.appendChild(label);
    overlay.appendChild(boxEl);

    // Trigger fade in after a brief moment to ensure DOM is ready
    setTimeout(() => {
      boxEl.classList.remove("fading-in");
      boxEl.classList.add("active");
    }, 10);
  }

  function applyDetection(vehicle, result) {
    const plateText = result.plate || vehicle.fallbackPlate;
    plateEl.textContent = plateText;
    regionEl.textContent = result.region || vehicle.region || "US";
    typeEl.textContent = result.model || vehicle.model || "--";
    if (makeEl) makeEl.textContent = result.make || vehicle.make || "--";
    colorEl.textContent = result.color || vehicle.color;
    directionEl.textContent = result.direction || vehicle.direction;
    confidenceEl.textContent = result.confidence || vehicle.confidence;
    // Pass both desktop and Mac 1280px boxes
    drawOverlayBox(
      result.box || vehicle.fallbackBox,
      plateText,
      vehicle.fallbackBoxMac1280 || null
    );
    statusEl.className = "anpr-status is-detected";
    statusEl.textContent = "Plate detected";
  }

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async function detectForVehicle(vehicle) {
    if (isDetecting) return;
    isDetecting = true;

    // animate out current values
    cardEl.classList.add("is-updating");
    statusEl.className = "anpr-status is-loading";
    statusEl.textContent = "Detecting...";

    // small wait so outgoing animation is visible
    await sleep(140);

    try {
      // Replace this with your ALPR API call; ensure it returns
      // { plate, box: { left, top, width, height }, model, make, color, direction, confidence }
      const result = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            plate: vehicle.fallbackPlate,
            box: vehicle.fallbackBox,
            model: vehicle.model,
            make: vehicle.make,
            color: vehicle.color,
            direction: vehicle.direction,
            confidence: vehicle.confidence,
          });
        }, 200)
      );

      applyDetection(vehicle, result);

      // allow DOM to update then animate values in
      await sleep(40);
      cardEl.classList.remove("is-updating");
    } catch (err) {
      statusEl.className = "anpr-status is-error";
      statusEl.textContent = "Detection failed";
      console.error("ANPR detection error", err);
    } finally {
      isDetecting = false;
    }
  }

  // Continuous detection loop: show result, wait 1s, move to next vehicle, repeat
  (async function detectionLoop() {
    while (true) {
      const vehicle = vehicles[currentIndex];
      await detectForVehicle(vehicle);
      // show result for 1 second
      await sleep(2000);
      currentIndex = (currentIndex + 1) % vehicles.length;
    }
  })();
});

// AI Platform section reordering
document.addEventListener("DOMContentLoaded", () => {
  const sections = Array.from(
    document.querySelectorAll("section.is-ai-platform")
  );
  const aiSection = sections.find((section) => {
    const heading = section.querySelector("h2");
    return heading && heading.textContent.trim().startsWith("AI Platform");
  });
  const heroSection = document.querySelector(
    ".frame-section_wr.is-hero"
  )?.parentElement;
  if (aiSection && heroSection && heroSection.parentNode) {
    heroSection.parentNode.insertBefore(aiSection, heroSection.nextSibling);
  }
});

// Products card scroll
Webflow.push(function () {
  document
    .querySelectorAll('.products-card_link[href^="#"]')
    .forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault(); // Prevent Webflow's smooth scroll
          // Scroll manually
          const offsetTop =
            target.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
          // Remove hash after a short delay
          setTimeout(() => {
            history.replaceState(
              null,
              "",
              window.location.pathname + window.location.search
            );
          }, 10);
        }
      });
    });
});

// Card 4 Custom Scroll Animation - Show content when scrolled into view
document.addEventListener("DOMContentLoaded", function () {
  const cardFour = document.querySelector(".card-four-custom");

  if (!cardFour) {
    return;
  }

  // Check if mobile device - if mobile, disable all activation logic
  const isMobile = window.innerWidth <= 767;

  // On mobile, keep card 4 always visible and active, no scroll animation
  if (isMobile) {
    // Ensure card 4 is always visible and active on mobile
    cardFour.classList.add("card-four-active");

    // Get card 4 video elements and make sure they're visible
    const cardFourVideo = document.querySelector('[pr-video="four"]');
    const cardFourVideoCard = document.getElementById("edge-applications");

    if (cardFourVideo) {
      cardFourVideo.style.opacity = "1";
      cardFourVideo.style.visibility = "visible";
      cardFourVideo.style.pointerEvents = "";
    }
    if (cardFourVideoCard) {
      cardFourVideoCard.style.opacity = "1";
      cardFourVideoCard.style.visibility = "visible";
      cardFourVideoCard.style.pointerEvents = "";
    }

    // Ensure card 3 is visible on mobile (don't hide it)
    const cardThree = document.querySelector('[pr-card="three"]');
    const cardThreeVideo = document.querySelector('[pr-video="three"]');
    const cardThreeVideoCard = document.getElementById("conv-intel");

    if (cardThree) {
      cardThree.classList.remove("card-three-hidden");
    }
    if (cardThreeVideo) {
      cardThreeVideo.style.opacity = "";
      cardThreeVideo.style.visibility = "";
      cardThreeVideo.style.pointerEvents = "";
    }
    if (cardThreeVideoCard) {
      cardThreeVideoCard.style.opacity = "";
      cardThreeVideoCard.style.visibility = "";
      cardThreeVideoCard.style.pointerEvents = "";
    }

    // Don't run any scroll listeners on mobile
    return;
  }

  // Desktop-only code below
  // Get Edge Applications image in platform slider
  const edgeAppImages = document.querySelectorAll(
    '.platform_sl-img[alt="Edge Applications"]'
  );

  // Get other cards for comparison
  const cardOne = document.querySelector('[pr-card="one"]');
  const cardTwo = document.querySelector('[pr-card="two"]');
  const cardThree = document.querySelector('[pr-card="three"]');

  // Function to activate Edge Applications image
  function activateEdgeAppImage() {
    edgeAppImages.forEach(function (img) {
      img.style.filter = "grayscale(0%) brightness(1) !important";
      img.style.opacity = "1 !important";
    });
  }

  // Function to deactivate Edge Applications image (keep it grey)
  function deactivateEdgeAppImage() {
    edgeAppImages.forEach(function (img) {
      img.style.filter = "grayscale(100%) brightness(0.6) !important";
      img.style.opacity = "0.7 !important";
    });
  }

  // Function to check which card is most prominently in view
  function getActiveCard() {
    const cards = [
      { el: cardOne, num: 1 },
      { el: cardTwo, num: 2 },
      { el: cardThree, num: 3 },
      { el: cardFour, num: 4 },
    ].filter((c) => c.el !== null);

    let activeCard = null;
    let maxVisibility = 0;

    cards.forEach(function (card) {
      const rect = card.el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how much of the card is visible in the viewport
      const cardTop = Math.max(0, rect.top);
      const cardBottom = Math.min(viewportHeight, rect.bottom);
      const visibleHeight = Math.max(0, cardBottom - cardTop);
      const visibilityRatio =
        visibleHeight / Math.min(rect.height, viewportHeight);

      // Also check if card is in the center area of viewport (more important)
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
      const centerScore = 1 / (1 + distanceFromCenter / 100); // Closer to center = higher score

      // Combined score: visibility + center position
      const score = visibilityRatio * 0.6 + centerScore * 0.4;

      if (score > maxVisibility && visibilityRatio > 0.3) {
        maxVisibility = score;
        activeCard = card.num;
      }
    });

    return activeCard;
  }

  // Ensure card 4 starts in inactive state (desktop only)
  cardFour.classList.remove("card-four-active");
  deactivateEdgeAppImage(); // Keep image grey initially

  // Get card 3 video elements (desktop only)
  const cardThreeVideo = document.querySelector('[pr-video="three"]');
  const cardThreeVideoCard = document.getElementById("conv-intel");

  // Get card 4 video elements (desktop only)
  const cardFourVideo = document.querySelector('[pr-video="four"]');
  const cardFourVideoCard = document.getElementById("edge-applications");

  // Function to deactivate card 3 (hide content and video, but show heading with opacity)
  function deactivateCardThree() {
    if (cardThree) {
      cardThree.classList.add("card-three-hidden");
    }
    if (cardThreeVideo) {
      cardThreeVideo.style.opacity = "0";
      cardThreeVideo.style.visibility = "hidden";
      cardThreeVideo.style.pointerEvents = "none";
    }
    if (cardThreeVideoCard) {
      cardThreeVideoCard.style.opacity = "0";
      cardThreeVideoCard.style.visibility = "hidden";
      cardThreeVideoCard.style.pointerEvents = "none";
    }
  }

  // Function to reactivate card 3 (show content and video)
  function reactivateCardThree() {
    if (cardThree) {
      cardThree.classList.remove("card-three-hidden");
    }
    if (cardThreeVideo) {
      cardThreeVideo.style.opacity = "";
      cardThreeVideo.style.visibility = "";
      cardThreeVideo.style.pointerEvents = "";
    }
    if (cardThreeVideoCard) {
      cardThreeVideoCard.style.opacity = "";
      cardThreeVideoCard.style.visibility = "";
      cardThreeVideoCard.style.pointerEvents = "";
    }
  }

  // Function to show card 4 video
  function showCardFourVideo() {
    if (cardFourVideo) {
      cardFourVideo.style.opacity = "1";
      cardFourVideo.style.visibility = "visible";
      cardFourVideo.style.pointerEvents = "";
    }
    if (cardFourVideoCard) {
      cardFourVideoCard.style.opacity = "1";
      cardFourVideoCard.style.visibility = "visible";
      cardFourVideoCard.style.pointerEvents = "";
    }
  }

  // Function to hide card 4 video
  function hideCardFourVideo() {
    if (cardFourVideo) {
      cardFourVideo.style.opacity = "0";
      cardFourVideo.style.visibility = "hidden";
      cardFourVideo.style.pointerEvents = "none";
    }
    if (cardFourVideoCard) {
      cardFourVideoCard.style.opacity = "0";
      cardFourVideoCard.style.visibility = "hidden";
      cardFourVideoCard.style.pointerEvents = "none";
    }
  }

  // Ensure card 3 starts in normal state (not hidden)
  if (cardThree) {
    cardThree.classList.remove("card-three-hidden");
  }
  reactivateCardThree(); // Make sure card 3 is visible initially

  // Function to update card 4 state based on scroll position
  function updateCardFourState() {
    const activeCard = getActiveCard();

    if (activeCard === 4) {
      // Card 4 is the active card - activate it and deactivate card 3
      if (!cardFour.classList.contains("card-four-active")) {
        cardFour.classList.add("card-four-active");
        activateEdgeAppImage();
        deactivateCardThree(); // Hide card 3 content/video when card 4 is active
        showCardFourVideo(); // Show card 4 video
      }
    } else {
      // Card 4 is not the active card - deactivate it and reactivate card 3
      if (cardFour.classList.contains("card-four-active")) {
        cardFour.classList.remove("card-four-active");
        deactivateEdgeAppImage();
        reactivateCardThree(); // Show card 3 when card 4 is not active
        hideCardFourVideo(); // Hide card 4 video
      }
    }
  }

  // Desktop-only scroll animation
  // Update on scroll with throttling
  let scrollTimeout;
  window.addEventListener(
    "scroll",
    function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateCardFourState, 50);
    },
    { passive: true }
  );

  // Initial check
  setTimeout(updateCardFourState, 100);

  // Use Intersection Observer as a backup (desktop only)
  const cardFourObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        // Only activate if card 4 is significantly in view AND is the active card
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const activeCard = getActiveCard();
          if (activeCard === 4) {
            entry.target.classList.add("card-four-active");
            activateEdgeAppImage();
            deactivateCardThree(); // Hide card 3 content/video when card 4 is active
            showCardFourVideo(); // Show card 4 video
          }
        } else {
          // Card 4 is not prominently in view - check if we should deactivate
          const activeCard = getActiveCard();
          if (activeCard !== 4) {
            entry.target.classList.remove("card-four-active");
            deactivateEdgeAppImage();
            reactivateCardThree(); // Show card 3 when card 4 is not active
            hideCardFourVideo(); // Hide card 4 video
          }
        }
      });
    },
    {
      threshold: [0, 0.3, 0.5, 0.7], // Multiple thresholds for better detection
      rootMargin: "0px 0px -200px 0px", // Require card to be more centered
    }
  );

  // Start observing card 4 (desktop only)
  cardFourObserver.observe(cardFour);
});

// Privacy settings button
document.addEventListener("DOMContentLoaded", function () {
  var privacyButton = document.getElementById("privacySettings");
  if (privacyButton) {
    privacyButton.addEventListener("click", function (event) {
      UC_UI.showSecondLayer();
      event.preventDefault();
      return false;
    });
  }
});

// NeverBounce Settings
_NBSettings = {
  apiKey: "public_cb9a1bcd4f74e52cb751e3b3ffe5a323",
  feedback: false,
};

// NeverBounce email validation
document
  .querySelector("body")
  .addEventListener("nb:registered", function (event) {
    const field = document.querySelector(
      '[data-nb-id="' + event.detail.id + '"]'
    );

    if (!field || field.type !== "email") return;

    // Build HubSpot-like error wrapper
    const errorWrapper = document.createElement("ul");
    errorWrapper.className =
      "no-list hs-error-msgs inputs-list hs-custom-business-email-error";
    errorWrapper.setAttribute("role", "alert");

    const li = document.createElement("li");
    const label = document.createElement("label");
    label.className = "hs-error-msg hs-main-font-element";
    label.textContent = "Please enter a valid business email address.";

    li.appendChild(label);
    errorWrapper.appendChild(li);

    // Parent input wrapper
    const inputWrapper = field.closest(".hs_email");

    // Find closest submit button
    const form = field.closest("form");
    const submitBtn = form
      ? form.querySelector('button[type="submit"], input[type="submit"]')
      : null;
    if (!submitBtn) return;

    function enableSubmit() {
      submitBtn.disabled = false;
      submitBtn.style.opacity = 1;
      submitBtn.style.cursor = "pointer";
      submitBtn.style.backgroundColor = "";
    }

    function disableSubmit() {
      submitBtn.disabled = true;
      submitBtn.style.opacity = 0.5;
      submitBtn.style.cursor = "not-allowed";
      submitBtn.style.backgroundColor = "grey";
    }

    // nb:result from API
    field.addEventListener("nb:result", function (e) {
      const result = e.detail.result.response.result;
      if (result === "valid") {
        enableSubmit();
        const hsEmailWrapper = field
          .closest(".hs_email")
          .querySelector(".hs-error-msgs.hs-custom-business-email-error");
        if (hsEmailWrapper) {
          hsEmailWrapper.remove();
        }
      } else {
        disableSubmit();

        // Check for existing HubSpot errors inside hs_email wrapper
        const hsEmailWrapper = field
          .closest(".hs_email")
          .querySelector(".hs-error-msgs:not(.hs-custom-business-email-error)");

        if (!hsEmailWrapper) {
          inputWrapper.appendChild(errorWrapper);
        } else {
          const hsEmailWrapper = field
            .closest(".hs_email")
            .querySelector(".hs-error-msgs.hs-custom-business-email-error");

          if (hsEmailWrapper) {
            hsEmailWrapper.remove();
          }
        }
      }
    });

    // nb:soft-result from regex
    field.addEventListener("nb:soft-result", function (e) {
      if (e.detail.result === true) {
        enableSubmit();
      } else {
        disableSubmit();
      }
    });
  });

// Video player initialization
document.querySelectorAll("[data-video-wrapper]").forEach((el) => {
  new VideoPlayer(el, {
    autoplay: true,
    muted: true,
    loop: true,
    autoresume: true,
    aspectInitial: "1:1",
  });
});

// Integration cards expansion
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".int_card");
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      cards.forEach(function (el) {
        el.classList.remove("is-expanded");
      });
      card.classList.add("is-expanded");
    });
  });
  // Don't auto-expand first card - let user scroll and click to activate
  // Removed: cards[0].click();
});

// Reinitialize Webflow interactions
window.addEventListener("load", function () {
  // Reinitialize Webflow interactions to ensure animations work after section move
  if (window.Webflow && window.Webflow.destroy && window.Webflow.ready) {
    // Force reinitialize interactions
    setTimeout(function () {
      if (window.ix2) {
        window.ix2.init();
      }
      // Trigger scroll event to reinitialize scroll-based animations
      window.dispatchEvent(new Event("scroll"));
      // Small delay then trigger again to ensure it catches
      setTimeout(function () {
        window.dispatchEvent(new Event("scroll"));
      }, 100);
    }, 100);
  }
});

// Move videos for mobile
function moveVideosForMobile() {
  if (window.innerWidth <= 991) {
    var videos = document.querySelectorAll("[pr-video]");
    videos.forEach(function (video) {
      var value = video.getAttribute("pr-video");
      var matchingCard = document.querySelector('[pr-card="' + value + '"]');
      if (matchingCard && !matchingCard.contains(video)) {
        matchingCard.appendChild(video);
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let wasMobile = window.innerWidth <= 991; // Track if user started on mobile width
  moveVideosForMobile();
  window.addEventListener("resize", function () {
    const isMobile = window.innerWidth <= 991;
    // If transitioning from mobile to desktop, reload the page
    if (wasMobile && !isMobile) {
      location.reload();
    }
    wasMobile = isMobile; // Update for next resize
    moveVideosForMobile();
  });
});

// CTA form email storage and redirect
let emailContactField = document.getElementById("email-contact");
let submitBtn = document.getElementById("submit");

if (submitBtn) {
  submitBtn.disabled = true;
  submitBtn.style.opacity = 0.5;
  submitBtn.style.cursor = "not-allowed";

  document
    .querySelector("body")
    .addEventListener("nb:registered", function (event) {
      // Get field using id from registered event
      let field = document.querySelector(
        '[data-nb-id="' + event.detail.id + '"]'
      );
      // Handle results (API call has succeeded)
      field.addEventListener("nb:result", function (e) {
        if (e.detail.result.is(_nb.settings.getAcceptedStatusCodes())) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = 1;
          submitBtn.style.cursor = "pointer";
        } else {
          submitBtn.style.cursor = "not-allowed";
          submitBtn.disabled = true;
          submitBtn.style.opacity = 0.5;
        }
      });

      // Handle soft results (fails regex; doesn't bother making API request)
      field.addEventListener("nb:soft-result", function (e) {
        if (e.detail.result == true) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = 1;
          submitBtn.style.cursor = "pointer";
        } else {
          submitBtn.style.cursor = "not-allowed";
          submitBtn.disabled = true;
          submitBtn.style.opacity = 0.5;
        }
      });
    });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("wf-form-wf-contact-mini-black");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!submitBtn.disabled) {
          if (emailContactField && emailContactField.value.trim() !== "") {
            sessionStorage.setItem("email", emailContactField.value.trim());
            window.location.href = "calendar.html";
          }
        } else {
          console.log("❌ Email not valid, blocking submit");
        }

        return false;
      });
    }
  });
}

// Banner management
// document.addEventListener("DOMContentLoaded", function () {
//   const banner = document.querySelector(".nav__banner");
//   const closeButton = document.getElementById("banner-close");
//   const menuBtn = document.querySelector(".nav__menu-button");

//   if (menuBtn && closeButton) {
//     menuBtn.addEventListener("click", () => {
//       closeButton.click();
//     });
//   }

//   // Check if banner should be shown based on attribute
//   const bannerState = banner?.getAttribute("data-banner");
//   if (bannerState === "hide") {
//     banner?.classList.remove("show");
//     return; // skip all logic
//   }

//   const lastShown = localStorage.getItem("bannerLastShown");
//   const now = new Date();

//   let shouldShow = true;

//   if (lastShown) {
//     const lastShownDate = new Date(lastShown);
//     const diffDays = Math.floor((now - lastShownDate) / (1000 * 60 * 60 * 24));
//     if (diffDays <= 7) {
//       shouldShow = false;
//     }
//   }

//   const bannerClosed = localStorage.getItem("bannerClosed");
//   if (bannerClosed === "true") {
//     shouldShow = false;
//   }

//   if (shouldShow) {
//     banner?.classList.add("show");
//   }

//   closeButton?.addEventListener("click", function () {
//     banner?.classList.remove("show");
//     localStorage.setItem("bannerClosed", "true");
//     localStorage.setItem("bannerLastShown", now.toISOString());
//   });
// });

// Scroll-triggered fade-in animation for industries section
document.addEventListener("DOMContentLoaded", function () {
  const industryCards = document.querySelectorAll(".industry-card");

  if (industryCards.length === 0) return;

  const observerOptions = {
    threshold: 0.2, // Trigger when 20% of element is visible
    rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  industryCards.forEach((card) => {
    observer.observe(card);
  });
});

// Initialize Community Safety Slider
(function () {
  // First, ensure images are visible immediately
  function showImages() {
    const slides = document.querySelectorAll(
      ".community-safety-slider .swiper-slide"
    );
    slides.forEach(function (slide) {
      const img = slide.querySelector("img");
      if (img) {
        img.style.display = "block";
        img.style.opacity = "1";
        img.style.visibility = "visible";
      }
    });
  }

  // Show images immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showImages);
  } else {
    showImages();
  }

  // Initialize Swiper when ready
  function initCommunitySafetySlider() {
    const communitySafetySlider = document.querySelector(
      ".community-safety-slider"
    );

    if (!communitySafetySlider) return;

    // Wait for Swiper library
    function tryInit() {
      if (typeof Swiper !== "undefined") {
        try {
          new Swiper(".community-safety-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            },
            pagination: {
              el: ".community-safety-pagination",
              clickable: true,
              dynamicBullets: true,
            },
            navigation: {
              nextEl: ".community-safety-next",
              prevEl: ".community-safety-prev",
            },
            effect: "fade",
            fadeEffect: {
              crossFade: true,
            },
            speed: 800,
            allowTouchMove: true,
            grabCursor: true,
            watchSlidesProgress: true,
            preventInteractionOnTransition: true,
            on: {
              init: function () {
                // Ensure images are visible after initialization
                const slides = this.slides;
                slides.forEach(function (slide) {
                  const img = slide.querySelector("img");
                  if (img) {
                    img.style.display = "block";
                    img.style.opacity = "1";
                    img.style.visibility = "visible";
                  }
                });
              },
            },
          });
        } catch (e) {
          console.error("Swiper initialization error:", e);
          showImages(); // Fallback: show images anyway
        }
      } else {
        // Swiper not loaded yet, try again
        setTimeout(tryInit, 100);
      }
    }

    // Start trying to initialize
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", tryInit);
    } else {
      tryInit();
    }
  }

  initCommunitySafetySlider();
})();
window.addEventListener("load", () => {
  document.getElementById("loader")?.remove();
});