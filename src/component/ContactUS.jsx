import { Typography, TextField, Box, Button } from '@mui/material'
import React from 'react'
import { useFormik, userFormik } from 'formik'
import * as Yup from 'yup'

const ContactUS = () => {

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            phone: "",
            message: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("This feild is required"),
            lastname: Yup.string().required("This feild is required"),
            phone: Yup.string().required("This feild is required"),
            message: Yup.string().required("This feild is required")
        }),
        onSubmit: (values) => {
            console.log("user form submited", values);
        }
    })

    return (
        <>

            <Typography variant='h3' component={'div'} mt={6} mb={4} > Contact us -</Typography>

            <Box component={'form'} onSubmit={formik.handleSubmit} >

                <TextField
                    //   required
                    //   id="outlined-required"
                    label="First Name"
                    type='text'
                    defaultValue="First Name"
                    sx={{ width: '300px', m: 3 }}
                    name="firstname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={ formik.touched.firstname && Boolean(formik.errors.firstname)}
                    helperText={formik.errors.lastname}
                />
                <TextField
                    //   required
                    //   id="outlined-required"
                    label="last Name"
                    type='text'
                    defaultValue="last Name"
                    name="lastname"
                    onChange={formik.handleChange}
                    sx={{ width: '300px', m: 3 }}
                    error={ formik.touched.lastname && Boolean(formik.errors.lasttname)}
                    helperText={formik.errors.lastname}
                    onBlur={formik.handleBlur}
                />
                <TextField
                    //   required
                    //   id="outlined-required"
                    label="Phone"
                    type='number'
                    name="phone"
                    onChange={formik.handleChange}
                    sx={{ width: '300px', m: 3 }}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.errors.phone}
                    onBlur={formik.handleBlur}
                />
                <TextField
                    sx={{ m: 3 }}
                    //   required
                    //   id="outlined-required"
                    label="Message"
                    multiline
                    name="message"
                    rows={2}
                    fullWidth
                    type='text'
                    onChange={formik.handleChange}
                    defaultValue="First Name"
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.errors.message}
                    onBlur={formik.handleBlur}
                />

                <Button variant='contained' type='submit' size='large' sx={{ ml: 3, mt: 1 }} > Send </Button>

            </Box>

        </>
    )
}

export default ContactUS