console.log("lets see if this remains in your code");




const events = document.querySelectorAll('.event');

// Add hover events to each box
events.forEach(event => {
  event.addEventListener('mouseenter', () => {
    // Expand the hovered box and shrink others
    events.forEach(e => {
      if (e === event) {
        // Expand this box
        e.classList.add('expanded');
        e.style.width = '600px';
        e.style.height = '600px';
        e.style.transition = 'width 0.3s ease, height 0.3s ease';
      } else {
        // Shrink other boxes
        e.style.width = '150px';
        e.style.height = '150px';
        e.style.transition = 'width 0.3s ease, height 0.3s ease';
      }
    });
  });

  event.addEventListener('mouseleave', () => {
    // Reset all boxes to their original size
    events.forEach(e => {
      e.classList.remove('expanded');
      e.style.width = '250px'; // Original size
      e.style.height = '250px'; // Original size
      e.style.transition = 'width 0.3s ease, height 0.3s ease';
    });
  });
});


// Handle h5 element
const h5Element = document.querySelector('h5');

// Wrap each character in a span, including spaces
h5Element.innerHTML = h5Element.textContent
  .split('')
  .map(letter => {
    if (letter === ' ') {
      return `<span style="display: inline-block; width: 0.5em;">${letter}</span>`; // Add spacing for spaces
    }
    return `<span style="display: inline-block; transition: transform 0.3s ease;">${letter}</span>`;
  })
  .join('');

// Add hover effect to each letter
const h5Letters = h5Element.querySelectorAll('span');

h5Letters.forEach(letter => {
  letter.addEventListener('mouseenter', () => {
    letter.style.transform = 'scale(2.5)'; // Make the letter size bigger on hover
  });

  letter.addEventListener('mouseleave', () => {
    letter.style.transform = 'scale(1)'; // Return to normal size when hover ends
  });
});


// Handle h1 element
const h1Element = document.querySelector('h1');

// Wrap each character in a span, including spaces
h1Element.innerHTML = h1Element.textContent
  .split('')
  .map(letter => {
    if (letter === ' ') {
      return `<span style="display: inline-block; width: 0.5em;">${letter}</span>`; // Add spacing for spaces
    }
    return `<span style="display: inline-block; transition: transform 0.3s ease;">${letter}</span>`;
  })
  .join('');

// Add hover effect to each letter
const h1Letters = h1Element.querySelectorAll('span');

h1Letters.forEach(letter => {
  letter.addEventListener('mouseenter', () => {
    letter.style.transform = 'scale(2)'; // Make the letter size bigger on hover
  });

  letter.addEventListener('mouseleave', () => {
    letter.style.transform = 'scale(1)'; // Return to normal size when hover ends
  });
});


// Handle h2 element
const h2Element = document.querySelector('h2');

// Wrap each character in a span, including spaces
h2Element.innerHTML = h2Element.textContent
  .split('')
  .map(letter => {
    if (letter === ' ') {
      return `<span style="display: inline-block; width: 0.5em;">${letter}</span>`; // Preserve spaces
    }
    return `<span style="display: inline-block; transition: transform 0.3s ease;">${letter}</span>`;
  })
  .join('');

// Add hover effect to each letter
const h2Letters = h2Element.querySelectorAll('span');

h2Letters.forEach(letter => {
  letter.addEventListener('mouseenter', () => {
    letter.style.transform = 'scale(0.3)'; // Shrink the letter on hover
  });

  letter.addEventListener('mouseleave', () => {
    letter.style.transform = 'scale(1)'; // Return to normal size when hover ends
  });
});

