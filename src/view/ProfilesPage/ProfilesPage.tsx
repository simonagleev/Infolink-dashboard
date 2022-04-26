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
    type: ColumnType.Text,
    field: 'name',
    headerName: 'Full name',
    width: 'max(10vw, 80px)',
  },
  {
    type: ColumnType.Text,
    field: 'occupation',
    headerName: 'Occupation',
    width: 'max(10vw, 100px)',
  },
  {
    type: ColumnType.Component,
    field: 'KPI',
    headerName: 'KPI index',
    width: 'max(8vw, 125px)',
    element: ({ KPI }) => (
      <span style={{
        color: KPI < 50 ? '#FA5F5A' : KPI < 70 ? '#FE9B31' : '#7FB537',
        display: 'flex',
        alignItems: 'center'
      }}>
        <span style={{ fontWeight: '900', marginRight: '1em' }}>
          {`${KPI}%`}
        </span>
        ({KPI < 50 ? 'Need review' : KPI < 70 ? 'Warning' : 'Normal'})
      </span>
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
    field: 'phone',
    headerName: 'Phone number',
    width: '10vw',
  },
  {
    type: ColumnType.Text,
    field: 'email',
    headerName: 'Email',
    width: '15vw',
  },
  {
    type: ColumnType.Component,
    field: 'countryFlag',
    headerName: 'Country',
    width: '12vw',
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
      {
        action: 'create',
        label: 'Create a new person',
      },
      {
        action: 'delete',
        label: 'Delete selected',
      },
    ]
  },
];

const rowActions = [
  {
    label: 'Remove this person',
    action: 'remove-action',
  },
];

const heightRequest = () => window.innerHeight - 100;
const widthRequest = () => window.innerWidth - 20;

interface IFilterData {
  firstName: string;
  lastName: string;
}

export const ProfilesPage = () => {

  const apiRef = useRef<IListApi>(null);

  const handler = useStaticPaginator(ioc.mockService.homePage.timeConsumption, {
    filterHandler: (rows, filterData) => {
      const { firstName, lastName } = filterData;
      if (firstName) {
        rows = rows.filter((row) => {
          const rowFirstName = row.name.split(' ')[0];
          return rowFirstName.toLowerCase().includes(firstName.toLowerCase());
        });
      }
      if (lastName) {
        rows = rows.filter((row) => {
          const rowLastName = row.name.split(' ')[1];
          return rowLastName.toLowerCase().includes(lastName.toLowerCase());
        });
      }
      return rows;
    }
  });

  const [selectedRows, setSelectedRows] = useState<RowId[]>([]);

  const handleRemove = async (person: IPerson) => {
    await ioc.mockService.remove(person);        
    apiRef.current?.reload();
  };

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
    ioc.routerService.push(`/profiles-list/${person.id}`);      //переход пo конкретному ID
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
      onRowAction={handleRemove}
      onRowClick={handleClick}
      onAction={handleAction}
      sortModel={sortModel}
    />
  );
};


export default observer(ProfilesPage) as React.FC;