import React from 'react'
import { withStyles, Box, Grid, FormGroup } from '@material-ui/core'
import MyButton from '../../SiteButton/MyButton/MyButton'
import { Field } from 'redux-form'
import { MyInput } from '../../../common/FormsControls/MyInput'
import { required } from '../../../utils/validators/validators'
import { H6 } from '../../../common/Typography/H6'
import { MySelect } from '../../../common/FormsControls/MySelect'
import { compose } from 'redux'
import { LoadingDataHOC } from '../../../hoc/LoaingData'
import { styles } from './styles'
import UploadFile from '../../UploadFile/UploadFile'

const CheckoutForm = (props) => {
    const { classes } = props
    return (
        <>
            <form className={classes.checkoutForm} onSubmit={props.handleSubmit}>
                <H6 text="Shipping address" propsClasses={classes.headline} />
                <Grid item>
                    <FormGroup row={true}>
                        <Grid item xs={12} sm={6} className={classes.margin}>
                            <Field type="text" label="Имя" validate={[required]} component={MyInput} name="name" placeholder="Имя" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <Field type="text" label="Фамилия" validate={[required]} component={MyInput} name="surname" placeholder="Фамилия" fullWidth />
                        </Grid>
                    </FormGroup>

                </Grid>
                <Field type="text" label="City" validate={[required]} component={MyInput} name="city" placeholder="Город" fullWidth />
                <Field type="text" validate={[required]} component={MyInput} label="Номер новой почты" name="post" placeholder="Номер новой почты" fullWidth />
                <Grid item>
                    <FormGroup row={true}>
                        <Grid item sm={6} xs={12} className={classes.margin}>
                            <Field validate={[required]} component={MySelect} name="country" className={classes.select} >
                                <option defaultValue>Country</option>
                                <option>Ukraine</option>
                                <option>Russia</option>
                            </Field>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Field type="text" validate={[required]} component={MyInput} name="code" label="Post code" placeholder="Post code" id="inputZip" fullWidth />

                        </Grid>
                    </FormGroup>
                </Grid>
                <Field type="number" validate={[required]} component={MyInput} label="Телефон" name="phone" placeholder="Номер телефона" fullWidth />
                {props.form === "userInform" ? <UploadFile onSaveFiles={props.onSaveFiles} /> : null}
                <Box className={classes.btnBlock}>
                    {props.form === "userInform" ? <MyButton href="" text="Return to card" variant="text" size="large" onClick={() => props.changeLayout(true)} /> : null}
                    {props.isAddInform ? <Box className="ml-auto">
                        <button ><MyButton text="Обновить" href="" loading={props.loading} /></button>
                    </Box> : <Box className="ml-auto">
                            <button ><MyButton text={props.btn} href="" loading={props.loading} /></button>
                        </Box>}
                </Box>
            </form>
        </>

    )
}



export default compose(LoadingDataHOC, withStyles(styles))(CheckoutForm)


