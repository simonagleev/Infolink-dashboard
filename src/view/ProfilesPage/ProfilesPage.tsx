import {
  ActionType,
  ColumnType,
  FieldType,
  IListAction,
  IListApi,
  ListTyped,
  RowId,
  SelectionMode,
  ListHandlerSortModel,
  useStaticPaginator,
  IListChip,
} from 'react-declarative';

import { Avatar, Box } from '@mui/material';

import { useRef, useState } from 'react';

import CountryFlag from './components/CountryFlag';
import IColumn from 'react-declarative/model/IColumn';
import IPerson from '../../model/IPerson';
import TypedField from 'react-declarative/model/TypedField';

import { observer } from 'mobx-react';

import ioc from '../../lib/ioc';

const filters: TypedField[] = [
  {
    type: FieldType.Text,
    name: 'firstName',
    title: 'First name',
  },
  {
    type: FieldType.Text,
    name: 'lastName',
    title: 'Last name',
  },
  {
    type: FieldType.Text,
    name: 'occupation',
    title: 'Occupation',
  }
];

const sortModel: ListHandlerSortModel<IPerson> = [
  {
    field: 'KPI',
    sort: 'asc',
  }
];

const columns: IColumn<IPerson>[] = [
  {
    type: ColumnType.Component,
    headerName: 'Avatar',
    width: '65px',
    element: ({ avatar }) => (
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Avatar
          style={{ marginLeft: -10 }}
          src={avatar}
          alt={avatar}
        />
      </Box>
    ),
  },
  {
    type: ColumnType.Compute,
    primary: true,
    field: 'name',
    headerName: 'Name',
    width: 'max(10vw, 135px)',
    compute: ({ firstName, lastName }) => `${firstName} ${lastName}`,  
  },
  {
    type: ColumnType.Text,
    field: 'occupation',
    headerName: 'Occupation',
    width: 'max(10vw, 100px)',
  },
  {
    type: ColumnType.Component,
    secondary: true,
    field: 'KPI',
    headerName: 'KPI index',
    width: 'max(15vw, 200px)',
    element: ({ KPI, id }) => (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          ioc.routerService.push(`/indicators/${id}`)
        }}
      > 
        <span style={{
        color: KPI < 50 ? '#FA5F5A' : KPI < 70 ? '#FE9B31' : '#7FB537',
        display: 'flex',
        alignItems: 'center'
      }}>
        <span style={{ fontWeight: '900', marginRight: '1em' }}>
          {`${KPI}%`}
        </span>
          ({KPI < 50 ? 'Review needed' : KPI < 70 ? 'Warning' : 'High'})
        </span>
      </div>
      
    )
  },
  {
    type: ColumnType.Text,
    field: 'gender',
    headerName: 'Gender',
    width: 'max(8vw, 65px)',
    
  },
  {
    type: ColumnType.Text,
    field: 'age',
    headerName: 'Age',
    width: '50px',
  },
  {
    type: ColumnType.Text,
    field: 'phone',
    headerName: 'Phone number',
    width: 'max(10vw, 150px)',
  },
  {
    type: ColumnType.Text,
    field: 'email',
    headerName: 'Email',
    width: 'max(15vw, 215px)',
  },
  {
    type: ColumnType.Component,
    field: 'countryFlag',
    headerName: 'Country',
    width: 'max(12vw, 150px)',
    element: CountryFlag,
  },
  {
    type: ColumnType.Action,
    headerName: 'Actions',
    sortable: false,
    width: 'max(5vw, 50px)',
  },
];

const actions: IListAction[] = [
  {
    type: ActionType.Menu,
    options: [
      /*{
        action: 'mobile-view',
      },*/
      {
        action: 'auto-reload',
      },
    ]
  },
];

const chips: IListChip[] = [
  {
    label: 'High KPI',
    name: 'high_kpi',
    color: '#7FB537',
  },
  {
    label: 'Warning KPI',
    name: 'warning_kpi',
    color: '#FE9B31',
  },
  {
    label: 'Review KPI',
    name: 'review_kpi',
    color: '#FA5F5A',
  }
];

const rowActions = [
  {
    label: 'Show perfomace indicators',
    action: 'indicators-action',
  },
];

const heightRequest = () => window.innerHeight - 70;
const widthRequest = () => window.innerWidth - 20;

interface IFilterData {
  firstName: string;
  lastName: string;
}

export const ProfilesPage = () => {

  const apiRef = useRef<IListApi>(null);

  const handler = useStaticPaginator(ioc.mockService.homePage.timeConsumption, {
    filterHandler: (rows, filterData) => {
      const { firstName, lastName, occupation } = filterData;
      if (firstName) {
        rows = rows.filter((row) => {
          const rowFirstName = row.firstName;
          return rowFirstName.toLowerCase().includes(firstName.toLowerCase());
        });
      }
      if (lastName) {
        rows = rows.filter((row) => {
          const rowLastName = row.lastName;
          return rowLastName.toLowerCase().includes(lastName.toLowerCase());
        });
      }
      if (occupation) {
        rows = rows.filter((row) => {
          const rowOccupation = row.occupation;
          return rowOccupation.toLowerCase().includes(occupation.toLowerCase());
        });
      }
      return rows;
    },
    chipsHandler: (rows, chips: any) => {
      if (!Object.values(chips).reduce((acm, cur) => acm || cur)) {
        return rows;
      }
      const { high_kpi, warning_kpi, review_kpi } = chips;
      const tmp: IPerson[][] = [];
      if (high_kpi) {
        tmp.push(rows.filter(({ KPI }) => KPI >= 70));
      }
      if (warning_kpi) {
        tmp.push(rows.filter(({ KPI }) => KPI < 70 && KPI >= 50));
      }
      if (review_kpi) {
        tmp.push(rows.filter(({ KPI }) => KPI < 50));
      }
      return tmp.flat();
    },
  });

  const [selectedRows, setSelectedRows] = useState<RowId[]>([]);

  const handleRowAction = (person: IPerson) => {
    ioc.routerService.push(`/indicators/${person.id}`)
  }

  const handleAction = (name: string) => {
    if (name === 'create'){
      ioc.routerService.push(`/profiles-list/create`);
    } else if (name === 'delete') {
      ioc.mockService.delete(selectedRows);
      apiRef.current?.reload();
      setSelectedRows([]);
      ioc.alertService.notify('Deleted')
    }
  }

  const handleClick = (person: IPerson) => {
    ioc.routerService.push(`/profiles-list/${person.id}`);
  };

  const handleSelectedRows = (rows: RowId[]) => {
    setSelectedRows(rows)
    console.log(rows)
  };

  return (
    <ListTyped<IFilterData, IPerson>
      ref={apiRef}
      title="Profiles"
      filterLabel="Filters"
      selectionMode={SelectionMode.Multiple}
      heightRequest={heightRequest}
      widthRequest={widthRequest}
      rowActions={rowActions}
      actions={actions}
      filters={filters}
      columns={columns}
      handler={handler}
      onSelectedRows={handleSelectedRows}
      onRowAction={handleRowAction}
      onRowClick={handleClick}
      onAction={handleAction}
      sortModel={sortModel}
      chips={chips}
    />
  );
};


export default observer(ProfilesPage) as React.FC;