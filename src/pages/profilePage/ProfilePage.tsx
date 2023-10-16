import {
    type FC, type PropsWithChildren,
} from 'react';
import { classNames } from 'shared/lib';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/page';
import { VStack } from 'shared/ui/stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui';

interface IProfilePageProps {
 className?: string;
}

const ProfilePage: FC<IProfilePageProps> = ({ className }: PropsWithChildren<IProfilePageProps>) => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profile');

    if (!id) {
        return <Text text={t('profile.error')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
