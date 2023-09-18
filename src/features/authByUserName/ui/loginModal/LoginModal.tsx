import type { FC } from 'react';
import { classNames } from 'shared/lib';
import { Modal } from 'widgets/modal';
import { useTheme } from 'app/providers';
import { LoginForm } from '../loginForm';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: FC<ILoginModalProps> = ({ className, isOpen, onClose }) => {
    const { theme } = useTheme();
    return (
        <Modal
            className={classNames('', {}, [className, theme])}
            isOpen={isOpen}
            onClose={onClose}
            isLazy
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
