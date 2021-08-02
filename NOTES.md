facebook having 33k components.
ES7 React/Redux/GraphQL/React-Native snippets

# What is React?

# What is JSX?
    JSX is nothing but a JavaScript XML where we can write HTML code into JavaScript and place them in the DOM without using any function like appendChild() or createElement().
    JSX is not a necessary to write React Application, but JSX makes your react code simpler and elegant
    JSX ultimately transpiles to pure JavaScript which is understood by the browsers. 
    JSX describe the UI

# What is Virtual Dom?
    Virtual Dom is the blueprint of Real Dom.
    whenever HTML elements get changed, then the Virtual Dom gets updated.

# What is Functional component and Class Components
    Two component types

        Stateless Functionl component
            JavaScript functions
                simple functions
                use Func components as much as possible
                absence of 'this' keyword
                solution without using state
                Mainly responsible for the ui 
                Stateless/dumb/presentional

        Stateful class component   
            class extending component class
            render method returning HTML
                More feature rich
                Maintain their own private data - state 
                complex ui logic
                provide lifecycle hooks
                Stateful/smart/container

# What is Props? How it works in Functional component and Class Components

# What is this keyword?

# what is arrow function?

# What is component State?
    state is a reserved keyword in react.
    State is nothing but an object that is privetly maintain inside a component
        never modify the states directly insted make use of setState()
        if we use it directly react will not render the component
    

# what is setState()?
    This method accpets an objects which is nothing but the newState of the object 
    setState method has two parameters  
        1: state object
        2: callback function(arrow function)

# Difference between props and State

-  Props:
    - Props get passed to the component
    - function parameters
    - props are immutable(the parents own the props and can not be changed by theb children )
    - props can be accessed in Functional component by props and in Class Components by this.props

-  State:
    - State is managed within the component
    - Variables declared in the function body
    - state can be changed (state on the other hand managed by the component and hence component has full control to change the state)
    - state can be accessed in Functional component by useState Hook and in Class Components by this.state


# Destructuring props and state

- when the user interacts with our applications events are fired e.g. mouseover, mouseclick, keypress, changeEvent and so on.
- In React onclick event c has to be camelcase/uppercase

# Event handling in function and class

# Binding Event Handlers(Event bindig is required in react)
- there are 4 types of approach to binding events
    - 1 approach : use bind keyword in render method 
        - <button onClick={this.clickHandler.bind(this)}>Click</button> 

    - 2 approach : use arrow function in render method 
        - <button onClick={ () => this.clickHandler()}>Click</button> 

    - 3 approach : use bind keyword in class constructor
        - this.clickHandler = this.clickHandler.bind(this)


    - 4 approach : event binding using arrow function in class property
        - clickHandler = () => {
                this.setState({
                    message : "Goodbye!"
                })
            }
        <button onClick={ this.clickHandler }>Click</button>