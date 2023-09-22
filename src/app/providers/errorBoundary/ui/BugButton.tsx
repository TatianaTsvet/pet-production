import {
    FC,
    useEffect,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';

// for testing error boundaries
const BugButton: FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation('error');

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('error.name')}
        </Button>
    );
};

export default BugButton;
