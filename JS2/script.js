// ================================
// Drum Machine
// @author: Paul Buchwald
// ================================
// This program implements a simple drum machine for FCC's JavaScript curriculum.
// ================================

const padMap = {
  'Q': { id: 'heater-1', name: 'Heater 1' },
  'W': { id: 'heater-2', name: 'Heater 2' },
  'E': { id: 'heater-3', name: 'Heater 3' },
  'A': { id: 'heater-4', name: 'Heater 4' },
  'S': { id: 'clap', name: 'Clap' },
  'D': { id: 'open-hh', name: 'Open HH' },
  'Z': { id: 'kick-n-hat', name: 'Kick-n-Hat' },
  'X': { id: 'kick', name: 'Kick' },
  'C': { id: 'closed-hh', name: 'Closed HH' }
};

function playSound(key) {
  const audio = document.getElementById(key);
  const padButton = document.querySelector(`[id="${padMap[key].id}"]`);
  
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    
    // Add active state
    padButton.classList.add('active');
    setTimeout(() => padButton.classList.remove('active'), 100);
  }
  
  // Update display
  document.getElementById('display').innerText = padMap[key].name;
}

// Click handlers for drum pads
const pads = document.querySelectorAll('.drum-pad');
pads.forEach(pad => {
  pad.addEventListener('click', function() {
    const key = this.innerText.trim();
    playSound(key);
  });
});

// Keyboard handlers
document.addEventListener('keydown', function(e) {
  const key = e.key.toUpperCase();
  if (padMap[key]) {
    playSound(key);
  }
});