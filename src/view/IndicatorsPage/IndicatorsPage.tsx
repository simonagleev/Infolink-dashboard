import {
  FieldType,
  One,
  TypedField,
} from 'react-declarative';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IndicatorCard from './IndicatorCard/IndicatorCard';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import WorkIcon from '@mui/icons-material/Work';

const fields: TypedField[] = [
  {
    type: FieldType.Hero,
    columns: "6",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="#4FC0E8"
          label='New chats'
          value='58'
          icon={MarkChatUnreadIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "6",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="#fc6e51"
          label='New sales'
          value='11'
          icon={PointOfSaleIcon }
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "4",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="#7FB537"
          label='Hours worked'
          value='32 of 40'
          icon={WorkIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "4",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="#FE9B31"
          label='Late arrivals'
          value='7'
          icon={AssignmentLateIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "4",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="#ffce54"
          label='Absence hours'
          value='8'
          icon={DirectionsRunIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "6",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="#967adc"
          label='Overtime'
          value='5'
          icon={AccessTimeIcon}
        />
      ),
    },
  },
  {
    type: FieldType.Hero,
    columns: "6",
    phoneColumns: "12",
    height: `33vh`,
    right: '10px',
    bottom: '10px',
    child: {
      type: FieldType.Component,
      element: () => (
        <IndicatorCard
          color="#da4453"
          label='Downtime'
          value='10'
          icon={HighlightOffIcon}
        />
      ),
    },
  },
];

export const IndicatorsPage = () => (
  <One
    fields={fields}
  />
);

export default IndicatorsPage;
