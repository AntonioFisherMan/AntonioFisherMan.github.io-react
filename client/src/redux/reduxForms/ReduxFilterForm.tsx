import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { MyCheckBox } from '../../components/common/FormsControls/MyCheckBox'
import MyButton from '../../components/SiteButton/MyButton'
import { H6 } from '../../components/Typography/H6'



const FilterForm = (props: any) => {
        return (
                <form className="sidebar" onSubmit={props.handleSubmit}>
                        <div className="sidebarItem">
                                <hr />
                                <div className="sidebarText">
                                        <H6 text="SIZE" />
                                        <img src="images/svg/Vector (7).svg" alt="" />
                                </div>
                                <ul className="sidebarMenu">
                                        <Field type="checkbox" component={MyCheckBox} name="size36" label="36" />
                                        <Field type="checkbox" component={MyCheckBox} name="size38" label="38" />
                                        <Field type="checkbox" component={MyCheckBox} name="size40" label="40" />
                                        <Field type="checkbox" component={MyCheckBox} name="size42" label="42" />
                                        <Field type="checkbox" component={MyCheckBox} name="S" label="S" />
                                        <Field type="checkbox" component={MyCheckBox} name="M" label="M" />
                                        <Field type="checkbox" component={MyCheckBox} name="L" label="L" />
                                        <Field type="checkbox" component={MyCheckBox} name="XL" label="XL" />
                                </ul>
                        </div>
                        <div className="sidebarItem">
                                <hr />
                                <div className="sidebarText">
                                        <H6 text="COLOUR" />
                                </div>
                                <ul className="sidebarMenu">
                                        <Field type="checkbox" component={MyCheckBox} name="Black" label="Black" />
                                        <Field type="checkbox" component={MyCheckBox} name="Blue" label="Blue" />
                                        <Field type="checkbox" component={MyCheckBox} name="White" label="White" />
                                        <Field type="checkbox" component={MyCheckBox} name="Cream" label="Cream" />
                                        <Field type="checkbox" component={MyCheckBox} name="Floral" label="Floral" />
                                        <Field type="checkbox" component={MyCheckBox} name="Pink" label="Pink" />
                                        <Field type="checkbox" component={MyCheckBox} name="Red" label="Red" />
                                </ul>
                        </div>
                        <div className="sidebarItem">
                                <hr />
                                <div className="sidebarText">
                                        <H6 text="STYLE" />
                                </div>
                                <ul className="sidebarMenu">
                                        <Field type="checkbox" component={MyCheckBox} name="Mini" label="Mini" />
                                        <Field type="checkbox" component={MyCheckBox} name="Maxi" label="Maxi" />
                                        <Field type="checkbox" component={MyCheckBox} name="Midi" label="Midi" />
                                        <Field type="checkbox" component={MyCheckBox} name="Jumsuit" label="Jumsuit" />
                                        <Field type="checkbox" component={MyCheckBox} name="Tops" label="Tops" />
                                        <Field type="checkbox" component={MyCheckBox} name="Bottoms" label="Bottoms" />
                                </ul>
                        </div>
                        <button><MyButton variant="outlined" color="default" text="Apply" href="" /></button>
                </form>
        )
}

export const ReduxFilterForm = reduxForm({
        form: 'filter'
})(FilterForm)