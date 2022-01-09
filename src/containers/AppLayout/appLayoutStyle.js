const appLayoutStyle = {
  appStyle: {
    height: '100%',
    flexGrow: 1,
    backgroundColor: 'background.default',
  },
  mainContainerStyle: {paddingTop: '30px'},
  vacationListStyle: {maxWidth: 680},
};

const appGridProps = {
  mainGrid: {
    container: true,
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    spacing: '105px',
  },
  searchBarGridProps: {
    container: true,
    item: true,
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    spacing: '9px',
  },
  vacationListGridProps: {
    container: true,
    item: true,
    columnSpacing: '30px',
    rowSpacing: '30px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    direction: 'row',
  },
  listSectionGridProps: {
    container: true,
    item: true,
    xs: 'auto',
    direction: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    spacing: '32px',
  },
  formSectionProps: {
    container: true,
    item: true,
    xl: 6,
    lg: 5,
    md: 6,
    xs: 8,
    sm: 10,
  },
};

export {appLayoutStyle, appGridProps};
