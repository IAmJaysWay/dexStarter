import React from 'react';
import type { MessageInstance } from '../message/interface';
import type { NotificationInstance } from '../notification/interface';
import type { ModalStaticFunctions } from '../modal/confirm';
type ModalType = Omit<ModalStaticFunctions, 'warn'>;
export interface useAppProps {
    message: MessageInstance;
    notification: NotificationInstance;
    modal: ModalType;
}
declare const AppContext: React.Context<useAppProps>;
export default AppContext;
