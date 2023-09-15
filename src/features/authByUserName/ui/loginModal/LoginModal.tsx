import type { FC } from 'react';
import { classNames } from 'shared/lib';
import { Modal } from 'widgets/modal';
import { LoginForm } from '../loginForm';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: FC<ILoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        isLazy
    >
        <LoginForm />
    </Modal>
);

export default LoginModal;
