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
  customButtonRender?: () => React.ReactNode;
  useScopedCssBaseline?: boolean;
}

export function ButtonDialog({ buttonLabel, renderDialog, onOpenDialog, onCloseDialog, customButtonRender, useScopedCssBaseline = true }: ButtonDialogInput) {
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

  // 如果有自定義按鈕渲染，則使用它，否則使用默認按鈕
  const ButtonContent = () => (
    customButtonRender ? (
      <div onClick={handleOpenDialog}>
        {customButtonRender()}
      </div>
    ) : (
      <Button onClick={handleOpenDialog}>
        {buttonLabel}
      </Button>
    )
  );

  return (
    <div>
      {useScopedCssBaseline ? (
        <ScopedCssBaseline>
          <ButtonContent />
        </ScopedCssBaseline>
      ) : (
        <ButtonContent />
      )}

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
