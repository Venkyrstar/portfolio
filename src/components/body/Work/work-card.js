import React from 'react'
import './work-card.css'

function WorkCard({item}) {
  return (
    <div className='work-card'>
        <img src={item.companyLogo} className='work-logo' />
        <div className='work-info'>
            <label className='company-name'>{item.company}</label>
            <div className='work-list'>
                {item.details.map((role)=>{
                    return (
                        <div className='work-details'>
                            <div className='role-dates'>
                                <label>{role.dateJoining}</label>-<label>{role.dateEnd}</label>
                            </div>
                            <div className='role-designation'>
                                <label>{role.designation}</label>
                            </div>
                            <div className='role-description'>
                                <p>{role.description}</p>
                            </div>
                            <div className='role-tags'>
                                {role.tags.map((tag) => {
                                return (
                                    <label className='tag'>{tag}</label>
                                )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default WorkCard
