// Mobile navigation toggle functionality

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initNavigation();
            initDropdowns();
        });
    } else {
        initNavigation();
        initDropdowns();
    }

    function initNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (!navToggle || !navMenu) {
            return; // Exit if elements don't exist
        }

        // Toggle menu on button click
        navToggle.addEventListener('click', function() {
            toggleMenu();
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    closeMenu();
                }
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const isClickInside = navToggle.contains(e.target) || navMenu.contains(e.target);

            if (!isClickInside && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    function toggleMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const isActive = navMenu.classList.contains('active');

        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        navMenu.classList.add('active');
        navToggle.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    // Dropdown functionality
    function initDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(function(dropdown) {
            const trigger = dropdown.querySelector('.dropdown-trigger');
            if (!trigger) return;

            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation(); // Prevent document click from immediately firing
                
                const isActive = dropdown.classList.contains('active');
                
                closeAllDropdowns();

                if (!isActive) {
                    dropdown.classList.add('active');
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Close dropdowns on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeAllDropdowns();
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown.active')) {
                closeAllDropdowns();
            }
        });
    }

    function closeAllDropdowns() {
        const activeDropdowns = document.querySelectorAll('.dropdown.active');
        activeDropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('active');
            const trigger = dropdown.querySelector('.dropdown-trigger');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
    }
})();
