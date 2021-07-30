facebook having 33k components.
ES7 React/Redux/GraphQL/React-Native snippets

What is React?

What is JSX?
    JSX describe the UI

What is Virtual Dom?

What is Functional component and Class Components
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

What is Props? How it works in Functional component and Class Components

What is this keyword?

what is arrow function?

What is component State?
    state is a reserved keyword in react.
    State is nothing but an object that is privetly maintain inside a component
        never modify the states directly insted make use of setState()
        if we use it directly react will not render the component
    

*what is setState()?*
    This method accpets an objects which is nothing but the newState of the object 
    setState method has two parameters  
        1: state object
        2: callback function(arrow function)

Difference between props and State
Props:
    Props get passed to the component
    function parameters
    props are immutable(the parents own the props and can not be changed by theb children )
    props can be accessed in Functional component by props and
    in Class Components by this.props
State:
    State is managed within the component
    Variables declared in the function body
    state can be changed (state on the other hand managed by the component and hence component has full control to change the state)
    state can be accessed in Functional component by useState Hook and
    in Class Components by this.state