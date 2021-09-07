import React, {Component} from 'react';
import './access.scss'

class Access extends Component {
  constructor(props) {
    super(props);
    this.state= {
      
    }
  }
  toggleAccessibility(e){
    const AccessMenu = document.getElementById('accessibility-menu');
    AccessMenu.classList.toggle('active')
  }
  toggleQuestion(e){ 
    document.querySelector('.ref').classList.toggle('show')
  }
  questionClose(){
    document.getElementById('question').click()
  }
  toggleRight(){ 
    const AccessMenu = document.getElementById('accessibility-menu');
    AccessMenu.classList.toggle('right')
  }
  toggleProfile(e){ 
    let Target = e.target
    while (!Target.classList.contains('acsb-profile')){
      Target=Target.parentElement
    }
    Target.querySelector('label').click()
  }
  toggleCheckBox(e){
    let Target = e.target
    while (!Target.classList.contains('acsb-profile')){
      Target=Target.parentElement
    }
    Target.querySelector('label').click()
    // console.log(e.target)
    let checked = e.target.checked
    if(checked){
      document.documentElement.classList.add(e.target.name)
      Target.parentElement.querySelector('.acsb-profile-description').classList.add('is-visible')
    }else{
      document.documentElement.classList.remove(e.target.name)
      Target.parentElement.querySelector('.acsb-profile-description').classList.remove('is-visible')
    }
  }
  refresh(){
    document.body.classList.remove('Vision', 'Seizure', 'Cognitive')
    let acsb = [...document.querySelectorAll('.acsb-profile')]
    acsb.map(el=>{
      if(el.querySelector('input').checked){
        el.click()
      }
    })
  }
  render() {
    return(
      <div className="acceessibilityContainer">
        <aside className="accessibility" id="accessibility" onClick={this.toggleAccessibility}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 57"><path d="M20.821,0c-2.962,0-5.363,2.402-5.363,5.364s2.401,5.363,5.363,5.363c2.961,0,5.363-2.401,5.363-5.363S23.782,0,20.821,0z M17.932,11.083c-3.158,0.007-3.741,1.995-3.741,3.622v19.138c0,1.645,1.325,2.975,2.969,2.969l13.597-0.06c0,0,4.681,7.089,7.026,10.628c0.703,1.061,1.638,1.999,2.988,1.999c1.781,0,3.421-1.453,3.226-3.226c-0.074-0.695-0.231-1.354-0.652-1.979c-2.091-3.117-6.234-9.859-8.511-12.39c-0.578-0.643-1.377-1.112-2.315-1.109l-11.242,0.04V18.802l8.016,5.542c1.156,0.797,2.726,0.502,3.522-0.653c0.798-1.156,0.504-2.725-0.653-3.523c0,0-8.335-5.75-12.508-8.629C19.22,11.239,18.418,11.083,17.932,11.083z M48.926,16.447c-0.193,0-0.387,0.069-0.535,0.217l-9.995,9.995H24.225c-0.418,0-0.751,0.334-0.751,0.752v0.277c0,0.419,0.333,0.752,0.751,0.752h14.567c0.226,0,0.445-0.088,0.573-0.217l10.292-10.292c0.295-0.296,0.295-0.773,0-1.069l-0.198-0.198C49.313,16.517,49.117,16.447,48.926,16.447z M12.766,21.672C5.423,23.879,0,30.721,0,38.949C0,48.995,8.121,57,17.892,57c7.486,0,14.004-4.687,16.645-11.4l-2.691-4.058c-1.22,6.446-6.914,11.421-13.953,11.421c-7.955,0-14.21-6.363-14.21-14.014c0-5.9,3.735-11.026,9.084-13.062V21.672z"></path></svg>
        </aside>
        <aside className="accessibility-menu" id="accessibility-menu">
      <header className="accessibility-menu__header"><span onClick={this.toggleAccessibility} className="icon-times" id="accessibility-close"></span><span onClick={this.toggleRight} className="icon-arrows-h" id="right-place"></span><span className="icon-question" id="question" onClick={this.toggleQuestion} className="icon-question"></span></header>
      <h2 className="accessibility-menu__title">Accessibility Adjustments</h2>
      <button className="refresh icon-refresh" id="refresh" onClick={this.refresh}>Reset Settings</button>
      <article className="accessibility-menu__body">
        <ul className="accessibility-menu__action">
          <p>Choose the right accessibility profile for you</p>
          <li>
            <div className="acsb-profile" onClick={this.toggleProfile}>
              <div className="acsb-profile-toggle">
                <input onChange={this.toggleCheckBox} className="Seizure switch" type="checkbox" name="Seizure" id="Seizure"/>
                <label onClick={this.toggleProfile} className="switch-label" htmlFor="Seizure"></label>
              </div>
              <div className="acsb-profile-content"><span className="acsb-profile-name">Seizure Safe Profile</span><span className="acsb-profile-text">Eliminates flashes and reduces color</span></div>
            </div>
            <p className="acsb-profile-description">This profile enables epileptic and seizure prone users to browse safely by eliminating the risk of seizures that result from flashing or blinking animations and risky color combinations.</p>
          </li>
          <li>
            <div className="acsb-profile" onClick={this.toggleProfile}>
              <div className="acsb-profile-toggle">
                <input onChange={this.toggleCheckBox} className="one switch" type="checkbox" name="Vision" id="Vision"/>
                <label onClick={this.toggleProfile} className="switch-label" htmlFor="Vision"></label>
              </div>
              <div className="acsb-profile-content"><span className="acsb-profile-name">Vision Impaired Profile</span><span className="acsb-profile-text">Enhances the website's visuals</span></div>
            </div>
            <p className="acsb-profile-description">This profile adjusts the website, so that it is accessible to the majority of visual impairments such as Degrading Eyesight, Tunnel Vision, Cataract, Glaucoma, and others.li</p>
          </li>
          <li>
            <div className="acsb-profile" onClick={this.toggleProfile}>
              <div className="acsb-profile-toggle">
                <input onChange={this.toggleCheckBox} className="one switch" type="checkbox" name="Cognitive" id="Cognitive"/>
                <label onClick={this.toggleProfile} className="switch-label" htmlFor="Cognitive"></label>
              </div>
              <div className="acsb-profile-content"><span className="acsb-profile-name">Cognitive Disability Profile</span><span className="acsb-profile-text">Assists with reading and focusing</span></div>
            </div>
            <p className="acsb-profile-description">This profile provides various assistive features to help users with cognitive disabilities such as Autism, Dyslexia, CVA, and others, to focus on the essential elements of the website more easily.</p>
          </li>
        </ul>
      </article>
      <div className="ref"><span onClick={this.questionClose} className="ref__close icon-times"></span>
        <div className="ref__header">
          <h2>Accessibility Statemen</h2>
          <ul>
            <li>curamiatequila.com</li>
            <li>September 2021</li>
          </ul>
        </div>
        <div className="ref__body">
          <h3>Compliance status</h3>
          <p>We firmly believe that the internet should be available and accessible to anyone, and are committed to providing a website that is accessible to the widest possible audience, regardless of circumstance and ability.</p>
          <p>To fulfill this, we aim to adhere as strictly as possible to the World Wide Web Consortium’s (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level. These guidelines explain how to make web content accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that the website is accessible to all people: blind people, people with motor impairments, visual impairment, cognitive disabilities, and more.</p>
          <p>This website utilizes various technologies that are meant to make it as accessible as possible at all times. We utilize an accessibility interface that allows persons with specific disabilities to adjust the website’s UI (user interface) and design it to their personal needs.</p>
          <p>Additionally, the website utilizes an AI-based application that runs in the background and optimizes its accessibility level constantly. This application remediates the website’s HTML, adapts its functionality and behavior for screen-readers used by blind users, and for keyboard functions used by individuals with motor impairments.</p>
          <p>If you wish to contact the website's owner please use the following email support@lakersstore.com</p>
          <h3>Assistive technology and browser compatibility</h3>
          <p>We aim to support the widest array of browsers and assistive technologies as possible, so our users can choose the best fitting tools for them, with as few limitations as possible. Therefore, we have worked very hard to be able to support all major systems that comprise over 95% of the user market share including Google Chrome, Mozilla Firefox, Apple Safari, Opera and Microsoft Edge, both for Windows and for MAC users.</p>
          <h3>Notes, comments, and feedback</h3>
          <p>Despite our very best efforts to allow anybody to adjust the website to their needs, there may still be pages or sections that are not fully accessible, are in the process of becoming accessible, or are lacking an adequate technological solution to make them accessible. Still, we are continually improving our accessibility, adding, updating, and improving its options and features, and developing and adopting new technologies. All this is meant to reach the optimal level of accessibility, following technological advancements. If you wish to contact the website's owner please use the following email support@curamiaTequila.com</p>
        </div>
      </div>
    </aside>
      </div>
    )
  }
}

export default Access;