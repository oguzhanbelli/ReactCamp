import { Formik, Form, Field ,ErrorMessage} from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from 'yup'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {
    const initialValues = {
        productName: "",
        unitPrice: 10,
    }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);

                }

                }
            >
                <Form className="ui form">
                    <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"></KodlamaIoTextInput>
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"></KodlamaIoTextInput>
                
                    <Button color="green" type="submit">
                        Ekle
                    </Button>
                </Form>


            </Formik>

        </div>
    )
}
