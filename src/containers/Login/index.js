import React, { useState } from "react"
import {
    useHistory
} from 'react-router-dom'
import { Form, Input, Button, Card, Alert, Divider } from 'antd';
import { useAuth } from 'routes/auth/ProvideAuth'

import './styles/login.css';

import { useTranslation } from 'react-i18next'


const Login = () => {

    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const { t, i18n } = useTranslation();
    const { t } = useTranslation();


    let loginSubmit = async () => {

        try {
            setError("")
            setLoading(true)
            await login(email, password)
            history.push("/dashboard")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <div style={{ background: "#EFF2F5", height: 'calc(100vh)' }} id="login">
            <div className="card-center">

                <Card className="card-login">
                    
                    <div className="logo-image">
                        <img src={'/ant-design-icon.png'} className="logo-login" alt="logo" />
                    </div>

                    <p className="title-login"><b>Sign in to your account</b></p>

                    {error && <Alert message={error} type="error" />}

                    <Form
                        className="p-login"
                        name="basic"
                        size="medium"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="email"
                            onChange={e => setEmail(e.target.value)}
                            rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Passowrd" />
                        </Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            className="btn-login"
                            onClick={loginSubmit}
                            disabled={loading}
                        >
                            {t('sign_in')}
                        </Button>
                    </Form>

                    <Divider plain style={{ marginTop: '32px' }}>OR</Divider>

                    <Button type="link" block style={{ marginTop: '8px' }}>
                        Forgot Password
                    </Button>

                </Card>
            </div>
        </div>
    )
}

export default Login
