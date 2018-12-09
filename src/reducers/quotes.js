export default (state = [], action) => {
  let foundQuote;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      foundQuote = state.find(q => q.id === action.quoteId)
      return [...state.filter(q => q.id !== action.quoteId), {...foundQuote, votes: foundQuote.votes+1}]
    case 'DOWNVOTE_QUOTE':
      foundQuote = state.find(q => q.id === action.quoteId)
      if (foundQuote.votes > 0) {
        return [...state.filter(q => q.id !== action.quoteId), {...foundQuote, votes: foundQuote.votes-1}]
      } else {
        return [...state]
      }
    default:
      return state;
  }
  return state;
}
