import React from 'react';

import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

interface SelectOptionComponentProps {
    renderTitle: () => JSX.Element;
    options: string[];
    onSelectOption: (idx: number, option: string) => void;
}

export function SelectOptionComponent({ renderTitle, options, onSelectOption }: SelectOptionComponentProps) {

    function handleSelectOption(idx: number, option: string): void {
        onSelectOption(idx, option);
    }

    return (
        <div>
            <ScopedCssBaseline>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {renderTitle()}
                    </Grid>
                    {options.map((option, idx) => (
                        <Grid item key={option}>
                            <Button variant="contained" onClick={() => handleSelectOption(idx, option)}>
                                {option}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </ScopedCssBaseline>
        </div>
    );
}
