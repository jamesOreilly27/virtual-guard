import styled from 'styled-components'

/********** Base Border Box Component ***********/

export const BorderBoxContainer = styled.div`
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
`

/********** Flex Container Base Components ***********/

const FlexRowContainer =  styled(BorderBoxContainer)`
  display: flex;
`

const FlexColumnContainer = styled(BorderBoxContainer)`
  display: flex;
  flex-direction: column;
`

/********** Flex Row Alignment Components ***********/

export const RowAllCenter = styled(FlexRowContainer)`
  justify-content: center;
  align-items: center;
`

export const RowAllStart = styled(FlexRowContainer)`
  justify-content: flex-start;
  align-items: flex-start;
`

export const RowJustifyStart = styled(FlexRowContainer)`
  justify-content: flex-start;
  align-items: center
`

export const RowAlignStart = styled(FlexRowContainer)`
  justify-content: center;
  align-items: flex-start;
`

export const RowAllEnd = styled(FlexRowContainer)`
  justify-content: flex-end;
  align-items: flex-end;
`

export const RowJustifyEnd = styled(FlexRowContainer)`
  justify-content: flex-end;
  align-items: center
`

export const RowAlignEnd = styled(FlexRowContainer)`
  justify-content: center;
  align-items: flex-end;
`

export const RowJustifySBStart = styled(FlexRowContainer)`
  justify-content: space-between;
  align-items: flex-start;
`

export const RowJustifySBEnd = styled(FlexRowContainer)`
  justify-content: space-between;
  align-items: flex-end;
`

export const RowJustifySBCenter = styled(FlexRowContainer)`
  justify-content: space-between;
  align-items: Center;
`

/********** Flex Column Alignment Components ***********/

export const ColumnAllCenter = styled(FlexColumnContainer)`
  justify-content: center;
  align-items: center;
`

export const ColumnAllStart = styled(FlexColumnContainer)`
  justify-content: flex-start;
  align-items: flex-start;
`

export const ColumnJustifyStart = styled(FlexColumnContainer)`
  justify-content: flex-start;
  align-items: center
`

export const ColumnAlignStart = styled(FlexColumnContainer)`
  justify-content: center;
  align-items: flex-start;
`

const ColumnAllEnd = styled(FlexColumnContainer)`
  justify-content: flex-end;
  align-items: flex-end;
`

export const ColumnJustifyEnd = styled(FlexColumnContainer)`
  justify-content: flex-end;
  align-items: center
`

export const ColumnAlignEnd = styled(FlexColumnContainer)`
  justify-content: center;
  align-items: flex-end;
`

export const ColumnJustifySBStart = styled(FlexColumnContainer)`
  justify-content: space-between;
  align-items: flex-start;
`

export const ColumnJustifySBEnd = styled(FlexColumnContainer)`
  justify-content: space-between;
  align-items: flex-end;
`

export const ColumnJustifySBCenter = styled(FlexColumnContainer)`
  justify-content: space-between;
  align-items: Center;
`
