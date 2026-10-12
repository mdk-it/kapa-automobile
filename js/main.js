/**
 * KAPA Automobile - Main JavaScript
 * Schnelle, saubere Interaktionen ohne unnötige Frameworks
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
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

  // 2. Smooth Scrolling für Ankerlinks (#...) mit Header-Offset
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

  // 3. Fahrzeugkarten Direktklick zu mobile.de (Wunsch 12)
  document.querySelectorAll('.vehicle-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'a') return;

      const mobileUrl = card.getAttribute('data-mobile-url');
      if (mobileUrl) {
        window.open(mobileUrl, '_blank', 'noopener,noreferrer');
      }
    });
  });

  // 4. Ausführliches Kfz-Ankaufsformular auf ankauf.html (21 Felder wie auf kapa-automobile.de/fahrzeuge-2/)
  const ankaufDetailedForm = document.getElementById('ankaufDetailedForm');
  if (ankaufDetailedForm) {
    ankaufDetailedForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const vorname = document.getElementById('ankauf-vorname')?.value.trim() || '';
      const nachname = document.getElementById('ankauf-nachname')?.value.trim() || '';
      const email = document.getElementById('ankauf-email')?.value.trim() || '';
      const phone = document.getElementById('ankauf-phone')?.value.trim() || '';
      const plz = document.getElementById('ankauf-plz')?.value.trim() || '';

      if (!email && !phone) {
        alert('Bitte geben Sie mindestens Ihre E-Mail-Adresse oder Ihre Telefonnummer an, damit wir Sie für das Ankaufsangebot kontaktieren können.');
        const emailInput = document.getElementById('ankauf-email');
        if (emailInput) emailInput.focus();
        return;
      }

      const car = document.getElementById('ankauf-car')?.value.trim() || '';
      const power = document.getElementById('ankauf-power')?.value.trim() || '';
      const engine = document.getElementById('ankauf-engine')?.value.trim() || '';
      const gear = document.getElementById('ankauf-gear')?.value || '';
      const fuel = document.getElementById('ankauf-fuel')?.value || '';
      const km = document.getElementById('ankauf-km')?.value.trim() || '';
      const year = document.getElementById('ankauf-year')?.value.trim() || '';
      const owners = document.getElementById('ankauf-owners')?.value.trim() || '';

      const unfall = document.querySelector('input[name="unfall"]:checked')?.value || 'Nein';
      const motorschaden = document.querySelector('input[name="motorschaden"]:checked')?.value || 'Nein';
      const getriebeschaden = document.querySelector('input[name="getriebeschaden"]:checked')?.value || 'Nein';
      const fahrtuechtig = document.querySelector('input[name="fahrtuechtig"]:checked')?.value || 'Ja';

      const checkedEquip = Array.from(document.querySelectorAll('input[name="equipment"]:checked')).map(el => el.value);
      const extraEquip = document.getElementById('ankauf-extra-equip')?.value.trim() || '';

      const price = document.getElementById('ankauf-price')?.value.trim() || '';
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

      const whatsappUrl = `https://wa.me/4915786845412?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // 5. Schnellanfrage Kontaktformular auf der Startseite
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

  // 6. Google Maps 2-Klick DSGVO-Lösung
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

  // 7. Cookie-Banner (DSGVO & TTDSG-konform)
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

  // 8. Aktuelles Jahr aktualisieren
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
