const dummyData = [
  {
    id: 1,
    account_name: 'Frozen yoghurt',
    lead_id: 159,
    po_number: 6.0,
    dueDate: 24,
    value: 4.0,
    status: 1
  },
  {
    id: 2,
    account_name: 'Ice cream sandwich',
    lead_id: 1859,
    po_number: 78,
    dueDate: 243,
    value: 78,
    status: 3
  },
  {
    id: 3,
    account_name: 'Eclair',
    lead_id: 859,
    po_number: 78,
    dueDate: 243,
    value: 78,
    status: 3
  },
  {
    id: 4,
    account_name: 'Cupcake',
    lead_id: 19,
    po_number: 78,
    dueDate: 243,
    value: 78,
    status: 4
  }
]

const columns = [
  {
    // flex: 0.1,
    field: 'account_name',
    minWidth: 220,
    headerName: 'Account Name',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.account_name}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 105,
    field: 'lead_id',
    headerName: 'Lead Id',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.lead_id}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 105,
    field: 'po_number',
    headerName: 'po Number',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.po_number}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 105,
    field: 'dueDate',
    headerName: 'due Date',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.dueDate}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 105,
    field: 'value',
    headerName: 'value',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.value}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 105,
    field: 'status',
    headerName: 'status',
    renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.status}</Typography>
  },
  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => (
      <>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Tooltip title='View'>
            <IconButton
              onClick={() => {
                handleRowClick(event, row.id)
              }}
            >
              <VisibilityIcon
                style={{
                  color: '#014361'
                }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title='Delete'>
            <IconButton
              onClick={() => {
                handleRowClick(event, row.id)
              }}
            >
              <DeleteForeverIcon
                style={{
                  color: '#014361'
                }}
              />
            </IconButton>
          </Tooltip>
        </div>
      </>
    )
  }
]

<DataGrid
        autoHeight
        rows={dummyData}
        rowHeight={60}
        columnHeaderHeight={40}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: Filter }}
        getRowId={row => row.id}
        hideFooter
      />