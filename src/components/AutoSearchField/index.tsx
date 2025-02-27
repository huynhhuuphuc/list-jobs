import type { SelectProps } from 'antd';
import { AutoComplete, Input, Button } from 'antd';
import { useEffect, useState } from 'react';
interface AutoSearchFieldProps {
  onSearch?: (value: any) => void;
  placeholder: string;
  btnText: string;
  defaultValue?: string;
}
function AutoSearchField(props: AutoSearchFieldProps) {
  const { onSearch, placeholder, btnText, defaultValue } = props;
  const [fieldSearchValue, setFieldSearchValue] = useState<any>('');
  const [optionAutoComplete, setOptionAutoComplete] = useState<SelectProps<object>['options']>([]);

  const handleSearchInputFiled = (value: string) => {
    if (onSearch) {
      setFieldSearchValue(value);
      onSearch(value);
    }
  };

  const onSelectAutoComplete = (value?: string) => {
    if (onSearch) {
      setFieldSearchValue(value);
      onSearch(value);
    }
    if (value && value.trim()) {
      if (optionAutoComplete) {
        const isExist = optionAutoComplete.findIndex((item) => item.value == value) >= 0;
        if (!isExist) {
          setOptionAutoComplete([...optionAutoComplete, { value, label: value }]);
        }
      }
    }
  };

  useEffect(() => {
    setFieldSearchValue(defaultValue);
  }, [defaultValue]);

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 400 }}
      options={optionAutoComplete}
      onSelect={handleSearchInputFiled}
      defaultValue={defaultValue}
    >
      <Input
        placeholder={placeholder}
        value={fieldSearchValue}
        onChange={(e) => {
          setFieldSearchValue(e.target.value);
        }}
        className="input-search-field"
        onPressEnter={() => {
          onSelectAutoComplete(fieldSearchValue);
        }}
        addonAfter={
          <Button
            className="w-100 rounded-left-0"
            type="primary"
            onClick={() => {
              onSelectAutoComplete(fieldSearchValue);
            }}
          >
            {btnText}
          </Button>
        }
      />
    </AutoComplete>
  );
}

export default AutoSearchField;
