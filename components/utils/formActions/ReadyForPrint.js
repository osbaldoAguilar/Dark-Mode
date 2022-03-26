import res from '../../../styles/Resume.module.scss'
import { store } from '../../DataStore'
import {useContext} from 'react'


function ReadyForPrint({id}) {
    const gs = useContext(store)
    console.log('RFP: ',gs);
    const gsState = gs.state
    let yourName = gsState.personal.name
    let phone = gsState.personal.phone
    let email = gsState.personal.email
    let website = gsState.personal.website
    let summary = gsState.summary
    let experience = gsState.experience
    console.log('xp: ', experience);
    let skills = gsState.skills
    let certs = gsState.certs
  return (
    <div className={res.resume} id={id}>
          <div className={res.header}>
            <div className={res.headerL}>
              <p>{phone} 📞</p>
              <p>{email} 📧</p>
              <p>{website} 🕸️</p>
            </div>
            <div>
              <div className={res.headerR}>
                <h3>{yourName}</h3>
              </div>
            </div>
          </div>
          <div className={res.body}>
            <h4 className={res.bodyTitle}>
              Summary
            </h4>
            <p>{summary}</p>
            <div />
            <h4>EXPERIENCE</h4>
                <ul>
                    {[...Array(experience)]?.map((index, key) => <li key={key}>{experience[key]}</li>)}
                </ul>
            <div />
            <h4>Skills</h4>
                <ul>
                    {skills.map((index, key) => <li key={key}>{skills[key]}</li>)}
                </ul>
            <div/>
            <h4>Licenses & Certifications</h4>
                <ul>
                    {certs.map((index, key) => <li key={key}><a href="">{certs[key]}</a></li>)}
                </ul>
          </div>
        </div>
  )
}

export default ReadyForPrint