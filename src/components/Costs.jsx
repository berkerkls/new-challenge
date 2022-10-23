import React from 'react'

function Costs() {
  return (
    <>
        <div className="costs">
            <div className="materials">
                <h3>Costs</h3>
                <div className="wood">
                    <input type="radio" name='wood' className='radio-input'/>
                    <span>Wood</span>
                    <input type="range" name='wood-range' min="1" max="20" className='slider-input' />
                    <p>0-20</p>
                </div>
                <div className="food">
                    <input type="radio" name='wood' className='radio-input'/>
                    <span>Food</span>
                    <input type="range" name='wood-range' min="1" max="20" className='slider-input' />
                    <p>10-20</p>
                </div>
                <div className="gold">
                    <input type="radio" name='wood' className='radio-input'/>
                    <span>Gold</span>
                    <input type="range" name='wood-range' min="1" max="20" className='slider-input' />
                    <p>50-100</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Costs