import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const ProgressStepper = ({ stepProp }) => {
    const steps = ['Feeling', 'Understanding', 'Support', 'Comments', 'Review'];

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={stepProp - 1} alternativeLabel>
                {steps.map((label) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
};

export default ProgressStepper;