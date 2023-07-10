import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, ThemeProvider } from '@mui/material';
import { themeTextField } from '../../theme/themeComponents';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import styles from '../../CssModules/Registration.module.css';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["male"] = "male";
    GenderEnum["female"] = "female";
})(GenderEnum || (GenderEnum = {}));
const Registration = (props) => {
    var _a, _b, _c, _d, _e;
    const [reqCaptcha, setReqCaptcha] = useState(false);
    const [validCaptcha, setValidCaptcha] = useState(false);
    const schema = yup
        .object({
        firstname: yup.string().required("First name is required").min(4, "The name must be at least 4 characters long")
            .max(20, "The name must be no more than 20 characters"),
        lastname: yup.string().required("Last name is required").min(4, "The name must be at least 4 characters long")
            .max(20, "The name must be no more than 20 characters"),
        email: yup.string().email("Not correct email").required("Email is required"),
        gender: yup.string(),
        password: yup.string().required("Pass is required").min(6, "The pass must be at least 6 characters long")
            .max(60, "The name must be no more than 60 characters"),
        confpassword: yup.string().required("Pass is required").oneOf([yup.ref("password")], "Passwords must match")
            .min(6, "The pass must be at least 6 characters long").max(60, "The name must be no more than 60 characters"),
    })
        .required();
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            gender: GenderEnum[GenderEnum.male]
        },
        resolver: yupResolver(schema)
    });
    const recaptchaRef = useRef(null);
    const onSubmit = (data) => {
        const recaptchaValue = recaptchaRef.current.getValue();
        if (recaptchaValue !== '') {
            axios.post('http://localhost:5000/reg/user', {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                gender: data.gender,
                password: data.password,
                captcha: recaptchaValue
            }, { headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }, withCredentials: true })
                .then(response => console.log(response))
                .catch(error => console.log(error));
            if (reqCaptcha === true)
                setReqCaptcha(false);
        }
        else {
            setReqCaptcha(true);
        }
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: styles.main_form },
            React.createElement("p", { className: styles.register_title, id: 'register_symbol' }, "Registration"),
            React.createElement(ThemeProvider, { theme: themeTextField },
                React.createElement("form", { onSubmit: handleSubmit(onSubmit), method: "POST" },
                    errors.firstname ?
                        React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Username:", variant: "standard", sx: { marginTop: '13px' }, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("firstname"), { error: true, "aria-invalid": errors.firstname ? "true" : "false" }))
                        :
                            React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Username:", variant: "standard", sx: { marginTop: '13px' }, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("firstname"), { "aria-invalid": errors.firstname ? "true" : "false" })),
                    errors.firstname ? React.createElement("p", { className: styles.input_validate, role: 'alert' }, (_a = errors.firstname) === null || _a === void 0 ? void 0 : _a.message) : null,
                    errors.lastname ?
                        React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Lastname:", variant: "standard", sx: { marginTop: '29px' }, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("lastname"), { error: true, "aria-invalid": errors.lastname ? "true" : "false" }))
                        :
                            React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Lastname:", variant: "standard", sx: { marginTop: '29px' }, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("lastname"), { "aria-invalid": errors.lastname ? "true" : "false" })),
                    errors.lastname ? React.createElement("p", { className: styles.input_validate, role: 'alert' }, (_b = errors.lastname) === null || _b === void 0 ? void 0 : _b.message) : null,
                    React.createElement(FormControl, { sx: { marginTop: '40px' } },
                        React.createElement(FormLabel, { id: 'radio-label', sx: { fontSize: '17px', fontFamily: 'Amethysta', color: 'black' } }, "Gender"),
                        React.createElement(Controller, { control: control, name: 'gender', render: ({ field }) => (React.createElement(RadioGroup, Object.assign({ "aria-labelledby": 'radio-label' }, field, { row: true, name: 'radio-buttons-group' }),
                                React.createElement(FormControlLabel, { value: 'male', control: React.createElement(Radio, { sx: { '& .MuiSvgIcon-root': { fontSize: 21 } } }), label: 'Male' }),
                                React.createElement(FormControlLabel, { value: 'female', control: React.createElement(Radio, { sx: { '& .MuiSvgIcon-root': { fontSize: 21 } } }), label: 'Female' }))) })),
                    errors.email ?
                        React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Email:", variant: "standard", sx: { marginTop: '10px' }, error: true, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("email")))
                        :
                            React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Email:", variant: "standard", sx: { marginTop: '10px' }, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("email"))),
                    errors.email ? React.createElement("p", { className: styles.input_validate, role: 'alert' }, (_c = errors.email) === null || _c === void 0 ? void 0 : _c.message) : null,
                    errors.password ?
                        React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Password:", variant: "standard", sx: { marginTop: '29px' }, error: true, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("password")))
                        :
                            React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Password:", variant: "standard", sx: { marginTop: '29px' }, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("password"))),
                    errors.password ? React.createElement("p", { className: styles.input_validate, role: 'alert' }, (_d = errors.password) === null || _d === void 0 ? void 0 : _d.message) : null,
                    errors.confpassword ?
                        React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Confirm password:", variant: "standard", sx: { marginTop: '29px' }, error: true, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("confpassword")))
                        :
                            React.createElement(TextField, Object.assign({ className: styles.reg_input_username, id: "standart-basic", label: "Confirm password:", variant: "standard", sx: { marginTop: '29px' }, InputLabelProps: { sx: { fontFamily: 'Amethysta', fontSize: '17px' } } }, register("confpassword"))),
                    errors.confpassword ? React.createElement("p", { className: styles.input_validate, role: 'alert' }, (_e = errors.confpassword) === null || _e === void 0 ? void 0 : _e.message) : null,
                    React.createElement("div", { className: styles.recaptcha_form },
                        React.createElement(ReCAPTCHA, { ref: recaptchaRef, sitekey: '6Le0sdYmAAAAAO4mIkz_xx5yYnxkndqCEBWhvx1B' }),
                        reqCaptcha ? React.createElement("p", { className: styles.input_validate }, "Confirm that you are not a robot") : null,
                        React.createElement(Button, { id: 'submit', variant: 'contained', className: styles.reg_but_submit, color: 'primary', sx: { marginTop: '18px', backgroundColor: 'black', transition: 'all 0.4s ease-in-out' }, type: 'submit' }, "Create Account")))))));
};
export default Registration;
