import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

interface NotificationProps {
    open: boolean;
    message: string;
    severity?: 'success' | 'error' | 'warning' | 'info';
    title?: string;
    duration?: number;
    onClose?: () => void;
}

function SlideTransition(props: TransitionProps & {
    children: React.ReactElement<any, any>;
}) {
    return <Slide {...props} direction="up" />;
}

export function Notification({
    open,
    message,
    severity = 'success',
    title,
    duration = 4000,
    onClose
}: NotificationProps) {
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
        if (onClose) {
            onClose();
        }
    };

    const getSeverityConfig = () => {
        switch (severity) {
            case 'success':
                return {
                    icon: '✅',
                    bgColor: 'bg-green-50',
                    borderColor: 'border-green-200',
                    textColor: 'text-green-800'
                };
            case 'error':
                return {
                    icon: '❌',
                    bgColor: 'bg-red-50',
                    borderColor: 'border-red-200',
                    textColor: 'text-red-800'
                };
            case 'warning':
                return {
                    icon: '⚠️',
                    bgColor: 'bg-yellow-50',
                    borderColor: 'border-yellow-200',
                    textColor: 'text-yellow-800'
                };
            case 'info':
                return {
                    icon: 'ℹ️',
                    bgColor: 'bg-blue-50',
                    borderColor: 'border-blue-200',
                    textColor: 'text-blue-800'
                };
            default:
                return {
                    icon: 'ℹ️',
                    bgColor: 'bg-gray-50',
                    borderColor: 'border-gray-200',
                    textColor: 'text-gray-800'
                };
        }
    };

    const config = getSeverityConfig();

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={duration}
            onClose={handleClose}
            TransitionComponent={SlideTransition}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            className="tailwind"
            sx={{
                '& .MuiSnackbar-root': {
                    position: 'fixed',
                    zIndex: 9999,
                }
            }}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                className={`
          ${config.bgColor} ${config.borderColor} ${config.textColor}
          rounded-lg shadow-lg border min-w-[300px] max-w-[400px]
        `}
                sx={{
                    '& .MuiAlert-icon': {
                        fontSize: '1.25rem',
                    },
                    '& .MuiAlert-action': {
                        paddingTop: 0,
                    }
                }}
            >
                {title && (
                    <AlertTitle className={`font-semibold ${config.textColor} flex items-center`}>
                        <span className="mr-2">{config.icon}</span>
                        {title}
                    </AlertTitle>
                )}
                <div className={`${config.textColor} ${title ? 'mt-1' : ''}`}>
                    {!title && <span className="mr-2">{config.icon}</span>}
                    {message}
                </div>
            </Alert>
        </Snackbar>
    );
}

// 全域通知管理器
export class NotificationManager {
    private static instance: NotificationManager;
    private notifications: Array<{
        id: string;
        component: React.ReactElement;
        container: HTMLElement;
    }> = [];

    static getInstance(): NotificationManager {
        if (!NotificationManager.instance) {
            NotificationManager.instance = new NotificationManager();
        }
        return NotificationManager.instance;
    }

    show(props: Omit<NotificationProps, 'open' | 'onClose'>) {
        const id = `notification-${Date.now()}-${Math.random()}`;

        // 創建容器
        const container = document.createElement('div');
        container.id = id;
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '9999';
        document.body.appendChild(container);

        // 創建通知組件
        const handleClose = () => {
            this.remove(id);
        };

        const notificationElement = React.createElement(Notification, {
            ...props,
            open: true,
            onClose: handleClose
        });

        // 渲染組件
        import('react-dom/client').then(({ createRoot }) => {
            const root = createRoot(container);
            root.render(notificationElement);

            // 自動移除
            setTimeout(() => {
                this.remove(id);
            }, props.duration || 4000);
        });

        this.notifications.push({
            id,
            component: notificationElement,
            container
        });

        return id;
    }

    remove(id: string) {
        const index = this.notifications.findIndex(n => n.id === id);
        if (index !== -1) {
            const notification = this.notifications[index];
            if (notification.container.parentNode) {
                notification.container.parentNode.removeChild(notification.container);
            }
            this.notifications.splice(index, 1);
        }
    }

    success(message: string, title?: string) {
        return this.show({
            message,
            title,
            severity: 'success',
            duration: 4000
        });
    }

    error(message: string, title?: string) {
        return this.show({
            message,
            title,
            severity: 'error',
            duration: 6000
        });
    }

    warning(message: string, title?: string) {
        return this.show({
            message,
            title,
            severity: 'warning',
            duration: 5000
        });
    }

    info(message: string, title?: string) {
        return this.show({
            message,
            title,
            severity: 'info',
            duration: 4000
        });
    }
}

// 導出便利函數
export const notify = NotificationManager.getInstance();