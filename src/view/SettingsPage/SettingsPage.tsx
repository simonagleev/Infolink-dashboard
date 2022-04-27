import { FieldType, One, TypedField } from 'react-declarative';

import { AvatarPicker } from './components/AvatarPicker';
import { RemoveAccount } from './components/RemoveAccount';

const personalFields: TypedField[] = [
    {
        type: FieldType.Line,
        title: 'Personal info',
    },
    {
        type: FieldType.Component,
        fieldBottomMargin: '0',
        element: () => <AvatarPicker />
    },
    {
        type: FieldType.Text,
        fieldRightMargin: '0',
        name: 'global.login',
        title: 'Username',
        description: 'A username linked to this account',
    },
    {
        type: FieldType.Text,
        fieldRightMargin: '0',
        name: 'global.email',
        readonly: true,
        title: 'Email (Readonly)',
        description: 'An email address linked to this account',
    },
];

const notifyFields: TypedField[] = [
    {
        type: FieldType.Line,
        title: 'Notifications',
    },
    {
        type: FieldType.Expansion,
        fieldRightMargin: '0',
        title: 'Messengers',
        fields: [
            {
                type: FieldType.Switch,
                name: 'messengers.whatsApp',
                fieldRightMargin: '0',
                title: 'WhatsApp',
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Typography,
                typoVariant: 'subtitle2',
                placeholder: 'Toggle notifications via WhatsApp',
                style: {
                    opacity: 0.5,
                },
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Switch,
                name: 'messengers.telegram',
                fieldRightMargin: '0',
                title: 'Telegram',
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Typography,
                typoVariant: 'subtitle2',
                placeholder: 'Toggle notifications via Telegram',
                style: {
                    opacity: 0.5,
                },
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Switch,
                name: 'messengers.facebook',
                fieldRightMargin: '0',
                title: 'Facebook',
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Typography,
                typoVariant: 'subtitle2',
                placeholder: 'Toggle notifications via Facebook',
                style: {
                    opacity: 0.5,
                },
                fieldBottomMargin: '0',
            },
        ],
    },
    {
        type: FieldType.Expansion,
        fieldRightMargin: '0',
        title: 'Problems',
        fields: [
            {
                type: FieldType.Switch,
                name: 'problems.urgent',
                fieldRightMargin: '0',
                title: 'Urgent problems',
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Typography,
                typoVariant: 'subtitle2',
                placeholder: 'Notify about urgent (red) problems',
                style: {
                    opacity: 0.5,
                },
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Switch,
                name: 'problems.regular',
                fieldRightMargin: '0',
                title: 'Regular problems',
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Typography,
                typoVariant: 'subtitle2',
                placeholder: 'Notify about regular (orange) problems',
                style: {
                    opacity: 0.5,
                },
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Switch,
                name: 'problems.minor',
                fieldRightMargin: '0',
                title: 'Minor problems',
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Typography,
                typoVariant: 'subtitle2',
                placeholder: 'Notify about minor (green) problems',
                style: {
                    opacity: 0.5,
                },
                fieldBottomMargin: '0',
            },
        ],
    },
    {
        type: FieldType.Expansion,
        fieldRightMargin: '0',
        title: 'Payments',
        fields: [
            {
                type: FieldType.Switch,
                name: 'notify.payment',
                fieldRightMargin: '0',
                title: 'Payments',
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Typography,
                typoVariant: 'subtitle2',
                fieldRightMargin: '0',
                placeholder: 'Toggle payments notifications',
                style: {
                    opacity: 0.5,
                },
                fieldBottomMargin: '0',
            },
        ],
    },
    {
        type: FieldType.Expansion,
        fieldRightMargin: '0',
        title: 'Withdraws',
        fields: [
            {
                type: FieldType.Switch,
                name: 'notify.withdraw',
                fieldRightMargin: '0',
                title: 'Withdraws',
                fieldBottomMargin: '0',
            },
            {
                type: FieldType.Typography,
                typoVariant: 'subtitle2',
                fieldRightMargin: '0',
                placeholder: 'Toggle withdraw notifications',
                style: {
                    opacity: 0.5,
                },
                fieldBottomMargin: '0',
            },
        ],
    },
];

const languageFields: TypedField[] = [
    {
        type: FieldType.Line,
        title: 'Language',
    },
    {
        type: FieldType.Radio,
        title: 'English',
    },
    {
        type: FieldType.Radio,
        title: 'German',
    },
    {
        type: FieldType.Radio,
        title: 'Chinese',
    },
];

const dangerFields: TypedField[] = [
    {
        type: FieldType.Line,
        title: 'Account',
    },
    {
        type: FieldType.Component,
        element: () => <RemoveAccount />,
    },
];

const fields: TypedField[] = [
    ...personalFields,
    ...notifyFields,
    ...languageFields,
    ...dangerFields,
];


export const SettingsPage = () => {

    return (
        <>
            <One
                fields={fields}
            />
        </>
    )
};

export default SettingsPage;