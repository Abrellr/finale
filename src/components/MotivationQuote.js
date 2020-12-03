import React, {useState} from 'react'



const MotivationQuote = ({quotes}) => {
    console.log(quotes)
    
    const [randomQuote, setRandomQuote] = useState()

    const randomQuoteHandler = (quotes) => {
        const randNumb = Math.floor(Math.random() * quotes.length)
        console.log(randNumb)
        const randomQuote = setRandomQuote[randNumb] 
        console.log(randomQuote)
    }


    return (
        <div>
        
            <p>text</p>
            <button onClick={() => randomQuoteHandler()}></button>
        </div>
    )
}

export default MotivationQuote;