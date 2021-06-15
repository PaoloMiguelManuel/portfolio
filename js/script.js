gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from('.content', {
  y: '-30%',
  opactity: '0',
  duration: 2,
  // ease: Power1.easeOut
});
tl.from(
  '.delay-animation',
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    duration: 2,
  },
  '-=1.5'
);
tl.from(
  '.hero-design',
  {
    opacity: 0,
    y: 50,
    duration: 2,
    rotation: 180,
  },
  '-=2'
);

// gsap.from('.circle-animation', {
//   opacity: 0,
//   stagger: 0.2,
//   scale: 0.1,
//   duration: 3,
// });

// gsap.from('.x-animation', {
//   opacity: 0,
//   stagger: 0.2,
//   scale: 0.1,
//   y: 100,
//   duration: 2.5,
// });

gsap.from('.scroll-transition', {
  scrollTrigger: {
    trigger: '.scroll-transition',
    // when top of scroll-transition elements hits bottom of scroll bar then something animates
    start: 'top bottom',
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

// gsap.from('.transition3', {
//    scrollTrigger: {
//       trigger: '.transition3',
//       // when top of scroll-transition elements hits bottom of scroll bar then something animates
//       start: "top center"
//    },
//    y: 50,
//    opacity: 0,
//    duration: 1.2,
//    stagger: .6
// })
