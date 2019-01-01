export default (state = [], action) => {
  let targetQuote;

  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      targetQuote = state.find(q => q.id === action.quoteId)
      return [...state.filter(q => q.id !== action.quoteId), {...targetQuote, votes: targetQuote.votes + 1 }]
    case "DOWNVOTE_QUOTE":
      targetQuote = state.find(q => q.id === action.quoteId)
      if (targetQuote.votes > 0 ) {
        return [...state.filter(q => q.id !== action.quoteId), {...targetQuote, votes: targetQuote.votes - 1 }]
      }
      return state;
    default:
      return state;
  }
}
