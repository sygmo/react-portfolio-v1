import React from 'react'
import Resume from '../../assets/Sydney-Mercier-Resume-MAR2022.pdf'

const CTA = () => {
  return (
    <div className='CTA'>
        <a href={Resume} download className='btn'>Download Résumé</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA