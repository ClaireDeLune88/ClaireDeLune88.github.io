import React from 'react'
import { StyledHatch } from './HatchStyles'

const Hatch = ({ hatchData: { id, nr, text, img_background, open, img_foreground, color }, handleClick }) => (
  <StyledHatch background={img_background} foreground ={img_foreground} onClick={() => handleClick(id,nr)}>
    <div className={open ? 'front open' : 'front'}>
      <p>{nr}</p>
    </div>
    <div className={open ? 'back open' : 'back'}>
      <p>{text}</p>
    </div>
  </StyledHatch>
)

export default Hatch
