import React, { useState } from 'react';

import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import '../css/tailwind.css';

interface ButtonDialogInput {
  buttonLabel: string;
  renderDialog: () => React.ReactNode;
  onOpenDialog?: () => void;
  onCloseDialog?: () => void;
  customButtonRender?: () => React.ReactNode;
  useScopedCssBaseline?: boolean;
  title?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export function ButtonDialog({
  buttonLabel,
  renderDialog,
  onOpenDialog,
  onCloseDialog,
  customButtonRender,
  useScopedCssBaseline = true,
  title = "",
  maxWidth = "md",
  fullWidth = true
}: ButtonDialogInput) {
  const [showDialog, setShowDialog] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      <div onClick={handleOpenDialog} className="cursor-pointer">
        {customButtonRender()}
      </div>
    ) : (
      <Button
        onClick={handleOpenDialog}
        variant="contained"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
      >
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

      <Dialog
        className="tailwind"
        open={showDialog}
        onClose={handleCloseDialog}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        fullScreen={isMobile}
        PaperProps={{
          className: isMobile
            ? "m-0 max-w-none w-full h-full rounded-none shadow-none"
            : "m-4 max-w-2xl w-full rounded-xl shadow-2xl border border-gray-100",
        }}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
      >
        <DialogTitle
          id="dialog-title"
          className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 relative"
        >
          <Typography
            variant="h6"
            component="h2"
            className="text-xl font-semibold text-gray-800 pr-8"
          >
            {title}
          </Typography>
          <IconButton
            aria-label="關閉對話框"
            onClick={handleCloseDialog}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            size="small"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </IconButton>
        </DialogTitle>

        <DialogContent
          id="dialog-content"
          className="p-6 bg-white min-h-[200px] overflow-y-auto"
        >
          {renderDialog()}
        </DialogContent>

        <DialogActions className="px-6 py-4 border-t border-gray-100 bg-gray-50 justify-end">
          <Button
            onClick={handleCloseDialog}
            variant="outlined"
            className="text-gray-600 border-gray-300 hover:border-gray-400 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            關閉
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
