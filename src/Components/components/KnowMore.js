import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import './KnowMore.css'
// import KnowMoreCard from './KnowMoreCard';

const KnowMore = ({ title, body }) => {
    const text = [<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>]
    return (
        <div class="know-more-section">
            <div className="know-more-title">
                {title}
            </div>
            <div className="know-more-introduction">
                {body}
            </div>

        </div>
    )
}

export default KnowMore
