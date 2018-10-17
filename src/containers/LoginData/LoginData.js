import React ,{Component} from 'react';
import {connect} from 'react-redux';
import './LoginData.css';
import Button from '../../components/UI/Buttons/Button';
import Input from '../../components/UI/Input/Input';
import * as actionCreators from '../../store/actions/index';
//import axios from '../../axios-orders';

class LoginData extends Component{
    state={
        loginForm :{
            email:{
                elementType: 'input',
                elementConfig: {
                    type: 'e-mail',
                    placeholder: 'Enter Your E-mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail:true
                },
                 lable:"Enter Your E-Mail",
                valid: false,
                touched: false
            },
            password:{
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password lend should be more than 8 caracters'
                },
                 lable:"Enter your Password",
                value: '',
                validation: {
                    required: true,
                    isPassword:true
                },
                valid: false,
                touched: false
            }
        }
        ,formIsValid:false,
        isSignup:true
    }
   
    

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isPassword) {
            const pattern = /([a-zA-Z0-9@*#]{8,15})/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }
    inputChangedHandler=(event, inputIdentifier)=>{
        const updatedOrderForm = {
            ...this.state.loginForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        console.log(updatedFormElement);
        this.setState({loginForm: updatedOrderForm, formIsValid: formIsValid});
    }


    submitHandler=(event)=>{
        event.preventDefault();
     this.props.onAuth(this.state.loginForm.email.value,this.state.loginForm.password.value,this.state.isSignup)
    }

    onSignupEventHandler=()=>{
        this.setState(prevState=>{
            return{isSignup:!prevState.isSignup}
        })
    }


    render(){
        const formElementsArray = [];
        for (let key in this.state.loginForm) {
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            });
            console.log(formElementsArray);
        }
        let form = (
            <form onSubmit={this.submitHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        lable={formElement.config.lable}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>LOG IN</Button>
            </form>
            
        );


        return(
            <div className="FormData">
                <h1>Please LOG IN</h1>
                {form}
                <Button btnType="Danger"  clicked={this.onSignupEventHandler}>{!this.state.isSignup ?"SIGN OUT" :"SIGN IN" }</Button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        
    };
};
const mapDispatchToProp= dispatch =>{
    return{
        onAuth: (email,password,isSignup)=>dispatch(actionCreators.auth(email,password,isSignup))
    }
}
export default connect(mapStateToProps,mapDispatchToProp)(LoginData);