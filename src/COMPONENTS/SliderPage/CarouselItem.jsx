import React from 'react'
import Stars from './Stars'
import './CarouselItem.css'

const CarouselItem = (props) => {
  return (
    <div className='item_container'>
        <img src={props.img} alt="" />
        <div className="info">
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <div className="otherinfo">
                <div className="row">
                    <div className="sleep">
                        <h4>Sleep</h4>
                        <div className="sleephrs">{props.sleep}</div>
                    </div>
                    <div className="clean">
                        <h4>Clean</h4>
                        {props.clean && <Stars stars={props.clean} />}
                    </div>
                </div>
                <div className="row">
                    <div className="study">
                        <h4>Study</h4>
                        <div className="studyhrs">{props.study}</div>
                    </div>
                    <div className="noise">
                        <h4>Noise</h4>
                        <div className="noiselevel">Quiet</div>
                    </div>
                </div>
            </div>
            <div className="btns">
                <button className="btn N">N</button>
                <button className="btn Y">Y</button>
            </div>
        </div>
    </div>
  )
}

export default CarouselItem;