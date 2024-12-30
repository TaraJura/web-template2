/* script.js */
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the button element
  const button = document.getElementById('clickMe');
  
  // Add click event listener
  button.addEventListener('click', function() {
      // Toggle classes to demonstrate interaction
      this.classList.toggle('bg-green-500');
      this.classList.toggle('bg-blue-500');
      
      // Change button text
      this.textContent = this.textContent === 'Click Me!' 
          ? 'Clicked!' 
          : 'Click Me!';
  });
});