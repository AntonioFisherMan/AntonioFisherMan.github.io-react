import React from 'react'
import { NavLink } from 'react-router-dom'
import { colors } from '../../../constants/colors'
import { Box, makeStyles, Badge, TextField, Link, Typography } from '@material-ui/core';
import { UserType } from '../../../types/types';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Autocomplete } from '@material-ui/lab';
import { MyCloseIcon } from '../../../assets/icons/icons';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
        navBlock: {
                display: 'flex',
                alignItems: 'center'
        },
        img: {
                marginRight: 10,
        },
        text: {
                color: '#111111',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
        },
        searchIcon: {
                marginRight: 10,
        },
        input: {
                '&::placeholder': {
                        color: 'rgb(0,0,0,1.6)',
                        fontWeight: 600,
                        fontSize: 12,
                        textTransform: 'uppercase',
                },

        },
        root: {
                background: 'none',
                '&:hover': {
                        background: 'none',
                }
        },
        inputBox: {

                width: 150,
                padding: '0 !imporant',
        },
        logo: {},
        '@media (max-width: 600px)': {
                logo: {
                        width: 200
                }
        },
})

export const NavAccount: React.FC<NavAccountProps> = ({ isAuth, user, logout }) => {
        const classes = useStyles()
        return (
                <Box className={classes.navBlock}>
                        { isAuth && user
                                ? <NavLink className={classes.text} activeStyle={{ color: "#E77E83" }} to="/orders"><NavLink to="/orders" activeStyle={{ color: "#E77E83" }} className={classes.text}>{user.name}</NavLink><NavLink className={classes.text} to="#" onClick={logout}>Logout</NavLink></NavLink>
                                : <NavLink activeStyle={{ color: colors.PINK }} to="/sign"><img src="/images/svg/Vector (6).svg" className="ml-auto" alt="Account" /></NavLink>}
                </Box>

        )
}

export const NavCart: React.FC<NavCard> = ({ totalSizeCard }) => {
        const classes = useStyles()
        return (
                <Box className={classes.navBlock}>
                        <Badge badgeContent={totalSizeCard} color="primary">
                                <NavLink activeStyle={{ color: colors.PINK }} to="/card" className={classes.text}>
                                        {totalSizeCard === 0 ? <div className="d-flex align-items-center"><img style={{ marginRight: '5px' }} src="/images/svg/basket.svg" /><NavLink to="/card" activeStyle={{ color: colors.PINK }} className={classes.text}>Cart</NavLink></div> : <ShoppingBasketIcon />}
                                </NavLink>
                        </Badge>
                </Box>

        )
}
export const NavLogo = () => {
        const classes = useStyles()
        return (
                <Link href="/"><img className={classes.logo} src="/images/svg/logo.svg" alt="Logo" /></Link>
        )
}
export const NavSearch = () => {
        const classes = useStyles()
        return (
                <Box className={classes.navBlock}>
                        <Autocomplete
                                classes={{ root: classes.inputBox }}
                                freeSolo
                                closeIcon={<MyCloseIcon />}
                                disableClearable
                                options={top100Films.map((option) => option.title)}
                                renderInput={(params) => (
                                        <TextField
                                                {...params}
                                                placeholder="Search"
                                                variant="filled"
                                                InputProps={{
                                                        // ...params.InputProps,
                                                        type: "search",
                                                        classes: { input: classes.input, root: classes.root },
                                                        startAdornment: (

                                                                <SearchIcon color="primary" fontSize="small" />
                                                        ),

                                                }}

                                        />
                                )}
                        />

                </Box>


        )
}




type NavAccountProps = {
        isAuth: boolean,
        user: UserType,
        logout: () => void
}
type NavCard = {
        totalSizeCard: number
}



const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
        { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Seven Samurai', year: 1954 },
        { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Once Upon a Time in the West', year: 1968 },
        { title: 'American History X', year: 1998 },
        { title: 'Interstellar', year: 2014 },
        { title: 'Casablanca', year: 1942 },
        { title: 'City Lights', year: 1931 },
        { title: 'Psycho', year: 1960 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'The Intouchables', year: 2011 },
        { title: 'Modern Times', year: 1936 },
        { title: 'Raiders of the Lost Ark', year: 1981 },
        { title: 'Rear Window', year: 1954 },
        { title: 'The Pianist', year: 2002 },
        { title: 'The Departed', year: 2006 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'Whiplash', year: 2014 },
        { title: 'Gladiator', year: 2000 },
        { title: 'Memento', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Apocalypse Now', year: 1979 },
        { title: 'Alien', year: 1979 },
        { title: 'Sunset Boulevard', year: 1950 },
        { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
        { title: 'The Great Dictator', year: 1940 },
        { title: 'Cinema Paradiso', year: 1988 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Grave of the Fireflies', year: 1988 },
        { title: 'Paths of Glory', year: 1957 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Shining', year: 1980 },
        { title: 'WALL·E', year: 2008 },
        { title: 'American Beauty', year: 1999 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Princess Mononoke', year: 1997 },
        { title: 'Aliens', year: 1986 },
        { title: 'Oldboy', year: 2003 },
        { title: 'Once Upon a Time in America', year: 1984 },
        { title: 'Witness for the Prosecution', year: 1957 },
        { title: 'Das Boot', year: 1981 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'North by Northwest', year: 1959 },
        { title: 'Vertigo', year: 1958 },
        { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
        { title: 'Reservoir Dogs', year: 1992 },
        { title: 'Braveheart', year: 1995 },
        { title: 'M', year: 1931 },
        { title: 'Requiem for a Dream', year: 2000 },
        { title: 'Amélie', year: 2001 },
        { title: 'A Clockwork Orange', year: 1971 },
        { title: 'Like Stars on Earth', year: 2007 },
        { title: 'Taxi Driver', year: 1976 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'Double Indemnity', year: 1944 },
        { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
];