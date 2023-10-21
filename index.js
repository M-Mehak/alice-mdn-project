const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  };
  
  const aliceElements = [
    document.querySelector("#alice1"),
    document.querySelector("#alice2"),
    document.querySelector("#alice3")
  ];
  
  const animateSequentially = async () => {
    for (const element of aliceElements) {
      await element.animate(aliceTumbling, aliceTiming).finished;
    }
  };
  
  animateSequentially().catch(error => console.error(`Error animating Alices: ${error}`));
  