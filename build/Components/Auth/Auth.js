import React from "react";
import styles from '../../CssModules/Auth.module.css';
import { useForm } from 'react-hook-form';
import { TextField, Button, ThemeProvider } from '@mui/material';
import { themeTextField } from '../../theme/themeComponents';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
export const Auth = (props) => {
    var _a, _b;
    const schema = yup
        .object({
        email: yup.string().email("Not correct email").required("Email is required"),
        password: yup.string().required("Pass is required").min(6, "The pass must be at least 6 characters long")
            .max(60, "The name must be no more than 60 characters")
    })
        .required();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        axios.post('http://localhost:5000/auth/login', {
            email: data.email,
            password: data.password
        }, { headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }, withCredentials: true })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: styles.main_form },
            React.createElement("p", { className: styles.header_auth }, "Authorization"),
            React.createElement(ThemeProvider, { theme: themeTextField },
                React.createElement("form", { onSubmit: handleSubmit(onSubmit), method: "POST" },
                    errors.email ?
                        React.createElement(TextField, Object.assign({ className: styles.auth_input, id: "standart-basic", label: "Email:", variant: "standard", sx: { marginTop: '-20px', width: '430px', height: '25px' }, error: true, InputLabelProps: { sx: { fontFamily: 'Segoe UI', fontSize: '17px' } } }, register("email")))
                        :
                            React.createElement(TextField, Object.assign({ className: styles.auth_input, id: "standart-basic", label: "Email:", variant: "standard", sx: { marginTop: '-20px', width: '430px', height: '25px' }, InputLabelProps: { sx: { fontFamily: 'Segoe UI', fontSize: '17px' } } }, register("email"))),
                    errors.email ? React.createElement("p", { className: styles.input_validate, role: 'alert' }, (_a = errors.email) === null || _a === void 0 ? void 0 : _a.message) : null,
                    errors.password ?
                        React.createElement(TextField, Object.assign({ className: styles.auth_input, id: "standart-basic", label: "Password:", variant: "standard", sx: { marginTop: '29px', width: '430px', height: '25px' }, error: true, InputLabelProps: { sx: { fontFamily: 'Segoe UI', fontSize: '17px' } } }, register("password")))
                        :
                            React.createElement(TextField, Object.assign({ className: styles.auth_input, id: "standart-basic", label: "Password:", variant: "standard", sx: { marginTop: '29px', width: '430px', height: '25px' }, InputLabelProps: { sx: { fontFamily: 'Segoe UI', fontSize: '17px' } } }, register("password"))),
                    errors.password ? React.createElement("p", { className: styles.input_validate, style: { marginTop: '23px' }, role: 'alert' }, (_b = errors.password) === null || _b === void 0 ? void 0 : _b.message) : null,
                    React.createElement("div", { className: styles.submit_block },
                        React.createElement(Button, { id: 'submit', variant: 'contained', className: styles.auth_but_submit, color: 'primary', sx: { marginTop: '45px', backgroundColor: 'black', transition: 'all 0.4s ease-in-out' }, type: 'submit' }, "Sign In"),
                        React.createElement("a", { className: styles.ref_fgpass, href: "/" }, "Forgot your password?")))))));
};
