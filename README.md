# Wes Bos redux course notes

`$r.store` 

## Actions: something that happens in you application.

#### First there is an interaction
- someone loads a photo

- clicks a button

- adds a comment

#### Then there is a payload
- data to be acted upon
- information that is supplied by the actionCreator

### createStore has three methods

1) getStore() returns the current state.
2) dispatch( action ) dispatches an action to the state to create a new state.
3) subribe() updates the UI