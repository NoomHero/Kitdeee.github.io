document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optional: Change hamburger icon to X
            const icon = mobileNavToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Tab functionality (for Data Visualization section)
    // This is a global function, could be refined to be more specific if needed
    window.openTab = function(evt, tabName) {
        var i, tabcontent, tabbuttons;
        
        // Get the parent container of the clicked button to scope tabcontent and tabbuttons
        let tabContainer = evt.currentTarget.closest('.container'); // Or a more specific parent
        if (!tabContainer) tabContainer = document; // Fallback to document if specific parent not found

        tabcontent = tabContainer.querySelectorAll(".tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
            tabcontent[i].classList.remove("active");
        }

        tabbuttons = tabContainer.querySelectorAll(".tab-button");
        for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].classList.remove("active");
        }

        const currentTabContent = document.getElementById(tabName);
        if (currentTabContent) {
             currentTabContent.style.display = "block";
             currentTabContent.classList.add("active");
        }
        evt.currentTarget.classList.add("active");
    }

    // Accordion-like functionality for HA Levels (Example)
    const levelItems = document.querySelectorAll('.ha-levels .level-item');
    if (levelItems.length > 0) {
        levelItems.forEach(item => {
            item.addEventListener('click', function() {
                // Optional: Remove active class from all items first if only one should be active
                // levelItems.forEach(i => i.classList.remove('active'));
                this.classList.toggle('active'); // Or .add('active') if you uncomment above
            });
        });
    }
    
    // Filter buttons for Hospitals (Example basic toggle)
    const filterButtons = document.querySelectorAll('.filter-buttons .btn-filter');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                // Add actual filtering logic here based on data attributes or classes
                // For example:
                // const filterValue = this.textContent.trim();
                // console.log("Filtering by:", filterValue);
            });
        });
    }

});