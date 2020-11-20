import React from 'react'
import { withStyles, Box, Grid, FormGroup } from '@material-ui/core'
import MyButton from '../../SiteButton/MyButton/MyButton'
import { Field } from 'redux-form'
import { MyInput } from '../../common/FormsControls/MyInput'
import { required } from '../../../utils/Validators/validators'
import { H6 } from '../../Typography/H6'
import { MyCheckBox } from '../../common/FormsControls/MyCheckBox'
import { MySelect } from '../../common/FormsControls/MySelect'
import { compose } from 'redux'
import { LoadingDataHOC } from '../../../hoc/LoaingData'
import { styles } from './styles'

const CheckoutForm = (props) => {
    const { classes } = props
    return (
        <>
            <form className={classes.checkoutForm} onSubmit={props.handleSubmit}>
                <H6 text="Shipping address" classes={classes.headline} />
                <Grid item>
                    <FormGroup row={true}>
                        <Grid item xs={12} sm={6} className={classes.margin}>
                            <Field type="text" label="Фамилия" validate={[required]} component={MyInput} name="surname" placeholder="Фамилия" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field type="text" label="Имя" validate={[required]} component={MyInput} name="name" placeholder="Имя" fullWidth />

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
                            </Field>                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Field type="text" validate={[required]} component={MyInput} name="code" label="Post code" placeholder="Post code" id="inputZip" fullWidth />

                        </Grid>
                    </FormGroup>
                </Grid>
                <Field type="number" validate={[required]} component={MyInput} label="Телефон" name="phone" placeholder="Номер телефона" fullWidth />
                <H6 text="Billing Address" />
                <Field type="checkbox" component={MyCheckBox} name="check" label="same as Shipping Address" />
                <Box className={classes.btnBlock}>
                    <MyButton href="/catalog" text="Return to catalogue" variant="text" />
                    {props.isAddInform ? <div className="ml-auto">
                        <button ><MyButton text="Обновить" href="" loading={props.loading} /></button>
                    </div> : <div className="ml-auto">
                            <button ><MyButton text={props.btn} href="" loading={props.loading} /></button>
                        </div>}
                </Box>
            </form>
        </>

    )
}



export default compose(LoadingDataHOC, withStyles(styles))(CheckoutForm)


