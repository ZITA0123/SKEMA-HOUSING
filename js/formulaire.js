/* ============================================
   SKEMA HOUSING - Formulaire multi-étapes
   Avec étudiant connecté (pré-remplit) + sélection pays/campus
   Résidence : 4 étapes / Famille : 6 étapes (avec vidéo)
   + Paiement obligatoire avant envoi
   ============================================ */

const Formulaire = {
  currentStep: 1,
  totalSteps: 4,
  formData: {},
  formType: 'residence',
  countrySelected: null,
  campusSelected: null,
  paymentDone: false,
  paymentAmount: 150,
  paymentLabel: 'Frais de dossier',

  init(type) {
    this.formType = type;
    // Résidence = 4 étapes / Famille = 6 étapes (avec vidéo en étape 5)
    this.totalSteps = type === 'residence' ? 4 : 6;
    this.currentStep = 1;
    this.countrySelected = null;
    this.campusSelected = null;
    this.formData = {};
    this.paymentDone = false;

    // Montants et libellés selon le type
    if (type === 'residence') {
      this.paymentAmount = 150;
      this.paymentLabel = 'Frais de dossier';
    } else {
      this.paymentAmount = 80;
      this.paymentLabel = 'Frais de mise en relation';
    }

    const user = window.SKEMA_DATA?.CURRENT_USER;
    if (user) {
      this.formData = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        nationality: user.nationality,
        program: user.program,
        year: user.year
      };
    }

    this.renderCountries();
    this.renderPrefilledBanner();
    this.bindEvents();
    this.bindPaymentEvents();
  },

  // ========== BANDEAU "PRÉ-REMPLI" ==========
  renderPrefilledBanner() {
    const banner = document.getElementById('form-prefilled-banner');
    if (!banner) return;

    const user = window.SKEMA_DATA?.CURRENT_USER;
    if (!user) return;

    banner.innerHTML = `
      <div class="form-prefilled-banner-icon" style="background:${user.avatarColor};">
        ${user.initials}
      </div>
      <div class="form-prefilled-banner-content">
        <strong>Bonjour ${user.firstname} !</strong>
        <span>Nous avons pré-rempli vos informations SKEMA. Vérifiez et complétez si nécessaire.</span>
      </div>
    `;
  },

  // ========== PRÉ-REMPLISSAGE DES INPUTS ==========
  prefillFormInputs() {
    const user = window.SKEMA_DATA?.CURRENT_USER;
    if (!user) return;

    const fields = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      nationality: user.nationality,
      program: user.program,
      year: user.year
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.querySelector(`[name="${name}"]`);
      if (input && !input.value) {
        input.value = value;
        input.classList.add('is-prefilled');

        const existingHint = input.parentElement.querySelector('.form-prefilled-hint');
        if (!existingHint) {
          const hint = document.createElement('span');
          hint.className = 'form-prefilled-hint';
          hint.textContent = 'Pré-rempli';
          input.parentElement.appendChild(hint);
        }
      }
    });
  },

  // ========== RENDU PAYS ==========
  renderCountries() {
    const row1 = document.getElementById('country-row-1');
    const row2 = document.getElementById('country-row-2');
    if (!row1 || !row2) return;

    const countries = window.SKEMA_DATA?.COUNTRIES || [];

    row1.innerHTML = countries.slice(0, 4).map(c => this.countryCardHTML(c)).join('');
    row2.innerHTML = countries.slice(4, 7).map(c => this.countryCardHTML(c)).join('');

    document.querySelectorAll('.country-card-compact').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('is-disabled')) return;
        const countryId = card.dataset.countryId;
        if (countryId) this.selectCountry(countryId);
      });
    });
  },

  countryCardHTML(country) {
    const disabled = country.active ? '' : 'is-disabled';
    return `
      <div class="country-card-compact ${disabled}" data-country-id="${country.id}">
        <img src="${country.image}" alt="${country.name}" loading="lazy">
        <div class="country-card-compact-label">
          <span>${country.name}</span>
        </div>
      </div>
    `;
  },

  // ========== SÉLECTION PAYS ==========
  selectCountry(countryId) {
    this.countrySelected = countryId;
    this.formData.country = countryId;

    document.querySelectorAll('.country-card-compact[data-country-id]').forEach(card => {
      card.classList.toggle('is-selected', card.dataset.countryId === countryId);
    });

    const campusSection = document.getElementById('campus-section');
    const campusGrid = document.getElementById('campus-grid');
    if (!campusSection || !campusGrid) return;

    const campuses = window.SKEMA_DATA?.CAMPUSES_BY_COUNTRY?.[countryId] || [];

    if (campuses.length > 0) {
      campusSection.style.display = 'block';
      campusGrid.innerHTML = campuses.map(c => `
        <div class="country-card-compact ${c.active ? '' : 'is-disabled'}" data-campus-id="${c.id}">
          <img src="${c.image}" alt="${c.name}" loading="lazy">
          <div class="country-card-compact-label">
            <span>${c.name}</span>
          </div>
        </div>
      `).join('');

      campusGrid.querySelectorAll('.country-card-compact').forEach(card => {
        card.addEventListener('click', () => {
          if (card.classList.contains('is-disabled')) return;
          this.selectCampus(card.dataset.campusId);
        });
      });

      setTimeout(() => {
        campusSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }

    this.saveDraft();
  },

  // ========== SÉLECTION CAMPUS ==========
  selectCampus(campusId) {
    this.campusSelected = campusId;
    this.formData.campus = campusId;

    document.querySelectorAll('#campus-grid .country-card-compact').forEach(card => {
      card.classList.toggle('is-selected', card.dataset.campusId === campusId);
    });

    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.style.display = 'block';

      setTimeout(() => {
        this.prefillFormInputs();
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }

    this.saveDraft();
  },

  // ========== ÉVÉNEMENTS ==========
  bindEvents() {
    document.querySelectorAll('.btn-next').forEach(btn => {
      btn.addEventListener('click', () => this.nextStep());
    });

    document.querySelectorAll('.btn-back').forEach(btn => {
      btn.addEventListener('click', () => this.prevStep());
    });

    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!this.paymentDone) {
          this.showAlert('Veuillez régler les frais de dossier avant d\'envoyer votre demande.', 'warning');
          this.scrollToPaymentSection();
          return;
        }
        this.submitForm();
      });
    }

    document.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
      input.addEventListener('change', () => this.saveCurrentStep());
      input.addEventListener('input', () => {
        if (input.classList.contains('is-prefilled')) {
          input.classList.remove('is-prefilled');
          const hint = input.parentElement.querySelector('.form-prefilled-hint');
          if (hint) hint.remove();
        }
      });
    });

    document.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('is-disabled')) return;
        const input = card.querySelector('input');
        if (!input) return;

        if (input.type === 'radio') {
          document.querySelectorAll(`input[name="${input.name}"]`).forEach(i => {
            i.closest('.choice-card')?.classList.remove('is-selected');
          });
          input.checked = true;
          card.classList.add('is-selected');
        } else if (input.type === 'checkbox') {
          input.checked = !input.checked;
          card.classList.toggle('is-selected', input.checked);
        }

        this.saveCurrentStep();
      });
    });

    document.querySelectorAll('.form-range').forEach(range => {
      const display = document.querySelector(`#${range.id}-value`);
      if (display) {
        const update = () => {
          display.textContent = range.value + ' €';
        };
        range.addEventListener('input', update);
        update();
      }
    });
  },

  // ========== ÉVÉNEMENTS PAIEMENT ==========
  bindPaymentEvents() {
    // Bouton "Payer" → ouvre modal
    const btnPayment = document.getElementById('btn-payment');
    if (btnPayment) {
      btnPayment.addEventListener('click', () => this.openPaymentModal());
    }

    // Modal : annuler
    const btnCancel = document.getElementById('modal-btn-cancel');
    if (btnCancel) {
      btnCancel.addEventListener('click', () => this.closePaymentModal());
    }

    // Modal : confirmer paiement
    const btnConfirm = document.getElementById('modal-btn-confirm');
    if (btnConfirm) {
      btnConfirm.addEventListener('click', () => this.confirmPayment());
    }

    // Fermer modal en cliquant à l'extérieur
    const overlay = document.getElementById('payment-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) this.closePaymentModal();
      });
    }

    // Touche Escape pour fermer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay?.classList.contains('is-visible')) {
        this.closePaymentModal();
      }
    });
  },

  openPaymentModal() {
    const overlay = document.getElementById('payment-modal-overlay');
    if (overlay) {
      // Mettre à jour le montant dans le modal
      const amountEl = document.getElementById('modal-amount-value');
      const labelEl = document.getElementById('modal-amount-label');
      if (amountEl) amountEl.textContent = `${this.paymentAmount} €`;
      if (labelEl) labelEl.textContent = this.paymentLabel;

      overlay.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    }
  },

  closePaymentModal() {
    const overlay = document.getElementById('payment-modal-overlay');
    if (overlay) {
      overlay.classList.remove('is-visible');
      document.body.style.overflow = '';
    }
  },

  confirmPayment() {
    // Marquer comme payé
    this.paymentDone = true;
    this.formData.paymentStatus = 'Payé';
    this.formData.paymentAmount = this.paymentAmount;
    this.formData.paymentDate = new Date().toLocaleDateString('fr-FR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    // Mettre à jour l'UI
    const section = document.getElementById('payment-section');
    if (section) {
      section.classList.add('is-paid');

      // Mettre à jour le badge "payé"
      const badge = section.querySelector('.payment-paid-badge');
      if (badge) {
        badge.innerHTML = `
          <span class="payment-paid-badge-icon">✓</span>
          <span>Paiement validé — ${this.paymentAmount} € · ${this.formData.paymentDate}</span>
        `;
      }

      // Mettre à jour le titre et sous-titre
      const title = section.querySelector('.payment-section-title');
      const subtitle = section.querySelector('.payment-section-subtitle');
      if (title) title.textContent = 'Frais payés';
      if (subtitle) subtitle.textContent = 'Vous pouvez maintenant envoyer votre dossier.';
    }

    // Déverrouiller le bouton "Envoyer"
    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.classList.remove('is-locked');
    }

    // Cacher le helper
    const helper = document.getElementById('btn-submit-helper');
    if (helper) helper.classList.remove('is-visible');

    // Fermer le modal
    this.closePaymentModal();

    // Mettre à jour le récap (ligne paiement)
    this.renderRecap();

    // Petit message succès
    this.showAlert(`Paiement de ${this.paymentAmount} € validé avec succès. Vous pouvez envoyer votre dossier.`, 'success');
  },

  scrollToPaymentSection() {
    const section = document.getElementById('payment-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  // ===== SCROLL vers le DÉBUT DU FORMULAIRE =====
  scrollToFormTop() {
    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
      const headerHeight = 80;
      const rect = formContainer.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - headerHeight - 20;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  },

  nextStep() {
    if (!this.validateCurrentStep()) return;
    this.saveCurrentStep();

    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
      this.updateUI();
      if (this.currentStep === this.totalSteps) {
        this.renderRecap();
        this.lockSubmitButton();
      }
    }

    this.scrollToFormTop();
  },

  // Verrouille le bouton "Envoyer" tant que paiement non effectué
  lockSubmitButton() {
    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn && !this.paymentDone) {
      submitBtn.classList.add('is-locked');
      const helper = document.getElementById('btn-submit-helper');
      if (helper) helper.classList.add('is-visible');
    }
  },

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.updateUI();
      this.scrollToFormTop();
    }
  },

  validateCurrentStep() {
    const currentEl = document.querySelector(`.form-step-content[data-step="${this.currentStep}"]`);
    if (!currentEl) return true;

    let isValid = true;
    const requiredFields = currentEl.querySelectorAll('[required]');

    requiredFields.forEach(field => {
      if (field.type === 'checkbox' || field.type === 'radio') {
        const name = field.name;
        const group = currentEl.querySelectorAll(`input[name="${name}"]`);
        const checked = Array.from(group).some(i => i.checked);
        if (!checked) isValid = false;
      } else if (field.type === 'file') {
        // Vidéo non requise (facultative)
      } else if (!field.value.trim()) {
        field.classList.add('is-invalid');
        isValid = false;
      } else {
        field.classList.remove('is-invalid');
      }
    });

    if (!isValid) {
      this.showAlert('Merci de compléter tous les champs obligatoires.', 'warning');
    }

    return isValid;
  },

  saveCurrentStep() {
    const currentEl = document.querySelector(`.form-step-content[data-step="${this.currentStep}"]`);
    if (!currentEl) return;

    currentEl.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
      if (input.name) this.formData[input.name] = input.value;
    });

    const checkboxGroups = {};
    currentEl.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      if (cb.name) {
        if (!checkboxGroups[cb.name]) checkboxGroups[cb.name] = [];
        if (cb.checked) checkboxGroups[cb.name].push(cb.value);
      }
    });
    Object.assign(this.formData, checkboxGroups);

    currentEl.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
      this.formData[radio.name] = radio.value;
    });

    this.saveDraft();
  },

  saveDraft() {
    // Ne pas sauvegarder presentationVideo dans le draft (objet non-serializable)
    const dataToSave = { ...this.formData };
    delete dataToSave.presentationVideo;

    window.SKEMA_UTILS?.saveFormDraft(`form-${this.formType}`, {
      currentStep: this.currentStep,
      formData: dataToSave
    });
  },

  updateUI() {
    document.querySelectorAll('.form-step-content').forEach(el => {
      const step = parseInt(el.dataset.step);
      el.classList.toggle('is-active', step === this.currentStep);
    });

    document.querySelectorAll('.form-step').forEach(el => {
      const step = parseInt(el.dataset.step);
      el.classList.remove('is-active', 'is-completed');
      if (step < this.currentStep) el.classList.add('is-completed');
      if (step === this.currentStep) el.classList.add('is-active');
    });

    const fill = document.querySelector('.form-progress-fill');
    if (fill) {
      const percent = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
      fill.style.width = percent + '%';
    }

    const btnBack = document.querySelector('.btn-back');
    if (btnBack) {
      btnBack.classList.toggle('is-visible', this.currentStep > 1);
    }

    const btnNext = document.querySelector('.btn-next');
    const btnSubmit = document.querySelector('.btn-submit');
    if (btnNext && btnSubmit) {
      const isLast = this.currentStep === this.totalSteps;
      btnNext.style.display = isLast ? 'none' : '';
      btnSubmit.style.display = isLast ? '' : 'none';
    }

    // Afficher/cacher la section paiement selon étape
    const paymentSection = document.getElementById('payment-section');
    if (paymentSection) {
      paymentSection.style.display = (this.currentStep === this.totalSteps) ? 'block' : 'none';
    }
  },

  renderRecap() {
    const recapList = document.querySelector('.form-recap-list');
    if (!recapList) return;

    const labels = {
      country: 'Pays',
      campus: 'Campus',
      maxTransportTime: 'Trajet max',
      duration: 'Durée du séjour',
      budget: 'Budget mensuel',
      housingType: 'Type de logement',
      features: 'Équipements souhaités',
      notes: 'Commentaires',
      diet: 'Régime alimentaire',
      allergiesList: 'Allergies',
      foodNotes: 'Préférences alimentaires',
      pets: 'Animaux',
      languages: 'Langues parlées',
      frenchLevel: 'Niveau de français',
      familyType: 'Type de famille',
      smoking: 'Tabac',
      sociability: 'Sociabilité',
      schedule: 'Horaires',
      activities: 'Activités souhaitées',
      presentationVideo: '🎥 Vidéo de présentation'
    };

    const countryNames = {
      france: 'France', 'south-africa': 'Afrique du Sud', brazil: 'Brésil',
      canada: 'Canada', china: 'Chine', uae: 'Émirats arabes unis', usa: 'États-Unis'
    };

    const campusNames = {
      'grand-paris': 'Campus Grand Paris (Suresnes)',
      'lille': 'Campus Lille',
      'sophia': 'Campus Sophia Antipolis'
    };

    const formatValue = (key, value) => {
      if (key === 'country') return countryNames[value] || value;
      if (key === 'campus') return campusNames[value] || value;
      if (key === 'maxTransportTime') {
        if (value === '999') return 'Pas de préférence';
        if (value === '15') return '15 min max (Suresnes / La Défense)';
        if (value === '30') return '30 min max (Boulogne, Issy, Paris 16/17)';
        if (value === '45') return '45 min max (Paris centre, Versailles)';
        if (value === '60') return '1h max (Massy, Cergy)';
        return value + ' min';
      }
      if (key === 'budget') return value + ' €/mois';
      if (key === 'presentationVideo' && typeof value === 'object' && value.name) {
        const sizeMB = (value.size / (1024 * 1024)).toFixed(1);
        return `✓ ${value.name} (${sizeMB} Mo)`;
      }
      return value;
    };

    const orderedKeys = [
      'country', 'campus', 'maxTransportTime', 'duration',
      'housingType', 'budget', 'features',
      'languages', 'frenchLevel',
      'diet', 'allergiesList', 'foodNotes',
      'pets', 'smoking', 'sociability', 'schedule', 'familyType', 'activities',
      'presentationVideo',
      'notes'
    ];

    let html = '';
    orderedKeys.forEach(key => {
      if (this.formData[key] !== undefined && this.formData[key] !== '' && this.formData[key] !== null) {
        const label = labels[key] || key;
        let value = this.formData[key];
        if (Array.isArray(value)) value = value.join(', ');
        value = formatValue(key, value);
        if (value && key !== 'cgu' && key !== 'newsletter') {
          html += `<li><span class="form-recap-label">${label}</span><span class="form-recap-value">${value}</span></li>`;
        }
      }
    });

    // Vidéo non fournie (formulaire famille)
    if (this.formType === 'famille' && !this.formData.presentationVideo) {
      html += `<li><span class="form-recap-label">🎥 Vidéo de présentation</span><span class="form-recap-value" style="color:var(--gray-500);font-style:italic;">Non fournie (facultative)</span></li>`;
    }

    // Ligne paiement dans le récap
    if (this.paymentDone) {
      html += `<li><span class="form-recap-label" style="color:#047857;font-weight:var(--fw-bold);">💳 ${this.paymentLabel}</span><span class="form-recap-value" style="color:#047857;font-weight:var(--fw-bold);">✓ Payé · ${this.paymentAmount} €</span></li>`;
    } else {
      html += `<li><span class="form-recap-label" style="color:#D97706;">💳 ${this.paymentLabel}</span><span class="form-recap-value" style="color:#D97706;font-style:italic;">À régler — ${this.paymentAmount} €</span></li>`;
    }

    recapList.innerHTML = html;
  },

  showAlert(message, type = 'info') {
    const existing = document.querySelector('.form-alert');
    if (existing) existing.remove();

    const alert = document.createElement('div');
    alert.className = `alert alert-${type} form-alert`;
    alert.innerHTML = `<span>${message}</span>`;

    const container = document.querySelector('.form-container');
    if (container) {
      container.insertBefore(alert, container.firstChild);
      setTimeout(() => alert.remove(), 4000);
    }
  },

  submitForm() {
    if (!this.validateCurrentStep()) return;
    if (!this.paymentDone) {
      this.showAlert('Veuillez régler les frais de dossier avant d\'envoyer votre demande.', 'warning');
      this.scrollToPaymentSection();
      return;
    }
    this.saveCurrentStep();

    const dossierNumber = window.SKEMA_UTILS.generateApplicationNumber();

    // Nettoyer la vidéo de l'objet à stocker (non-serializable)
    const dataToStore = { ...this.formData };
    if (dataToStore.presentationVideo) {
      dataToStore.presentationVideo = {
        name: dataToStore.presentationVideo.name,
        size: dataToStore.presentationVideo.size,
        type: dataToStore.presentationVideo.type
      };
    }

    sessionStorage.setItem('skema-last-submission', JSON.stringify({
      type: this.formType,
      number: dossierNumber,
      data: dataToStore,
      date: new Date().toISOString()
    }));

    window.SKEMA_UTILS.clearFormDraft(`form-${this.formType}`);
    window.location.href = `confirmation.html?n=${dossierNumber}`;
  }
};

window.Formulaire = Formulaire;
