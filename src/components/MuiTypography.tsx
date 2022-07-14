import { Typography } from "@mui/material";

const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>


            <Typography variant="subtitle1">Sub title 1</Typography>
            <Typography variant="subtitle2">Sub title 2</Typography>

            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis sequi dicta blanditiis ab magnam provident repudiandae perspiciatis expedita libero minus possimus, quis aliquam atque. Eaque aliquam obcaecati laborum mollitia.</Typography>

            <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, est ex dicta magni fugiat reprehenderit natus vitae nobis facere excepturi? Doloremque blanditiis, voluptatum quam placeat ipsum sint porro. Amet, corrupti.</Typography>
        </div>
    );
};

export default MuiTypography;