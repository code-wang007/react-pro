export interface menuChildrenList {
  name: string,
  menuChildren: menuItemInfoType[],
  url: string
}

export interface menuItemInfoType {
  label: string,
  url: string
}