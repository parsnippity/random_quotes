const Quote = ({quote}) => {
  return (
    <div id="theInfo">
        <h1 id="title">Random Quote Generator</h1>
        <h1 id="quote">"{quote.data.content}"</h1>
        <h2 id="author">- {quote.data.author}</h2>
    </div>
  )
}

export default Quote;