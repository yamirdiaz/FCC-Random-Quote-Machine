import React, { useEffect, useState } from 'react'
import './App.css'
import {FaTwitterSquare, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { fetchQuotes } from './reducers-slices/Quotes/QuotesSlice'
import { generateNewColor } from './reducers-slices/randomNum/randomNumSlice'
import { newNumOfQuote } from './reducers-slices/Quotes/QuotesSlice'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuotes())
  }, [] )

  const quote = useSelector(state => state.quote)
  const randomNum = useSelector(state => state.randomNum)
  const styleLetter = {
    "color": `rgb( ${randomNum.numOfColorRed}, ${randomNum.numOfColorGreen}, ${randomNum.numOfColorBlue} )`,
  }

  const styleBackgrnd = {
    "background-color": `rgb( ${randomNum.numOfColorRed}, ${randomNum.numOfColorGreen}, ${randomNum.numOfColorBlue} )`, 
  }
  
  const handleClick = () => {
    dispatch(generateNewColor());
    dispatch(newNumOfQuote())
  }
  


  return (
    <>
      <div id="quote-box">
        {!quote.loading && quote.quotes.length ? (<h2 id="text" style={styleLetter}><FaQuoteLeft id="faquote-left"></FaQuoteLeft>{quote.quotes[quote.numOfQuote].quote}<FaQuoteRight id="faquote-right"></FaQuoteRight></h2>) : (<h2 id="text" style={styleLetter}>Loading...</h2>)}
        {!quote.loading && quote.quotes.length ? (<h4 id="author" style={styleLetter}>-{quote.quotes[quote.numOfQuote].author}-</h4>) : null}
      
        <div id="btn-wrapper">
        <a id="tweet-quote" href='twitter.com/intent/tweet' target='_blank'><FaTwitterSquare id="tweet-icon" style={styleLetter}></FaTwitterSquare></a>
        <button id="new-quote" style={styleBackgrnd} onClick={() => handleClick()}>New Quote</button>
        </div>
      
     
      </div>
      <code id="copyrights">by Yamir</code>
    </>
    
    
  )
}

export default App
