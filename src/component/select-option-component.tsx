import React from 'react';

import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

interface SelectOptionComponentProps {
    renderTitle: () => JSX.Element;
    options: string[];
    onSelectOption: (idx: number, option: string) => void;
    loading?: boolean;
    error?: string | null;
    success?: string | null;
    questionTitle?: string;
    question?: string;
}

export function SelectOptionComponent({
    renderTitle,
    options,
    onSelectOption,
    loading = false,
    error = null,
    success = null,
    questionTitle = "",
    question = ""
}: SelectOptionComponentProps) {

    function handleSelectOption(idx: number, option: string): void {
        if (loading) return; // 防止載入時重複點擊
        onSelectOption(idx, option);
    }

    // 載入狀態的骨架屏
    const LoadingSkeleton = () => (
        <div className="space-y-4 animate-pulse">
            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
            <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-200 h-12 rounded-lg"></div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="space-y-4">
            <ScopedCssBaseline>
                {/* 問題標題和內容卡片 */}
                {(questionTitle || question) && (
                    <Card className="shadow-sm border border-gray-200 transition-shadow">
                        <CardContent className="p-4">
                            {questionTitle && (
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    className="text-lg font-semibold text-gray-800 mb-2"
                                >
                                    {questionTitle}
                                </Typography>
                            )}
                            {question && (
                                <Typography
                                    variant="body1"
                                    className="text-gray-600 leading-relaxed"
                                >
                                    {question}
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                )}

                {/* 舊版 renderTitle 支援（向後相容） */}
                {!questionTitle && !question && (
                    <Card className="shadow-sm border border-gray-200">
                        <CardContent className="p-4">
                            {renderTitle()}
                        </CardContent>
                    </Card>
                )}

                {/* 載入進度條 */}
                {loading && (
                    <Box className="w-full">
                        <LinearProgress
                            className="rounded-full h-2 bg-gray-200"
                            sx={{
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#3b82f6',
                                }
                            }}
                        />
                        <Typography
                            variant="body2"
                            className="text-center text-gray-500 mt-2"
                        >
                            載入中...
                        </Typography>
                    </Box>
                )}

                {/* 載入狀態顯示骨架屏 */}
                {loading && options.length === 0 ? (
                    <LoadingSkeleton />
                ) : (
                    /* 選項網格 */
                    options.length > 0 && (
                        <Grid container spacing={2}>
                            {options.map((option, idx) => (
                                <Grid item xs={12} sm={6} key={`${option}-${idx}`}>
                                    <Button
                                        variant="outlined"
                                        fullWidth
                                        disabled={loading}
                                        onClick={() => handleSelectOption(idx, option)}
                                        className={`
                                            h-12 text-left justify-start normal-case font-normal
                                            ${loading
                                                ? 'opacity-50 cursor-not-allowed'
                                                : 'text-gray-700 border-gray-300 hover:border-blue-500 hover:bg-blue-50'
                                            }
                                            transition-all duration-200 rounded-lg
                                        `}
                                        sx={{
                                            textTransform: 'none',
                                            justifyContent: 'flex-start',
                                            '&:hover': {
                                                borderColor: loading ? undefined : '#3b82f6',
                                                backgroundColor: loading ? undefined : '#eff6ff',
                                            }
                                        }}
                                    >
                                        <span className={`
                                            w-6 h-6 rounded-full text-sm flex items-center justify-center mr-3 font-medium
                                            ${loading
                                                ? 'bg-gray-200 text-gray-400'
                                                : 'bg-gray-200 text-gray-600'
                                            }
                                        `}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className="truncate flex-1 text-left">
                                            {option}
                                        </span>
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    )
                )}

                {/* 錯誤提示 */}
                {error && (
                    <Alert
                        severity="error"
                        className="rounded-lg border-red-200 bg-red-50"
                        sx={{
                            '& .MuiAlert-icon': {
                                color: '#dc2626'
                            }
                        }}
                    >
                        <AlertTitle className="font-medium text-red-800">
                            答題失敗
                        </AlertTitle>
                        <Typography className="text-red-700">
                            {error}
                        </Typography>
                    </Alert>
                )}

                {/* 成功提示 */}
                {success && (
                    <Alert
                        severity="success"
                        className="rounded-lg border-green-200 bg-green-50 animate-pulse"
                        sx={{
                            '& .MuiAlert-icon': {
                                color: '#16a34a'
                            }
                        }}
                    >
                        <AlertTitle className="font-medium text-green-800 flex items-center">
                            恭喜答對！
                            <span className="ml-2 text-lg">🎉</span>
                        </AlertTitle>
                        <Typography className="text-green-700 font-medium">
                            {success}
                        </Typography>
                    </Alert>
                )}
            </ScopedCssBaseline>
        </div>
    );
}
