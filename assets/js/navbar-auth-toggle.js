/**
 * Navbar Authentication Toggle
 * Updates city-login/city-logout button based on authentication status
 */

(function() {
  'use strict';

  /**
   * Update navbar button based on auth status
   */
  function updateNavbarButton() {
    const cityButton = document.querySelector('.city-button');
    if (!cityButton) return;

    const isAuthenticated = window.LoginGate && window.LoginGate.isAuthenticated();
    
    if (isAuthenticated) {
      // When authenticated, navigate to city-login.html
      cityButton.href = 'city-login.html';
      cityButton.onclick = null;
      
      // Keep text as "City Login"
      const buttonText = cityButton.querySelector('div:first-child');
      if (buttonText) {
        buttonText.textContent = 'City Login';
      }
      
      // Keep lock icon
      const lockIcon = cityButton.querySelector('.lock-icon-wrapper img');
      if (lockIcon) {
        lockIcon.src = 'assets/logos/lock.png';
        lockIcon.alt = 'Lock icon';
      }
    } else {
      // Show login button - redirect to login.html for authentication
      cityButton.href = 'login.html';
      cityButton.onclick = null;
      
      const buttonText = cityButton.querySelector('div:first-child');
      if (buttonText) {
        buttonText.textContent = 'City Login';
      }
      
      const lockIcon = cityButton.querySelector('.lock-icon-wrapper img');
      if (lockIcon) {
        lockIcon.src = 'assets/logos/lock.png';
        lockIcon.alt = 'Lock icon';
      }
    }
  }

  /**
   * Initialize navbar toggle
   */
  function initNavbarToggle() {
    // Wait for LoginGate to be available
    if (window.LoginGate) {
      updateNavbarButton();
    } else {
      // Retry after a short delay
      setTimeout(initNavbarToggle, 100);
    }
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbarToggle);
  } else {
    initNavbarToggle();
  }

  // Also update on storage events (for multi-tab support)
  window.addEventListener('storage', function(e) {
    if (e.key === 'iloare_ai_authenticated') {
      updateNavbarButton();
    }
  });
})();

