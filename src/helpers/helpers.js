import AOS from 'aos'; 

const AOSInit =()=>{
  AOS.init({
    easing: 'ease-out-back',
    duration: 1200,
    // startEvent: 'DOMContentLoaded',
    startEvent: 'load',
    useClassNames: true,
    mirror: true,
    once: false,
  })
}

export default  AOSInit