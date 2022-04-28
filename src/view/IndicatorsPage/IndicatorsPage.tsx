import {
  Breadcrumbs,
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
import ioc from '../../lib/ioc';
import { observer } from 'mobx-react';

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
      element: ({
        indicatorValues
      }) => (
        <IndicatorCard
          color="#4FC0E8"
          label='New chats'
          value={indicatorValues.newChats}
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
      element: ({
        indicatorValues
      }) => (
        <IndicatorCard
          color="#fc6e51"
          label='New sales'
          value={indicatorValues.newSales}
          icon={PointOfSaleIcon}
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
      element: ({
        indicatorValues
      }) => (
        <IndicatorCard
          color="#7FB537"
          label='Hours worked'
          value={indicatorValues.hoursWorked}
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
      element: ({
        indicatorValues
      }) => (
        <IndicatorCard
          color="#FE9B31"
          label='Late arrivals'
          value={indicatorValues.lateArrivals}
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
      element: ({
        indicatorValues
      }) => (
        <IndicatorCard
          color="#ffce54"
          label='Absence hours'
          value={indicatorValues.abscenceHours}
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
      element: ({
        indicatorValues
      }) => (
        <IndicatorCard
          color="#967adc"
          label='Overtime'
          value={indicatorValues.overtime}
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
      element: ({
        indicatorValues
      }) => (
        <IndicatorCard
          color="#da4453"
          label='Downtime'
          value={indicatorValues.downTime}
          icon={HighlightOffIcon}
        />
      ),
    },
  },
];

interface IIndicatorsPageProps {
  id: string;
}

export const IndicatorsPage = ({
  id,
}: IIndicatorsPageProps) => {

  const handler = () => ioc.mockService.one(id);

  const handleBack = () => {
    ioc.routerService.push(`/profiles-list`);
  };
  return (
    <>
      <Breadcrumbs
        title="Profiles"
        disabled
        subtitle={id}
        onBack={handleBack}

      />
      <One
        fields={fields}
        handler={handler}
      />
    </>

  )
};




export default observer(IndicatorsPage);
