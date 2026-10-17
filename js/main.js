/**
 * KAPA Automobile - Main JavaScript
 * Schnelle, saubere Interaktionen & On-Site Fahrzeugansicht
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==================== 1. MOBILE MENU DRAWER ====================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (hamburgerBtn && mobileNavDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    mobileNavDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==================== 2. SMOOTH SCROLLING ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==================== 3. ON-SITE FAHRZEUG DETAIL MODAL & BILDERGALERIE ====================
  function generateImagePaths(slug, count) {
    return Array.from({ length: count }, (_, i) => `assets/images/cars/${slug}/${i + 1}.jpg`);
  }

  const vehicleData = {
    'vw-up': {
      title: 'Volkswagen move up!',
      subtitle: 'Sofort verfügbar • Geprüfte Qualität • Köngen',
      price: '6.700 €',
      badge: 'Geprüfter Gebrauchtwagen',
      image: 'assets/images/cars/vw-up/1.jpg',
      images: generateImagePaths('vw-up', 32),
      mobileUrl: 'https://suchen.mobile.de/fahrzeuge/details.html?id=48640093369184',
      specs: {
        'Kilometerstand': '97.920 km',
        'Erstzulassung': '06/2016',
        'Kraftstoffart': 'Benzin',
        'Getriebeart': 'Schaltgetriebe',
        'Leistung': '44 kW (60 PS)',
        'HU & AU': 'Mindestens 13 Monate',
        'Fahrzeughalter': '2',
        'Garantie': 'Bis zu 24 Monate möglich',
        'Farbe': 'Schwarz'
      },
      desc: 'Sehr gepflegter und zuverlässiger Volkswagen move up! aus solidem Vorbesitz. Das Fahrzeug überzeugt durch niedrige Betriebskosten, Sparsamkeit im Stadtverkehr und eine vorbildliche Sicherheitsausstattung. Vor Übergabe wird das Fahrzeug von uns umfassend geprüft. Auf Wunsch mit bis zu 24 Monaten Gebrauchtwagengarantie.',
      features: [
        'Klimaanlage',
        'Radio mit CD / MP3 / AUX',
        'Elektrische Fensterheber vorn',
        'Zentralverriegelung mit Funkfernbedienung',
        'ISOFIX Kindersitzbefestigung',
        'Tagfahrlicht',
        'ABS & ESP',
        'Reifendruckkontrollsystem',
        'Servolenkung geschwindigkeitsabhängig',
        'Gepäckraumabdeckung'
      ]
    },
    'hyundai-i30': {
      title: 'Hyundai i30 Style',
      subtitle: 'Sofort verfügbar • Neuzugang • Köngen',
      price: '11.700 €',
      badge: 'Neuzugang',
      image: 'assets/images/cars/hyundai-i30/1.jpg',
      images: generateImagePaths('hyundai-i30', 36),
      mobileUrl: 'https://suchen.mobile.de/fahrzeuge/details.html?id=49285157850720',
      specs: {
        'Kilometerstand': '106.300 km',
        'Erstzulassung': '03/2018',
        'Kraftstoffart': 'Benzin',
        'Getriebeart': 'Schaltgetriebe',
        'Leistung': '88 kW (120 PS)',
        'HU & AU': 'Mindestens 13 Monate',
        'Fahrzeughalter': '1. Hand / Scheckheft',
        'Garantie': 'Bis zu 24 Monate möglich',
        'Farbe': 'Silber Metallic'
      },
      desc: 'Top gepflegter Hyundai i30 in der gehobenen Style-Ausstattung. Das Fahrzeug bietet großzügige Platzverhältnisse, modernen Infotainment-Komfort inklusive Navigationssystem und Smartphone-Anbindung sowie effiziente Benzinmotoren-Technologie. Werkstattgeprüft und bereit zur Probefahrt nach Absprache.',
      features: [
        'Navigationssystem mit Touchscreen',
        'Rückfahrkamera & Einparkhilfe hinten',
        'Sitzheizung vorn',
        'Beheizbares Multifunktions-Lederlenkrad',
        'Apple CarPlay & Android Auto',
        '2-Zonen Klimaautomatik',
        'Spurhalteassistent & Notbremsassistent',
        'LED-Tagfahrlicht & Nebelscheinwerfer',
        'Geschwindigkeitsregelanlage (Tempomat)',
        'Leichtmetallfelgen'
      ]
    },
    'skoda-citigo': {
      title: 'Skoda Citigo FUN',
      subtitle: 'Sofort verfügbar • Sondermodell • Köngen',
      price: '9.400 €',
      badge: 'Geprüfter Gebrauchtwagen',
      image: 'assets/images/cars/skoda-citigo/1.jpg',
      images: generateImagePaths('skoda-citigo', 39),
      mobileUrl: 'https://suchen.mobile.de/fahrzeuge/details.html?id=48268359651136',
      specs: {
        'Kilometerstand': '77.400 km',
        'Erstzulassung': '05/2017',
        'Kraftstoffart': 'Benzin',
        'Getriebeart': 'Schaltgetriebe',
        'Leistung': '44 kW (60 PS)',
        'HU & AU': 'Mindestens 13 Monate',
        'Fahrzeughalter': '2',
        'Garantie': 'Bis zu 24 Monate möglich',
        'Farbe': 'Weiß / FUN Dekor'
      },
      desc: 'Beliebtes Sondermodell Skoda Citigo FUN mit auffälligen Design-Details und sehr geringer Kilometerlaufleistung. Absolut wendig, enorm sparsam im Verbrauch und sehr günstig im Unterhalt. Das ideale Auto für Pendler, Fahranfänger oder als spritziger Zweitwagen.',
      features: [
        'FUN Sondermodell-Ausstattung',
        'Klimaanlage',
        'Leichtmetallfelgen im exklusiven FUN-Design',
        'Radio Swing mit Bluetooth & Freisprecheinrichtung',
        'Bordcomputer / Multifunktionsanzeige',
        'Zentralverriegelung mit Funk',
        'Elektrische Fensterheber',
        'Tagfahrlicht',
        'Getönte Heckscheiben (Sunset)',
        'ISOFIX Halterungen'
      ]
    },
    'opel-adam': {
      title: 'Opel Adam Rocks',
      subtitle: 'Sofort verfügbar • Faltdach • Köngen',
      price: '6.900 €',
      badge: 'Geprüfter Gebrauchtwagen',
      image: 'assets/images/cars/opel-adam/1.jpg',
      images: generateImagePaths('opel-adam', 40),
      mobileUrl: 'https://suchen.mobile.de/fahrzeuge/details.html?id=46116543481024',
      specs: {
        'Kilometerstand': '142.614 km',
        'Erstzulassung': '01/2016',
        'Kraftstoffart': 'Benzin',
        'Getriebeart': 'Schaltgetriebe',
        'Leistung': '64 kW (87 PS)',
        'HU & AU': 'Mindestens 13 Monate',
        'Fahrzeughalter': '2',
        'Garantie': 'Bis zu 24 Monate möglich',
        'Farbe': 'Gelb / Schwarzes Dach'
      },
      desc: 'Individueller Opel Adam Rocks im robusten Crossover-Look mit elektrischem Swing-Top Stoff-Faltdach. Genießen Sie Cabrio-Gefühl auf Knopfdruck bei vollständiger Alltagstauglichkeit. Stilvolle Teilleder-Sitze, Touchscreen-Multimediasystem und unverwechselbares Design.',
      features: [
        'Elektrisches Swing-Top Faltdach (Cabrio-Feeling)',
        'Rocks Crossover-Karosseriepaket',
        'Teillederausstattung',
        'Klimaanlage',
        'IntelliLink Multimediasystem mit Bluetooth',
        'City-Modus Servolenkung (extra leichtgängig)',
        'Geschwindigkeitsregler (Tempomat)',
        'Leichtmetallfelgen 17 Zoll',
        'Lederlenkrad mit Multifunktionstasten',
        'Elektrisch einstellbare Außenspiegel'
      ]
    }
  };

  const modalBackdrop = document.getElementById('vehicleModalBackdrop');
  const modalCloseBtn = document.getElementById('vehicleModalCloseBtn');
  const modalImg = document.getElementById('modalVehicleImg');
  const galleryMain = document.getElementById('modalGalleryMain');
  const galleryThumbs = document.getElementById('modalGalleryThumbs');
  const galleryCounterText = document.getElementById('galleryCounterText');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');
  const galleryFullscreenBtn = document.getElementById('galleryFullscreenBtn');

  // Lightbox
  const vehicleLightbox = document.getElementById('vehicleLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  let activeVehicle = null;
  let activeImageIdx = 0;

  function setGalleryImage(index, animate = true) {
    if (!activeVehicle || !activeVehicle.images || activeVehicle.images.length === 0) return;
    const total = activeVehicle.images.length;
    activeImageIdx = (index + total) % total;
    const imgSrc = activeVehicle.images[activeImageIdx];

    if (modalImg) {
      if (animate) {
        modalImg.classList.add('fading');
        setTimeout(() => {
          modalImg.src = imgSrc;
          modalImg.alt = `${activeVehicle.title} - Bild ${activeImageIdx + 1}`;
          modalImg.classList.remove('fading');
        }, 120);
      } else {
        modalImg.src = imgSrc;
        modalImg.alt = `${activeVehicle.title} - Bild ${activeImageIdx + 1}`;
      }
    }

    if (galleryCounterText) {
      galleryCounterText.textContent = `${activeImageIdx + 1} / ${total}`;
    }

    if (galleryThumbs) {
      const thumbs = galleryThumbs.querySelectorAll('.vehicle-gallery-thumb-item');
      thumbs.forEach((th, i) => {
        if (i === activeImageIdx) {
          th.classList.add('active');
          th.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          th.classList.remove('active');
        }
      });
    }

    // Lightbox synchronisieren
    if (vehicleLightbox && vehicleLightbox.classList.contains('active')) {
      if (lightboxImg) {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = `${activeVehicle.title} - Bild ${activeImageIdx + 1}`;
      }
      if (lightboxCaption) {
        lightboxCaption.textContent = `${activeVehicle.title} • Bild ${activeImageIdx + 1} von ${total}`;
      }
    }
  }

  function nextGalleryImage() {
    setGalleryImage(activeImageIdx + 1);
  }

  function prevGalleryImage() {
    setGalleryImage(activeImageIdx - 1);
  }

  function openLightbox() {
    if (!activeVehicle || !activeVehicle.images || !vehicleLightbox) return;
    vehicleLightbox.classList.add('active');
    vehicleLightbox.setAttribute('aria-hidden', 'false');
    setGalleryImage(activeImageIdx, false);
  }

  function closeLightbox() {
    if (!vehicleLightbox) return;
    vehicleLightbox.classList.remove('active');
    vehicleLightbox.setAttribute('aria-hidden', 'true');
  }

  // Gallery Navigation Buttons
  if (galleryPrevBtn) galleryPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevGalleryImage(); });
  if (galleryNextBtn) galleryNextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextGalleryImage(); });
  if (galleryFullscreenBtn) galleryFullscreenBtn.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(); });
  if (modalImg) modalImg.addEventListener('click', openLightbox);

  // Lightbox Navigation Buttons
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevGalleryImage(); });
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextGalleryImage(); });
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (vehicleLightbox) {
    vehicleLightbox.addEventListener('click', (e) => {
      if (e.target === vehicleLightbox || e.target.closest('.lightbox-content') === null) {
        closeLightbox();
      }
    });
  }

  // Touch Swipe Support für mobile Geräte
  function attachSwipeListener(element, onSwipeLeft, onSwipeRight) {
    if (!element) return;
    let touchStartX = 0;
    let touchStartY = 0;

    element.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Nur horizontale Swipes berücksichtigen
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          onSwipeLeft();
        } else {
          onSwipeRight();
        }
      }
    }, { passive: true });
  }

  attachSwipeListener(galleryMain, nextGalleryImage, prevGalleryImage);
  attachSwipeListener(vehicleLightbox, nextGalleryImage, prevGalleryImage);

  function openVehicleModal(vehicleId) {
    const data = vehicleData[vehicleId];
    if (!data || !modalBackdrop) return;

    activeVehicle = data;
    activeImageIdx = 0;

    // Badge
    const badgeEl = document.getElementById('modalVehicleBadge');
    if (badgeEl) {
      badgeEl.textContent = data.badge;
    }

    // Titel & Preis
    const titleEl = document.getElementById('modalVehicleTitle');
    if (titleEl) titleEl.textContent = data.title;

    const subEl = document.getElementById('modalVehicleSubtitle');
    if (subEl) subEl.textContent = data.subtitle;

    const priceEl = document.getElementById('modalVehiclePrice');
    if (priceEl) priceEl.textContent = data.price;

    // Thumbnails initialisieren
    if (galleryThumbs) {
      galleryThumbs.innerHTML = '';
      if (data.images && data.images.length > 0) {
        data.images.forEach((imgUrl, i) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = `vehicle-gallery-thumb-item ${i === 0 ? 'active' : ''}`;
          btn.setAttribute('aria-label', `Bild ${i + 1} von ${data.images.length} anzeigen`);
          btn.innerHTML = `<img src="${imgUrl}" alt="${data.title} Foto ${i + 1}" loading="lazy">`;
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            setGalleryImage(i);
          });
          galleryThumbs.appendChild(btn);
        });
      }
    }

    // Erstes Bild setzen
    setGalleryImage(0, false);

    // Technische Daten Grid
    const specsContainer = document.getElementById('modalVehicleSpecs');
    if (specsContainer) {
      specsContainer.innerHTML = '';
      for (const [key, val] of Object.entries(data.specs)) {
        const item = document.createElement('div');
        item.className = 'vehicle-modal-spec-item';
        item.innerHTML = `
          <span class="vehicle-modal-spec-label">${key}</span>
          <span class="vehicle-modal-spec-value">${val}</span>
        `;
        specsContainer.appendChild(item);
      }
    }

    // Beschreibung
    const descEl = document.getElementById('modalVehicleDesc');
    if (descEl) descEl.textContent = data.desc;

    // Ausstattungsmerkmale Tags
    const featContainer = document.getElementById('modalVehicleFeatures');
    if (featContainer) {
      featContainer.innerHTML = '';
      data.features.forEach(feat => {
        const tag = document.createElement('span');
        tag.className = 'vehicle-modal-feature-tag';
        tag.textContent = feat;
        featContainer.appendChild(tag);
      });
    }

    // WhatsApp Action Button
    const btnWhatsApp = document.getElementById('modalBtnWhatsApp');
    if (btnWhatsApp) {
      const waText = `Hallo KAPA Automobile,\n\nich interessiere mich für das Fahrzeug:\n• ${data.title} (${data.price})\n\nIst das Fahrzeug noch verfügbar und wann wäre eine Besichtigung / Probefahrt möglich?`;
      btnWhatsApp.href = `https://wa.me/4915786845412?text=${encodeURIComponent(waText)}`;
    }

    // E-Mail Action Button
    const btnEmail = document.getElementById('modalBtnEmail');
    if (btnEmail) {
      const mailSubject = `Fahrzeuganfrage: ${data.title} (${data.price})`;
      const mailBody = `Hallo KAPA Automobile,\n\nich interessiere mich für das folgende Fahrzeug auf Ihrer Website:\n\n• Modell: ${data.title}\n• Preis: ${data.price}\n\nBitte nehmen Sie bezüglich Verfügbarkeit und Terminabsprache Kontakt mit mir auf.\n\nMit freundlichen Grüßen`;
      btnEmail.href = `mailto:info@kapa-automobile.de?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    }

    // Externe mobile.de Weiterleitung
    const btnMobile = document.getElementById('modalBtnMobileLink');
    if (btnMobile) {
      btnMobile.href = data.mobileUrl;
    }

    // Anzeigen
    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeVehicleModal() {
    closeLightbox();
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeVehicleModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeVehicleModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      // Tastatur-Navigation
      if (vehicleLightbox && vehicleLightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
          closeLightbox();
          return;
        }
        if (e.key === 'ArrowRight') {
          nextGalleryImage();
          return;
        }
        if (e.key === 'ArrowLeft') {
          prevGalleryImage();
          return;
        }
      }

      if (modalBackdrop.classList.contains('active')) {
        if (e.key === 'Escape') {
          closeVehicleModal();
          return;
        }
        if (e.key === 'ArrowRight') {
          nextGalleryImage();
          return;
        }
        if (e.key === 'ArrowLeft') {
          prevGalleryImage();
          return;
        }
      }
    });
  }

  // Klick auf Fahrzeugkarten öffnet das On-Site Detail-Modal
  document.querySelectorAll('.vehicle-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Wenn direkt auf einen externen Link geklickt wurde, normales Verhalten
      if (e.target.closest('a') && !e.target.closest('.showroom-card-btn')) return;

      const vehicleId = card.getAttribute('data-vehicle-id');
      if (vehicleId && vehicleData[vehicleId]) {
        e.preventDefault();
        openVehicleModal(vehicleId);
      } else {
        const mobileUrl = card.getAttribute('data-mobile-url');
        if (mobileUrl) {
          window.open(mobileUrl, '_blank', 'noopener,noreferrer');
        }
      }
    });
  });

  // ==================== 4. AUSFÜHRLICHES ANKAUFSFORMULAR (Wünsche 15 & 16) ====================
  function getAnkaufFormData() {
    const vorname = document.getElementById('ankauf-vorname')?.value.trim() || '';
    const nachname = document.getElementById('ankauf-nachname')?.value.trim() || '';
    const email = document.getElementById('ankauf-email')?.value.trim() || '';
    const phone = document.getElementById('ankauf-phone')?.value.trim() || '';
    const plz = document.getElementById('ankauf-plz')?.value.trim() || '';

    if (!vorname || !nachname || !plz) {
      alert('Bitte füllen Sie alle erforderlichen Kontaktdaten aus (Vorname, Nachname, PLZ/Ort).');
      return null;
    }

    if (!email && !phone) {
      alert('Bitte geben Sie mindestens Ihre E-Mail-Adresse oder Ihre Telefonnummer an, damit wir Sie für das Ankaufsangebot kontaktieren können.');
      const emailInput = document.getElementById('ankauf-email');
      if (emailInput) emailInput.focus();
      return null;
    }

    const car = document.getElementById('ankauf-car')?.value.trim() || '';
    const power = document.getElementById('ankauf-power')?.value.trim() || '';
    const engine = document.getElementById('ankauf-engine')?.value.trim() || '';
    const gear = document.getElementById('ankauf-gear')?.value || '';
    const fuel = document.getElementById('ankauf-fuel')?.value || '';
    const km = document.getElementById('ankauf-km')?.value.trim() || '';
    const year = document.getElementById('ankauf-year')?.value.trim() || '';
    const owners = document.getElementById('ankauf-owners')?.value.trim() || '';

    if (!car || !power || !gear || !fuel || !km || !year || !owners) {
      alert('Bitte füllen Sie alle erforderlichen Fahrzeug-Basisdaten aus (Marke & Modell, Leistung, Getriebe, Kraftstoff, Kilometerstand, Erstzulassung, Fahrzeughalter).');
      return null;
    }

    // Wunsch 15: Validierung dass alle 4 Zustandsfelder aktiv ausgewählt wurden (nicht vorbelegt!)
    const unfallRadio = document.querySelector('input[name="unfall"]:checked');
    const motorschadenRadio = document.querySelector('input[name="motorschaden"]:checked');
    const getriebeschadenRadio = document.querySelector('input[name="getriebeschaden"]:checked');
    const fahrtuechtigRadio = document.querySelector('input[name="fahrtuechtig"]:checked');

    if (!unfallRadio || !motorschadenRadio || !getriebeschadenRadio || !fahrtuechtigRadio) {
      alert('Bitte beantworten Sie alle 4 Fragen zum Fahrzeugzustand (Unfallfahrzeug, Motorschaden, Getriebeschaden, Fahrtüchtigkeit).');
      return null;
    }

    const unfall = unfallRadio.value;
    const motorschaden = motorschadenRadio.value;
    const getriebeschaden = getriebeschadenRadio.value;
    const fahrtuechtig = fahrtuechtigRadio.value;

    const checkedEquip = Array.from(document.querySelectorAll('input[name="equipment"]:checked')).map(el => el.value);
    const extraEquip = document.getElementById('ankauf-extra-equip')?.value.trim() || '';

    const price = document.getElementById('ankauf-price')?.value.trim() || '';
    if (!price) {
      alert('Bitte geben Sie Ihre Preisvorstellung an.');
      document.getElementById('ankauf-price')?.focus();
      return null;
    }

    const notes = document.getElementById('ankauf-notes')?.value.trim() || '';

    let text = `Hallo KAPA Automobile,\n\nich sende Ihnen eine Kfz-Ankauf-Anfrage:\n\n`;
    text += `👤 KONTAKTDATEN:\n`;
    text += `• Name: ${vorname} ${nachname}\n`;
    if (email) text += `• E-Mail: ${email}\n`;
    if (phone) text += `• Tel: ${phone}\n`;
    text += `• PLZ/Ort: ${plz}\n\n`;

    text += `🚗 FAHRZEUGDATEN:\n`;
    text += `• Modell: ${car}\n`;
    text += `• Leistung: ${power}\n`;
    if (engine) text += `• Motor: ${engine}\n`;
    text += `• Getriebe: ${gear}\n`;
    text += `• Kraftstoff: ${fuel}\n`;
    text += `• Kilometerstand: ${km} km\n`;
    text += `• Erstzulassung: ${year}\n`;
    text += `• Fahrzeughalter: ${owners}\n\n`;

    text += `⚠️ ZUSTAND:\n`;
    text += `• Unfall: ${unfall} | Motor: ${motorschaden} | Getriebe: ${getriebeschaden} | Fahrtüchtig: ${fahrtuechtig}\n\n`;

    if (checkedEquip.length > 0) {
      text += `✨ AUSSTATTUNG:\n• ${checkedEquip.join(', ')}\n`;
    }
    if (extraEquip) {
      text += `• Extras: ${extraEquip}\n`;
    }
    text += `\n💶 PREISVORSTELLUNG: ${price} €\n`;
    if (notes) {
      text += `📝 BEMERKUNGEN: ${notes}\n`;
    }

    return { text, car, price };
  }

  // Absenden via WhatsApp (Wunsch 16)
  const btnSubmitAnkaufWhatsApp = document.getElementById('btnSubmitAnkaufWhatsApp');
  if (btnSubmitAnkaufWhatsApp) {
    btnSubmitAnkaufWhatsApp.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getAnkaufFormData();
      if (!data) return;

      const whatsappUrl = `https://wa.me/4915786845412?text=${encodeURIComponent(data.text)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // Absenden via E-Mail (Wunsch 16)
  const btnSubmitAnkaufEmail = document.getElementById('btnSubmitAnkaufEmail');
  if (btnSubmitAnkaufEmail) {
    btnSubmitAnkaufEmail.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getAnkaufFormData();
      if (!data) return;

      const subject = `Kfz-Ankaufsanfrage: ${data.car} (${data.price} €)`;
      const mailtoUrl = `mailto:info@kapa-automobile.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(data.text)}`;
      window.location.href = mailtoUrl;
    });
  }

  // Fallback für normales Submit des Formulars falls Enter gedrückt wird
  const ankaufDetailedForm = document.getElementById('ankaufDetailedForm');
  if (ankaufDetailedForm) {
    ankaufDetailedForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (btnSubmitAnkaufWhatsApp) {
        btnSubmitAnkaufWhatsApp.click();
      }
    });
  }

  // ==================== 5. SCHNELLANFRAGE KONTAKTFORMULAR STARTSEITE ====================
  const quickContactForm = document.getElementById('quickContactForm');
  if (quickContactForm) {
    quickContactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim() || '';
      const email = document.getElementById('contact-email')?.value.trim() || '';
      const phone = document.getElementById('contact-phone')?.value.trim() || '';
      const message = document.getElementById('contact-message')?.value.trim() || '';

      if (!name) {
        alert('Bitte geben Sie Ihren Vor- und Nachnamen an.');
        document.getElementById('contact-name')?.focus();
        return;
      }

      if (!email && !phone) {
        alert('Bitte geben Sie mindestens Ihre E-Mail-Adresse oder Ihre Telefonnummer an, damit wir Sie erreichen können.');
        document.getElementById('contact-email')?.focus();
        return;
      }

      if (!message) {
        alert('Bitte geben Sie Ihre Nachricht ein.');
        document.getElementById('contact-message')?.focus();
        return;
      }

      let text = `Hallo KAPA Automobile,\n\nich habe eine Anfrage über Ihre Website:\n`;
      text += `\n👤 Name: ${name}`;
      if (phone) text += `\n📞 Telefon: ${phone}`;
      if (email) text += `\n✉️ E-Mail: ${email}`;
      text += `\n💬 Nachricht: ${message}`;

      const whatsappUrl = `https://wa.me/4915786845412?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // ==================== 6. GOOGLE MAPS 2-KLICK DSGVO-LÖSUNG ====================
  const mapsOverlay = document.getElementById('mapsConsentOverlay');
  const loadMapBtn = document.getElementById('loadMapBtn');
  const mapIframe = document.getElementById('googleMapIframe');

  function activateMap() {
    if (mapIframe && mapIframe.dataset.src && !mapIframe.src) {
      mapIframe.src = mapIframe.dataset.src;
    }
    if (mapsOverlay) {
      mapsOverlay.classList.add('hidden');
    }
  }

  if (localStorage.getItem('kapa_cookie_consent') === 'accepted' || localStorage.getItem('kapa_map_consent') === 'true') {
    activateMap();
  }

  if (loadMapBtn) {
    loadMapBtn.addEventListener('click', () => {
      localStorage.setItem('kapa_map_consent', 'true');
      activateMap();
    });
  }

  // ==================== 7. COOKIE-BANNER ====================
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
  const cookieDenyBtn = document.getElementById('cookieDenyBtn');

  if (cookieBanner) {
    const hasConsent = localStorage.getItem('kapa_cookie_consent');
    if (!hasConsent) {
      setTimeout(() => {
        cookieBanner.classList.add('show');
      }, 700);
    }

    if (cookieAcceptBtn) {
      cookieAcceptBtn.addEventListener('click', () => {
        localStorage.setItem('kapa_cookie_consent', 'accepted');
        cookieBanner.classList.remove('show');
        activateMap();
      });
    }

    if (cookieDenyBtn) {
      cookieDenyBtn.addEventListener('click', () => {
        localStorage.setItem('kapa_cookie_consent', 'essential_only');
        cookieBanner.classList.remove('show');
      });
    }
  }

  // ==================== 8. DYNAMIK: SCROLL REVEAL (Wunsch 10) ====================
  const revealElements = document.querySelectorAll('.service-clean-card, .vehicle-card, .about-card, .contact-card-box, .contact-form-card, .ankauf-teaser-card, .ankauf-step-card');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    revealElements.forEach(el => el.classList.add('reveal-init'));

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ==================== 9. AKTUELLES JAHR AKTUALISIEREN ====================
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
