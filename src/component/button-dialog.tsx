import React, { useState } from 'react';

import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

import '../css/tailwind.css';

interface ButtonDialogInput {
  buttonLabel: string;
  renderDialog: () => React.ReactNode;
  onOpenDialog?: () => void;
  onCloseDialog?: () => void;
}

export function ButtonDialog({ buttonLabel, renderDialog, onOpenDialog, onCloseDialog }: ButtonDialogInput) {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () => {
    setShowDialog(true);
    if (onOpenDialog) {
      onOpenDialog(); // 觸發外部傳入的打開對話框行為
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    if (onCloseDialog) {
      onCloseDialog(); // 觸發外部傳入的關閉對話框行為
    }
  };

  return (
    <div>
      <ScopedCssBaseline>
        <Button onClick={handleOpenDialog}>
          {buttonLabel}
        </Button>
      </ScopedCssBaseline>

      {showDialog && (
        <Dialog
          className='tailwind'
          PaperProps={{
            className: "p-4",
          }}
          open={showDialog}
          onClose={handleCloseDialog}
        >
          {renderDialog()}
        </Dialog>
      )}
    </div>
  );
}
