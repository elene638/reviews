import React from "react";
import Reviews from "./Data";
import {FaChevronLeft, FaChevronRight, FaPeopleArrows, FaQuoteRight} from "react-icons/fa"


function Review() {

    //const [reviews, setReviews] = React.useState(Reviews)
    const [index, setIndex] = React.useState(0)
    const {name, job, image, text} = Reviews[index]

    function checkIndex(number) {
        if (number > Reviews.length - 1) {
            return 0
        }
        if (number < 0) {
            return Reviews.length - 1
        }
        return number
    }

    function leftClick () {
        setIndex((prevValue) => {
            let newIndex = prevValue + 1
            return checkIndex(newIndex)
        })
    }

    function rightClick () {
        setIndex((prevValue) => {
            let newIndex = prevValue - 1
            return checkIndex(newIndex)
        })
    }

    const randomClick = () => {
        let randomIndex = Math.ceil(Math.random() * Reviews.length)
        setIndex(checkIndex(randomIndex))
    }
    

    return (
        <div className="info">
            <div className="container">
                <img alt="pic" src={image}/>
                <span className="quote">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="name">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
            <div className="buttons">
                <button onClick={leftClick}  className="btn-left">
                    <FaChevronLeft />
                </button>
                <button onClick={rightClick} className="btn-right">
                    <FaChevronRight />
                </button> <br/>
                <button onClick={randomClick} className="btn-random">Suprise Me</button>
            </div>
        </div>
    )
}

export default Review;

    //const checkNumber = (number) => {
    //     if (number > Reviews.length - 1) {
    //         return 0;
    //     } 
    //     if (number < 0) {
    //         return Reviews.length - 1
    //     } 
    //     return number
    // }

    // const rightClick = () => {
    //     setIndex((prevValue) => {
    //         let newIndex = prevValue + 1
    //         return checkNumber(newIndex)
    //     })
    // }

    // const leftClick = () => {
    //     setIndex((prevValue) => {
    //         let newIndex = prevValue - 1
    //         return checkNumber(newIndex)
    //     })
    // }