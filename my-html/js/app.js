gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


/* с начала робимо так 

ScrollSmoother.create({   // создаем
   wrapper: '.wrapper',   // создаем оболочку wrapper (новий div в html)
   content: '.content',   // создаем в оболочке wrapper (новий div content)
   smooth: 1.5,           // щоб прокрутка була медленіша
   effects: true,         // щоб можна було обратится к любому блоку і дати йому свою скорость
})
*/
if (ScrollTrigger.isTouch !== 1) { // если ScrollTrigger.isTouch не ровно 1 виполняем всі остальні условия.
   // якщо будуть дивитися на таблеті чи телефоні то ці параметри не будуть застосовуватися
   ScrollSmoother.create({   // создаем
      wrapper: '.wrapper',   // создаем оболочку wrapper (новий div в html)
      content: '.content',   // создаем в оболочке wrapper (новий div content)
      smooth: 1.5,           // щоб прокрутка була медленіша
      effects: true,         // щоб можна було обратится к любому блоку і дати йому свою скорость
   })

   gsap.fromTo('.hero-section', { opacity: 1 }, {  // анимация .hero-section
      opacity: 0,
      scrollTrigger: {
         trigger: '.hero-section',
         start: 'center',
         end: '950',
         scrub: true
      }
   })



   /* с начала робимо так 
  gsap.fromTo('.gallery__left .gallery__item', { x: -400, opacity: 0 }, { // анимация .gallery__left .gallery__item' + items виїжджають злівої сторони
     opacity: 1, x: 0,
     scrollTrigger: {
        trigger: '.gallery__item',
        scrub: true
     }
  })
  */
   let itemsL = gsap.utils.toArray('.gallery__left .gallery__item') // переменна для items з лівої сторони ( let itemsL )

   itemsL.forEach(item => {    // щоб items виїжджали з лівої сторони і по черзі а не всі разом 
      gsap.fromTo(item, { x: -200, opacity: 0 }, {
         opacity: 1, x: 0,
         scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
         }
      })
   })

   let itemsR = gsap.utils.toArray('.gallery__right .gallery__item') // переменна для items з правої сторони ( let itemsR )

   itemsR.forEach(item => {     // щоб items виїжджали з правої сторони і по черзі а не всі разом 
      gsap.fromTo(item, { x: 350, opacity: 0 }, {
         opacity: 1, x: 0,
         scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
         }
      })
   })

}

