import ClientRequest from '@/tools/ClientRequest';
import { digitsArToEn, digitsFaToEn } from '@persian-tools/persian-tools';
import { Button, Checkbox, DatePicker, Divider, Form, Input, Select, Space, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default function PostsEdit() {

    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        ClientRequest('/users/' + id).then(({ data }) => setUser(data))
    }, [id])

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onFinish = values => {
        setIsLoading(true)
        console.log(values);
        ClientRequest.put(`/users/${id}`, { data: values }).then(() => {
            navigate(`/users/${id}`)
        }).finally(() => {
            setIsLoading(false)
        })
    };
    const onReset = () => {
        form.resetFields();
    };

    function normalizedDigit(value) {
        return digitsFaToEn(digitsArToEn(value))
    }

    if (!user.id) {
        return <Spin fullscreen />
    }

    return (
        <div>
            <h2>ویرایش کاربر</h2>
            <Divider />
            <Form
                {...layout}
                form={form}
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                initialValues={user}
            >
                <Form.Item name="username" label="نام کاربری" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="phone" label="شماره تلفن" rules={[{ required: true }, { len: 11 }]} normalize={normalizedDigit}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="ایمیل" rules={[{ required: true }, { type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="رمز عبور" rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item name="birthDate" label="تاریخ تولد" rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="جنسیت"
                    rules={[{ required: true, message: 'لطفا جنسیت خود را انتخاب کنید!' }]}
                >
                    <Select placeholder="جنسیت:" allowClear>
                        <Option value="male">زن</Option>
                        <Option value="female">مرد</Option>
                        <Option value="other">دیگر..</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="admin" label="مدیر" valuePropName="checked">
                    <Checkbox>بله</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit" disabled={isLoading} loading={isLoading}>
                            ثبت
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            پاک کردن
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}
