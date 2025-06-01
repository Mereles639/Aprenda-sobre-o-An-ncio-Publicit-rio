// Use IntersectionObserver to animate steps as they scroll into view
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'step'
    const steps = document.querySelectorAll('.step');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once it's visible
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class when out of view to re-trigger on scroll up
                // entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the item is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the bottom of the viewport
    });

    // Observe all elements that were selected
    steps.forEach(step => {
        observer.observe(step);
    });
});

console.log("Script loaded with IntersectionObserver.");