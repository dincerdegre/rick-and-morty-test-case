export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  locationName: string;
}

export interface IButtonProps {
  title: string;
  onPress?(): void;
}

export interface IStatusFilterProps {
  statusFilter: string;
  onChange(status: string): void;
}

export interface ICheckboxProps {
  id: number;
  text: string;
  isChecked: boolean;
  onHandleCheck(id: number): void;
}

export interface ILocationFilterProps {
  locationFilter: string[];
  onChange(location: string[]): void;
}

export interface ILocation {
  id: number;
  name: string;
  isChecked: boolean;
}
