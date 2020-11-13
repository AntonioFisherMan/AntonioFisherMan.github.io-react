import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { LoadingDataHOC } from '../../hoc/LoaingData';
import { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { AppStateType } from '../../redux/ReduxStore';
import { CountryType, uploadCountries } from '../../redux/reducers/AppReducer';


function countryToFlag(isoCode: string) {
        return typeof String.fromCodePoint !== 'undefined'
                ? isoCode
                        .toUpperCase()
                        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
                : isoCode;
}

const useStyles = makeStyles({
        option: {
                fontSize: 15,
                '& > span': {
                        marginRight: 10,
                        fontSize: 18,
                },
        },
});

function CountrySelect(props: any) {
        useEffect(() => {
                props.uploadCountries()
        })
        const classes = useStyles();

        return (
                <Autocomplete
                        id="country-select-demo"
                        style={{ width: 300 }}
                        options={props.countries as CountryType[]}
                        classes={{
                                option: classes.option,
                        }}
                        multiple={true}
                        autoHighlight
                        loading={props.loading}
                        loadingText={<CircularProgress />}
                        getOptionLabel={(option) => option.label}
                        renderOption={(option) => (
                                <>
                                        <span>{countryToFlag(option.code)}</span>
                                        {option.label} ({option.code}) +{option.phone}
                                </>
                        )}
                        renderInput={(params) => (
                                <TextField
                                        {...params}
                                        label="Choose a country"
                                        variant="outlined"

                                />
                        )}
                />
        );
}



let MapStateToProps = (state: AppStateType) => {
        debugger
        return {
                countries: state.app.countries
        }

}
export default compose(
        connect(MapStateToProps, { uploadCountries }),
        LoadingDataHOC)(CountrySelect)