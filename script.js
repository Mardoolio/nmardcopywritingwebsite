function growOnHover(span) {
    span.parentElement.classList.add('grow');
  }
  
  function shrinkOnHover(span) {
    span.parentElement.classList.remove('grow');
  }

// Get all the "bar" elements and add click event listeners to each of them
const bars = document.querySelectorAll('.bar');
bars.forEach((bar) => {
  bar.addEventListener('click', () => {
    // Get the next sibling element of the clicked "bar" element
    const nextSibling = bar.nextElementSibling;
    
    // Check if the next sibling is a "sample-links" section
    if (nextSibling.classList.contains('sample-links')) {
      // Toggle the visibility of the "sample-links" section
      nextSibling.classList.toggle('show');
      
      // Close other open "sample-links" sections
      const otherSampleLinks = document.querySelectorAll('.sample-links.show');
      otherSampleLinks.forEach((link) => {
        if (link !== nextSibling) {
          link.classList.remove('show');
        }
      });
    }
  });
});
