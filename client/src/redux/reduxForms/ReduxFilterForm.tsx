
import { Box, Divider, makeStyles } from '@material-ui/core'
import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { MyCheckBox } from '../../common/FormsControls/MyCheckBox'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { H6 } from '../../common/Typography/H6'

const useStyles = makeStyles({
        sidebarText: {
                display: 'flex',
                marginBottom: 15,
                marginTop: 20
        },

        sidebarMenu: {
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10
        },
        sidebarItem: {
                paddingBottom: 30,
                marginLeft: 20
        },
        sidebar: {},
        h6: {
                fontSize: 12,
                fontWeight: 600,
                color: '#000000',
                letterSpacing: 1.5,
                marginRight: 10
        },
        hr: {
                border: '1px solid #EEEEEE'
        }
})

const FilterForm: React.FC<InjectedFormProps> = (props) => {
        const classes = useStyles()
        return (
                <form className={classes.sidebar} onSubmit={props.handleSubmit}>
                        <Divider />
                        <Box className={classes.sidebarItem}>

                                <Box className={classes.sidebarText}>
                                        <H6 text="SIZE" propsClasses={classes.h6} />
                                        <img src="images/svg/Vector (7).svg" alt="" />
                                </Box>
                                <ul className={classes.sidebarMenu}>
                                        <Field type="checkbox" component={MyCheckBox} name="size36" label="36" />
                                        <Field type="checkbox" component={MyCheckBox} name="size38" label="38" />
                                        <Field type="checkbox" component={MyCheckBox} name="size40" label="40" />
                                        <Field type="checkbox" component={MyCheckBox} name="size42" label="42" />
                                        <Field type="checkbox" component={MyCheckBox} name="S" label="S" />
                                        <Field type="checkbox" component={MyCheckBox} name="M" label="M" />
                                        <Field type="checkbox" component={MyCheckBox} name="L" label="L" />
                                        <Field type="checkbox" component={MyCheckBox} name="XL" label="XL" />
                                </ul>
                        </Box>
                        <Divider />
                        <Box className={classes.sidebarItem}>
                                <Box className={classes.sidebarText}>
                                        <H6 text="COLOUR" propsClasses={classes.h6} />
                                </Box>
                                <ul className={classes.sidebarMenu}>
                                        <Field type="checkbox" component={MyCheckBox} name="Black" label="BLACK" />
                                        <Field type="checkbox" component={MyCheckBox} name="Blue" label="BLUE" />
                                        <Field type="checkbox" component={MyCheckBox} name="White" label="WHITE" />
                                        <Field type="checkbox" component={MyCheckBox} name="Cream" label="CREAM" />
                                        <Field type="checkbox" component={MyCheckBox} name="Floral" label="FLORAL" />
                                        <Field type="checkbox" component={MyCheckBox} name="Pink" label="PINK" />
                                        <Field type="checkbox" component={MyCheckBox} name="Red" label="RED" />
                                </ul>
                        </Box>
                        <Divider />
                        <Box className={classes.sidebarItem}>
                                <Box className={classes.sidebarText}>
                                        <H6 text="STYLE" propsClasses={classes.h6} />
                                </Box>
                                <ul className={classes.sidebarMenu}>
                                        <Field type="checkbox" component={MyCheckBox} name="Mini" label="MINI" />
                                        <Field type="checkbox" component={MyCheckBox} name="Maxi" label="MAXI" />
                                        <Field type="checkbox" component={MyCheckBox} name="Midi" label="MIDI" />
                                        <Field type="checkbox" component={MyCheckBox} name="Jumsuit" label="JUMSUIT" />
                                        <Field type="checkbox" component={MyCheckBox} name="Tops" label="TOPS" />
                                        <Field type="checkbox" component={MyCheckBox} name="Bottoms" label="BOTTOMS" />
                                </ul>
                        </Box>
                        <button><MyButton variant="outlined" color="default" text="Apply" href="" /></button>
                </form>
        )
}

export const ReduxFilterForm = reduxForm({ form: 'filter' })(FilterForm)