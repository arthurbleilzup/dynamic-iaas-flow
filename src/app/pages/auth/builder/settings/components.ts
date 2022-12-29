export interface ComponentInfo {
  type: string,
  title: string,
  icon: string,
  canHaveChildren: boolean,
  mainValueProp?: string,
  properties?: any[],
}

export const componentsInfo: ComponentInfo[] = [
  {
    type: 'card',
    title: 'Card',
    icon: 'profile',
    canHaveChildren: true,
  },
  {
    type: 'checkbox',
    title: 'Checkbox',
    icon: 'check-square',
    canHaveChildren: false,
    mainValueProp: 'text',
    properties: [
      {
        type: 'checkbox',
        text: 'Checked',
        required: false,
        valueProp: 'checked',
      },
      {
        type: 'text',
        text: 'Text',
        required: true,
        valueProp: 'text',
      },
      {
        type: 'text',
        text: 'Hint',
        required: false,
        valueProp: 'hint',
      }
    ],
  },
  {
    type: 'column',
    title: 'Column',
    icon: 'insert-row-right',
    canHaveChildren: true,
  },
  {
    type: 'info',
    title: 'Info',
    icon: 'info',
    canHaveChildren: false,
    mainValueProp: 'label',
    properties: [
      {
        type: 'text',
        text: 'Label',
        required: true,
        valueProp: 'label',
      },
      {
        type: 'text',
        text: 'Text',
        required: true,
        valueProp: 'text',
      }
    ],
  },
  {
    type: 'input',
    title: 'Input',
    icon: 'form',
    canHaveChildren: false,
    mainValueProp: 'label',
    properties: [
      {
        type: 'text',
        text: 'Label',
        required: true,
        valueProp: 'label',
      },
      {
        type: 'text',
        text: 'Placeholder',
        required: false,
        valueProp: 'placeholder',
      }
    ],
  },
  {
    type: 'label',
    title: 'Text',
    icon: 'font-size',
    canHaveChildren: false,
    mainValueProp: 'text',
    properties: [
      {
        type: 'text',
        text: 'Text',
        required: true,
        valueProp: 'text',
      }
    ],
  },
  {
    type: 'row',
    title: 'Row',
    icon: 'insert-row-below',
    canHaveChildren: true,
  },
  {
    type: 'title',
    title: 'Title',
    icon: 'line-height',
    canHaveChildren: false,
    mainValueProp: 'title',
    properties: [
      {
        type: 'text',
        text: 'Title',
        required: true,
        valueProp: 'title',
      },
      {
        type: 'text',
        text: 'Description',
        required: false,
        valueProp: 'description',
      }
    ],
  },
]
