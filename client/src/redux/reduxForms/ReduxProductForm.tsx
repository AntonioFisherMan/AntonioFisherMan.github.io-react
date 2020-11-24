import React, { useState } from "react"
import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { PinkText } from "../../common/Typography/PinkText"
import { MySelect } from "../../common/FormsControls/MySelect"
import MyButton from "../../components/SiteButton/MyButton/MyButton"
import { H6 } from "../../common/Typography/H6"
import { Subtitle1 } from "../../common/Typography/Subtitle1"
import { ProductPropsType } from "../../pages/DetailsPage/DetailsPage"
import { required } from "../../utils/validators/validators"
import { MyDatePicker } from "../../common/FormsControls/MyDatePicker"
import { Box, Typography } from "@material-ui/core"
import GreyText from "../../common/Typography/GreyText"

type ProductValuesType = {
        item: { sizes: Array<string> },
        value: { openModal: (args: {}, string: string) => { ModalProduct: { product: object, size: string, modalOpen: boolean } } },
        classes: any
}

const ProductForm: React.FC<InjectedFormProps<ProductPropsType, ProductValuesType> & ProductValuesType> = (props) => {
        let [size, setSize] = useState('')
        const { classes } = props
        return (
                <form onSubmit={props.handleSubmit}>
                        <Box className={classes.informList}>
                                <H6 text="Step 1." propsClasses={classes.h6} />
                                <Box className={classes.selectBlock}>
                                        <Field validate={[required]} component={MySelect} onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => setSize(e.target.value)} name="size" className={classes.selectSize}>
                                                {props.item.sizes ? props.item.sizes.map((size: string) =>
                                                        <option key={size}>
                                                                {size}
                                                        </option>) : <option> Размеров нет</option>}
                                        </Field>
                                        <Box className={classes.selectIcon}>
                                                <img src="/images/svg/Vector (11).svg" alt="" />
                                                <GreyText text="size guide" propsClasses={classes.greyText2} />
                                        </Box>
                                </Box>
                                <Typography className={classes.h6sec}><H6 text="Rental Period" /><PinkText text="*" /></Typography>
                                <Box className={classes.informListRentalBlock}>
                                        <img src="/images/svg/Vector (12).svg" alt="" />
                                        <GreyText text="7 day rental" propsClasses={classes.greyText3} />
                                </Box>
                        </Box>

                        <Box className={classes.informList}>
                                <H6 text="Step 2." propsClasses={classes.h6} />
                                <Box className={classes.informListDate}>
                                        <Box className={classes.dateField}>
                                                <Subtitle1 text="Delivery Date" propsClasses={classes.dateFieldText} />
                                                <Field validate={[required]} emptyLabel={"Select date"} component={MyDatePicker} name="startDate" />
                                        </Box>
                                        <Box>
                                                <Subtitle1 text="Delivery Date" propsClasses={classes.dateFieldText} />
                                                <Field validate={[required]} component={MyDatePicker} name="endDate" />
                                                {props.submitSucceeded ? props.value.openModal(props.item, size) : null}
                                        </Box>
                                </Box>
                                <Box className={classes.informListTextArea}>  <PinkText text="*" />   <GreyText text="Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit
                                and keep all 3 outfits for 21 days!
                                    Wear all outfits for as many times as you want."/></Box>
                                <button ><MyButton text=" Add to cart" href="" /></button>
                        </Box>
                </form >
        )
}


export const ReduxProductForm = reduxForm<ProductPropsType, ProductValuesType>({ form: 'product' })(ProductForm)
