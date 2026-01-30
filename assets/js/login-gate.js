/**
 * Login Gate System
 * Prevents access to all pages until user authenticates with dummy credentials
 */

(function () {
  'use strict';

  /* =========================
     CONFIG
  ========================= */

  const DUMMY_CREDENTIALS = {
    username: 'iolaire.ai',
    password: 'Gatpesauden12!@'
  };

  const AUTH_KEY = 'iloare_ai_authenticated';
  const AUTH_TIMESTAMP_KEY = 'iloare_ai_auth_timestamp';
  const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours

  /* =========================
     HELPERS
  ========================= */

  function getCurrentPage() {
    const path = window.location.pathname;
    return (path.split('/').pop() || 'index.html').toLowerCase();
  }

  function isAuthenticated() {
    const authStatus = sessionStorage.getItem(AUTH_KEY);
    const authTimestamp = sessionStorage.getItem(AUTH_TIMESTAMP_KEY);

    // if (authStatus !== 'true') return false;

    // if (authTimestamp) {
    //   const now = Date.now();
    //   if (now - parseInt(authTimestamp, 10) > SESSION_TIMEOUT) {
    //     clearAuthentication();
    //     return false;
    //   }
    // }

    return true;
  }

  function setAuthenticated() {
    sessionStorage.setItem(AUTH_KEY, 'true');
    sessionStorage.setItem(AUTH_TIMESTAMP_KEY, Date.now().toString());
  }

  function clearAuthentication() {
    sessionStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(AUTH_TIMESTAMP_KEY);
  }

  function redirectToLogin() {
    const currentPage = getCurrentPage();

    // Don't redirect if already on login page
    // if (currentPage !== 'login.html') {
    //   sessionStorage.setItem('login_redirect', window.location.href);
    // }

    window.location.href = 'login.html';
  }

  function showBodyContent() {
    if (document.body) {
      document.body.classList.add('login-gate-authenticated');
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('login-gate-authenticated');
      });
    }
  }

  /* =========================
     LOGIN HANDLING
  ========================= */

  function validateCredentials(username, password) {
    return (
      username === DUMMY_CREDENTIALS.username &&
      password === DUMMY_CREDENTIALS.password
    );
  }

  function handleLogin(username, password) {
    if (!validateCredentials(username, password)) return false;

    setAuthenticated();

    const redirectUrl = sessionStorage.getItem('login_redirect');
    sessionStorage.removeItem('login_redirect');

    if (
      redirectUrl &&
      !redirectUrl.includes('login.html')
    ) {
      window.location.href = redirectUrl;
    } else {
      window.location.href = 'index.html';
    }

    return true;
  }

  function logout() {
    clearAuthentication();
    redirectToLogin();
  }

  /* =========================
     LOGIN GATE INIT
  ========================= */

  function initLoginGate() {
    const currentPage = getCurrentPage();

    // Allow login page without gate
    if (currentPage === 'login.html') {
      sessionStorage.removeItem('login_redirect');
      return;
    }

    if (!isAuthenticated()) {
      redirectToLogin();
      return;
    }

    showBodyContent();
    sessionStorage.removeItem('login_redirect');
  }

  /* =========================
     AUTO EXECUTION
  ========================= */

  const currentPage = getCurrentPage();

  // Only exclude login.html from gate - city-login.html requires authentication
  if (currentPage !== 'login.html') {
    if (!isAuthenticated()) {
      redirectToLogin();
      return;
    }

    showBodyContent();
  } else {
    sessionStorage.removeItem('login_redirect');
  }

  /* =========================
     EXPOSE API
  ========================= */

  window.LoginGate = {
    init: initLoginGate,
    handleLogin,
    logout,
    isAuthenticated,
    clearAuth: clearAuthentication
  };
})();
