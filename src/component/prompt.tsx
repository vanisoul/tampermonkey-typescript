import React, { useState, useEffect } from 'react';

import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

import '../css/tailwind.css';

interface PromptProps {
    title: string;
    showDialog: boolean;
    inputValue: string;
    validate: (input: string) => boolean | string;
    onConfirm: (input: string) => void;
    onClose: () => void;
}


export const PromptComponent = ({ title, showDialog, inputValue: initialInputValue, validate, onClose, onConfirm }: PromptProps) => {
    const [inputValue, setInputValue] = useState(initialInputValue);
    const [errorMessage, setErrorMessage] = useState('');

    const handleClose = () => {
        setErrorMessage('');
        onClose();
    };

    const handleConfirm = () => {
        const validationResult = validate(inputValue);
        if (validationResult === true) {
            onConfirm(inputValue);
            handleClose();
        } else {
            setErrorMessage(typeof validationResult === 'string' ? validationResult : 'Invalid input');
        }
    };
    // 處理 Enter 鍵事件
    const handleEnter = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleConfirm();
        }
    };

    // 使用 useEffect 來添加和移除事件監聽器
    useEffect(() => {
        document.addEventListener('keydown', handleEnter);
        return () => {
            document.removeEventListener('keydown', handleEnter);
        };
    }, [inputValue]); // 依賴 inputValue 確保最新的值被使用

    return (
        <div>
            <Dialog
                className={"tailwind"}
                PaperProps={{
                    className: "p-4"
                }}
                open={showDialog}
                onClose={handleClose}
                title={title}
            >
                <ScopedCssBaseline>
                    <DialogTitle className='text-xs'>{title}</DialogTitle>
                    <DialogContent>
                        <Input value={inputValue} className='text-xs' onChange={(e) => setInputValue(e.target.value)} />
                        <p className="text-red-600 h-2 text-xs">{errorMessage}</p>
                    </DialogContent>
                    <DialogActions>
                        <Button type='reset' className='text-xs' onClick={handleClose}>取消</Button>
                        <Button type="submit" className='text-xs' onClick={handleConfirm}>確認</Button>
                    </DialogActions>
                </ScopedCssBaseline>
            </Dialog>
        </div>
    );
};
