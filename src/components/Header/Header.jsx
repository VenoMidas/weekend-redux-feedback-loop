import Icon from '@mui/material/Icon';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // use location for react router
    const location = useLocation();

    // displays header and links to admin and feedback sections
    return (
        <>
            <Grid container alignItems="center" className='App-header'>

                <Grid item xs={2} sm={3} md={3} lg={4} xl={4}>
                    <Icon sx={{ fontSize: 75 }}>
                        <RateReviewIcon sx={{ fontSize: 75 }} />
                    </Icon>
                </Grid>

                <Grid item xs={8} sm={6} md={6} lg={4} xl={4}>
                    <Typography variant="h3" gutterBottom>Feedback!</Typography>
                </Grid>

                <Grid item xs={2} sm={3} md={3} lg={4} xl={4}>
                    <Icon sx={{ fontSize: 75 }}>
                        <RateReviewIcon sx={{ transform: "scaleX(-1)", fontSize: 75 }} />
                    </Icon>
                </Grid>

            </Grid>

            <ul>
                <li>
                    <Link to="/admin" className={location.pathname === '/admin' ? 'active' : undefined}>
                        Admin
                    </Link>
                </li>
                <li>
                    <Link to="/step/feeling" className={location.pathname.startsWith('/step') ? 'active' : undefined}>
                        Feedback
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default Header;