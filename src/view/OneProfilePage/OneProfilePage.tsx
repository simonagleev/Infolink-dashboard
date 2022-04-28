import { AutoSizer, Breadcrumbs, FieldType, One, TypedField } from "react-declarative";

import IPerson from "../../model/IPerson";
import ioc from "../../lib/ioc";
import { observer } from "mobx-react";
import { useState } from "react";

const MAIN_CONTENT = 'dashboard-app__mainContent';

const fields: TypedField[] = [
  {
    type: FieldType.Group,
    fieldBottomMargin: "0",
    fields: [
      {
        type: FieldType.Group,
        columns: "2",
        phoneColumns: '12',
        tabletColumns: '2',
        style: {
          overflow: 'hidden',
        },
        fields: [
          {
            type: FieldType.Component,
            element: ({
              avatar
            }) => (
              <AutoSizer keepFlow payload={avatar}>
                {({ width }) => (
                  <AutoSizer target={document.body} selector={`.${MAIN_CONTENT}`} keepFlow payload={avatar}>
                    {({ height }) => (
                      <img
                        style={{
                          background: '#0003',
                          height: height,
                          width: width - 10,
                          objectFit: 'contain',
                        }}
                        src={avatar}
                        loading="lazy"
                      />
                    )}
                  </AutoSizer>
                )}
              </AutoSizer>
            )
          },
          {
            type: FieldType.Rating,
            fieldBottomMargin: "0",
            name: "rating",
            defaultValue: 3
          }
        ]
      },
      {
        type: FieldType.Group,
        fieldBottomMargin: "0",
        columns: "10",
        phoneColumns: '12',
        tabletColumns: '10',
        fields: [
          {
            type: FieldType.Group,
            className: MAIN_CONTENT,
            fields: [
              {
                type: FieldType.Div,
                style: {
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr 1fr',
                },
                fields: [
                  {
                    type: FieldType.Checkbox,
                    fieldBottomMargin: "0",
                    title: "Enabled",
                  },
                  {
                    type: FieldType.Text,
                    outlined: false,
                    title: "Identificator",
                    name: "id",
                  },
                  {
                    type: FieldType.Group,
                    fields: [
                      {
                        name: "id",
                        type: FieldType.Text,
                        outlined: false,
                        title: "Outer ID",
                      },
                    ]
                  },

                ],
              },
              {
                name: 'firstName',
                type: FieldType.Text,
                title: 'First name',
                description: 'Required',
              },
              {
                name: 'lastName',
                type: FieldType.Text,
                title: 'Last name',
                description: 'Required',
              },
              {
                name: 'age',
                type: FieldType.Text,
                title: 'Age',
              },
              {
                name: 'occupation',
                type: FieldType.Text,
                title: 'Occupation',
                description: 'Required',
              },
              {
                name: 'KPI',
                type: FieldType.Text,
                title: 'KPI index',
              },
              {
                type: FieldType.Combo,
                title: "Gender",
                placeholder: "Choose",
                name: "gender",
                itemList: [
                  "Male",
                  "Female",
                  "Other"
                ]
              },
            ]
          },
          {
            type: FieldType.Group,
            fieldBottomMargin: "0",
            columns: "12",
            fields: [
              {
                type: FieldType.Line,
                title: "Contact Data"
              },
              {
                name: 'email',
                type: FieldType.Text,
                title: 'E-mail',
              },
              {
                name: 'country',
                type: FieldType.Text,
                title: 'Country',
              },
              {
                name: 'phone',
                type: FieldType.Text,
                title: 'Phone number',
              },
            ]
          },
        ]
      }
    ]
  }
]

interface IOnePageProps {
  id: string;
}

export const OneProfilePage = ({
  id,
}: IOnePageProps) => {


  const [data, setData] = useState<IPerson | null>(null);


  const handleChange = (data: IPerson, initial: boolean) => {
    if (!initial) {
      setData(data);
    }
  };

  const handleSave = async () => {
    if (data) {
      data.id = id;
      await ioc.mockService.save(data);
      ioc.routerService.push(`/profiles-list/${data.id}`);
      ioc.alertService.notify('Saved');
    } else {
      console.log("NOTHING CHANGED")
    }
  }

  const handleBack = () => {
    ioc.routerService.push(`/profiles-list`);
  };

  const handler = () => ioc.mockService.one(id);

  return (
    <>
      <Breadcrumbs
        title="Profiles"
        disabled={!data}
        subtitle={id}
        onSave={handleSave}
        onBack={handleBack}
      />
      <One
        fields={fields}
        handler={handler}
        // fallback={ioc.mockService.fallback}
        onChange={handleChange}
      />
    </>
  );
};

export default observer(OneProfilePage) as React.FC;